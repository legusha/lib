import {
    META_KEY_FOR_CLASS,
    META_KEY_FOR_TOKEN,
} from '@usage/appContainer/inject'
import type { ContainerDependencies } from '@usage/container'
import { AppContainer } from '@usage/container'

export const containerConfig = {
    metaDataKey: META_KEY_FOR_CLASS,
    metaDataTokenKey: META_KEY_FOR_TOKEN,
}

export const TOKENS: Record<
    keyof ContainerDependencies,
    keyof ContainerDependencies
> = {
    data: 'data',
    example: 'example',
} as const

const container = new AppContainer(containerConfig)
const dataForToken = 'data example'
container.register(TOKENS.data, dataForToken)

export { container }
