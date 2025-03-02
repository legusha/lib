export function searchDisable(log: string): string {
    const data = log.split(' ')

    let startIndex = 0
    let endIndex = data.length - 1
    let count = 0

    while (startIndex <= endIndex) {
        const startLog = data[startIndex]
        const endLog = data[endIndex]

        if (startIndex === endIndex) {
            if (checkLog(startLog)) {
                count += 1
            }
            break
        }

        if (checkLog(startLog)) {
            count += 1
        }

        if (checkLog(endLog)) {
            count += 1
        }
        startIndex += 1
        endIndex -= 1
    }

    console.log(count)

    if (count > 50) {
        return 'match disable bot'
    }

    return 'no match continue'
}

function checkLog(log: string): boolean {
    const logLength = 4
    const index = 2
    const firstVariantValue = '2'
    const secondVariantValue = '3'

    return (
        log.length === logLength &&
        (log[index] === firstVariantValue || log[index] === secondVariantValue)
    )
}

const log1 =
    '1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031'
console.assert(searchDisable(log1) === 'match disable bot', {
    test: 'test failed',
})

const log2 =
    '2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031'
console.assert(searchDisable(log2) === 'no match continue', {
    result: searchDisable(log2),
})
