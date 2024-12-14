import type { DIContainer } from '@lib/diContainer'
import type { Logger } from '@lib/logger'

export interface Example {
    value: string
}

interface AppUtils {
    wait: (timeout: number) => Promise<void>
}

export interface ContainerDependencies {
    data: string
    example: Example
    logger: Logger
    utils: AppUtils
}

export interface Container<Value extends ContainerDependencies>
    extends DIContainer<Value> {}
