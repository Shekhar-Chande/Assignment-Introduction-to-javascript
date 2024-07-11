
// Var- global scope

var number = 50

function print() {
  var square = number * number
  console.log(square)
}

print() 
console.log(number) 


//Var - local scope

function print_local() {
    var number = 50
    var square = number * number
    console.log(square)
  }
  
  print() // 2500
  
  console.log(number)


  // Var - redeclaration and reassignment

var number = 50
console.log(number) // 50

var number = 100
console.log(number)




//let- global, local and bolck scope

let number = 50

function print() {
  let square = number * number

  if (number < 60) {
    var largerNumber = 80
    let anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()


//let- redeclaration and reassignment

let number = 50
console.log(number) 

number = 100
console.log(number) 




//const- global, local and bolck scope

const number = 50

function print() {
  const square = number * number

  if (number < 60) {
    var largerNumber = 80
    const anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()




//const- redeclaration and reassignment

const number = 50

number = 100  // TypeError: Assignment to constant variable