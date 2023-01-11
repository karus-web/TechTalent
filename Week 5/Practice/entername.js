
function nameprompt() {
let text;
let person = prompt("Please type your name:", "Name");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?";
    }
      document.getElementById("demo").innerHTML = text;
    console.log(text)

}    
function askquestion() {
    let qtext;
    let question = prompt("Please type in a question:", "Question");
        if (question == null || question == "") {
            qtext = "User cancelled the prompt.";
        } else {
            qtext = "This is your question : " + question + "";
        }
          document.getElementById("display").innerHTML = qtext;
        console.log(qtext)
    
    }   





    function askrandomquestion() {
        let ranqtext;
        let question = prompt("Please type in a question:", "Question");
            if (question == null || question == "") {
                ranqtext = "User cancelled the prompt.";
            } else {
                ranqtext = "This is your question : " + question + "";
            }
              document.getElementById("display1").innerHTML = ranqtext;
            console.log(ranqtext)
        
        }   



       
     
    



 // Temperature conversion fron Celsius to Fahrenheit:
      function  cToF(celsius)
      {
          //code to be executed:
         
       var cTemp = celsius;                        // creating a variable  cTemp for celsius:
       var FarTemp1 = cTemp *(9 / 5) + 32;        // Formula to convert C to F;
       console.log('actual value : ' + FarTemp1);
       var FarTemp =FarTemp1.toFixed(4);          // rounding to 4 decimal using toFixed:
       console.log('round to 4 decimal : ' +FarTemp);     
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
         console.log('actual value : ' + cTemp1);
         var cTemp = cTemp1.toFixed(4);             // rounding to 4 decimal using toFixed:
         console.log('rounded to 4 decimal : ' +cTemp);
         var  Celsius = Math.floor(cTemp);          // creating a variable that is stored as 'Celsius' and rounded that value using 'Math.floor':
         var message = fTemp+ ' \xB0F is ' + Celsius + ' \xB0C.';      //string interpolation to display answer:    
             console.log(message);      
         
       }
   
           cToF(77.2);     // Input Temperature in Celsius to convert into Fahrenheit:
           FToC(45.6);      // Input Temperature in Fahrenheit to convert into Celsius:
