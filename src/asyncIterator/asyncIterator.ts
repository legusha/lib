interface AsyncIteratorValue<Data> {
    next: (value?: Data) => Promise<IteratorResult<Data>>
}

type AsyncIteratorHandler<Data> = (index: number, data: Data) => unknown

export class AsyncIterator<Data> extends Array<Data> {
    public constructor(
        private readonly handler: AsyncIteratorHandler<Data>,
        ...items: Data[]
    ) {
        super(...items)
        Object.setPrototypeOf(this, AsyncIterator.prototype)
    }

    public [Symbol.asyncIterator](): AsyncIteratorValue<Data> {
        let i = 0

        return {
            next: async () =>
                new Promise<IteratorResult<Data>>(resolve => {
                    this.handler(i, this[i])

                    resolve({
                        value: this[i],
                        done: i === this.length - 1,
                    })

                    ++i
                }),
        }
    }
}
