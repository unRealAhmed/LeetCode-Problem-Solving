// FIRST SOLTUION BEFORE OPTIMIZATION
// function validAnagrams(string1: string, string2: string): boolean {
//     if (string1.length !== string2.length) return false;

//     const obj1: Record<string, number> = {};
//     const obj2: Record<string, number> = {};

//     for (let i = 0; i < string1.length; i++) {
//         obj1[string1[i]] = (obj1[string1[i]] || 0) + 1;
//     }

//     for (let i = 0; i < string2.length; i++) {
//         obj2[string2[i]] = (obj2[string2[i]] || 0) + 1;
//     }

//     for (let key in obj1) {
//         if (obj2[key] === undefined) return false;
//         if (obj1[key] !== obj2[key]) return false;
//     }

//     return true;
// }

function validAnagrams(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const lookup: Record<string, number> = {};

    for (let char of str1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!lookup[char]) return false;
        lookup[char]--;
    }

    return true;
}


// console.log(validAnagrams('' , ''))
console.log(validAnagrams("aaz", "aza"));

//check length
//if value of two strings === '' return true
/*
obj1 = {
    a:2
    z:1
}

obj2 = {
    a:1
    z:2
}


*/
