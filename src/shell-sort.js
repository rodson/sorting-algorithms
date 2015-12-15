export const shellSort = (input) => {
  let output = input.slice();
  const length = output.length;
  let step = 1;

  while (step < Math.floor(length / 3)) {
    step = step * 3 + 1;
  }

  while (step >= 1) {
    for (let i = 1; i < length; i++) {
      for (let j = i; j >= step; j = j - step) {
        if (output[j] < output[j - step]) {
          let temp = output[j];
          output[j] = output[j - step];
          output[j - step] = temp
        } else {
          break;
        }
      }
    }

    step = Math.floor(step / 3);
  }

  return output;
};