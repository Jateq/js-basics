// 2649. Nested Array Generator
// Medium

/**
 * Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.
 * A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.
 * inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    if(!Array.isArray(arr)) {
        yield arr;
        return
    }
    for(let i = 0; i < arr.length; i++){
        yield* inorderTraversal(arr[i])
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */