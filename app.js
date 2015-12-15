import _ from 'lodash';
import { insertionSort } from './src/insertion-sort.js';
import { selectionSort } from './src/selection-sort.js';
import { bubbleSort } from './src/bubble-sort.js';
import { shellSort } from './src/shell-sort.js';

const input = [4, 2, 3, 6, 1, 8, 5, 7];
const output = [1, 2, 3, 4, 5, 6, 7, 8];

console.assert(_.isEqual(insertionSort(input), output));
console.assert(_.isEqual(selectionSort(input), output));
console.assert(_.isEqual(bubbleSort(input), output));
console.assert(_.isEqual(shellSort(input), output));

console.log('All tests passed!');

