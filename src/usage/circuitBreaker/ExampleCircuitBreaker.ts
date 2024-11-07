import { CircuitBreaker } from '@lib/circuitBreaker'
import type { ExampleCircuitBreakerData } from '@usage/circuitBreaker/ExampleCircuitBreaker.types'
import { ExampleCircuitBreakerError } from '@usage/circuitBreaker/ExampleCircuitBreakerError'

export class ExampleCircuitBreaker extends CircuitBreaker {
    public async execute<Data>(
        action: (...args: unknown[]) => Promise<Data>,
        ...args: unknown[]
    ): Promise<Data>
    public override async execute<Data extends ExampleCircuitBreakerData<Data>>(
        action: (...args: unknown[]) => Promise<Data>,
        ...args: unknown[]
    ): Promise<Data> {
        this.checkStateOpenAndWrite()

        try {
            const result = await action(...args)

            if (result.error) {
                throw result.error
            }
            this.checkStateHalfOpenAndWrite()

            return result
        } catch (error) {
            this.handleErrorAndWrite()
            throw error
        }
    }

    protected override checkStateOpenAndWrite(): void {
        if (this.state === CircuitBreaker.state.OPEN) {
            const now = Date.now()

            if (now > this.nextAttempt) {
                this.moveToHalfOpen()

                return
            }

            throw new ExampleCircuitBreakerError(
                ExampleCircuitBreakerError.TYPE.open,
            )
        }
    }
}
