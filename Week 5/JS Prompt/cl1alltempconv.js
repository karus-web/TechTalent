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
              case degrees[0]:  // executes for Kelvin temperature
                  kelvin = temperature;
                  celsius = temperature - 273;
                  fahrenheit = Math.floor(celsius * (9/5) + 32);
                  newton = Math.floor(celsius * (33/100));
                  return `${kelvin} in degrees Kelvin , ${celsius} in degrees Celsius, ${fahrenheit} in degree Fahrenheit, and ${newton} in  degree Newton.`;
                  break;
              case degrees[1]: // executes for Celsius temperature
                  celsius = temperature;
                  kelvin = celsius + 273;
                  fahrenheit = Math.floor(celsius * (9/5) + 32);
                  newton = Math.floor(celsius * (33/100));
                  return `${celsius} in degrees Celsius , ${kelvin} in degrees Kelvin, ${fahrenheit} in degree Fahrenheit, and ${newton} in degree Newton.`;
                  break;
              case degrees[2]: // executes for Fahrenheit temperature
                  fahrenheit = temperature;
                  celsius = Math.floor((fahrenheit - 32) * 5/9);
                  kelvin = celsius + 273;
                  newton = Math.floor(celsius * (33/100));
                  return `${fahrenheit} in degrees Fahrenheit , ${celsius} in degrees Celsius, ${kelvin} in Kelvin, and ${newton} in Newton.`;
                  break;
              case degrees[3]: // executes for Newton temperature
                  newton = temperature;
                  celsius = Math.floor(newton / 0.3);
                  kelvin = celsius + 273;
                  fahrenheit = Math.floor(celsius * (9/5) + 32);
                  return `${newton} in degrees Newton,  ${celsius} in degrees Celsius, ${kelvin} in Kelvin, and ${fahrenheit} in Fahrenheit.`;
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
  
  console.log(tempConv(292, degrees[0]));   // Input to execute switch case[0]:
  console.log(tempConv(43, degrees[1]));    // Input to execute switch case[1]:
  console.log(tempConv(67, degrees[2]));    // Input to execute switch case[2]:
  console.log(tempConv(8, degrees[3]));     // Input to execute switch case[3]:
  console.log(tempConv(9, 'ernesto'));      // Input to execute else if where degree name is incorrect:
  console.log(tempConv('Z', degrees[1]));   // Input to execute else if where degree input number is incorrect:
  
