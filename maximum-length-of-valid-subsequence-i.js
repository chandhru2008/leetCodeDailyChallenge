/**
 * LeetCode 3201 – Find the Maximum Length of Valid Subsequence I
 * 
 * 🔍 Problem:
 * Given an array of integers `nums`, find the length of the longest valid subsequence 
 * such that the parity (odd/even) of the sum of every pair of adjacent elements is the same.
 *
 * ✅ Valid subsequences:
 * - All even numbers → sums are even
 * - All odd numbers → sums are even
 * - Alternating even-odd or odd-even → sums are always odd
 *
 * 🎯 Goal: Return the max length of any of the 3 valid subsequence types above.
 *
 * 🧠 Approach:
 * 1. Count all even numbers → valid even-only subsequence.
 * 2. Count all odd numbers → valid odd-only subsequence.
 * 3. Try forming an alternating parity subsequence starting from nums[0].
 *    - Flip expected parity after each match.
 * 4. Return the maximum of the three counts.
 */

var maximumLength = function (nums) {
    let evenCount = 0;     // Count of all even numbers
    let oddCount = 0;      // Count of all odd numbers
    let bothCount = 0;     // Count of max alternating pattern (e.g., even-odd-even or odd-even-odd)
    let parity = nums[0] % 2; // Start with the parity of the first element

    for (let num of nums) {
        // Track how many evens and odds are in the array
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }

        // Build alternating subsequence
        if (parity === num % 2) {
            bothCount++;               // Valid alternation found
            parity = parity === 0 ? 1 : 0; // Flip expected parity: 0 <-> 1
        }
    }

    // Return the maximum length among all valid subsequences
    return Math.max(evenCount, oddCount, bothCount);
};
