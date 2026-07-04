function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
    if (numSet.has(num - 1)) continue;

    let length = 1;
    let currentNum = num;
    while (numSet.has(currentNum + 1)) {
      length += 1;
      currentNum += 1;
    }

    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

console.log(
  "-->[100,4,200,1,3,2]:",
  longestConsecutive([100, 4, 200, 1, 3, 2]),
);
console.log(
  "-->[0,3,7,2,5,8,4,6,0,1]:",
  longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]),
);
console.log("-->[1,0,1,2]:", longestConsecutive([1, 0, 1, 2]));
