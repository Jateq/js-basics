// 2666. Allow One Function Call
// Easy

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let usedOnce = false;
    return function(...args){
        let onceFn = fn(...args)
        if(!usedOnce){
            usedOnce = true;
            return onceFn
        }
        return undefined

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */