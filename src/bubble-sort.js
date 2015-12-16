export const bubbleSort = (arr) => {
  const length = arr.length;

  for (let i = length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        swapped = true;
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
};