import { AppContainer } from './container'
import type { ContainerDependencies } from './container.types'
import { META_KEY_FOR_CLASS, META_KEY_FOR_TOKEN } from './inject'

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
export * from './container.types'
