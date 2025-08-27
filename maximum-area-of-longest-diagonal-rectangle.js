/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let [w, h] of dimensions) {
        let diagonal = Math.sqrt(w * w + h * h);
        let area = w * h;

        if (
            diagonal > maxDiagonal || 
            (diagonal === maxDiagonal && area > maxArea)
        ) {
            maxDiagonal = diagonal;
            maxArea = area;
        }
    }

    return maxArea;
};
