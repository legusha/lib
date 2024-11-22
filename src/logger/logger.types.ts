export interface LoggerOptions {
    printLogs: boolean
}

export interface LoggerInstance extends LoggerOptions {}
export type Logger = LoggerInstance & Console
export type LoggerProperties = keyof Logger
export type LoggerGetOutput = Logger[keyof Logger]
export type LoggerMethod = (...args: unknown[]) => void
