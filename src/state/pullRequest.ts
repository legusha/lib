import { DraftState } from '@lib/state/draftState'
import { OpenState } from '@lib/state/openState'
import type { State } from '@lib/state/state'

export interface PullRequest extends State {
    setState: (state: State) => void
}

export class AppPullRequest implements PullRequest {
    private state: State = new DraftState(this)

    public constructor(isDraft = false) {
        this.state = isDraft ? new DraftState(this) : new OpenState(this)
    }

    public setState(state: State): void {
        this.state = state
    }

    public open(): void {
        this.state.open()
    }

    public markDraft(): void {
        this.state.markDraft()
    }

    public markReadyForReview(): void {
        this.state.markReadyForReview()
    }

    public close(): void {
        this.state.close()
    }

    public merge(): void {
        this.state.merge()
    }
}
