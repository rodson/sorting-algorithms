export const insertionSort = (input) => {
  var output = input.slice();
  var length = output.length;
  for(let i = 1; i < length; i++) {
    let curVal = output[i];
    for (let j = i - 1; j >= 0; j--) {
      if (curVal >= output[j]) {
        output[j + 1] = curVal;
        break;
      } else {
        output[j + 1] = output[j];
        if (j === 0) {
          output[j] = curVal;
        }
      }
    }
  }
  return output;
};
