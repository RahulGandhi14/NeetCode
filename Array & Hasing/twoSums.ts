const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    const complimentIdx = map.get(compliment);
    if (complimentIdx !== undefined) {
      return [i, complimentIdx];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
