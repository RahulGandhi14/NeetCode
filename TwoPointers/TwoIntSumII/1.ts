
function twoSum(numbers: number[], target: number): number[] {
    let front = 0
    let rear = numbers.length - 1

    while (front < rear) {
        if (numbers[front] + numbers[rear] === target) {
            return [front + 1, rear + 1]
        } else if (numbers[front] + numbers[rear] > target) {
            rear--
        } else {
            front++
        }
    }
    return []
}

console.log(twoSum([1, 2, 3, 4], 3))