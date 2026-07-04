// Time Complexity: O(n*log(n))

function topKFrequent(nums: number[], k: number): number[] {
  const hash = new Map<number, number>();

  for (const num of nums) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }

  const entries = [...hash.entries()].sort(([_, a], [__, b]) => b - a);

  const mostFreq: number[] = [];

  for (let i = 0; i < k && i < entries.length; i++) {
    mostFreq.push(entries[i][0]);
  }

  return mostFreq;
}

console.log(topKFrequent([2, 2, 1, 1, 1, 3], 2));
console.log(topKFrequent([1], 0));
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
