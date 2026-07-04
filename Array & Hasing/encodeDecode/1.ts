class Solution {
  encode(strs: string[]): string {
    // return [`len:${strs.length}`, ...strs].join("á");
    const parts: string[] = [];
    strs.forEach((str) => {
      parts.push(`${str.length}#${str}`);
    });
    return parts.join("");
  }

  decode(str: string): string[] {
    let res: string[] = [];
    let i = 0;

    while (i < str.length) {
      const delim = str.indexOf("#", i);
      if (delim === -1) break;
      const len = parseInt(str.substring(i, delim));
      res.push(str.substring(delim + 1, delim + len + 1));
      i = delim + len + 1;
    }

    return res;
  }
}

// ============================================
// COMPREHENSIVE TEST CASES
// ============================================

const testCases = [
  // Test Case 1: Empty list
  {
    input: [],
    expected: [],
    description: "Empty list",
  },

  // Test Case 2: Single empty string
  {
    input: [""],
    expected: [""],
    description: "Single empty string",
  },

  // Test Case 3: Multiple empty strings
  {
    input: ["", "", ""],
    expected: ["", "", ""],
    description: "Multiple empty strings",
  },

  // Test Case 4: Single simple string
  {
    input: ["Hello"],
    expected: ["Hello"],
    description: "Single simple string",
  },

  // Test Case 5: Multiple simple strings (basic example)
  {
    input: ["Hello", "World"],
    expected: ["Hello", "World"],
    description: "Multiple simple strings (Example 1)",
  },

  // Test Case 6: Strings with spaces
  {
    input: ["Hello World", "foo bar"],
    expected: ["Hello World", "foo bar"],
    description: "Strings with spaces",
  },

  // Test Case 7: Strings with multiple consecutive spaces
  {
    input: ["  ", "   ", "    "],
    expected: ["  ", "   ", "    "],
    description: "Strings with only spaces",
  },

  // Test Case 8: Strings with tabs and newlines
  {
    input: ["hello\tworld", "line1\nline2"],
    expected: ["hello\tworld", "line1\nline2"],
    description: "Strings with tabs and newlines",
  },

  // Test Case 9: Strings with carriage return
  {
    input: ["hello\rworld", "text\r\nmore"],
    expected: ["hello\rworld", "text\r\nmore"],
    description: "Strings with carriage returns",
  },

  // Test Case 10: Strings with special characters
  {
    input: ["!@#$%", "^&*()", "~`"],
    expected: ["!@#$%", "^&*()", "~`"],
    description: "Strings with special characters",
  },

  // Test Case 11: Strings with quotes and backslashes
  {
    input: ['"quoted"', "'single'", "back\\slash"],
    expected: ['"quoted"', "'single'", "back\\slash"],
    description: "Strings with quotes and backslashes",
  },

  // Test Case 12: Strings with numbers
  {
    input: ["123", "456", "789"],
    expected: ["123", "456", "789"],
    description: "Numeric strings",
  },

  // Test Case 13: Mixed alphanumeric and special
  {
    input: ["Hello123", "world@456", "test#789!"],
    expected: ["Hello123", "world@456", "test#789!"],
    description: "Mixed alphanumeric and special characters",
  },

  // Test Case 14: Single character strings
  {
    input: ["a", "b", "c"],
    expected: ["a", "b", "c"],
    description: "Single character strings",
  },

  // Test Case 15: Duplicate strings
  {
    input: ["Hello", "Hello", "Hello"],
    expected: ["Hello", "Hello", "Hello"],
    description: "Duplicate strings",
  },

  // Test Case 16: Very long string (up to 200 chars - near limit)
  {
    input: ["a".repeat(199)],
    expected: ["a".repeat(199)],
    description: "Very long string (199 characters)",
  },

  // Test Case 17: Multiple long strings
  {
    input: ["a".repeat(150), "b".repeat(150), "c".repeat(100)],
    expected: ["a".repeat(150), "b".repeat(150), "c".repeat(100)],
    description: "Multiple long strings",
  },

  // Test Case 18: Strings with null character
  {
    input: ["hello\0world", "test\0null"],
    expected: ["hello\0world", "test\0null"],
    description: "Strings with null characters",
  },

  // Test Case 19: All printable ASCII characters
  {
    input: ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],
    expected: [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    ],
    description: "All alphanumeric characters",
  },

  // Test Case 20: Unicode and extended ASCII (0-255)
  {
    input: ["\x00\x01\x02\x03", "\xfc\xfd\xfe\xff"],
    expected: ["\x00\x01\x02\x03", "\xfc\xfd\xfe\xff"],
    description: "Extended ASCII characters",
  },

  // Test Case 21: Strings containing digits (number-like content)
  {
    input: ["999", "1", "0"],
    expected: ["999", "1", "0"],
    description: "Numeric strings",
  },

  // Test Case 22: Strings with only whitespace variations
  {
    input: [" ", "\t", "\n", "\r", "  \t  \n  "],
    expected: [" ", "\t", "\n", "\r", "  \t  \n  "],
    description: "Various whitespace characters",
  },

  // Test Case 23: Strings with punctuation
  {
    input: [".", ",", ";", ":", "?", "!", "-", "/"],
    expected: [".", ",", ";", ":", "?", "!", "-", "/"],
    description: "Punctuation characters",
  },

  // Test Case 24: Strings with mathematical symbols
  {
    input: ["+", "-", "*", "/", "=", "<", ">"],
    expected: ["+", "-", "*", "/", "=", "<", ">"],
    description: "Mathematical symbols",
  },

  // Test Case 25: Mixed empty and non-empty strings
  {
    input: ["", "Hello", "", "World", ""],
    expected: ["", "Hello", "", "World", ""],
    description: "Alternating empty and non-empty strings",
  },

  // Test Case 26: Long list with multiple strings (approaching 100 count limit)
  {
    input: Array.from({ length: 50 }, (_, i) => `String${i}`),
    expected: Array.from({ length: 50 }, (_, i) => `String${i}`),
    description: "List with 50 strings",
  },

  // Test Case 27: Strings with repeated patterns
  {
    input: ["ababab", "123123", "xyzxyz"],
    expected: ["ababab", "123123", "xyzxyz"],
    description: "Strings with repeated patterns",
  },

  // Test Case 28: Complex multiline string
  {
    input: ["we", "say", ":", "yes", "!@#$%^&*()"],
    expected: ["we", "say", ":", "yes", "!@#$%^&*()"],
    description: "Multiline string",
  },

  // Test Case 29: String with mixed case
  {
    input: ["HeLLo", "WoRLd", "TeSt"],
    expected: ["HeLLo", "WoRLd", "TeSt"],
    description: "Mixed case strings",
  },

  // Test Case 30: Strings resembling encoded format (potential edge case)
  {
    input: ["5#Hello", "3#abc", "0#"],
    expected: ["5#Hello", "3#abc", "0#"],
    description: "Strings that look like encoded format",
  },
  { input: [""], expected: [""], description: "TESTING" },
];

// ============================================
// TEST RUNNER
// ============================================

function runTests(): void {
  const solution = new Solution();
  let passedTests = 0;
  let failedTests = 0;

  console.log("Running Test Suite for Encode/Decode...\n");
  console.log("=".repeat(60));

  testCases.forEach((testCase, index) => {
    try {
      const encoded = solution.encode(testCase.input);
      const decoded = solution.decode(encoded);

      // Compare decoded output with expected output
      const isEqual =
        JSON.stringify(decoded) === JSON.stringify(testCase.expected);

      if (isEqual) {
        console.log(`✓ Test ${index + 1} PASSED: ${testCase.description}`);
        passedTests++;
      } else {
        console.log(`✗ Test ${index + 1} FAILED: ${testCase.description}`);
        console.log(`  Input:    ${JSON.stringify(testCase.input)}`);
        console.log(`  Expected: ${JSON.stringify(testCase.expected)}`);
        console.log(`  Got:      ${JSON.stringify(decoded)}`);
        failedTests++;
      }
    } catch (error) {
      console.log(`✗ Test ${index + 1} ERROR: ${testCase.description}`);
      console.log(`  Error: ${error}`);
      failedTests++;
    }
  });

  console.log("=".repeat(60));
  console.log(
    `\nTest Results: ${passedTests} passed, ${failedTests} failed out of ${testCases.length} tests`,
  );
}

// runTests();

const solution = new Solution();
const encoded = solution.encode(testCases[27].input);
console.log("🚀 ~ encoded:", encoded);
const decoded = solution.decode(encoded);
console.log("🚀 ~ decoded:", decoded);
console.log("🚀 ~ decoded:", testCases[27].input);
