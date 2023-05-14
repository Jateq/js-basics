var text1 = "My name is Temirlan"
var text2 = text1.toUpperCase()
console.log(text2)

var text3 = text2.toLowerCase()
console.log(text3)

var location = text1.search("Temirlan")
console.log(location)

var special = text1.substr(location, 8)
console.log(special)

var newName = "Nodejs"
var newText = text1.replace(special, newName)
console.log(newText)