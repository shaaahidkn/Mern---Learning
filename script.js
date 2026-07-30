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


function revNumber(num){
    let rev = 0;
    while(num>0){
        let rem = num%10
        rev = rev*10+rem
        num = Math.floor(num/10)
    }
    return rev
}

console.log(revNumber(12345))


 














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


