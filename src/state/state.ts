import { IllegalOperationError } from '@lib/state/error'
import type { PullRequest } from '@lib/state/pullRequest'

export interface State {
    markReadyForReview: () => void
    markDraft: () => void
    merge: () => void
    close: () => void
    open: () => void
}

export class AppState implements State {
    public constructor(protected pullRequest: PullRequest) {}

    public markDraft(): void {
        throw new IllegalOperationError(this)
    }

    public markReadyForReview(): void {
        throw new IllegalOperationError(this)
    }

    public open(): void {
        throw new IllegalOperationError(this)
    }

    public close(): void {
        throw new IllegalOperationError(this)
    }

    public merge(): void {
        throw new IllegalOperationError(this)
    }
}
