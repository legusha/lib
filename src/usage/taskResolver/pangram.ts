const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

export const isPangram = (phrase: string): boolean => {
    const alphabetChecker = alphabet.reduce<Record<string, boolean>>(
        (result, char) => {
            result[char] = false

            return result
        },
        {},
    )
    let startIndex = 0
    let endIndex = phrase.length - 1

    while (startIndex <= endIndex) {
        if (startIndex === endIndex) {
            const value = phrase[startIndex]
            alphabetChecker[value.toLowerCase()] = true
            break
        }
        const startValue = phrase[startIndex]
        const endValue = phrase[endIndex]
        alphabetChecker[startValue.toLowerCase()] = true
        alphabetChecker[endValue.toLowerCase()] = true
        startIndex += 1
        endIndex -= 1
    }

    return Object.values(alphabetChecker).every(item => item)
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))
