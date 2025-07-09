/**
 * Problem: Reschedule Meetings for Maximum Free Time
 * 
 * Given an array of meetings (startTime and endTime), and an overall eventTime range [0, eventTime],
 * you can remove at most k meetings. Your task is to find the largest continuous free time possible
 * after removing at most k meetings.
 *
 * Approach:
 * - Calculate gaps before, between, and after meetings.
 * - Use a sliding window of size (k + 1) to find the maximum sum of contiguous free gaps.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var maxFreeTime = function(eventTime, k, startTime, endTime) {
    let gaps = [];

    // Gap before the first event
    gaps.push(startTime[0] - 0);

    // Gaps between events
    for (let i = 1; i < startTime.length; i++) {
        gaps.push(startTime[i] - endTime[i - 1]);
    }

    // Gap after the last event
    gaps.push(eventTime - endTime[endTime.length - 1]);

    // Initial sliding window of k + 1 gaps
    let window = 0;
    for (let i = 0; i <= k && i < gaps.length; i++) {
        window += gaps[i];
    }

    let res = window;

    // Slide the window
    for (let i = k + 1; i < gaps.length; i++) {
        window = window - gaps[i - (k + 1)] + gaps[i];
        res = Math.max(res, window);
    }

    return res;
};
