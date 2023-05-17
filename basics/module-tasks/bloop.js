var n = 10;

for (var i = 1; i <= n; i++){
    process.stdout.write(i + " ");
 
    console.log()
}

// for ( var i = 0; i < 10; i--) {
//     console.log( i );
// }

var colors = ['red', 'blue', 'yellow', 'green'];
for( var i=0; i<4; i++ ) {
     console. log( colors[i] + '\n' );
}

for (var each of colors){
    console.log(each)
}

var statement = "A string can be treated like an array";
for( var i=0; i < statement. length; i++ ) {
     console. log( statement[i] + '\n' );
 }
