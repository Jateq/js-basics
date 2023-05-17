var incrementor = 0;
var text = ""

 

// while( incrementor < 10 ){
//     // text += "The incrementor has gone up to " + incrementor + "\n"; 
//     text += `The incrementor has gone up to ${incrementor} \n`
//     incrementor++
// }

// console.log(text)


while (incrementor < 10 ){
text += `The incrementor is ${incrementor}, and squared it is ${incrementor * incrementor} \n`;
incrementor++;
}
console.log(text);