/*
 * We can use two pointers to calculate leftMax and rightMax for each position x on the fly.
 * How? We use 2 pointers, one from left and another from right. initially leftMax and rightMax
 * would be initialized with 0. then we increment the leftPointer whenever leftMax<=rightMax.
 * and we decrease the rightPointer whenever rightMax < leftMax. WHY? we want to know maximum
 * water can be hold by a position x. that's determined by Min(leftMax, rightMax). we calculate
 * the water units from both end. left pointer calculates left side and right one calculates
 * right side. The logic behind is, when we're moving left and right pointers, we're also
 * updating leftMax and rightMax. and height of water is determined by min of either of two.
 * that's why we move that pointer. one more thing - when leftMax<=rightMax, even if rightMax
 * is not the actual global max from the right side, it doesn't matter. because leftMax is
 * already the minimum. so water at left position is safely leftMax - height[left]. same logic
 * applies to right side.
 */
function trap3(height: number[]): number {
    let totalTrap = 0, lMax = 0, rMax = 0, left = 0, right = height.length - 1

    while (left <= right) {
        if (lMax <= rMax) {
            const currentTrap = lMax - height[left]
            if (currentTrap > 0) {
                totalTrap += currentTrap
            }
            if (height[left] > lMax) {
                lMax = height[left]
            }
            left++
            continue
        }

        const currentTrap = rMax - height[right]
        if (currentTrap > 0) {
            totalTrap += currentTrap
        }
        if (height[right] > rMax) {
            rMax = height[right]
        }
        right--
    }


    return totalTrap
}
console.log("🚀 ~ trappingWaterSol:", trap3([4, 2, 1, 3, 2, 1]))
console.log("🚀 ~ trappingWaterSol:", trap3([4, 2, 3]))
console.log("🚀 ~ trappingWaterSol:", trap3([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log("🚀 ~ trappingWaterSol:", trap3([4, 2, 0, 3, 2, 5]))
console.log("🚀 ~ trappingWaterSol:", trap3([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]))