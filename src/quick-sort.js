const partition = (input, pivot, left, right) => {
  [input[pivot], input[right]] = [input[right], input[pivot]];
  let storeIndex = left;

  for (let i = left; i < right; i++) {
    if (input[i] < input[right]) {
      [input[i], input[storeIndex]] = [input[storeIndex], input[i]];
      storeIndex++;
    }
  }

  [input[storeIndex], input[right]] = [input[right], input[storeIndex]];
  return storeIndex;
};

export const quickSort = (input, left, right) => {
  if (typeof left !== 'number') {
    left = 0;
  }

  if (typeof right !== 'number') {
    right = input.length - 1;
  }

  if (left < right) {
    let pivot = right;
    let newPivot = partition(input, pivot, left, right);

    quickSort(input, left, newPivot - 1);
    quickSort(input, newPivot + 1, right);
  }

  return input;
};