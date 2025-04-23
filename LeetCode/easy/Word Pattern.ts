// first solution (before optimization and refactoring)

// function wordPattern(pattern: string, s: string): boolean {
//     const patternMap: { [key: string]: number[] } = {};
//     let isFollowingPattern:boolean = true
//     const newStringArr: string[] = s.split(' ')

//     for(let i = 0; i < pattern.length; i++){
//         if(patternMap[pattern[i]]) {
//             patternMap[pattern[i]].push(i)
//             continue
//         }
//         patternMap[pattern[i]] = [i]
//     }

//     for(let i = 0; i < newStringArr.length; i++){
//         let x = newStringArr[i]
//         let y = pattern[i]
//         const z = patternMap[y]
//         if(isFollowingPattern){
//             for(let j = 0; j < z.length; j++){
//                 const index = z[j]
//                 if(newStringArr[index] === x){
//                     isFollowingPattern = true
//                     continue
//                 } else {
//                     isFollowingPattern = false
//                     break
//                 }
//             }
//         } else {
//             break
//         }
//     }

//     return isFollowingPattern
// };

// const pattern = 'abba'
// const pattern = 'aaaa'
// // const string = "dog cat cat dog"
// // const string = "dog cat cat fish"
// const string = "dog cat cat dog"
// const pattern = "abba"
// const string = "dog dog dog dog"


// console.log(wordPattern(pattern , string))

/*

1- parameter > pattern >> 'abba'
2- parameter > string >> 'dog cat cat dog'

// pattern steps 
-check how many charachters in pattern and count of each charachter
-save in object

//string steps
-remove spaces
-take each element in new array and make a new object with it 


obj = {
0:dog
1:cat
2:cat
3:dog
}

string[i] = obj.i


*/

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (words.length !== pattern.length) return false;

    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (charToWord.has(char)) {
            if (charToWord.get(char) !== word) {
                return false;
            }
        } else {
            charToWord.set(char, word);
        }

        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== char) {
                return false;
            }
        } else {
            wordToChar.set(word, char);
        }
    }

    return true;
}

const pattern = 'abba';
const string = "dog constructor constructor dog";

console.log(wordPattern(pattern, string));



// Each letter maps to a unique word
// Each word maps to a unique letter