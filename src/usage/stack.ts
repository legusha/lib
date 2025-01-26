import { Stack } from '@lib/stack'
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')

const initialData = [1, 2, 3, 4]
const stack = new Stack<number>()

initialData.forEach(item => stack.push(item))

logger.log('Stack peek', stack.peek())
logger.log('Stack pop', stack.pop())
logger.log('Stack pop', stack.pop())
logger.log('Stack peek', stack.peek())
logger.log('Stack size', stack.size())
logger.log('Stack isEmpty', stack.isEmpty())
