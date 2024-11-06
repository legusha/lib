import type { DIContainer } from '@lib/di-container'

export interface ContainerValue {
    data: string
}

export interface Container<Value extends ContainerValue>
    extends DIContainer<Value> {}
