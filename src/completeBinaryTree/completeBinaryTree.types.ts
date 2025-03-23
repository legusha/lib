export interface CompleteBinaryTree<Value> {
    insert: (value: Value) => void
    leftChild: CompleteBinaryTree<Value> | null
    rightChild: CompleteBinaryTree<Value> | null
    root: Value
}
