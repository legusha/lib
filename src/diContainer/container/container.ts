import type { InjectableConfig } from '@lib/diContainer'
import type {
    DIContainer,
    DIContainerConfig,
    Injectable,
} from '@lib/diContainer/container'

export class DIContainerImpl<Value> implements DIContainer<Value> {
    public constructor(private readonly config: DIContainerConfig) {}

    private readonly dependencies = new Map<
        keyof Value | Injectable<Value[keyof Value]>,
        Value[keyof Value]
    >()

    public register<Key extends keyof Value>(
        token: Key,
        value: Value[Key],
    ): this {
        this.dependencies.set(token, value)

        return this
    }

    public resolve<Key extends keyof Value>(
        target: Key | Injectable<Value[Key]>,
    ): Value[Key] {
        if (this.has(target)) {
            const value = this.dependencies.get(target)

            return value as Value[Key]
        }

        if (this.maybeInjectable(target)) {
            const metadata: InjectableConfig = Reflect.getMetadata(
                this.config.metaDataKey,
                target,
            )

            if (metadata) {
                const instance = this.resolveClass<Key>(target)
                this.setInjectable(target, instance, metadata)

                return instance
            }
        }

        throw new Error(
            `Cannot resolve ${target.toString()}. It's not marked as injectable or registered.`,
        )
    }

    private resolveClass<Key extends keyof Value>(
        Target: Injectable<Value[Key]>,
    ): Value[Key] {
        const constructorParams: Array<Injectable<Value[Key]>> =
            Reflect.getMetadata('design:paramtypes', Target) || []

        const injectedTokens: Array<keyof Value> =
            Reflect.getMetadata(this.config.metaDataTokenKey, Target) || []

        const injections = constructorParams.map((param, index) => {
            const token = injectedTokens[index]

            if (token) {
                return this.resolve(token)
            }

            return this.resolve<Key>(param)
        })

        return new Target(...injections)
    }

    private has(
        target: keyof Value | Injectable<Value[keyof Value]>,
    ): target is keyof Value {
        return this.dependencies.has(target as keyof Value)
    }

    private maybeInjectable<Key extends keyof Value>(
        target: Key | Injectable<Value[Key]>,
    ): target is Injectable<Value[Key]> {
        if (typeof target === 'function') {
            return true
        }

        return typeof target === 'object' && target !== null
    }

    private setInjectable(
        target: Injectable<Value[keyof Value]>,
        instance: Value[keyof Value],
        metadata: InjectableConfig,
    ): void {
        if (metadata.singleton) {
            this.dependencies.set(target, instance)
        }
    }
}
