// TWO POINTERS

function maxProfit1(prices: number[]): number {
    let profit = 0, left = 0, right = left + 1

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            const currentProfit = prices[right] - prices[left]
            if (currentProfit > profit) {
                profit = currentProfit
            }
        } else {
            left = right
        }
        right++
    }



    return profit
};

console.log("-->", maxProfit1([7, 1, 5, 3, 6, 4]))
console.log("-->", maxProfit1([2, 1, 4]))
console.log("-->", maxProfit1([7, 6, 4, 3, 1]))
console.log("-->", maxProfit1([10, 1, 5, 6, 7, 1]))