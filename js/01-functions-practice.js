//STEP 1
/*
//get the input number
let oneNum = parseFloat(prompt('enter a number to be halved.'))

//define the function
const halfNumber = oneNum => oneNum / 2

//define the output while calling the function
let divNum = halfNumber(oneNum)

//log the result
console.log(`Half of ${oneNum} is ${divNum}`)
*/



//STEP 2
/*
//acquire number
let aNum = parseFloat(prompt('enter a number to be squared.'))

//define le function
const squareNumber = aNum => aNum**2

//apparently, I can call the function via invocation. very cool.
console.log(`${aNum} squared is ${squareNumber(aNum)}`)
*/



//STEP 3
/*
//acquire numbers
let pNum1 = parseFloat(prompt('Please enter a number.'))
let pNum2 = parseFloat(prompt('Please enter another number.'))

//putting the console log inside the function this time. template literals are still rockin'. get one decimal place in our percentage.
const percentOf = (pNum1, pNum2) => console.log(`${pNum1} is ${(pNum1/pNum2*100).toFixed(1)}\%  of ${pNum2}`)

//call function
percentOf(pNum1, pNum2)
*/



//STEP 4
/*
//acquire numbers
let modNum1 = parseFloat(prompt('Please enter a number to be divided.'))
let modNum2 = parseFloat(prompt('Please enter a number to divide the first by.'))

//wanted to do one not as an arrow.
function findModulus(aNum1, aNum2) {
    let theMod = aNum1 % aNum2
    return theMod
}

console.log(`${findModulus(modNum1, modNum2)} is the modulus of ${modNum1} and ${modNum2}`)
*/



//STEP 5
//I didn't see a step 5.