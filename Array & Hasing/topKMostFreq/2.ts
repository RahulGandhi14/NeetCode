const topKFrequent1 = (nums: number[], k: number) => {
  // const hash = new Map<number, number>();

  // nums.forEach((num) => {
  //   hash.set(num, (hash.get(num) || 0) + 1);
  // });

  // const freqArr = Array.from({ length: nums.length + 1 }, () => [] as number[]);

  // for (const [num, freq] of hash.entries()) {
  //   freqArr[freq].push(num);
  // }

  // const topKFrequentElements: number[] = [];

  // for (
  //   let i = freqArr.length - 1;
  //   i > -1 && topKFrequentElements.length < k;
  //   i--
  // ) {
  //   topKFrequentElements.push(
  //     ...freqArr[i].slice(0, k - topKFrequentElements.length),
  //   );
  // }

  // return topKFrequentElements;
  const hash = new Map<number, number>();

  nums.forEach((num) => {
    hash.set(num, (hash.get(num) || 0) + 1);
  });

  const freqArr = Array.from({ length: nums.length + 1 }, () => [] as number[]);

  for (const [num, freq] of hash.entries()) {
    freqArr[freq].push(num);
  }

  const topKFrequentElements: number[] = [];

  for (
    let i = freqArr.length - 1;
    i > -1 && topKFrequentElements.length < k;
    i--
  ) {
    const elements = freqArr[i];
    if (elements.length) {
      topKFrequentElements.push(
        ...elements.slice(0, k - topKFrequentElements.length),
      );
    }
  }

  return topKFrequentElements;
};

console.log(topKFrequent1([3, 1, 3, 2, 1, 2, 1, 2, 1, 2], 2));
console.log(topKFrequent1([2, 2, 1, 1, 1, 3], 2));
console.log(topKFrequent1([1], 0));
console.log(topKFrequent1([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
