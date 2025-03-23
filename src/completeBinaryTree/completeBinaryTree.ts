import type { CompleteBinaryTree } from '@lib/completeBinaryTree/completeBinaryTree.types'

// leftChild = 2 * i + 1
// rightChild = 2 * i + 2
// parent = (i - 1) / 2

export class AppCompleteBinaryTree<Value> implements CompleteBinaryTree<Value> {
    public leftChild: CompleteBinaryTree<Value> | null = null
    public rightChild: CompleteBinaryTree<Value> | null = null

    public constructor(public root: Value) {}

    public insert(value: Value): void {
        const queue: Array<CompleteBinaryTree<Value>> = [this]

        while (queue.length) {
            const node = queue.shift()

            if (node && !node.leftChild) {
                node.leftChild = new AppCompleteBinaryTree(value)

                return
            }

            if (node?.leftChild) {
                queue.push(node.leftChild)
            }

            if (node && !node.rightChild) {
                node.rightChild = new AppCompleteBinaryTree(value)

                return
            }

            if (node?.rightChild) {
                queue.push(node.rightChild)
            }
        }
    }

    public toArray(): Value[] {
        const result: Value[] = []
        const queue: Array<CompleteBinaryTree<Value>> = [this]

        while (queue.length) {
            const node = queue.shift()

            if (node?.root) {
                result.push(node.root)
            }

            if (node?.leftChild) {
                queue.push(node.leftChild)
            }

            if (node?.rightChild) {
                queue.push(node.rightChild)
            }
        }

        return result
    }
}
