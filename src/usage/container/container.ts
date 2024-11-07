import type { Container, ContainerDependencies } from './container.types'
import { DIContainerImpl } from '@lib/diContainer'

export class AppContainer
    extends DIContainerImpl<ContainerDependencies>
    implements Container<ContainerDependencies> {}
