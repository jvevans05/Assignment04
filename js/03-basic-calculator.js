// ADD A FUNCTION CALLED CALCULATE
function calculate (x, y, operation) {

    //make strings numbers
    x = parseFloat(x)
    y = parseFloat(y)

    switch (operation) {

        case '+':
            result = x + y
            break
        case '-':
            result = x - y
            break
        case '*':
            result = x * y
            break
        case '/':
            result = x / y
            break
        default:
            alert('Please enter a math operation: + - * / .')
            result = 'operator error'
    }

//debug
//console.log(result, typeof(result))
return result
}

//need this to be defined for the do while loop.
let result = 'smooth operator'
//looping the function and inputs in case of bad input.
do {
// COLLECT FIRST NUMBER FROM USER
let num1 = prompt('Please enter a first number to operate.')

// COLLECT SECOND NUMBER FROM USER
let num2 = prompt('Please enter a second number to operate.')

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let oper = prompt('Which operation would you like to perform?: +, -, *, /')

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
result = calculate(num1, num2, oper)
alert(`The result of the calculation is: ${result}`)

} while ( result == 'operator error' )