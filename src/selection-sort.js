export const selectionSort = (input) => {
  let output = input.slice();
  const length = output.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (output[j] < output[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = output[i];
      output[i] = output[minIndex];
      output[minIndex] = temp;
    }
  }
  return output;
};
