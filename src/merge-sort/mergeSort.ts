export const mergeSort = (data: number[]): number[] => {
    if (data.length <= 1) {
        return data
    }

    const middleIndex = Math.floor(data.length / 2)
    const leftSide = data.slice(0, middleIndex)
    const rightSide = data.slice(middleIndex)

    return merge(mergeSort(leftSide), mergeSort(rightSide))
}
function merge(leftSide: number[], rightSide: number[]): number[] {
    const result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
        const leftValue = leftSide[leftIndex]
        const rightValue = rightSide[rightIndex]

        if (leftValue <= rightValue) {
            result.push(leftValue)
            leftIndex++
            continue
        }

        result.push(rightValue)
        rightIndex++
    }

    const sortedLeftSide = leftSide.slice(leftIndex)
    const sortedRightSide = rightSide.slice(rightIndex)

    return result.concat(sortedLeftSide).concat(sortedRightSide)
}
