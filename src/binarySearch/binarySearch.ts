import type { BinarySearchStrategy } from './binarySearch.types'

export class BinarySearch {
    public constructor(private strategy: BinarySearchStrategy) {
        this.strategy = strategy
    }

    public setStrategy(strategy: BinarySearchStrategy): void {
        this.strategy = strategy
    }

    public search(...args: Parameters<typeof this.strategy>): boolean {
        // @ts-expect-error
        return this.strategy(...args)
    }
}
