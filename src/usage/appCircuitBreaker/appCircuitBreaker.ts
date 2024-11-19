import type { AppCircuitBreakerData } from './appCircuitBreaker.types'
import { AppCircuitBreakerError } from './appCircuitBreakerError'
import { CircuitBreaker } from '@lib/circuitBreaker'

export class AppCircuitBreaker extends CircuitBreaker {
    public async execute<Data>(
        action: (...args: unknown[]) => Promise<Data>,
        ...args: unknown[]
    ): Promise<Data>
    public override async execute<Data extends AppCircuitBreakerData<Data>>(
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

            throw new AppCircuitBreakerError(AppCircuitBreakerError.TYPE.open)
        }
    }
}
