/**
 * LeetCode 1353: Maximum Number of Events That Can Be Attended
 *
 * Problem Link: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/
 *
 * Description:
 * You are given an array of events where events[i] = [startDay, endDay].
 * You can attend only one event on any given day.
 * Your task is to return the maximum number of events you can attend.
 *
 * Approach:
 * - Sort events by their end day to prioritize those that close earliest.
 * - For each event, greedily pick the earliest available day in [startDay, endDay].
 * - Use a disjoint set (Union-Find) to quickly find the next available day.
 * - This avoids time limit issues with naive iteration.
 *
 * You can find the sum in maximum-number-of-events-that-can-be-attended 🤝
 */


function maxEvents(events) {
    events.sort((a, b) => a[1] - b[1]); // Sort by end time

    const parent = new Map();

    function find(day) {
        if (!parent.has(day)) return day;
        let next = find(parent.get(day));
        parent.set(day, next); // path compression
        return next;
    }

    let count = 0;

    for (const [start, end] of events) {
        let day = find(start); // find next available day ≥ start

        if (day <= end) {
            count++;
            parent.set(day, day + 1); // mark this day as used
        }
    }

    return count;
}

console.log(maxEvents([[1,2],[2,2],[3,3],[3,4],[3,4]])); // Output: 4

