export const insertionSort = (input) => {
  var output = input.slice();
  var length = output.length;
  for(let i = 1; i < length; i++) {
    for (let j = i; j >= 0; j--) {
      if (output[j] < output[j - 1]) {
        [output[j - 1], output[j]] = [output[j], output[j - 1]];
      }
    }
  }
  return output;
};
