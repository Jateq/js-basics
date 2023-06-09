// 2636. Promise Pool
// Medium

/**
 * 
 * Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should return a promise that resolves when all the input functions resolve.
 * Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should also resolve.
 * For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.
 * You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.
 * 
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 * 
 */


var promisePool = async function (functions, n) {
  const results = [];
  const inProgress = [];
  let i = 0;

  while (i < functions.length || inProgress.length > 0) {
    while (inProgress.length < n && i < functions.length) {
      const promise = functions[i]();
      const index = i;
      const resultPromise = promise.then((result) => {
        results[index] = result;
        inProgress.splice(inProgress.indexOf(resultPromise), 1);
      });
      inProgress.push(resultPromise);
      i++;
    }

    await Promise.race(inProgress); //it will return a new Promise
  }

  return results;
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
