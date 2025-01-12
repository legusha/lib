export const binarySearch = (data: number[], target: number): boolean => {
    if (data.length === 0) {
        return false
    }

    if (data.length === 1) {
        return data[0] === target
    }

    const lastIndex = data.length - 1
    const isMiddleIndexEven = lastIndex % 2 === 0
    const middleIndex = isMiddleIndexEven ? lastIndex / 2 : (lastIndex - 1) / 2
    const middleValue = data[middleIndex]

    if (middleValue === target) {
        return true
    }

    if (middleValue > target) {
        const leftValue = data.slice(0, middleIndex + 1)

        return binarySearch(leftValue, target)
    }

    if (middleValue < target && lastIndex !== 1) {
        const rightValue = data.slice(middleIndex, data.length)

        return binarySearch(rightValue, target)
    }

    if (lastIndex === 1) {
        return data[lastIndex] === target
    }

    return false
}
