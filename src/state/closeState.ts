import { OpenState } from '@lib/state/openState'
import { AppState } from '@lib/state/state'

export class ClosedState extends AppState {
    public open(): void {
        this.pullRequest.setState(new OpenState(this.pullRequest))
    }
}
