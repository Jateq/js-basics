// 2648. Generate Fibonacci Sequence
// Easy

// Write a generator function that returns a generator object which yields the fibonacci sequence

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1;
    yield a; 
    yield b;
    while(true){
        var c = a + b;
        yield c;
        a = b; 
        b = c;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */