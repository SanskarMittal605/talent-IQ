export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",

    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],

    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],

    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,

      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,

      java: `import java.util.*;

class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(const vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

// Test cases
void printVector(const vector<int>& v) {
    cout << "[";
    for (int i = 0; i < (int)v.size(); i++) {
        if (i > 0) cout << ", ";
        cout << v[i];
    }
    cout << "]";
}

int main() {
    printVector(twoSum(vector<int>{2, 7, 11, 15}, 9));
    cout << "\\n"; // Expected: [0, 1]

    printVector(twoSum(vector<int>{3, 2, 4}, 6));
    cout << "\\n"; // Expected: [1, 2]

    printVector(twoSum(vector<int>{3, 3}, 6));
    cout << "\\n"; // Expected: [0, 1]
}`,
    },

    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",

    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },

    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],

    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],

    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,

      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,

      java: `import java.util.*;

class Main {
    public static void reverseString(char[] s) {
        // Write your solution here
    }

    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]

        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}

// Test cases
void printVector(const vector<char>& v) {
    cout << "[";
    for (int i = 0; i < (int)v.size(); i++) {
        if (i > 0) cout << ", ";
        cout << v[i];
    }
    cout << "]";
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    printVector(test1);
    cout << "\\n"; // Expected: [o, l, l, e, h]

    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);
    printVector(test2);
    cout << "\\n"; // Expected: [h, a, n, n, a, H]
}`,
    },

    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cpp: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",

    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },

    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],

    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],

    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,

      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,

      java: `class Main {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return false;
}

// Test cases
int main() {
    cout << boolalpha;
    cout << isPalindrome("A man, a plan, a canal: Panama") << "\\n"; // Expected: true
    cout << isPalindrome("race a car") << "\\n"; // Expected: false
    cout << isPalindrome(" ") << "\\n"; // Expected: true
}`,
    },

    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",

    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },

    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],

    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],

    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,

      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,

      java: `class Main {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(const vector<int>& nums) {
    // Write your solution here
    return 0;
}

// Test cases
int main() {
    cout << maxSubArray(vector<int>{-2,1,-3,4,-1,2,1,-5,4}) << "\\n"; // Expected: 6
    cout << maxSubArray(vector<int>{1}) << "\\n"; // Expected: 1
    cout << maxSubArray(vector<int>{5,4,-1,7,8}) << "\\n"; // Expected: 23
}`,
    },

    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",

    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },

    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],

    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],

    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,

      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,

      java: `class Main {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxArea(const vector<int>& height) {
    // Write your solution here
    return 0;
}

// Test cases
int main() {
    cout << maxArea(vector<int>{1,8,6,2,5,4,8,3,7}) << "\\n"; // Expected: 49
    cout << maxArea(vector<int>{1,1}) << "\\n"; // Expected: 1
}`,
    },

    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",

    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if open brackets are closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
      ],
    },

    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],

    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only '()[]{}'",
    ],

    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,

      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,

      java: `class Main {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

// Test cases
int main() {
    cout << boolalpha;

    cout << isValid("()") << "\\n"; // Expected: true
    cout << isValid("()[]{}") << "\\n"; // Expected: true
    cout << isValid("(]") << "\\n"; // Expected: false
}`,
    },

    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",

    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i, j, and k are distinct and nums[i] + nums[j] + nums[k] == 0.",
      notes: [
        "Notice that the solution set must not contain duplicate triplets.",
        "The order of the output does not matter.",
      ],
    },

    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
      },
    ],

    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],

    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1]))); // Expected: []
console.log(JSON.stringify(threeSum([0,0,0]))); // Expected: [[0,0,0]]`,

      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1, -1, 2], [-1, 0, 1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0, 0, 0]]`,

      java: `import java.util.*;

class Main {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1, -1, 2], [-1, 0, 1]]
        System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
        System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0, 0, 0]]
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}

void printResult(const vector<vector<int>>& result) {
    cout << "[";
    for (int i = 0; i < (int)result.size(); i++) {
        if (i > 0) cout << ",";
        cout << "[";
        for (int j = 0; j < (int)result[i].size(); j++) {
            if (j > 0) cout << ", ";
            cout << result[i][j];
        }
        cout << "]";
    }
    cout << "]";
}

// Test cases
int main() {
    vector<int> nums1 = {-1,0,1,2,-1,-4};
    printResult(threeSum(nums1));
    cout << "\\n"; // Expected: [[-1, -1, 2], [-1, 0, 1]]

    vector<int> nums2 = {0,1,1};
    printResult(threeSum(nums2));
    cout << "\\n"; // Expected: []

    vector<int> nums3 = {0,0,0};
    printResult(threeSum(nums3));
    cout << "\\n"; // Expected: [[0, 0, 0]]
}`,
    },

    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      cpp: "[[-1, -1, 2],[-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Product",

    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },

    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],

    constraints: [
      "2 ≤ nums.length ≤ 10⁵",
      "-30 ≤ nums[i] ≤ 30",
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer",
    ],

    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,

      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,

      java: `import java.util.*;

class Main {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[nums.length];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> productExceptSelf(const vector<int>& nums) {
    // Write your solution here
    return {};
}

void printVector(const vector<int>& v) {
    cout << "[";
    for (int i = 0; i < (int)v.size(); i++) {
        if (i > 0) cout << ", ";
        cout << v[i];
    }
    cout << "]";
}

// Test cases
int main() {
    printVector(productExceptSelf(vector<int>{1,2,3,4}));
    cout << "\\n"; // Expected: [24, 12, 8, 6]

    printVector(productExceptSelf(vector<int>{-1,1,0,-3,3}));
    cout << "\\n"; // Expected: [0, 0, 9, 0, 0]
}`,
    },

    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      cpp: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers",

    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: ["Return the total amount of trapped water."],
    },

    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],

    constraints: [
      "n == height.length",
      "1 ≤ n ≤ 2 * 10⁴",
      "0 ≤ height[i] ≤ 10⁵",
    ],

    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,

      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9`,

      java: `class Main {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int trap(const vector<int>& height) {
    // Write your solution here
    return 0;
}

// Test cases
int main() {
    cout << trap(vector<int>{0,1,0,2,1,0,1,3,2,1,2,1}) << "\\n"; // Expected: 6
    cout << trap(vector<int>{4,2,0,3,2,5}) << "\\n"; // Expected: 9
}`,
    },

    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
      cpp: "6\n9",
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Heap",

    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
      notes: [
        "The linked lists are sorted in ascending order.",
        "Return the merged linked list in ascending order.",
      ],
    },

    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
      },
      {
        input: "lists = []",
        output: "[]",
      },
      {
        input: "lists = [[]]",
        output: "[]",
      },
    ],

    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ lists[i][j] ≤ 10⁴",
      "lists[i] is sorted in ascending order",
    ],

    starterCode: {
      javascript: `function mergeKLists(lists) {
  // Write your solution here
}

// Test cases
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]])); // Expected: [1,1,2,3,4,4,5,6]
console.log(mergeKLists([])); // Expected: []
console.log(mergeKLists([[]])); // Expected: []`,

      python: `def mergeKLists(lists):
    # Write your solution here
    pass

# Test cases
print(mergeKLists([[1,4,5],[1,3,4],[2,6]]))  # Expected: [1, 1, 2, 3, 4, 4, 5, 6]
print(mergeKLists([]))  # Expected: []
print(mergeKLists([[]]))  # Expected: []`,

      java: `import java.util.*;

class Main {
    public static List<Integer> mergeKLists(List<List<Integer>> lists) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        List<List<Integer>> test1 = Arrays.asList(
            Arrays.asList(1,4,5),
            Arrays.asList(1,3,4),
            Arrays.asList(2,6)
        );

        System.out.println(mergeKLists(test1)); // Expected: [1, 1, 2, 3, 4, 4, 5, 6]
        System.out.println(mergeKLists(new ArrayList<>())); // Expected: []
        System.out.println(mergeKLists(Arrays.asList(new ArrayList<>()))); // Expected: []
    }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> mergeKLists(const vector<vector<int>>& lists) {
    // Write your solution here
    return {};
}

void printVector(const vector<int>& v) {
    cout << "[";
    for (int i = 0; i < (int)v.size(); i++) {
        if (i > 0) cout << ", ";
        cout << v[i];
    }
    cout << "]";
}

// Test cases
int main() {
    vector<vector<int>> test1 = {
        {1,4,5},
        {1,3,4},
        {2,6}
    };

    printVector(mergeKLists(test1));
    cout << "\\n"; // Expected: [1, 1, 2, 3, 4, 4, 5, 6]

    vector<vector<int>> test2 = {};
    printVector(mergeKLists(test2));
    cout << "\\n"; // Expected: []

    vector<vector<int>> test3 = {{}};
    printVector(mergeKLists(test3));
    cout << "\\n"; // Expected: []
}`,
    },

    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]\n[]\n[]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
      java: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
      cpp: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },

  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },

  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },

  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};
