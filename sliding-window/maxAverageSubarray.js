/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	let max = -Infinity
	let soFar = 0
	let windowStart = 0

	for (let windEnd = 0; windEnd < nums.length; windEnd++) {
		soFar += nums[windEnd]

		if (windEnd - windowStart === k - 1) {
			let avg = soFar / k

			max = Math.max(max, avg)

			soFar -= nums[windowStart]
			windowStart++
		}
	}
	return max
}
