const getFrequencyMap = (str: string) => {
  const map = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }

  return map;
};

const areThese2StringsAnagram = (
  str1: string,
  str2: string,
  mapper: Map<string, Map<string, number>>,
) => {
  if (str1.length !== str2.length) return false;

  const str1Mapper = mapper.get(str1);
  const str2Mapper = mapper.get(str2);

  if (!str1Mapper || !str2Mapper) {
    return false;
  }

  for (const [key, value] of str1Mapper) {
    if (str2Mapper.get(key) !== value) {
      return false;
    }
  }

  return true;
};

function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) {
    return [[strs[0]]];
  }

  let strings = [...strs];
  const groups: string[][] = [];
  const strFrequencyMap = new Map<string, Map<string, number>>();
  strs.forEach((str) => {
    strFrequencyMap.set(str, getFrequencyMap(str));
  });

  while (strings.length) {
    let subgroup: string[] = [];
    for (let i = 0; i < strings.length; i++) {
      if (subgroup.length === 0) {
        subgroup.push(strings[i]);

        continue;
      }

      if (areThese2StringsAnagram(subgroup[0], strings[i], strFrequencyMap)) {
        subgroup.push(strings[i]);
      }
    }

    strings = strings.filter((str) => !subgroup.includes(str));

    groups.push(subgroup);
  }

  return groups;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
