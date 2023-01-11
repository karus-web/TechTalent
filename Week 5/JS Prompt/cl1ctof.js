const prompt = require("prompt-sync")(); // defining code to promt user

// Programe for Celsius to Fahrenheit

var celsius  // Creating Celsius variable
celsius = prompt("Enter temperature in celsius = "); // asking user to enter temperature as Celsius in Console

    var cTemp = celsius;                    // creating a variable cTemp
    var FarTemp1 = cTemp *(9 / 5) + 32;       // Formula to convert C to F
    console.log('Fahrenheit temperature before using Math Floor and rounding = ' + FarTemp1 + ' \xB0F.');  
    var FarTemp = FarTemp1.toFixed(4);        // rounded to 4 decimal places using 'toFixed()':
    console.log('Round to 4 decimal: ' + FarTemp );  

    var Fahrenheit = Math.floor(FarTemp);   // creating a variable that is stored as Fahrenheit and rounded that value using Math.floor:
    var message = cTemp+'\xB0C is equal to ' + Fahrenheit + ' \xB0F.';    //string interpolation to display answer:
    console.log(message);      // display message in console

// Programe for Fahrenheit to Celsius

var Fahrenheit  // Creating Fahrenheit variable
Fahrenheit = prompt("Enter temperature in Fahrenheit = "); // asking user to enter temperature as Fahrenheit in Console
    
    var fTemp = Fahrenheit;                     // creating a variable fTemp:
    var cTemp1 =((fTemp -32) * (5 / 9));         // Formula to convert F to C
    console.log('Fahrenheit temperature before using Math Floor and rounding = ' + cTemp1 + ' \xB0C.');
    var cTemp  = cTemp1.toFixed(4);            // rounded to 4 decimal places using 'toFixed()':
    console.log('Round to 4 decimal places: ' + cTemp);   

    var  Celsius = Math.floor(cTemp);       // creating a variable that is stored as Celsius and rounded that value using Math.floor:
    var message = fTemp+ ' \xB0F is equal to ' + Celsius + ' \xB0C.';           //string interpolation to display answer:    
    console.log(message);       // display message in console

