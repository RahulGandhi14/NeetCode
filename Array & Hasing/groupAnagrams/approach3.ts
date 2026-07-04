// Complexity
// Time complexity: O(m∗nlogn)
// Space complexity: O(mn)

const groupAnagrams3 = (strs: string[]) => {
  const hash = new Map<string, string[]>();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!hash.has(sortedStr)) {
      hash.set(sortedStr, []);
    }
    hash.get(sortedStr)!.push(str);
  }

  return Array.from(hash.values());
};

console.log(groupAnagrams3(["", "", "1"]));
