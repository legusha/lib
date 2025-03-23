export function narcissistic(value: number): boolean {
    const valueStr = value.toString()
    let startIndex = 0
    let endIndex = valueStr.length - 1
    let sum = 0
    const pow = valueStr.length

    while (startIndex <= endIndex) {
        if (startIndex === endIndex) {
            const centerValue = valueStr[startIndex]
            const calculatedValue = Number(centerValue) ** pow
            sum += calculatedValue
            break
        }

        const startValue = valueStr[startIndex]
        const endValue = valueStr[endIndex]
        const calculatedStartValue = Number(startValue) ** pow
        const calculatedEndValue = Number(endValue) ** pow
        sum += calculatedStartValue
        sum += calculatedEndValue

        startIndex += 1
        endIndex -= 1
    }

    return sum === value
}
