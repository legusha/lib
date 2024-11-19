import { container, TOKENS } from './appContainer'
import type { CircuitBreakerOptions } from '@lib/circuitBreaker/circuitBreaker.types'
import { createLogger } from '@lib/logger'
import { InjectClass, InjectToken } from '@usage/appContainer/inject'
import { ExampleCircuitBreaker } from '@usage/circuitBreaker'
import type { Example } from '@usage/container'

const isPrintLogs = true
const logger = createLogger(isPrintLogs)

@InjectClass()
class ExampleSecond {
    public constructor(
        @InjectToken(TOKENS.data) private readonly data: string,
    ) {
        logger.log(`Data in ${this.constructor.name}:`, this.data)
    }
}

@InjectClass()
class ExampleImpl implements Example {
    public value: string = ''
    public constructor(private readonly exampleSecond: ExampleSecond) {
        logger.log(this.exampleSecond)
    }
}

const example = container.resolve<'example'>(ExampleImpl)
logger.log(example)

const circuitBreakerOptions: CircuitBreakerOptions = {
    failureThreshold: 3,
    successThreshold: 1,
    timeout: 9000,
}
const wait = async (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms))

const circuitBreaker = new ExampleCircuitBreaker(circuitBreakerOptions)
const fns = [
    async () => ({ data: 'ok', error: null }),
    async () => ({ data: null, error: 'fail' }),
    async () => ({ data: null, error: 'fail second' }),
    async () => ({ data: null, error: 'fail third' }),
    async () => ({ data: 'ok', error: null }),
    async () => ({ data: 'ok', error: null }),
    async () => ({ data: 'ok', error: null }),
    async () => ({ data: 'ok', error: null }),
]

void (async () => {
    for await (const fn of fns) {
        await wait(3000)

        try {
            // @ts-expect-error
            const { data } = await circuitBreaker.execute(fn)
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }
})()
