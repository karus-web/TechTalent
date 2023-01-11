function  cToF(celsius)
{
       //code to be executed:
      
    var cTemp = celsius;                    // creating a variable cTemp
    var FarTemp = cTemp *(9 / 5) + 32;       // Formula to convert C to F
    console.log(FarTemp);      
    var Fahrenheit = Math.floor(FarTemp);   // creating a variable that is stored as Fahrenheit and rounded that value using Math.floor:
    var message = cTemp+'\xB0C is ' + Fahrenheit + ' \xB0F.';    //string interpolation to display answer:   
        console.log(message);      
    
  }

  function  FToC(Fahrenheit)
  {
         //code to be executed:
    
      var fTemp = Fahrenheit;                    // creating a variable fTemp:
      var cTemp =((fTemp -32) * (5 / 9));
      console.log(cTemp);
      var  Celsius = Math.floor(cTemp);       // creating a variable that is stored as Celsius and rounded that value using Math.floor:
      var message = fTemp+ ' \xB0F is ' + Celsius + ' \xB0C.';           //string interpolation to display answer:    
          console.log(message);      
      
    }

        cToF(75.2); // Input Temperature in Celsius to convert into Fahrenheit:
        FToC(63); // Input Temperature in Fahrenheit to convert into Celsius:
