import type { BinarySearchStrategy } from './binarySearch.types'

export class BinarySearch {
    public constructor(private strategy: BinarySearchStrategy) {}

    public setStrategy(strategy: BinarySearchStrategy): void {
        this.strategy = strategy
    }

    public search(...args: Parameters<typeof this.strategy>): boolean {
        // @ts-expect-error
        return this.strategy(...args)
    }
}
