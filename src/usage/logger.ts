import type { Logger } from '@lib/logger'
import { createLogger } from '@lib/logger'
import { container, TOKENS } from '@usage/appContainer'

const loggerOptions = {
    printLogs: true,
}

const logger: Logger = createLogger(loggerOptions)
container.register(TOKENS.logger, logger)
