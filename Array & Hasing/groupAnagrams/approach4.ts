const groupAnagrams4 = (strs: string[]): string[][] => {
  const hash = new Map<string, string[]>();

  for (let str of strs) {
    let count = new Array(26).fill(0);

    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join("#");
    console.log("🚀 ~ groupAnagrams4 ~ key:", key, str);
    hash.set(key, [...(hash.get(key) || []), str]);
  }

  console.log(hash);
  return Array.from(hash.values());
};

console.log(groupAnagrams4(["bdddddddddd", "bbbbbbbbbbc"]));
