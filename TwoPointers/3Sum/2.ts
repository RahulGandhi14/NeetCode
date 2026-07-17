class Solution2 {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    binarySearch(nums: number[], target: number) {
        let start = 0,
            end = nums.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) return mid;
            else if (nums[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }

    threeSum(nums: number[]): number[][] {
        const triplets: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                const target = 0 - (nums[i] + nums[j]);
                const idx = this.binarySearch(nums.slice(j + 1), target);
                if (idx !== -1) triplets.push([nums[i], nums[j], nums[j + idx + 1]]);
            }
        }

        return triplets;
    }
}
