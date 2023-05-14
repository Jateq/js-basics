const prompt = require("prompt-sync")();

function godo(){
    console.log(`do your work`)
}
godo();

const godowork = () => {
    console.log(`go do your work`)
}

godowork();

var param1 = prompt(`choose country: `)
var param2 = `Qatar`
var name = (param1, param2) => {
    console.log(`I want to go to ${param1} and ${param2}`)
}
name(param1, param2);

const randme = () => {
    for(var i = 0; i < 5; i++){
        console.log(Math.random());
    }
}
randme();

var companies = []
var string1 = "apple"
var string2 = "meta"
var string3 = "amazon"
var string4 = "google"

companies.push(string1)
companies.push(string2)
companies.push(string3)
companies.push(string4)

const randInt = (min, max) => {
    var num = max-min+1;

    for(let i = 0; i < 10; i++){
        // var random = Math.random();
        // var randomVal = random * num;
        // var round = Math.floor(randomVal);
        // var res = min + round;
        
        // return res;

        return Math.floor((max-min+1)*Math.random())+ min
    }
}
var rand = randInt(0, 3);
console.log(companies[rand]);
