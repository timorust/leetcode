/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	let first = cost[0]
	let second = cost[1]

	for (let i = 2; i < cost.length; i++) {
		let current = cost[i] + Math.min(first, second)
		first = second
		second = current
	}

	return Math.min(first, second)
}
