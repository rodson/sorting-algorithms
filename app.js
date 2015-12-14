import _ from 'lodash';
import { insertionSort } from './src/insertion-sort.js';
import { selectionSort } from './src/selection-sort.js';

const input = [4, 2, 3, 6, 1, 8, 5, 7];
const ascOutput = [1, 2, 3, 4, 5, 6, 7, 8];
const descOutput = [8, 7, 6, 5, 4, 3, 2, 1];

console.assert(_.isEqual(insertionSort(input), ascOutput));
console.assert(_.isEqual(selectionSort(input), ascOutput));

