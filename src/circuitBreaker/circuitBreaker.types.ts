import type { CIRCUIT_BREAKER_STATE } from '@lib/circuitBreaker/circuitBreaker'

export type CircuitBreakerState =
    (typeof CIRCUIT_BREAKER_STATE)[keyof typeof CIRCUIT_BREAKER_STATE]

export interface CircuitBreakerOptions {
    failureThreshold: number
    successThreshold: number
    timeout: number
}
