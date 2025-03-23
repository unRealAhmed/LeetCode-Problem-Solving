function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

const result1 = nextEdge(8 , 10);
const result2 = nextEdge(110, 3);
const result3 = nextEdge(480, 20);

console.log(result1)
console.log(result2)
console.log(result3)