import type {
    Logger,
    LoggerGetOutput,
    LoggerMethod,
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
    const property = target[propKey]
    const isFunction = typeof property === 'function'

    if (isFunction) {
        return (...args: unknown[]) => {
            const origin = property as LoggerMethod
            const isPropertyError = propKey === 'error'

            if (isPropertyError) {
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

    return property
}

const instance: Logger = Object.create(loggerWithOptions)
export const createLogger = (options: LoggerOptions): Logger => {
    const loggerProxied = new Proxy(instance, handler)
    loggerProxied.printLogs = options.printLogs

    return loggerProxied
}
