BRUTE FORCE

The idea is to join all strings with a separator character like # and then decode by splitting on that character. Loop through each string, add a # between all strings, return the joined result, and to decode just split by #.

Why it fails: You cannot distinguish between an empty list and a list with an empty string because both become the same encoded result. If a string contains # inside it, the decoder gets confused and thinks the # is a separator when it is actually part of the string content.

OPTIMIZED

The idea is to store the length of each string BEFORE the string itself. When decoding, you read the length first to know exactly how many characters belong to that string.

For encoding: Create an empty array. Loop through each string and for each string, push length#string to the array like 5#Hello. Then use arr.join("") to concatenate all elements together in one operation. This is much faster than adding strings one by one in a loop because join does it all at once instead of creating a new string each time.

For decoding: Start at position 0. Use str.indexOf("#", i) to find where the # character is located. This is faster than manually scanning byte by byte looking for #. Extract the length number which are the characters before the #. Read exactly that many characters after the # and this is your string. Move to the next position and repeat until you reach the end.

Examples: Hello and World becomes 5#Hello5#World. If you have Hello#World as a single string it becomes 11#Hello#World because the length is 11 and includes the # inside. Two empty strings become 0#0# which represents two strings of length 0 each.

Why it works: By knowing the exact length, you read precisely that many characters with no guessing. An empty list stays empty so decode returns empty. A list with one empty string becomes 0# so decode reads length 0, takes 0 characters, and returns the empty string. Strings containing # work because you are counting characters by their exact count, not searching for separators.

Time complexity is O of n. Space complexity is O of n.
