import { Node } from '@lib/linkedList'

class StackNode<Data> extends Node<Data> {}

export class Stack<Data> {
    private head: StackNode<Data> | null = null

    public push(data: Data): void {
        const head = this.head
        const node = new StackNode(data)

        if (!head) {
            this.head = node

            return
        }

        node.writeNext(this.head)
        this.head = node
    }

    public pop(): Data {
        if (!this.head) {
            throw new Error('Empty stack')
        }

        const data = this.head.read()
        this.head = this.head.getNext()

        return data
    }

    public size(): number {
        let count = 0
        let current = this.head
        while (current?.getNext()) {
            count++
            current = current?.getNext()
        }

        return count + 1
    }

    public isEmpty(): boolean {
        return !this.head
    }

    public peek(): Data {
        if (!this.head) {
            throw new Error('Empty stack')
        }

        return this.head.read()
    }
}
