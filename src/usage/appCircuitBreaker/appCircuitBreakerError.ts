export class AppCircuitBreakerError extends Error {
    public static readonly TYPE = {
        open: 'Circuit is open',
    }
}
