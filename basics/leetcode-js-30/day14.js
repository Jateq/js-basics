// 2622. Cache With Time Limit
// Medium


/**
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
 * The class has three public methods:
 * set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 * count(): returns the count of un-expired keys. 
 */


class TimeLimitedCache {
    cache = new Map();

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
    set(key, value, duration) { //method
       const valueInCache = this.cache.get(key);
       if (valueInCache){
           clearTimeout(valueInCache.timeout);
       } 
       const timeout = setTimeout(() => this.cache.delete(key), duration);
       this.cache.set(key,{value, timeout});
       return Boolean(valueInCache);
    }

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        } else {
            return -1;
        }       
    }

/** 
 * @return {number} count of non-expired keys
 */
    count(){
        return this.cache.size;
    }
};


/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */