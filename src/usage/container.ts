import type { Example } from './appContainer'
import type { Logger } from '@lib/logger'
import { container, TOKENS } from '@usage/appContainer'
import { InjectClass, InjectToken } from '@usage/appContainer/inject'

@InjectClass()
class ExampleImplSecond {
    public constructor(
        @InjectToken(TOKENS.data) private readonly data: string,
        @InjectToken(TOKENS.logger) private readonly logger: Logger,
    ) {
        this.logger.log(`Data in ${this.constructor.name}:`, this.data)
    }
}

@InjectClass()
class ExampleImpl implements Example {
    public value: string = ''
    public constructor(
        @InjectToken(TOKENS.logger) private readonly logger: Logger,
        private readonly example: ExampleImplSecond,
    ) {
        this.logger.log(this.example)
    }
}

const example = container.resolve<'example'>(ExampleImpl)
const logger = container.resolve<'logger'>('logger')
logger.log(example)
