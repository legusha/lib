import { Node } from '@lib/linkedList'

class QueueNode<Data> extends Node<Data> {}

export class Queue<Data> {
    private head: QueueNode<Data> | null = null
    private tail: QueueNode<Data> | null = null
    private size = 0

    public enqueue(data: Data): void {
        const node = new QueueNode<Data>(data)
        this.size += 1

        if (!this.head) {
            this.head = node
            this.tail = this.head

            return
        }

        this.tail?.writeNext(node)
        this.tail = node
    }

    public dequeue(): Data {
        if (!this.head) {
            throw new Error('Empty queue')
        }

        const head = this.head
        this.head = this.head.getNext()
        this.size -= 1

        if (!this.head) {
            this.tail = null
        }

        return head.read()
    }

    public peek(): Data {
        if (!this.head) {
            throw new Error('Empty queue')
        }

        return this.head.read()
    }

    public getSize(): number {
        return this.size
    }
}
