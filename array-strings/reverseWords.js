/**
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let arr = s.split(' ')

	let reverseStr = ''

	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] == '') continue
		if (reverseStr.length > 0) {
			reverseStr += ' '
		}

		reverseStr += arr[i]
	}

	return reverseStr
}
