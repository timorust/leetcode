/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
	let vowelsSet = new Set(['a', 'i', 'u', 'o', 'e'])

	let maxVowels = 0
	let vowels = 0
	let start = 0

	for (let i = 0; i < s.length; i++) {
		if (i - start + 1 > k) {
			if (vowelsSet.has(s[start])) vowels--
			start++
		}

		if (vowelsSet.has(s[i])) {
			vowels++
			maxVowels = Math.max(maxVowels, vowels)
		}
	}
	return maxVowels
}
