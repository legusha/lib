import { ClosedState } from './closeState'
import { OpenState } from './openState'
import { AppState } from '@lib/state/state'

export class DraftState extends AppState {
    public markReadyForReview(): void {
        this.pullRequest.setState(new OpenState(this.pullRequest))
    }

    public close(): void {
        this.pullRequest.setState(new ClosedState(this.pullRequest))
    }
}
