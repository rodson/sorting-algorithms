export const bubbleSort = (input) => {
  let output = input.slice();
  const length = output.length;

  for (let i = length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 1; j <= i; j++) {
      if (output[j - 1] > output[j]) {
        swapped = true;
        let temp = output[j];
        output[j] = output[j - 1];
        output[j - 1] = temp;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return output;
};