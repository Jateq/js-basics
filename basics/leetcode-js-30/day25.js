// 2618. Check if Object Instance of Class
// Medium


/**
 * Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
 *
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function")
      return false;
  
    if (typeof obj !== "object") {
      obj = Object(obj); 
    }
    return obj instanceof classFunction;
  };
  /**
   * checkIfInstanceOf(new Date(), Date); // true
   */