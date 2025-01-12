export const binarySearchBySymbol = (
    data: string[],
    targetData: string,
): boolean => {
    const target = targetData.charCodeAt(0)

    if (data.length === 0) {
        return false
    }

    if (data.length === 1) {
        return data[0].charCodeAt(0) === target
    }

    const lastIndex = data.length - 1
    const isMiddleIndexEven = lastIndex % 2 === 0
    const middleIndex = isMiddleIndexEven ? lastIndex / 2 : (lastIndex - 1) / 2
    const middleValue = data[middleIndex].charCodeAt(0)

    if (middleValue === target) {
        return true
    }

    if (middleValue > target) {
        const leftValue = data.slice(0, middleIndex + 1)
        const targetSymbol = String.fromCodePoint(target)

        return binarySearchBySymbol(leftValue, targetSymbol)
    }

    if (middleValue < target && lastIndex !== 1) {
        const rightValue = data.slice(middleIndex, data.length)
        const targetSymbol = String.fromCodePoint(target)

        return binarySearchBySymbol(rightValue, targetSymbol)
    }

    if (lastIndex === 1) {
        return data[lastIndex].charCodeAt(0) === target
    }

    return false
}
