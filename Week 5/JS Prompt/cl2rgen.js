
const prompt = require("prompt-sync")(); // defining code to promt user

// Generatimng random number from 0 to 7:
  function randomGen() { 
     var question;  // Question Variable
     question = prompt("Type your question : "); // asking user to enter a random question in console
     console.log("Your question is : " + question + " ?" ); // Printing Question to console

     var randNum =  Math.floor(Math.random() * 7) + 1;
     console.log("Your random number between 0 to 7 is = " + randNum);
    
    let result = randNum;  // moving random number into result
    let statement;
        // Switch statement to match the phrase with Random number
        switch (result) {
          case 0:
            statement = 'It is certain.';
            break;
          case 1:
            statement= 'It is decidedly so.';
            break;
          case 2:
            statement = 'Try again.';
              break;
          case 3:
            statement = 'Unsure for now.';
            break;
          case 4:
            statement = 'Dont count on it. ';
            break;
          case 5:
            statement =  'Dont think so.';
            break;
          case 6:
            statement  = 'Not looking too good.';
            break;
          case 7:
            statement  = 'Probably.';
            break;
            default:
            statement = 'Invalid statement.';
        }
      console.log(fname  + " your phrase for random number is : " + statement); 
    
    }
  
  var fname;
  fname = prompt("Enter your full name = "); // asking user to enter full name in console
  console.log("Your name is : " + fname );
  
  randomGen();
  

  


