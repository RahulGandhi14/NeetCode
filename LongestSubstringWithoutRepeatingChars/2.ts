function lengthOfLongestSubstring2(s: string): number {
    if (s.length === 0) return s.length
    const map = new Map<string, number>()
    let longest = 0, left = 0, right = left + 1
    map.set(s[left], left)

    while (left < right && right < s.length) {
        if (map.has(s[right]) && (map.get(s[right]) || 0) >= left) {
            longest = Math.max(right - left, longest)
            left = (map.get(s[right]) || 0) + 1

        }
        map.set(s[right], right)
        right++
    }

    longest = Math.max(right - left, longest)

    return longest
};


console.log("", lengthOfLongestSubstring2(""))
console.log("a b c d", lengthOfLongestSubstring2("a b c d"))
console.log("!S``PW", lengthOfLongestSubstring2("!S``PW"))
console.log("x", lengthOfLongestSubstring2("x"))
console.log("xx", lengthOfLongestSubstring2("xx"))
console.log("xy", lengthOfLongestSubstring2("xy"))
console.log("zxyzxyz", lengthOfLongestSubstring2("zxyzxyz"))
console.log("zxyzixyz", lengthOfLongestSubstring2("zxyzixyz"))
console.log("zxyzixyzij", lengthOfLongestSubstring2("zxyzixyzij"))
console.log("xxxx", lengthOfLongestSubstring2("xxxx"))
console.log("abcabcbb", lengthOfLongestSubstring2("abcabcbb"))
console.log("pwwkew", lengthOfLongestSubstring2("pwwkew"))