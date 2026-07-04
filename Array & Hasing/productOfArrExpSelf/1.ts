const computePrefix = (arr: number[]) => {
  let initial = 1;
  const emptyArr = new Array<number>(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      emptyArr[i] = initial;
      continue;
    }
    initial *= arr[i - 1];
    emptyArr[i] = initial;
  }

  return emptyArr;
};

console.log("PREFIX:", computePrefix([2, 3, 4, 6])); // Output: [1, 2, 6, 24]
console.log("PREFIX:", computePrefix([1, 2, 3, 4])); // Output: [1, 1, 2, 6]
console.log("PREFIX:", computePrefix([2, 3, 4])); // Output: [1, 2, 6]
console.log("PREFIX:", computePrefix([5, 6])); // Output: [1, 5]
console.log("PREFIX:", computePrefix([10])); // Output: [1]
console.log("PREFIX:", computePrefix([])); // Output: []

const computeSuffix = (arr: number[]) => {
  let initial = 1;
  const emptyArr = new Array<number>(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    emptyArr[i] = initial;
    initial *= arr[i];
  }

  return emptyArr;
};

console.log("SUFFIX:", computeSuffix([2, 3, 4, 6]));
console.log("SUFFIX:", computeSuffix([1, 2, 3, 4]));
console.log("SUFFIX:", computeSuffix([2, 3, 4]));
console.log("SUFFIX:", computeSuffix([5, 6]));
console.log("SUFFIX:", computeSuffix([10]));
console.log("SUFFIX:", computeSuffix([]));

function productExceptSelf(nums: number[]): number[] {
  const prefix = computePrefix(nums);
  const suffix = computeSuffix(nums);

  return prefix.map((item, idx) => item * suffix[idx] + 0);
}

console.log("PRODUCT EXCEPT SELF:", productExceptSelf([-1, 1, 0, -3, 3]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([2, 3, 4, 6]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([1, 2, 3, 4]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([2, 3, 4]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([5, 6]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([10]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([]));
