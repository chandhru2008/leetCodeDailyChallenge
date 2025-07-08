/**
 * LeetCode 1751: Maximum Number of Events That Can Be Attended II
 *
 * Problem Link: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/
 *
 * Description:
 * You are given an array of events where each event is represented as [startDay, endDay, value].
 * You can attend at most k events.
 * Two events are considered non-overlapping if their time intervals do not intersect.
 * Your task is to return the maximum sum of values of the events you can attend.
 *
 * Approach:
 * - First, sort the events by their start time.
 * - Use a recursive dynamic programming approach with memoization.
 * - At each event index, we have two choices:
 *    1. Skip the current event and move to the next.
 *    2. Attend the current event, find the next non-overlapping event, and reduce k by 1.
 * - Use binary search to quickly find the next non-overlapping event after attending one.
 * - Memoize the results in a 2D table to avoid recomputation.
 *
 * You can find the sum in maximum-value-of-events-that-can-be-attended 🤝
 */

var maxValue = function(events, k) {
    // Step 1: Sort events by start day
    events.sort((a, b) => a[0] - b[0]);
    const n = events.length;

    // Step 2: Create a memoization table
    const memo = Array.from({ length: n }, () => Array(k + 1).fill(-1));

    // Step 3: Binary search to find next event with start > current end
    function findNextIndex(end, startIdx) {
        let left = startIdx, right = events.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (events[mid][0] > end) right = mid;
            else left = mid + 1;
        }
        return left;
    }

    // Step 4: DP function - max value from index with remaining events
    function dp(index, remaining) {
        if (index >= n || remaining === 0) return 0;
        if (memo[index][remaining] !== -1) return memo[index][remaining];

        // Option 1: Skip current event
        let skip = dp(index + 1, remaining);

        // Option 2: Take current event
        const [start, end, value] = events[index];
        const nextIdx = findNextIndex(end, index + 1);
        let take = value + dp(nextIdx, remaining - 1);

        return memo[index][remaining] = Math.max(skip, take);
    }

    return dp(0, k);
};

// Example test case
console.log(maxValue([[1,2,4],[3,4,3],[2,3,10]], 2)); // Output: 13
