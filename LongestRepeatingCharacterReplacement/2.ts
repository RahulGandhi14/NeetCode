/**
 * Approach:
 *
 * We use two pointers, both initialized at 0, and `mostFreq` also to 0 along with
 * a map to keep track of each character and its frequency in the current window.
 * We start iterating the string — we always MOVE the right pointer forward. At each
 * step, we calculate the freq of the char at position `right`, update it in the map,
 * and replace `mostFreq` if it's greater.
 *
 * Now the key insight — the window size is `right - left`, and `mostFreq` tells us
 * the count of the most repeated char in that window. So the number of chars we'd
 * need to REPLACE to make the whole window one character is `windowSize - mostFreq`.
 * If that value is `<= k`, we're good — we can replace those chars. If it's `> k`,
 * that means we've exceeded our allowed replacements, so the window is too big.
 * To fix it, we reduce the freq of the char at `left` from the map and INCREMENT
 * `left` by one (shrink window from the left side).
 *
 * One important thing — we never actually SHRINK the window below its max size.
 * `right` always increments, and `left` only increments when the window is invalid.
 * So the window either GROWS or SLIDES forward, never gets smaller. That's why at
 * the end, `right - left` gives us the longest valid substring.
 * It's a sliding window that only expands or moves, never contracts.
 */
const characterReplacement = (s: string, k: number): number => {
    let left = 0, right = 0, mostFreq = 0
    const map = new Map<string, number>()

    while (left <= right && right < s.length) {
        const currentCharFreq = (map.get(s[right]) || 0) + 1
        map.set(s[right], currentCharFreq)
        right++

        if (currentCharFreq > mostFreq) {
            mostFreq = currentCharFreq
        }

        if ((right - left) - mostFreq > k) {
            map.set(s[left], (map.get(s[left]) || 1) - 1)
            left++

        }
    }

    return right - left
}

const characterReplacementUsingForLoop = (s: string, k: number): number => {
    let left = 0, mostFreq = 0
    const map = new Map<string, number>()

    for (let right = 0; right < s.length; right++) {
        const freq = (map.get(s[right]) || 0) + 1
        map.set(s[right], freq)
        mostFreq = Math.max(mostFreq, freq)

        // window invalid → slide (never shrink)
        if ((right - left + 1) - mostFreq > k) {
            map.set(s[left], (map.get(s[left]) || 1) - 1)
            left++
        }
    }

    return s.length - left

}

console.log("AAAABBBCBB", characterReplacement('AAAABBBCBB', 1), characterReplacementUsingForLoop('AAAABBBCBB', 1))
console.log("AB", characterReplacement('AB', 1), characterReplacementUsingForLoop('AB', 1))
console.log("A", characterReplacement('A', 0), characterReplacementUsingForLoop('A', 0))
console.log("AABBB", characterReplacement('AABBB', 1), characterReplacementUsingForLoop('AABBB', 1))
console.log("AAAAABBBBCBB", characterReplacement('AAAAABBBBCBB', 3), characterReplacementUsingForLoop('AAAAABBBBCBB', 3))
console.log("AABBA", characterReplacement('AABBA', 1), characterReplacementUsingForLoop('AABBA', 1))
console.log("AABCCDAAC", characterReplacement('AABCCDAAC', 3), characterReplacementUsingForLoop('AABCCDAAC', 3))
console.log("XYYX", characterReplacement('XYYX', 2), characterReplacementUsingForLoop('XYYX', 2))
console.log("ABAB", characterReplacement('ABAB', 2), characterReplacementUsingForLoop('ABAB', 2))
console.log("AAABABB", characterReplacement('AAABABB', 1), characterReplacementUsingForLoop('AAABABB', 1))