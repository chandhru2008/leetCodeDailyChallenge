/**
 * LeetCode 231: Power of Two
 *
 * Problem Link: https://leetcode.com/problems/power-of-two/
 *
 * Description:
 * Given an integer n, determine if it is a power of two.
 * A number is a power of two if it can be written as 2^x where x is a non-negative integer.
 *
 * Approach:
 * 1. A power of two in binary has exactly one bit set to 1.
 *    Examples:
 *       1  -> 0001
 *       2  -> 0010
 *       4  -> 0100
 *       8  -> 1000
 * 2. If we subtract 1 from such a number, all bits after the single 1 become 1,
 *    and the original 1 becomes 0:
 *       8 (1000) - 1 = 7 (0111)
 * 3. The bitwise AND of n and (n - 1) will be 0 only for powers of two.
 * 4. We also ensure n > 0 because negative numbers and zero are not powers of two.
 *
 * Time Complexity: O(1)  (Bitwise operation)
 * Space Complexity: O(1) (No extra space used)
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};

// Example test cases
console.log(isPowerOfTwo(1));  // true  -> 2^0
console.log(isPowerOfTwo(16)); // true  -> 2^4
console.log(isPowerOfTwo(3));  // false -> not a power of two
