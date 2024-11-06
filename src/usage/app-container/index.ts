import type { ContainerValue } from '@usage/container'
import { AppContainer } from '@usage/container'

export const META_KEY_FOR_CLASS = 'metaClass' as const
export const META_KEY_FOR_TOKEN = 'metaTokens' as const

export const containerConfig = {
    metaDataKey: META_KEY_FOR_CLASS,
    metaDataTokenKey: META_KEY_FOR_TOKEN,
}

export const TOKENS: Record<keyof ContainerValue, keyof ContainerValue> = {
    data: 'data',
} as const

const container = new AppContainer(containerConfig)
container.register(TOKENS.data, 'data')

export { container }
