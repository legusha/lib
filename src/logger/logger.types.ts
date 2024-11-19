import type { instance } from '@lib/logger/logger'

export type Logger = typeof instance | typeof console
export type LoggerProperties = keyof typeof console | keyof typeof instance
export type LoggerGet = (...args: unknown[]) => unknown
