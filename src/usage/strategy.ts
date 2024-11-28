import { ObjectMerger } from '@lib/strategy'
import type { Merge } from '@lib/strategy/objectMerger'

export function pureObjectAssignStrategy<ObjFirst, ObjSecond>(
    obj1: ObjFirst,
    obj2: ObjSecond,
): Merge<ObjFirst, ObjSecond> {
    return Object.assign({}, obj1, obj2) as Merge<ObjFirst, ObjSecond>
}
export function mutatingObjectAssignStrategy<ObjFirst, ObjSecond>(
    obj1: ObjFirst,
    obj2: ObjSecond,
): Merge<ObjFirst, ObjSecond> {
    // @ts-expect-error
    return Object.assign(obj1, obj2) as Merge<ObjFirst, ObjSecond>
}
export function objectSpreadStrategy<ObjFirst, ObjSecond>(
    obj1: ObjFirst,
    obj2: ObjSecond,
): Merge<ObjFirst, ObjSecond> {
    return { ...obj1, ...obj2 }
}

const objectMerger = new ObjectMerger(pureObjectAssignStrategy)
const obj1 = {
    keys: '123',
}
const obj2 = {
    keys: '456',
}

objectMerger.combineObjects(obj1, obj2)
objectMerger.setStrategy(mutatingObjectAssignStrategy)
objectMerger.combineObjects(obj1, obj2)
objectMerger.combineObjects(obj1, obj2)
objectMerger.setStrategy(objectSpreadStrategy)
