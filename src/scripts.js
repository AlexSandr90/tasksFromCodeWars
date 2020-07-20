
//      1

//Given 2 strings, a and b, return a string of the form short+long+short,
// with the shorter string on the outside and the longer string on the inside.
// The strings will not be the same length, but they may be empty ( length 0 ).
// For example:
// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

// const solution = (a, b) => {
//     if (a.length > b.length) {
//         return `${b}${a}${b}`
//     }
//
//     return `${a}${b}${a}`
// };


const solution = (a, b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;

console.log(solution('1', '22'));
console.log(solution('22', '1'));


//                1


//    2
// Implement a function named generateRange(min, max, step),
// which takes three arguments and generates a range of integers from min to max, with the step.
// The first integer is the minimum value, the second is the maximum of the range and the third is the step.
// (min < max)
// Task
// Implement a function named
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

const generateRange = (min, max, step) => {
    const res = [];
    for (let i = min; i <= max; i += step) {
        res.push(i);
    }
    return res;
}

console.log(generateRange(2, 10, 2));

// 2


// 3
// It is easy to join two strings together like this string1 + string2.
//     Another way to get the desired result would be with string1.concat(string2)
//     ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!
//     If one of the arguments is a number your code must coerce it into being a string.

const joinStrings = (string1, string2) => `${string1} ${string2}`;

console.log(joinStrings('string1', 'string2'));


//  4
// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string.
// Write a function which returns another string containing all the character sequences except the
// first and the last ones, separated by spaces. If the input string is empty, or the removal
// of the first and last items would cause the string to be empty, return a null value.

const array = arr => arr.split(',').slice(1, -1).join(' ').trim() || null;


console.log(array('1,2,3'));
console.log(array('1,2'));
console.log(array('1'));
console.log(array(''));


// 4


// 5
