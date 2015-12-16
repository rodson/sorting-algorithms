export const bubbleSort = (input) => {
  let output = input.slice();
  const length = output.length;

  for (let i = length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 1; j <= i; j++) {
      if (output[j - 1] > output[j]) {
        swapped = true;
        [output[j - 1], output[j]] = [output[j], output[j - 1]];
      }
    }

    if (!swapped) {
      break;
    }
  }

  return output;
};