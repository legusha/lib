import type { BinaryTree } from './binaryTree.types'

export class AppBinaryTree<Value> implements BinaryTree<Value> {
    public leftChild: BinaryTree<Value> | null = null
    public rightChild: BinaryTree<Value> | null = null

    public constructor(public key: Value) {}

    public insertLeft(data: Value): void {
        const leftChild = this.leftChild

        if (!leftChild) {
            this.leftChild = new AppBinaryTree(data)

            return
        }

        const newChild = new AppBinaryTree(data)
        newChild.leftChild = leftChild
        this.leftChild = newChild
    }

    public insertRight(data: Value): void {
        const rightChild = this.rightChild

        if (!rightChild) {
            this.rightChild = new AppBinaryTree(data)

            return
        }

        const newChild = new AppBinaryTree(data)
        newChild.rightChild = rightChild
        this.rightChild = newChild
    }

    public getKey(): Value {
        return this.key
    }

    public breadthFirstSearch(value: Value): Value | null {
        let current: Array<BinaryTree<Value>> = [this]
        const next: Array<BinaryTree<Value>> = []

        while (current.length) {
            for (const node of current) {
                if (node.key === value) {
                    return node.key
                }

                if (node.leftChild) {
                    next.push(node.leftChild)
                }

                if (node.rightChild) {
                    next.push(node.rightChild)
                }
            }

            current = [...next]
            next.length = 0
        }

        return null
    }

    public depthFirstSearchPreOrder(value: Value): Value | null {
        if (this.key === value) {
            return this.key
        }

        if (this.leftChild) {
            const left = this.leftChild.depthFirstSearchPreOrder(value)

            if (left) {
                return left
            }
        }

        if (this.rightChild) {
            const right = this.rightChild.depthFirstSearchPreOrder(value)

            if (right) {
                return right
            }
        }

        return null
    }

    public depthFirstSearchPostOrder(value: Value): Value | null {
        if (this.leftChild) {
            const left = this.leftChild.depthFirstSearchPostOrder(value)

            if (left) {
                return left
            }
        }

        if (this.rightChild) {
            const right = this.rightChild.depthFirstSearchPostOrder(value)

            if (right) {
                return right
            }
        }

        if (this.key === value) {
            return this.key
        }

        return null
    }

    public depthFirstSearchInOrder(value: Value): Value | null {
        if (this.leftChild) {
            const left = this.leftChild.depthFirstSearchInOrder(value)

            if (left) {
                return left
            }
        }

        if (this.key === value) {
            return this.key
        }

        if (this.rightChild) {
            const right = this.rightChild.depthFirstSearchInOrder(value)

            if (right) {
                return right
            }
        }

        return null
    }

    public invert(): void {
        const leftChild = this.leftChild
        const rightChild = this.rightChild

        this.leftChild = rightChild
        this.rightChild = leftChild

        if (this.leftChild) {
            this.leftChild.invert()
        }

        if (this.rightChild) {
            this.rightChild.invert()
        }
    }
}
