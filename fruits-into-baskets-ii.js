/**
 * 🔍 Problem:
 * Place fruits into baskets under the following conditions:
 *
 * ✅ Rules:
 * - Each fruit has a size.
 * - Each basket has a capacity.
 * - A fruit can only be placed in a basket if its size is <= the basket's capacity.
 * - Once a basket is used for one fruit, it cannot be reused.
 *
 * 🎯 Goal:
 * Return the number of fruits that could not be placed in any basket.
 *
 * 🧠 Approach:
 * 1. Loop through each fruit.
 * 2. For each fruit, try placing it in any available basket.
 *    - If a basket can hold it (size ≤ capacity), place it and mark the basket as used.
 *    - If no basket can hold it, count it as unplaced.
 * 3. Return the total number of unplaced fruits.
 */

var numOfUnplacedFruits = function(fruits, baskets) {
    // 🔢 Track the number of unplaced fruits
    let unplaced = 0;

    // 🔁 Loop through each fruit to try placing it
    for (let i = 0; i < fruits.length; i++) {
        let isPlaced = false; // Flag to track if current fruit was placed

        // 🔁 Check every basket to see if it can hold the fruit
        for (let j = 0; j < baskets.length; j++) {
            // ✅ If fruit fits in the basket
            if (fruits[i] <= baskets[j]) {
                baskets[j] = -1; // ❌ Mark the basket as used
                isPlaced = true; // ✅ Mark fruit as placed
                break; // ⛔ Stop checking more baskets for this fruit
            }
        }

        // ❌ If no basket could hold this fruit, count it as unplaced
        if (!isPlaced) {
            unplaced++;
        }
    }

    // 🔙 Return total number of fruits that couldn't be placed
    return unplaced;
};
