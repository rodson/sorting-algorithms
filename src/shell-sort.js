export const shellSort = (arr) => {
  const length = arr.length;
  let step = 1;

  while (step < Math.floor(length / 3)) {
    step = step * 3 + 1;
  }

  while (step >= 1) {
    for (let i = 1; i < length; i++) {
      for (let j = i; j >= step; j = j - step) {
        if (arr[j] < arr[j - step]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        } else {
          break;
        }
      }
    }

    step = Math.floor(step / 3);
  }

  return arr;
};