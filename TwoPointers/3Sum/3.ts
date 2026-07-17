
function twoSum1(numbers: number[], target: number): number[][] {
  let front = 0
  let rear = numbers.length - 1
  const pairs = []

  while (front < rear) {
    if (numbers[front] + numbers[rear] === target) {
      pairs.push([numbers[front], numbers[rear]])
      front++
      while (front > 0 && front < rear && numbers[front] === numbers[front - 1]) {
        front++
      }
    } else if (numbers[front] + numbers[rear] > target) {
      rear--
    } else {
      front++
    }
  }
  return pairs
}

function threeSum(nums: number[]): number[][] {
  const triplets: number[][] = []
  nums.sort((a, b) => a - b)


  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    const pair = twoSum1(nums.slice(i + 1, nums.length), (nums[i] * -1) + 0)
    pair.forEach(([j, k]) => triplets.push([nums[i], j, k]))
  }

  return triplets
}

console.log("-->", threeSum([-1, 0, 1, 2, -1, -4]))
console.log("-->", threeSum([0, 1, 1]))
console.log("-->", threeSum([0, 0, 0, 0]))