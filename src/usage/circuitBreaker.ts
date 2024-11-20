import type { CircuitBreakerOptions } from '@lib/circuitBreaker/circuitBreaker.types'
import { AppCircuitBreaker } from '@usage/appCircuitBreaker'
import { logger } from '@usage/logger'

const circuitBreakerOptions: CircuitBreakerOptions = {
    failureThreshold: 3,
    successThreshold: 1,
    timeout: 9000,
}
const wait = async (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms))

const circuitBreaker = new AppCircuitBreaker(circuitBreakerOptions)
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
            logger.log(data)
        } catch (e) {
            logger.error(e)
        }
    }
})()
