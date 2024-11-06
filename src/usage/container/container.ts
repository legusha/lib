import type { Container, ContainerDependencies } from './container.types'
import { DIContainerImpl } from '@lib/di-container'

export class AppContainer
    extends DIContainerImpl<ContainerDependencies>
    implements Container<ContainerDependencies> {}
