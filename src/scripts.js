//Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
//For empty output return an empty list.
//Example:
//orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = string => {
    const res = [];
    const elementOfString = [];

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

console.log(orderedCount("abracadabra"));


const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

console.log(range('А'.charCodeAt(0), 'Я'.charCodeAt(0), 1).map(x => String.fromCharCode(x)));


