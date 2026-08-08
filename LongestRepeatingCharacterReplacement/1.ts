// HAS BUGS

function characterReplacement1(s: string, k: number): number {
    let left = 0, right = 0, maxFreq = 0, dominantChar = '', longestSubstring = 0
    const freqMap = new Map<string, number>()

    while (left <= right && right < s.length) {
        do {
            const currFreq = (freqMap.get(s[right]) || 0) + 1
            if (currFreq > maxFreq) {
                maxFreq = currFreq
                dominantChar = s[right]
            }
            freqMap.set(s[right], currFreq)
            right++
        } while ((right < s.length && ((right - left) - maxFreq < k)))
        if (right - left > longestSubstring) {
            longestSubstring = right - left
        }
        const freqOfLeft = freqMap.get(s[left]) || 0
        if (freqOfLeft) {
            freqMap.set(s[left], freqOfLeft - 1)
        }
        left++
        if (freqOfLeft >= maxFreq) {
            maxFreq = 0
            for (const [char, count] of freqMap.entries()) {
                if (count > maxFreq) {
                    maxFreq = count
                    dominantChar = char
                }
            }
        }
    }

    return longestSubstring
};

console.log("AABBB", characterReplacement1('AABBB', 1))
console.log("AAAAABBBBCBB", characterReplacement1('AAAAABBBBCBB', 3))
console.log("AABBA", characterReplacement1('AABBA', 1))
console.log("AAAA", characterReplacement1('AAAA', 0))
console.log("AABCCDAAC", characterReplacement1('AABCCDAAC', 3))
console.log("XYYX", characterReplacement1('XYYX', 2))
console.log("ABAB", characterReplacement1('ABAB', 2))
console.log("AAABABB", characterReplacement1('AAABABB', 1))