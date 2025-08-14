/**
 * LeetCode 2264 – Largest 3-Same-Digit Number in String
 * 
 * 🔍 Problem:
 * Given a string `num` consisting only of digits (0–9), find the largest 
 * 3-digit substring where all three digits are the same.
 *
 * ✅ Example:
 * - Input:  "6777133339"
 * - Good integers: "777", "333"
 * - Output: "777"  (largest)
 *
 * 🎯 Goal:
 * Return the largest good integer as a string, or "" if no good integer exists.
 *
 * 🧠 Approach:
 * 1. Scan from index 2 onwards (so we can compare the current digit 
 *    with the previous two digits).
 * 2. Whenever three consecutive equal digits are found, store the digit in an array.
 * 3. If no such digit is found, return "".
 * 4. Otherwise, find the largest digit and repeat it 3 times to form the answer.
 *
 * @param {string} num - String of digits to search in.
 * @return {string} - Largest good integer or "" if none exists.
 */
var largestGoodInteger = function (num) {
    let matchingDigits = []; // Stores digits that form "good integers"
    let result = "";         // Final output string

    for (let i = 2; i < num.length; i++) {
        if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
            matchingDigits.push(Number(num[i]));
        }
    }

    if (matchingDigits.length === 0) {
        return result; // No good integer found
    } else {
        let maxDigit = Math.max(...matchingDigits);
        return result + maxDigit + maxDigit + maxDigit;
    }
};
