import { mergeSort } from '@lib/mergeSort'
import { container } from '@usage/appContainer'

const logger = container.resolve('logger')
const { generateRandomInt } = container.resolve('utils')

const data = generateRandomInt(1, 1000, 1000)

const dataSorted = mergeSort(data)
logger.log('Sorted array:', dataSorted)
