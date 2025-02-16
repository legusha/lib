export interface BinaryTree<Value> {
    key: Value
    leftChild: BinaryTree<Value> | null
    rightChild: BinaryTree<Value> | null
    getKey: () => Value
    insertLeft: (data: Value) => void
    insertRight: (data: Value) => void
    breadthFirstSearch: (value: Value) => Value | null
    depthFirstSearchPreOrder: (value: Value) => Value | null
    depthFirstSearchPostOrder: (value: Value) => Value | null
    depthFirstSearchInOrder: (value: Value) => Value | null
    invert: () => void
}
