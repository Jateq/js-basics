const prompt = require("prompt-sync")();

var userColor = prompt("Pick a color: ","");

if(userColor == "red" || userColor == "green" || userColor == "blue"){
    console.log(`You picked a primary color: ${userColor}`);
} else if (userColor == "orange" || userColor == "blue" || userColor == "purple"){
    console.log(`You picked secondary color: ${userColor}`);
} else{
    console.log(`What a choice, didn't expect: ${userColor}`);
}