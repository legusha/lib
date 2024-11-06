import { container, TOKENS } from './app-container'
import { InjectClass, InjectToken } from '@usage/app-container/inject'
import type { Example } from '@usage/container'

@InjectClass()
class ExampleSecond {
    public constructor(
        @InjectToken(TOKENS.data) private readonly data: string,
    ) {
        console.log(`Data in ${this.constructor.name}:`, this.data)
    }
}

@InjectClass()
class ExampleImpl implements Example {
    public value: string = ''
    public constructor(private readonly exampleSecond: ExampleSecond) {
        console.log(this.exampleSecond)
    }
}

const example = container.resolve<'example'>(ExampleImpl)
console.log(example)
