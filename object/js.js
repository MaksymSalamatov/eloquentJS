//Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to (and includ-
// ing) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
// As a bonus assignment, modify your range function to take an optional
// third argument that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding
// to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5,
// 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

function range(start, end, step = start < end ? 1 : -1) {
    let arr = []
    if(start < end) {
        for (let i = start; i <= end; i += step){
            arr.push(i)
        }
    } else {
        for (let i = start; i >= end; i += step){
            arr.push(i)
        }
    }
    return arr
}

function sum(arr){
    return arr.reduce((acc, i) => acc += i)
}

console.log(range(1, 10))
console.log(range(10, 1))
console.log(sum(range(1, 10)))

///////////////////////////////////////////////////////////////////////

//Reversing an Array
// Arrays have a reverse method that changes the array by inverting the
// order in which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
// as argument and produces a new array that has the same elements in the
// inverse order. The second, reverseArrayInPlace, does what the reverse
// method does: it modifies the array given as argument by reversing its ele-
// ments. Neither may use the standard reverse method.

// function reverseArray(arr) {
//     let arrNewReverse = []
//         for (let key of arr){
//             arrNewReverse.unshift(key)
//         }
//     return arrNewReverse
// }
// console.log(reverseArray(['a', 'b', 'c', 'd', 'e']))


/////////////////////////////////////////////////////////////////////

//A List
//Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend,
// which takes an element and a list and creates a new list that adds the ele-
// ment to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring
// to the first element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.



