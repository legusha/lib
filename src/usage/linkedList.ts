import { LinkedList } from '@lib/linkedList'
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')

const list = new LinkedList<number>()
const initialData = [1, 2, 3, 4]
initialData.forEach(data => list.push(data))

list.remove(2)

logger.log('Linked list is found 2:', list.find(2))
logger.log('Linked list is found 3: ', list.find(3))

logger.log('Linked list first value: ', list.shift())
logger.log('Linked list last value: ', list.pop())

list.forEach(data => {
    logger.log('Linked list node value:', data)
})
