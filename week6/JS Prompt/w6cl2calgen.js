// ***** NOTE --> npm installation is required for prompt-sync method*****

// program for a simple calculator

const prompt = require("prompt-sync")(); // defining code to promt user

let result;

let decision;

var rad;


function add(number1, number2){             //Addition of two numbers:   
    return  result = number1 + number2;
}

function subtract(number1, number2){        //Subtraction of two numbers:
    return  result = number1 - number2;
}

function multiply(number1, number2){        //Multiplication of two numbers:
    return  result = number1 * number2;
}

function divide(number1, number2){          //Division of two numbers:
    return  result = number1 / number2;
}

function powerof(number1, number2){          //To the power of two numbers:
    return  result = Math.pow(number1, number2);
}

function getSinDeg(deg){                    //Sine radians value for given degrees:
    rad = deg * Math.PI / 180;
    return  result = (Math.sin(rad)).toFixed(2);
}

function getCosDeg(deg){                    //Cosine radians value for given degrees:
    rad = deg * Math.PI / 180;
    return  result = (Math.cos(rad)).toFixed(2);
}

function getTanDeg(deg){                    //Tangent radians value for given degrees:
    rad = deg * Math.PI / 180;
    return  result = (Math.tan(rad)).toFixed(2);
}


do {        // do - while logic for performing "Y" or "N" prompt based on user input
    // take the operator input
    const operator = prompt('Enter operator ( either +, -, * , /, **, sin, cos or tan): ').toLowerCase();

    // take the operand inputs
        const number1 = parseFloat(prompt('Enter first number: '));
        const number2 = parseFloat(prompt('Enter second number: '));
        const deg = parseFloat(prompt('Enter Degree between 0 to 360: '));

    switch(operator) {                      // Switch case logic depending on operator type
        case '+':
            add( number1, number2);     
            console.log( number1 + " + " + number2 + " = " + result );
            break;

        case '-':
            subtract( number1, number2);   
            console.log( number1 + " - " + number2 + " = " + result );
            break;

        case '*':
            multiply( number1, number2);   
            console.log( number1 + " * " + number2 + " = " + result );
            break;

        case '/':
            divide( number1, number2);   
            console.log( number1 + " / " + number2 + " = " + result );
            break;

        case '**':
            powerof( number1, number2);   
            console.log( number1 + " ** " + number2 + " = " + result );
            break;

        case 'sin':
            getSinDeg(deg);   
            console.log( "Sine of " + deg + " = " + result + " radians (rounded 2 digits)" );
            break;
        
        case 'cos':    
            getCosDeg(deg);   
            console.log( "Cosine of " + deg + " = " + result + " radians (rounded 2 digits)" );
            break;
    
        case 'tan':    
            getTanDeg(deg);   
            console.log( "Tangent of " + deg + " = " + result + " radians (rounded 2 digits)" );
            break;
    
        default:
            console.log('Invalid operator');
            break;
    }

    decision = prompt('Do you want to continue another operation ? Enter Y or N : ').toLowerCase();

    if (decision === "n") {
        console.log("Good Bye !!!")
    }
}
while (decision === "y");