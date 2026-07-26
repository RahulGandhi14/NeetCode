// Space = O(n)

function trap1(height: number[]): number {
    const leftMax = Array.from({ length: height.length }, () => 0)
    const rightMax = Array.from({ length: height.length }, () => 0)

    let left = 0, right = height.length - 1, lMax = 0, rMax = 0

    while (left < height.length && right >= 0) {
        leftMax[left] = lMax
        rightMax[right] = rMax
        if (height[left] > lMax) {
            lMax = height[left]
        }
        if (height[right] > rMax) {
            rMax = height[right]
        }


        left++
        right--
    }

    let totalTrap = 0
    height.forEach((item, idx) => {
        const currentTrap = Math.min(leftMax[idx], rightMax[idx]) - item
        if (currentTrap > 0) {
            totalTrap += currentTrap
        }
    })



    return totalTrap
}

console.log("🚀 ~ trappingWaterSol:", trap1([4, 2, 1, 3, 2, 1]))
console.log("🚀 ~ trappingWaterSol:", trap1([4, 2, 3]))
console.log("🚀 ~ trappingWaterSol:", trap1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log("🚀 ~ trappingWaterSol:", trap1([4, 2, 0, 3, 2, 5]))
console.log("🚀 ~ trappingWaterSol:", trap1([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]))
