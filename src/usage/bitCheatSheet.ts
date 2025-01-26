/* eslint-disable */
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')

const temp = 0b1100 // 12 // (1 * 2 ** 0) + (0 * 2 ** 1) + (1 * 2 ** 2) + (1 * 2 ** 3)
const tempToDecimal = 0 * 2 ** 0 + 0 * 2 ** 1 + 1 * 2 ** 2 + 1 * 2 ** 3
const toBinary = 13 // 0b1101
// 13 % 2 = 1;
// 6 % 2 = 0;
// 3 % 2 = 1;
// 1 % 2 = 1

const toBinaryNative = temp.toString(2) // 0b1100

const and = 0b100 & 0b111 // 0b100 = 4
const or = 0b100 | 0b111 // 0b111 = 7

const two = 0b0010 // 2
const resultTwo = two << 1 // 0b0100 = 4

const three = 0b0011 // 3
const threeResult = three << 2 // 0b1100 = 12

const four = 0b0100 // 4
const fourResult = four << 3 // 0b0100000 // 32

const eight = 0b1000 // 8
const eightResult = eight >> 1; // 0b0100 = 4

const twelve = 0b1100 // 12
const twelveResult = twelve >> 2; // 0b0011 = 3

const thirtyTwo = 0b100000 // 32
const thirtyTwoResult = thirtyTwo >> 3 // 0b000100 = 4

const isEven = (n: number): boolean => !(n & 1)

logger.log('isEven', isEven(1), isEven(2))
