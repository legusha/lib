import type { DIContainer } from '@lib/diContainer'

export interface Example {
    value: string
}

export interface ContainerDependencies {
    data: string
    example: Example
}

export interface Container<Value extends ContainerDependencies>
    extends DIContainer<Value> {}
