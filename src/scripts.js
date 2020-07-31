//Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
//For empty output return an empty list.
//Example:
//orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = string => {
    const res = [];
    const elementOfString = {};

    for (let i = 0; i < string.length; i++) {
        if (elementOfString[string[i]] === undefined) {
            elementOfString[string[i]] = i;
            res.push([string[i], 1]);
        } else {
            res[elementOfString[string[i]]][1]++;
        }
    }

    return res;
};

//Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
//
// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
//
// How I crossed a mountain desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):
//
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
//
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
//
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
//
// ["WEST"]
// or
//
// { "WEST" }
// or
//
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
//
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
//
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
//
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//
// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

const dirReduc = directions => {
    const arrows = [...directions];
    const north = 'NORTH';
    const south = 'SOUTH';
    const east = 'EAST';
    const west = 'WEST';

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].toUpperCase();

        if ((arrows[i] === north || south ) || (arrows[i + 1] === east || west)) {
            arrows.splice(i,2);
        }

        for (let j = 0; j < arrows.length; j++) {
            if (arrows[i] === arrows[j]) arrows.splice(arrows[i], 1)
        }
    }

    return arrows;
};

const dirReduc1 = arr => {
    const arrows = [...arr];

};

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));


//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


// const scramble = (inputStr, etalon) => {
//
//     for (let i = 0; i < )
// }
//

//Regular Ball Super Ball
// Create a class Ball.
//
// Ball objects should accept one argument for "ball type" when instantiated.
//
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//
// ball1 = new Ball();
// ball2 = new Ball("super");
//
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

class Ball {
    constructor(ballType) {
        this.ballType = ballType;
    }

    get ballType() {
        return this._type;
    }

    set ballType(value) {
        if (value === undefined) {
            this._type = 'regular';
            return;
        }

        this._type = value;
    }
}

const Ball1 = function(ballType) {
    this.ballType = ballType || 'regular';
};

// const ball = new Ball();
// console.log(ball.ballType);
// const ball2 = new Ball('super');
// console.log(ball2.ballType);




//In this Kata, you will be given an integer array and your task is to return the
// sum of elements occupying prime-numbered indices.
// The first element of the array is at index 0.
// Good luck!
// If you like this Kata, try:
// Dominant primes. It takes this idea a step further.
// Consonant value
// FUNDAMENTALS

const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)  return false;
    }
    return true;
};

const total = arr => {
    let sum = 0;
    for (let i = 2; i < arr.length; i++) {
        if (isPrime(i)) {
            sum += arr[i];
        }
    }
    return sum;
};



//Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


const findOrderedCount = string => {
    const res = [];
    const elementOfString = {};

    for (let i = 0; i < string.length; i++) {
        if (elementOfString[string[i]] === undefined) {
            elementOfString[string[i]] = i;
            res.push([string[i], 1]);
        } else {
            res[elementOfString[string[i]]][1]++;
        }
    }

    return res;
};

const findOdd = arr => {
    const res = [];
    const el = {};
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if (el[arr[i]] === undefined) {
            el[arr[i]] = i;
            res.push(arr[i], 1);
        } else {
            res[el[arr[i]]][1]++;
        }
    }

    for (let j = 0; j < res[j]; j++) {
        if (res[j][1] % 2 !==0) {
            result = res[j][0];
        }
    }

    return result;
};


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
