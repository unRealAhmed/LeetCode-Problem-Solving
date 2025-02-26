type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x) {
        let temp: number = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            temp = functions[i](temp);
        }
        return temp;
    };
}
/*
Time Complexity:O(n) (Iterates once over functions) 
Space Complexity:O(1) (Only one variable temp)
*/

/*
function compose(functions: F[]): F {
    return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
}

Time Complexity:O(n) (Iterates once over functions)
Space Complexity:O(n) (Each recursive call in reduceRight may add a new function call to the stack)
uses recursion under the hood, so it may consume more stack memory 
*/

const functions1 = [(x: number) => x + 1, (x: number) => x * x, (x: number) => 2 * x]

const functions2 = [(x: number) => 10 * x, (x: number) => 10 * x, (x: number) => 10 * x]

const result1 = compose(functions1)
const result2 = compose(functions2)
const result3 = compose([])
console.log(result1(4))
console.log(result2(1))
console.log(result3(42))