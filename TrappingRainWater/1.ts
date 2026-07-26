// ERROR
function trap(height: number[]): number {
    let left = 0
    let right = left + 1
    let totalTrap = 0

    while (left < right && right < height.length) {
        let currentTrap = 0
        while (height[left] > height[right]) {
            currentTrap += height[left] - height[right]
            right++
        }
        if (right >= height.length) {
            left += 1
            right = left + 1
        } else {
            totalTrap += currentTrap
            left = right
            right++
        }
    }

    return totalTrap
}

console.log("🚀 ~ trappingWaterSol:", trap([4, 2, 1, 3, 2, 1]))
console.log("🚀 ~ trappingWaterSol:", trap([4, 2, 3]))
console.log("🚀 ~ trappingWaterSol:", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log("🚀 ~ trappingWaterSol:", trap([4, 2, 0, 3, 2, 5]))
console.log("🚀 ~ trappingWaterSol:", trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]))
