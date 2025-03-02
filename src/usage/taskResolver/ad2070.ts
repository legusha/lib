export function searchDisable(log: string): string {
    const data = log.split(' ')
    const countByLog: Record<string, number> = {}

    let startIndex = 0
    let endIndex = data.length - 1
    let totalCount = 0

    while (startIndex <= endIndex) {
        const startLog = data[startIndex]
        const endLog = data[endIndex]

        if (startIndex === endIndex) {
            if (checkLog(startLog) && isPrime(startLog)) {
                setCountLog(startLog, countByLog)
            }
            break
        }

        if (checkLog(startLog) && isPrime(startLog)) {
            setCountLog(startLog, countByLog)
        }

        if (checkLog(endLog) && isPrime(endLog)) {
            setCountLog(endLog, countByLog)
        }
        startIndex += 1
        endIndex -= 1
    }

    for (log in countByLog) {
        const countOfLog = countByLog[log]

        if (countOfLog > 3) {
            totalCount += countOfLog
        }
    }

    const messageTotalCountMax = 'match disable bot'
    const defaultMessage = 'no match continue'
    const totalCountMax = 50

    if (totalCount > totalCountMax) {
        return messageTotalCountMax
    }

    return defaultMessage
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

function isPrime(log: string): boolean {
    const num = parseInt(log, 10)

    if (num < 2) return false

    if (num % 2 === 0 && num !== 2) return false
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }

    return true
}

function setCountLog(log: string, countByLog: Record<string, number>): void {
    if (countByLog[log]) {
        countByLog[log] += 1

        return
    }

    countByLog[log] = 1
}

const log1 =
    '1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031'
console.assert(searchDisable(log1) === 'match disable bot', {
    result: 'test failed first',
})

const log2 =
    '2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031'
console.log(searchDisable(log2))
console.assert(searchDisable(log2) === 'no match continue', {
    result: 'test failed second',
})
