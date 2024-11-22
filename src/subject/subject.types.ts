import type { Observer } from '@lib/observer'

export interface Subject<Data> {
    subscribe: (observer: Observer<Data>) => void
    unsubscribe: (observer: Observer<Data>) => void
    notify: (data: Data) => void
}
