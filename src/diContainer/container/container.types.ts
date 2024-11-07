export type Injectable<Type> = new (...args: any[]) => Type

export interface DIContainer<Value> {
    register: <Key extends keyof Value>(token: Key, value: Value[Key]) => this
    resolve: <Key extends keyof Value>(
        target: Key | Injectable<Value[Key]>,
    ) => Value[Key]
}

export interface DIContainerConfig {
    metaDataKey: string
    metaDataTokenKey: string
}
