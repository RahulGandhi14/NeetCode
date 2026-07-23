class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea: number = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const area = Math.abs(i - j) * Math.min(heights[i], heights[j])
                if (area > maxArea) {
                    maxArea = area
                }
            }
        }

        return maxArea
    }
}

const sol = new Solution()

console.log("-->", sol.maxArea([1, 7, 2, 5, 4, 7, 3, 6]))
console.log("-->", sol.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log("-->", sol.maxArea([2, 2, 2]))
