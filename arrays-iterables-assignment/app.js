const numArr = [1, 2, 2, 100, 4, 5, 6];

// const filteredArray = numArr.filter((num) => num > 5);
// console.log(filteredArray);

// const mappedArray = numArr.map((num) => ({ num: num }));
// console.log(mappedArray);

// const reducedArr = numArr.reduce((a, b) => a * b, 1);
// console.log(reducedArr);

// const findMax = (...nums) => {
// 	let curMax = nums[0];
// 	for (const num of nums) {
// 		if (num > curMax) {
// 			curMax = num;
// 		}
// 	}
// 	return curMax;
// };



const findMinMax = (...nums) => {
	let curMax = Math.max(...nums);
	let curMin = Math.min(...nums);
	// for (const num of nums) {
	// 	if (num > curMax) {
	// 		curMax = num;
	// 	}
	// 	if (num < curMin) {
	// 		curMin = num;
	// 	}
	// }
	return [curMax, curMin];
};


console.log(findMinMax(...numArr));

const [min, max] = findMinMax(...numArr);

console.log(min);
console.log(max);

const newSet = new Set();

newSet.add(numArr);

console.log(newSet)