//FIRST SOLUTION WITHOUT OPTIMIZATION
// function isPalindrome(x: number): boolean {
//     const numToString = x.toString()
//     let reversedStringNum: string[] = []

//     for (let i = numToString.length - 1; i >= 0; i--) {
//         reversedStringNum.push(numToString[i])
//     }

//     for (let j = 0; j < numToString.length; j++) {
//         if (reversedStringNum[j] !== numToString[j]) return false
//     }

//     return true
// };

function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === reversed || x === Math.floor(reversed / 10);
}

// console.log(isPalindrome(122131))
