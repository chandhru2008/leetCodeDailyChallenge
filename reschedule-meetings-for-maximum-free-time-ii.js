var maxFreeTime = function(eventTime, startTime, endTime) {
    const n = startTime.length;
    if (n === 0) return eventTime;

    const gaps = Array(n + 1).fill(0);
    gaps[0] = startTime[0];

    for (let i = 1; i < n; i++) {
        gaps[i] = startTime[i] - endTime[i - 1];
    }
    gaps[n] = eventTime - endTime[n - 1];

    const largestRight = Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        largestRight[i] = Math.max(largestRight[i + 1], gaps[i + 1]);
    }

    let maxFree = 0, largestLeft = 0;
    for (let i = 1; i <= n; i++) {
        const duration = endTime[i - 1] - startTime[i - 1];
        const canFitLeft = largestLeft >= duration;
        const canFitRight = largestRight[i] >= duration;

        if (canFitLeft || canFitRight) {
            const merged = gaps[i - 1] + gaps[i] + duration;
            maxFree = Math.max(maxFree, merged);
        }

        maxFree = Math.max(maxFree, gaps[i - 1] + gaps[i]);
        largestLeft = Math.max(largestLeft, gaps[i - 1]);
    }

    return maxFree;
}