type NumberCommand = () => number
type ResultCommand = () => void

type Commands = Record<string, NumberCommand | ResultCommand>

class DeadFishParser {
    private readonly result: number[] = []
    private value = 0
    public commands: Commands = {
        i: (): number => (this.value = ++this.value),
        d: (): number => (this.value = --this.value),
        s: (): number => (this.value = this.value ** 2),
        o: (): void => {
            this.result.push(this.value)
        },
    }

    public getResul(): number[] {
        return this.result
    }
}

export function parse(data: string): number[] {
    const parser = new DeadFishParser()
    for (let i = 0; i < data.length; i++) {
        const commandName = data[i]
        const command = parser.commands[commandName]

        if (command) {
            command()
        }
    }

    return parser.getResul()
}

console.log(parse('iiisdoso'))
console.log(parse('iiisxxxdoso'))
