var companies = []
var string1 = "apple"
var string2 = "meta"
var string3 = "amazon"
var string4 = "google"

companies.push(string1)
companies.push(string2)
companies.push(string3)
companies.push(string4)

console.log(`i want to be part of ${companies}`)

for(var i = 0; i < companies.length; i++){
    console.log(`i wan't to be part of ${companies[i]}`)
}

console.log(`balls`)

for (var eachcomp of companies){
    console.log(`i wan't to be part of ${eachcomp}`)
}

