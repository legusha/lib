/* eslint-disable */
const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
]

const intByRoman = romanNumerals.reduce((result, item) => {
    result[item.numeral] = item.value
    return result
}, {})

class RomanNumerals {
    static toRoman(data) {
        let result = ''

        for (const { value, numeral } of romanNumerals) {
            while (data >= value) {
                result = result + numeral
                data = data - value
            }
        }

        return result
    }

    static fromRoman(value) {
        let num = 0;
        for (let i = 0; i < value.length; i++) {
            const romanChar = value[i];
            const current = intByRoman[romanChar];
            const nextRomanChar = value[i + 1]
            const next = intByRoman[nextRomanChar] || 0;

            if (current < next) {
                num -= current;
                continue;
            }

            num += current;
        }
        return num;
    }
}
