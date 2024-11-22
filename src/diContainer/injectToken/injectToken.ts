type TargetKey<Target> = Record<keyof Target, Target[keyof Target]>

export const getInjectorForToken =
    (key: string) =>
    <Target extends TargetKey<Target>>(token: string | symbol) => {
        return (
            target: Target,
            propertyKey: string | symbol | undefined,
            parameterIndex: number,
        ): void => {
            const existingInjectedTokens =
                Reflect.getMetadata(key, target, propertyKey as string) || []
            existingInjectedTokens[parameterIndex] = token

            Reflect.defineMetadata(
                key,
                existingInjectedTokens,
                target,
                propertyKey as string,
            )
        }
    }
