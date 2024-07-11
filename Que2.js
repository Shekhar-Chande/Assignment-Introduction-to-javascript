//Hoisting var variables

console.log(name) // undefined
var name = "Dillion"


//Hoisting let variables

console.log(firstName) //ReferenceError: Cannot access 'firstName' before initialization
let firstName="shekhar"



//Hoisting const variables
console.log(lastName) //ReferenceError: Cannot access 'lastName' before initialization
const lastName="bhardwaj"
