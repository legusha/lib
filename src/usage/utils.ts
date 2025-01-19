import { container, TOKENS } from '@usage/appContainer'

const wait = async (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms))

const generateRandomInt = (
    min: number,
    max: number,
    length: number,
): number[] => {
    return Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min,
    )
}

const injectableUtils = {
    wait,
    generateRandomInt,
}

container.register(TOKENS.utils, injectableUtils)
