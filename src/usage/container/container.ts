import type { Container, ContainerValue } from './container.types'
import { DIContainerImpl } from '@lib/di-container'

export class AppContainer
    extends DIContainerImpl<ContainerValue>
    implements Container<ContainerValue> {}
