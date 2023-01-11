      // Temperature conversion fron Celsius to Fahrenheit:
 function  cToF(celsius)
     {
         //code to be executed:
        
      var cTemp = celsius;                     // creating a variable for celsius:
      var FarTemp1 = cTemp *(9 / 5) + 32;       // Formula to convert C to F
      console.log('Actual value: ' + FarTemp1);  
      var FarTemp = FarTemp1.toFixed(4);        // rounded to 4 decimal places using 'toFixed()':
      console.log('Round to 4 decimal: ' + FarTemp );  
      var Fahrenheit = Math.floor(FarTemp);    // creating a variable that is stored as 'Fahrenheit' and rounded that value using 'Math.floor':
      var message = cTemp+'\xB0C is ' + Fahrenheit + ' \xB0F.';    //string interpolation to display answer:

          console.log(message);      
      
    }

      //Temperature conversion from Fahrenheit to Celsius:
  
 function  FToC(Fahrenheit)
    {
           //code to be executed:
      
        var fTemp = Fahrenheit;                   // creating a variable fTemp:
        var cTemp1 =((fTemp -32) * (5 / 9));       // Formula to convert Fto C:
        console.log( 'Actual value: ' + cTemp1);
        var cTemp  = cTemp1.toFixed(4);            // rounded to 4 decimal places using 'toFixed()':
        console.log('Round to 4 decimal places: ' + cTemp);   
          var  Celsius = Math.floor(cTemp);       // creating a variable that is stored as 'Celsius' and rounded that value using 'Math.floor':
        var message = fTemp+ ' \xB0F is ' + Celsius + ' \xB0C.';           //string interpolation to display answer:    
            console.log(message);      
        
      }
  
          cToF(57.3);     // Input Temperature in Celsius to convert into Fahrenheit:
          FToC(45);      // Input Temperature in Fahrenheit to convert into Celsius:


      //Temperature convertion  oF Celsius, Fahrenheit, Kelvin, Newton  using if, else if and switch cases:

let temperature;
let degrees = ['Kelvin','Celsius','Fahrenheit', 'Newton'];
let kelvin;
let celsius;
let fahrenheit;
let newton;

    const tempConv = (temperature, degree) => {
      if (typeof temperature === 'number') {
          if (degree === degrees[0] || degree === degrees[1] || degree === degrees[2] || degree === degrees[3]) {
          switch (degree) {
              case degrees[0]:
                  kelvin = temperature;
                  celsius = temperature - 273;
                  fahrenheit = Math.floor(celsius * (9/5) + 32);
                  newton = Math.floor(celsius * (33/100));
                  return `${kelvin} in degrees Kelvin , ${celsius} in degrees Celsius, ${fahrenheit} in degree Fahrenheit, and ${newton} in  degree Newton.`;
                  break;
              case degrees[1]:
                  celsius = temperature;
                  kelvin = celsius + 273;
                  fahrenheit = Math.floor(celsius * (9/5) + 32);
                  newton = Math.floor(celsius * (33/100));
                  return `${celsius} in degrees Celsius is ${kelvin} in degrees Kelvin, ${fahrenheit} in degree Fahrenheit, and ${newton} in degree Newton.`;
                  break;
              case degrees[2]:
                  fahrenheit = temperature;
                  celsius = Math.floor((fahrenheit - 32) * 5/9);
                  kelvin = celsius + 273;
                  newton = Math.floor(celsius * (33/100));
                  return `${fahrenheit} in degrees Fahrenheit , ${celsius} in degrees Celsius, ${kelvin} in Kelvin, and ${newton} in Newton.`;
                  break;
              case degrees[3]:
                  newton = temperature;
                  celsius = Math.floor(newton / 0.3);
                  kelvin = celsius + 273;
                  fahrenheit = Math.floor(celsius * (9/5) + 32);
                  return `${newton} in degrees Newton is ${celsius} in degrees Celsius, ${kelvin} in Kelvin, and ${fahrenheit} in Fahrenheit.`;
                  break;
          }
      }   else if (degree != degrees[0] || degree != degrees[1] || degree != degrees[2] || degree != degrees[3]) { 
          return 'Temperature is correct, but degree name is not.';
      }
  } else if (typeof number != 'number') {
         if (degree === degrees[0] || degree === degrees[1] || degree === degrees[2] || degree === degrees[2]) {
          return 'Input is not a number, although the degree name is correct.'
      } else if (degree != degrees[0] || degree != degrees[1] || degree != degrees[2]) {
          return 'Input is not a number and the degree name is not correct.'
      }
  }
  }
  
  console.log(tempConv(289, degrees[0]));   // Input to execute switch case[0]:
  console.log(tempConv(32, degrees[1]));    // Input to execute switch case[1]:
  console.log(tempConv(69, degrees[2]));    // Input to execute switch case[2]:
  console.log(tempConv(9, degrees[3]));     // Input to execute switch case[3]:
  console.log(tempConv(6, 'ernesto'));      // Input to execute else if where degree name is incorrect:
  console.log(tempConv('Z', degrees[1]));   // Input to execute else if where degree input number is incorrect:
  
