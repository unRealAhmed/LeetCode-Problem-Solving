type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    let accum = init;
    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
}

const multiply: Fn = (accum, curr) => accum + curr * curr;
const sum: Fn = (accum, curr) => accum + curr;

const nums = [1, 2, 3, 4];
console.log(reduce(nums, sum, 0));
console.log(reduce(nums, multiply, 100));
