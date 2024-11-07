import 'reflect-metadata'
import type { InjectableConfig } from '@lib/diContainer'

const defaultConfig = {
    singleton: true,
}

export const getInjectorForClass = (key: string) =>
    function InjectClass(config: InjectableConfig = defaultConfig) {
        return <Target extends Record<keyof Target, Target[keyof Target]>>(
            target: Target,
        ): void => {
            Reflect.defineMetadata(key, config, target)
        }
    }
