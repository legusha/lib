export type Merge<First, Second> = First & Second

type ObjectMergerStrategy<Obj1, Obj2> = (
    obj1: Obj1,
    obj2: Obj2,
) => Merge<Obj1, Obj2>

export class ObjectMerger<ObjFirst, ObjSecond> {
    public constructor(
        private strategy: ObjectMergerStrategy<ObjFirst, ObjSecond>,
    ) {}

    public setStrategy(
        newStrategy: ObjectMergerStrategy<ObjFirst, ObjSecond>,
    ): void {
        this.strategy = newStrategy
    }

    public combineObjects(
        obj1: ObjFirst,
        obj2: ObjSecond,
    ): Merge<ObjFirst, ObjSecond> {
        return this.strategy(obj1, obj2)
    }
}
