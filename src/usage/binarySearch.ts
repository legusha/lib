import {
    BinarySearch,
    binarySearch,
    binarySearchBySymbol,
    binarySearchLineBySymbol,
} from '@lib/binarySearch'
import { container } from '@usage/appContainer'

const logger = container.resolve<'logger'>('logger')

const appBinarySearch = new BinarySearch(binarySearch)
const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const target = 9
const hasValue = appBinarySearch.search(data, target)

appBinarySearch.setStrategy(binarySearchBySymbol)
const dataSymbol = ['A', 'B', 'C']
const targetSymbol = 'B'
const hasValueSymbol = appBinarySearch.search(dataSymbol, targetSymbol)

appBinarySearch.setStrategy(binarySearchLineBySymbol)
const dataLineSymbol = ['D', 'E', 'F']
const targetLineSymbol = 'E'
const hasValueLineSymbol = appBinarySearch.search(
    dataLineSymbol,
    targetLineSymbol,
)

logger.log('Binary search is has value:', hasValue)

logger.log('Binary search is has value by symbol:', hasValueSymbol)

logger.log('Binary search line is has value by symbol:', hasValueLineSymbol)
