export class Challenge {
    public static solution(number: number): number {
        const isNegative = number < 0

        if (isNegative) {
            return 0
        }

        const multiples = 3
        const multiplesSecond = 5
        let result = 0
        for (let currentNumber = 0; currentNumber < number; currentNumber++) {
            const isHasMultiple = currentNumber % multiples === 0
            const isHasMultipleSecond = currentNumber % multiplesSecond === 0

            if (isHasMultiple || isHasMultipleSecond) {
                result += currentNumber
            }
        }

        return result
    }
}

console.log(Challenge.solution(10))
console.log(Challenge.solution(-1))
