function removeNumbers(str) {
	return str.split('').filter(c => !parseInt(c)).join('');
}

const result1 = removeNumbers("mubashir1")
const result2 = removeNumbers("12ma23tt")
const result3 = removeNumbers("e1d2a3b4i5t6")

console.log(result1) // mubashir
console.log(result2) // matt
console.log(result3) // edabit