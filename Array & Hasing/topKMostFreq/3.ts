const topKFrequent3 = (nums: number[], k: number): number[] => {
  // Nums frequency hash map
  // Key: number from nums, Value: frequency of that number in nums
  const numsFreqHash = new Map<number, number>();

  nums.forEach((num) => {
    numsFreqHash.set(num, (numsFreqHash.get(num) || 0) + 1);
  });

  // Frequency array
  // Key: frequency, Value: array of numbers that have that frequency
  const freqArr: Map<number, number[]> = new Map();

  for (const [num, freq] of numsFreqHash.entries()) {
    if (!freqArr.has(freq)) freqArr.set(freq, []);
    freqArr.get(freq)!.push(num);
  }

  const topKFrequentElements: number[] = [];

  // Iterate over the frequency array from the highest frequency to the lowest
  // and add the numbers to the result array until we have k elements
  for (
    let freq = nums.length;
    freq > 0 && topKFrequentElements.length < k;
    freq--
  ) {
    const elements = freqArr.get(freq);
    if (elements) {
      topKFrequentElements.push(
        ...elements.slice(0, k - topKFrequentElements.length),
      );
    }
  }

  return topKFrequentElements;
};

console.log(topKFrequent3([3, 1, 3, 2, 1, 2, 1, 2, 1, 2], 2));
console.log(topKFrequent3([2, 2, 1, 1, 1, 3], 2));
console.log(topKFrequent3([1], 0));
console.log(topKFrequent3([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));

const topKElementReWrite = (nums: number[], k: number): number[] => {
  // key: number, value: freq of that number in nums
  const freqHashMap = new Map<number, number>();

  nums.forEach((num) => {
    freqHashMap.set(num, (freqHashMap.get(num) || 0) + 1);
  });

  // key: freq, value: array of numbers that have that frequency
  const freqToNumsHashMap = new Map<number, number[]>();

  for (const [num, freq] of freqHashMap.entries()) {
    if (!freqToNumsHashMap.has(freq)) {
      freqToNumsHashMap.set(freq, []);
    }
    freqToNumsHashMap.get(freq)!.push(num);
  }

  const topKFrequentNumbers = [];
};
