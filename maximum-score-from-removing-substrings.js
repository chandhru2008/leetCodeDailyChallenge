/**
 * 🔍 Problem:
 * Check if a given word is valid based on the following conditions:
 *
 * ✅ Valid word:
 * - At least 3 characters long
 * - Contains at least one vowel (a, e, i, o, u)
 * - Contains at least one consonant
 * - Must not contain special characters '@', '#', or '$'
 *
 * 🎯 Goal: Return `true` if the word is valid, otherwise `false`.
 *
 * 🧠 Approach:
 * 1. Convert the word to lowercase.
 * 2. If the word length is less than 3, return false.
 * 3. Loop through each character:
 *    - If it’s a restricted special character, return false.
 *    - If it’s a vowel, mark that a vowel was found.
 *    - If it’s a lowercase letter but not a vowel, mark that a consonant was found.
 * 4. Return true only if both a vowel and consonant are found.
 */

var isValid = function (word) {
    word = word.toLowerCase();

    if (word.length < 3) {
        return false;
    }

    let isContainsVowel = false;
    let isContainsConsonant = false;
    const vowelObject = { a: 1, e: 1, i: 1, o: 1, u: 1 };

    for (const c of word) {
        // Reject if special characters are present
        if (c === '@' || c === '#' || c === '$') {
            return false;
        }

        // Check for vowels
        if (vowelObject[c]) {
            isContainsVowel = true;
            console.log('Vowel:', c);
        } 
        // Check for consonants
        else if (/[a-z]/.test(c)) {
            isContainsConsonant = true;
            console.log('Consonant:', c);
        }
    }

    // Word is valid only if both a vowel and consonant are present
    return isContainsVowel && isContainsConsonant;
};
