// let str = "hello shahid"

// //using methods
// let reversed = str.split("").reverse().join("")

// console.log(reversed);

// //without method
// let rev = ""
// for(let i = str.length-1; i>=0; i--){
//     rev += str[i]
// }
// console.log(rev);
//----------------------------------------------------------------------------

// function revNum(num){
//     return Number(num.toString().split("").reverse().join(""))
// }

// console.log(revNum(1234))


// function revNumber(num){
//     let rev = 0;
//     while(num>0){
//         let rem = num%10            // rem= num%10 will be 4 from 1234
//         rev = rev*10+rem            // rev= rev*10=0 cause rev is 0 then + rem so 4 (from above)
//         num = Math.floor(num/10)    // num= here resetting num, so num/10 in 1234 will be 123.4 and .floor will make it 123
//     }
//     return rev
// }

// console.log(revNumber(12345))

//function that returns the longest word:
// function findLongestWord(sentence){
//     let words = sentence.split(" ")   
//     let longestWord = "";
//      for (let word of words){
//        if(word.length>longestWord.length){
//         longestWord = word
//        }
//     }
//     return longestWord;
    
// }
// console.log(findLongestWord("I Loving Coding In Javascript"));

//is palindrome or not?
function isPalindrome(str){
    let reversedStr = str.split("").reverse().join("")
    if(reversedStr === str){
        return true
    }else{
        return false
    }

}


console.log(isPalindrome("raceca"))



 














// => Variables (var, let, const), Data Types, Operators
// => Conditional Statements (if, else, switch, ternary operator)
// => Looping Statements (for, while, do...while, for...in, for…of)
// => Objects, Arrays, Functions
// => Array Methods (map, filter, reduce, forEach, find, etc.)
// => String Methods
// => Number Methods
// => Set / Map
// => Spread and Rest Operators
// => Type Conversions
// => Hoisting
// => Closures
// => Exception Handling: Learn and practice try, catch, finally, and throw


