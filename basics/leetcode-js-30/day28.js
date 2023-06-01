// 2695. Array Wrapper
// Easy


/**
 * Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:
 *
 * @param {number[]} nums
 */


class ArrayWrapper {
    constructor(nums){
        this.nums = nums;
    }

    valueOf (){
        return this.nums.reduce((acc, val) => acc += val, 0)
    }

    toString(){
        return `[${this.nums.join(",")}]`
    }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */