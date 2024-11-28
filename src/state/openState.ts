import { ClosedState } from '@lib/state/closeState'
import { DraftState } from '@lib/state/draftState'
import { MergedState } from '@lib/state/mergedState'
import { AppState } from '@lib/state/state'

export class OpenState extends AppState {
    public markDraft(): void {
        this.pullRequest.setState(new DraftState(this.pullRequest))
    }

    public close(): void {
        this.pullRequest.setState(new ClosedState(this.pullRequest))
    }

    public merge(): void {
        this.pullRequest.setState(new MergedState(this.pullRequest))
    }
}
