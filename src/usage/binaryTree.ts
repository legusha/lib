import { AppBinaryTree } from '@lib/binaryTree'
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')
const tree = new AppBinaryTree(1)

tree.insertLeft(2)
tree.insertRight(3)
tree.insertLeft(4)
tree.insertRight(5)
tree.insertLeft(6)
tree.insertRight(7)
tree.insertLeft(8)
tree.insertRight(9)

logger.log('Tree: breadthFirstSearch', tree.breadthFirstSearch(6))
logger.log('Tree: depthFirstSearchInOrder', tree.depthFirstSearchInOrder(7))
logger.log('Tree: depthFirstSearchPostOrder', tree.depthFirstSearchPostOrder(8))
logger.log('Tree: depthFirstSearchPreOrder', tree.depthFirstSearchPreOrder(9))
logger.log('Tree: breadthFirstSearch', tree.breadthFirstSearch(10))
