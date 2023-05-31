// 2693. Call Function with Custom Context
// Medium

/**
 * Enhance all functions to have the callPolyfill method. 
 * The method accepts an object obj as it's first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).
 * 
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    Object.defineProperty(context, 'fn', {
      value: this,
      enumerable: false,
    });
  
    return context.fn(...args);
  }
  /**
   * function increment() { this.count++; return this.count; }
   * increment.callPolyfill({count: 1}); // 2
   */