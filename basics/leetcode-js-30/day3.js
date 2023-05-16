// 2665. Counter II
// Easy

// Write a function createCounter. It should accept an initial integer init. 
// It should return an object with three functions.


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
    let resetVal = init;

    let obj = {
        increment : () => ++counter,
        decrement : () => --counter,
        reset : () => counter = resetVal
    }

    return obj;
};


// var createCounter = function(init) {
//     c = i = init

//     function increment() {
//         return ++c
//     }

//     function decrement() {
//         return --c
//     }

//     function reset() {
//         return c = i
//     }
//     return {increment, decrement, reset}
// };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */