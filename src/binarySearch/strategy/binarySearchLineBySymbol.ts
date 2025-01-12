import { binarySearch } from './binarySearch'

export const binarySearchLineBySymbol = (
    data: string[],
    target: string,
): boolean => {
    const unicodeSymbols = data.map(char => char.charCodeAt(0))
    const unicodeTarget = target.charCodeAt(0)

    return binarySearch(unicodeSymbols, unicodeTarget)
}
