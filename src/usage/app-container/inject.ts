import { getInjectorForClass, getInjectorForToken } from '@lib/di-container'

export const META_KEY_FOR_CLASS = 'metaClass' as const
export const META_KEY_FOR_TOKEN = 'metaTokens' as const

export const InjectClass = getInjectorForClass(META_KEY_FOR_CLASS)
export const InjectToken = getInjectorForToken(META_KEY_FOR_TOKEN)
