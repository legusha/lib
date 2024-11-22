import type { DIContainer } from '@lib/diContainer'
import type { Logger } from '@lib/logger'

export interface Example {
    value: string
}

export interface ContainerDependencies {
    data: string
    example: Example
    logger: Logger
}

export interface Container<Value extends ContainerDependencies>
    extends DIContainer<Value> {}
