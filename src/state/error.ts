import type { State } from '@lib/state/state'

export class IllegalOperationError extends Error {
    public constructor(private readonly stateInstance: State) {
        super('Illegal operation for State')
    }
}
