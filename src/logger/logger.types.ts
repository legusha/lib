import type { instance } from '@lib/logger/logger'

export type Logger = typeof instance | Console
export type LoggerProperties = keyof Console | keyof typeof instance
export type LoggerGetOutput = (...args: unknown[]) => unknown
export interface LoggerOptions {
    printLogs: boolean
}
