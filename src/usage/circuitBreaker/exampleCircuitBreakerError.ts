export class ExampleCircuitBreakerError extends Error {
    public static readonly TYPE = {
        open: 'Circuit is open',
    }
}
