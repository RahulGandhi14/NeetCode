class Solution1 {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums: number[]): number[][] {
        const triplets: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                for (let k = j + 1; k < nums.length; k++) {
                    if (k > j + 1 && nums[k] === nums[k - 1]) continue;
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        triplets.push([nums[i], nums[j], nums[k]]);
                    }
                }
            }
        }

        return triplets;
    }
}
