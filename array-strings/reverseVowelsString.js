/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	const letters = s.split('')

	let i = 0
	let j = letters.length - 1

	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

	while (i < j) {
		const leftChar = letters[i]
		const rightChar = letters[j]

		console.log('letters[i]', letters[i])
		console.log('letters[j]', letters[j])

		if (!vowels.includes(leftChar)) {
			i++
		} else if (!vowels.includes(rightChar)) {
			j--
		} else {
			letters[i] = rightChar
			i++
			letters[j] = leftChar
			j--
		}
	}

	return letters.join('')
}
