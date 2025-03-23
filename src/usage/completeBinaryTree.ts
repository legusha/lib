import { AppCompleteBinaryTree } from '@lib/completeBinaryTree'
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tree = new AppCompleteBinaryTree(data.shift())

for (const node of data) {
    tree.insert(node)
}

logger.log('Complete Tree: to array', tree.toArray())
