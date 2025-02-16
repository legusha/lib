import { Queue } from '@lib/queue'
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')

const initialData = [1, 2, 3, 4]
const queue = new Queue<number>()

initialData.forEach(item => queue.enqueue(item))

logger.log('Queue size: ', queue.getSize())
logger.log('Queue dequeue: ', queue.dequeue())
logger.log('Queue dequeue: ', queue.dequeue())
logger.log('Queue size: ', queue.getSize())
logger.log('Queue peek: ', queue.peek())
