/**
 * You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	nums.sort((a, b) => a - b)

	let count = 0
	let left = 0,
		right = nums.length - 1

	while (left < right) {
		const varSum = nums[left] + nums[right]

		if (varSum == k) {
			count++
			left++
			right--
		} else if (varSum < k) left++
		else right--
	}
	return count
}
