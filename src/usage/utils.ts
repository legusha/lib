import { container, TOKENS } from '@usage/appContainer'

const wait = async (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms))

const injectableUtils = {
    wait,
}

container.register(TOKENS.utils, injectableUtils)
