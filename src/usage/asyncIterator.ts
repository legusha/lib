import { AsyncIterator } from '@lib/asyncIterator'
import { container } from '@usage/appContainer'

const { wait } = container.resolve<'utils'>('utils')
const logger = container.resolve<'logger'>('logger')

const exampleData = [
    wait.bind(null, 3000),
    wait.bind(null, 3000),
    wait.bind(null, 3000),
    wait.bind(null, 3000),
    wait.bind(null, 3000),
]

const data = new AsyncIterator(
    (index, item) => logger.log(`Item by index: ${index}, item: ${item}`),
    ...exampleData,
)

void (async () => {
    for await (const fn of data) {
        await fn()
    }
})()
