export interface Response<Data> {
    data: Data
    error: null
}

export interface ResponseError {
    data: null
    error: string
}

export type AppCircuitBreakerData<Data> = Response<Data> | ResponseError
