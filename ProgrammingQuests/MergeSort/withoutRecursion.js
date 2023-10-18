function sort(arr) {
  const subarrs = [];

  for (let i = 0; i < arr.length; i++) {
    subarrs.push([arr[i]]);
  }

  while (subarrs.length > 1) {
    const left = subarrs.pop();
    const right = subarrs.pop();

    const merged = merge(left, right);
    subarrs.push(merged);
  }

  return subarrs[0];
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
const arr = [3, 8, 9, 0, 2, 1, 6];
console.log(sort(arr));