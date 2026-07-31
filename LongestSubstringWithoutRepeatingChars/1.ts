function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return s.length
    const map = new Map<string, number>()
    let longest = 0, left = 0, right = left + 1
    map.set(s[left], left)

    while (left < right && right < s.length) {
        if (map.has(s[right])) {
            if (map.size > longest) {
                longest = map.size
            }
            left = (map.get(s[right]) || 0) + 1
            const duplicateElementIdx = (map.get(s[right]) || 0)
            for (const [key, value] of map.entries()) {
                if (value <= duplicateElementIdx) {
                    map.delete(key)
                }
            }
        }
        map.set(s[right], right)
        right++
    }

    if (map.size > longest) {
        longest = map.size
    }

    return longest
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