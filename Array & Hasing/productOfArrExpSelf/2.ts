export const productExceptSelf = (nums: number[]) => {
  const result = new Array<number>(nums.length);

  // step1: Compute prefix-product
  let prefix: number = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // step2: Compute suffix-product on the fly and multiply with prefix-product
  let suffix: number = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

console.log("PRODUCT EXCEPT SELF:", productExceptSelf([-1, 1, 0, -3, 3]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([2, 3, 4, 6]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([1, 2, 3, 4]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([2, 3, 4]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([5, 6]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([10]));
console.log("PRODUCT EXCEPT SELF:", productExceptSelf([]));
