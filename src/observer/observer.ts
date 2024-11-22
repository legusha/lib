import type { ObserverListener, Observer } from '@lib/observer/observer.types'

export class ObserverImpl<Data> implements Observer<Data> {
    public constructor(private readonly listener: ObserverListener<Data>) {}

    public update(data: Data): void {
        this.listener(data)
    }
}
