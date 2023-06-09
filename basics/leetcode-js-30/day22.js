// 2625. Flatten Deeply Nested Array
// Medium

/**
 *
 * Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
 * A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
 * A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
 * 
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let res = [];
    const flattening = (nums, l) => {
        for(let num of nums) {
            if(Array.isArray(num) && l>0){
                flattening(num, l-1);
            } else {
                res.push(num);
            }
        }
    }
    flattening(arr, n);
    return res;

};