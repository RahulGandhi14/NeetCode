class Solution2 {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea: number = 0;

        let left = 0
        let right = heights.length - 1

        while (left < right) {
            const area = Math.abs(left - right) * Math.min(heights[left], heights[right])
            if (area > maxArea) {
                maxArea = area
            }
            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return maxArea
    }
}

const sol2 = new Solution2()

console.log("-->", sol2.maxArea([1, 7, 2, 5, 4, 7, 3, 6]))
console.log("-->", sol2.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log("-->", sol2.maxArea([2, 2, 2]))
