/**
 * LeetCode 1290: Convert Binary Number in a Linked List to Integer
 *
 * Problem Link: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 *
 * Description:
 * You are given the head of a singly linked list where each node contains a binary digit (0 or 1).
 * The linked list represents a binary number. Return its decimal equivalent.
 *
 * Approach:
 * - Initialize the result with the head value.
 * - Traverse through the linked list.
 * - At each step, shift the result left by 1 bit (multiply by 2).
 * - Then OR it with the next node's value to append the binary digit.
 * - Return the final result.
 *
 * Time Complexity: O(n) — where n is the number of nodes in the list.
 * Space Complexity: O(1) — only constant space used.
 */

var getDecimalValue = (head, result = head.val) => {
    while (head.next) {
        result = (result << 1) | head.next.val;
        head = head.next;
    }
    return result;
};

// Example:
// Input: 1 -> 0 -> 1
// Output: 5
