export type BinarySearchStrategy =
    | ((data: number[], target: number) => boolean)
    | ((data: string[], target: string) => boolean)
