import { AppPullRequest } from '@lib/state'
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')

{
    const pullRequest = new AppPullRequest(true)
    pullRequest.markReadyForReview()
    pullRequest.merge()
    logger.log(pullRequest)
}

{
    const pullRequest = new AppPullRequest(false)
    pullRequest.markDraft()
    logger.log(pullRequest)
}
