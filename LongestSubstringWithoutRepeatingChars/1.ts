function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>();
    let longest = 0,
        left = 0,
        right = 0

    while (right < s.length) {
        if (map.has(s[right])) {
            if (map.size > longest) {
                longest = map.size;
            }
            left = (map.get(s[right]) || 0) + 1;
            const duplicateElementIdx = map.get(s[right]) || 0;
            for (const [key, value] of map.entries()) {
                if (value <= duplicateElementIdx) {
                    map.delete(key);
                }
            }
        }
        map.set(s[right], right);
        right++;
    }

    if (map.size > longest) {
        longest = map.size;
    }

    return longest;
};


console.log("", lengthOfLongestSubstring(""))
console.log("!S``PW", lengthOfLongestSubstring("!S``PW"))
console.log("x", lengthOfLongestSubstring("x"))
console.log("xx", lengthOfLongestSubstring("xx"))
console.log("xy", lengthOfLongestSubstring("xy"))
console.log("zxyzxyz", lengthOfLongestSubstring("zxyzxyz"))
console.log("zxyzixyz", lengthOfLongestSubstring("zxyzixyz"))
console.log("zxyzixyzij", lengthOfLongestSubstring("zxyzixyzij"))
console.log("xxxx", lengthOfLongestSubstring("xxxx"))
console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb"))
console.log("pwwkew", lengthOfLongestSubstring("pwwkew"))