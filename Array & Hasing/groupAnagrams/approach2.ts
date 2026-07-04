const groupAnagrams2 = (strs: string[]): string[][] => {
  const freqMapper = new Map<string, string>();
  strs.forEach((str) => {
    freqMapper.set(str, str.split("").sort().join(""));
  });

  const areTwoStringsAnagram = (str1: string, str2: string): boolean => {
    if (
      str1.length != str2.length ||
      freqMapper.get(str1) != freqMapper.get(str2)
    )
      return false;

    return true;
  };

  const groups: string[][] = [];
  let strings = [...strs];
  while (strings.length) {
    const subgroup: string[] = [];

    for (let i = 0; i < strings.length; i++) {
      if (subgroup.length === 0) {
        subgroup.push(strings[i]);
        continue;
      }

      if (areTwoStringsAnagram(subgroup[0], strings[i])) {
        subgroup.push(strings[i]);
      }
    }

    strings = strings.filter((str) => !subgroup.includes(str));
    groups.push(subgroup);
  }

  return groups;
};

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
