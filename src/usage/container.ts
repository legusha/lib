import type { Example } from './appContainer'
import { container, TOKENS } from '@usage/appContainer'
import { InjectClass, InjectToken } from '@usage/appContainer/inject'
import { logger } from '@usage/logger'

@InjectClass()
class ExampleImplSecond {
    public constructor(
        @InjectToken(TOKENS.data) private readonly data: string,
    ) {
        logger.log(`Data in ${this.constructor.name}:`, this.data)
    }
}

@InjectClass()
class ExampleImpl implements Example {
    public value: string = ''
    public constructor(private readonly example: ExampleImplSecond) {
        logger.log(this.example)
    }
}

const example = container.resolve<'example'>(ExampleImpl)
logger.log(example)
