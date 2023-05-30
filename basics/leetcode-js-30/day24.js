// 2631. Group By
// Medium

/**
 * 
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
 * A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
 * The provided callback fn will accept an item in the array and return a string key.
 * 
 * @param {Function} fn
 * @return {Array}
 */


Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);
        if(!grouped[key]){
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
    },{})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */