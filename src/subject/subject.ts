import type { Observer } from '@lib/observer'
import type { Subject } from '@lib/subject/subject.types'

export class SubjectImpl<Data> implements Subject<Data> {
    private observers: Array<Observer<Data>> = []

    public subscribe(observer: Observer<Data>): void {
        this.observers.push(observer)
    }

    public unsubscribe(observer: Observer<Data>): void {
        this.observers = this.observers.filter(element => {
            return observer !== element
        })
    }

    public notify(data: Data): void {
        for (const observer of this.observers) {
            observer.update(data)
        }
    }
}
