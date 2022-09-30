// const addToZero = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] + arr[j] == 0){
//                 return true
//         }
//     }
// }
// return false
// }

// the runtime of this function is O(n^2) & space complexity is O(N)


// console.log(addToZero([]))
// // -> False

// console.log(addToZero([1]))
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True


// const hasUniqueChars = (str) => {
//     for(let i = 0; i < str.length; i++){
//         for(let j = i + 1; j < str.length; j++){
//             if(str[j] == str[i]){
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(hasUniqueChars("Monday"))
// // -> True

// console.log(hasUniqueChars("Moonday"))
// // -> False

//the runtime of this function is also O(n^2), space complexity o(1)


// const isPangram = (str) => {
//         let strArr = str.toLowerCase()
//         let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//         for (let i = 0; i < alphabet.length; i++) {
//             if (strArr.indexOf(alphabet[i]) < 0) {
//                 return false
//             }
//         }
//         return true
//     }
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// // -> True

// console.log(isPangram("I like cats, but not mice"))
// // -> False

// console.log(isPangram("GQ's oft lucky whiz Dr. J, ex-NBA MVP - Steve Galen"))

//the time and space complexity of this problem is (o)n & o(n)


// const findLongestWord = (arr) => {
// let words = "";
// for(let i = 0; i < arr.length; i++){
//     if(words.length < arr[i].length){
//         words = arr[i]
//         }
//     }
// return words.length
// }

//the time & space complexity of this is 0(n)


console.log(findLongestWord(['hey']))
console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(["hi", "hello", "asdfasdfasdfas"]))
// -> 5
