export interface Observer<Data> {
    update: (data: Data) => void
}

export type ObserverListener<Data> = (data: Data) => unknown
