function printArray(number) {
	let newArray = [];

	for (let i = 1; i <= number; i++) {
		newArray.push(i);
	}

	return newArray;
}

const result1 = printArray(1)
const result2 = printArray(3)
const result3 = printArray(6)

console.log(result1)
console.log(result2)
console.log(result3)