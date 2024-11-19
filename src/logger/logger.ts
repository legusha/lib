import type { Logger, LoggerGet, LoggerProperties } from './logger.types'
import { style } from './style'

export const instance = Object.create(globalThis.console)
instance.printLogs = false

const handler = {
    get,
}

export const createLogger = (printLogs: boolean): Logger => {
    const loggerProxied = new Proxy(instance, handler)
    loggerProxied.printLogs = printLogs

    return loggerProxied
}

function get(target: Logger, propKey: LoggerProperties): LoggerGet {
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
