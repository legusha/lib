import { extensionRegex } from 'ts-loader/dist/constants'
import type { LinkedListLoopCallback } from '@lib/linkedList/linkedList.types'

export class Node<Data> {
    public constructor(
        private readonly data: Data,
        private next: Node<Data> | null = null,
    ) {}

    public writeNext(node: Node<Data> | null): void {
        this.next = node
    }

    public getNext(): Node<Data> | null {
        return this.next
    }

    public read(): Data {
        return this.data
    }
}

export class LinkedList<Data> {
    private head: Node<Data> | null = null

    public push(data: Data): void {
        if (!this.head) {
            this.head = new Node(data)

            return
        }

        let current: Node<Data> | null = this.head
        while (current?.getNext()) {
            current = current.getNext()
        }

        const node = new Node(data)
        current?.writeNext(node)
    }

    public last(): Data {
        let current: Node<Data> | null = this.head

        while (current?.getNext()) {
            current = current.getNext()
        }

        const last = current?.getNext()

        if (last) {
            last.read()
        }

        throw new Error('Empty list')
    }

    public remove(data: Data): void {
        if (!this.head) {
            return
        }

        if (this.head.read() === data) {
            this.head = this.head.getNext()

            return
        }

        let current: Node<Data> | null = this.head
        let previous: Node<Data> | null = null

        while (current) {
            const dataItem = current.read()

            if (dataItem === data) {
                const next = current.getNext()
                previous?.writeNext(next)

                return
            }

            previous = current
            current = current.getNext()
        }
    }

    public find(data: Data): boolean {
        let current = this.head

        while (current) {
            if (current.read() === data) {
                return true
            }

            current = current.getNext()
        }

        return false
    }

    public forEach(callback: LinkedListLoopCallback<Data>): void {
        let current = this.head

        while (current) {
            callback(current.read())
            current = current.getNext()
        }
    }

    public shift(): Data {
        if (this.head) {
            const data = this.head.read()
            this.head = this.head?.getNext()

            return data
        }

        throw new Error('Empty list')
    }

    public pop(): Data {
        if (!this.head) {
            throw new Error('Empty list')
        }

        if (!this.head.getNext()) {
            const value = this.head.read()
            this.head = null

            return value
        }

        let current: Node<Data> | null = this.head
        let previous: Node<Data> | null = null

        while (current?.getNext()) {
            previous = current
            current = current.getNext()
        }

        if (current) {
            const data = current.read()
            previous?.writeNext(null)

            return data
        }

        throw new Error('Illegal operation')
    }
}
