function sumArray(arr) {
	let sum = 0
	for (i = 0; i <= arr.length - 1; i++) {
		sum += arr[i]
	}
	return sum
}


const result1 = sumArray([1, 2, 3, 4, 5])
const result2 = sumArray([-1, 0, 1])
const result3 = sumArray([0, 4, 8, 12])

console.log(result1)
console.log(result2)
console.log(result3)