import type {
    Logger,
    LoggerGetOutput,
    LoggerOptions,
    LoggerProperties,
} from './logger.types'
import { style } from './style'

const optionsDefault: LoggerOptions = {
    printLogs: false,
}

const loggerWithOptions = Object.assign(globalThis.console, optionsDefault)
const handler = {
    get,
}

function get(target: Logger, propKey: LoggerProperties): LoggerGetOutput {
    const origin = target[propKey]
    const isFunction = typeof origin === 'function'

    if (isFunction) {
        return (...args: unknown[]) => {
            if (propKey === 'error') {
                return origin(...args)
            }

            if (!target.printLogs) {
                return
            }

            const date = new Date().toUTCString()
            const dateString = `%c[${date}]`

            return origin(dateString, style, ...args)
        }
    }

    return origin
}

export const instance = Object.create(loggerWithOptions)
export const createLogger = (options: LoggerOptions): Logger => {
    const loggerProxied = new Proxy(instance, handler)
    loggerProxied.printLogs = options.printLogs

    return loggerProxied
}
