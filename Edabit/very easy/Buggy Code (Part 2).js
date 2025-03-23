function maxNum(n1, n2) {
	if (n1 > n2) {
		return n1
	}
	else {
		return n2
	}
}

const result1 = maxNum(3, 7)
const result2 = maxNum(-1, 0)
const result3 = maxNum(1000, 400)

console.log(result1)
console.log(result2)
console.log(result3)