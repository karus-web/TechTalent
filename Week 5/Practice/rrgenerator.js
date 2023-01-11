console.log("Enter your name?")
const person = {
  firstName : "karu",
  lastName : "shap",
  eyeColour : "black"
};
   let name1 = person.firstName + person.lastName ;
   let name2 = person.eyeColour ;
   console.log(' My name is '  +  name1 + ' and  My eye Colour is ' + name2 );

     // Generatimng random number from 0 to 7:
   
   console.log("Generating  random numbers from  0 to 7")
   for (let i = 0; i <7 ; i++) {
     var randNum =  Math.floor(Math.random() * 7) + 1;
     console.log(randNum)
   }
   
  let result = randNum;  
let statement;

switch (result) {
  case 0:
    statement = 'It is certain';
    break;
  case 1:
    statement= 'It is decidedly so';
    break;
  case 2:
    statement = 'Try again';
       break;
  case 3:
    statement = 'Unsure for now';
    break;
  case 4:
    statement = 'Dont count on it ';
    break;
  case 5:
    statement =  'Dont think so';
    break;
  case 6:
    statement  = 'Not looking too good';
    break;
  case 7:
    statement  = 'Probably';
    break;
    default:
    statement = 'Invalid statement';
}
   

    console.log(statement); 

