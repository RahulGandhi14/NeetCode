function maxProfit(prices: number[]): number {
  let min = prices[0];
  let profit = 0;

  prices.forEach((price, idx) => {
    const currentProfit = price - min;
    if (currentProfit > profit) {
      profit = currentProfit;
    }
    if (price < min) {
      min = price;
    }
  });

  return profit;
};

// DYNAMIC PROGRAMMING - Same as approach1 
function maxProfit3(prices: number[]): number {
  let minBuy = prices[0]
  let maxPro = 0

  for (const currentPrice of prices) {
    maxPro = Math.max(maxPro, currentPrice - minBuy)
    minBuy = Math.min(minBuy, currentPrice)
  }

  return maxPro
}

console.log("-->", maxProfit([2, 1, 4]), maxProfit3([2, 1, 4]))
console.log("-->", maxProfit([7, 1, 5, 3, 6, 4]), maxProfit3([7, 1, 5, 3, 6, 4]))
console.log("-->", maxProfit([7, 6, 4, 3, 1]), maxProfit3([7, 6, 4, 3, 1]))
console.log("-->", maxProfit([10, 1, 5, 6, 7, 1]), maxProfit3([10, 1, 5, 6, 7, 1]))