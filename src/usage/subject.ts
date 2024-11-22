import { ObserverImpl } from '@lib/observer'
import { SubjectImpl } from '@lib/subject'
import { container } from '@usage/appContainer'

const logger = container.resolve<'logger'>('logger')
const exampleUser = {
    username: 'example',
    email: 'example@example.com',
    id: 1,
    name: 'example',
}

type User = typeof exampleUser

const listener = (user: User): void => logger.log('New user:', user)
const userObserver = new ObserverImpl<User>(listener)
const user = new SubjectImpl<User>()
user.subscribe(userObserver)

const newExampleUser = { ...exampleUser, name: 'example name changed' }
user.notify(newExampleUser)
