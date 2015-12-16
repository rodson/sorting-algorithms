const merge = (left, right) => {
  let output = [];
  const ll = left.length;
  const rl = right.length;
  let l = 0;
  let r = 0;

  while(l < ll && r < rl) {
    if (left[l] < right[r]) {
      output.push(left[l++]);
    } else {
      output.push(right[r++]);
    }
  }

  return output.concat(left.slice(l)).concat(right.slice(r));
};

export const mergeSort = (input) => {
  const length = input.length;
  if (length < 2) {
    return input;
  }
  const mid = Math.floor(length / 2);
  let left = input.slice(0, mid);
  let right = input.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};