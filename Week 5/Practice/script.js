console.log("Helllo world");
console.log('Location of Tech talent Academy:57 colvile row, Birmingham');
console.log(40);
console.log('Hello, my name is Android and I am '+ 40 +' years old');
console.log(10 + 2, "plus");
console.log(10 - 2, "minus");
console.log(10 * 2, "multiply");
console.log(10 / 2, "divide");
console.log('Add 3.5 To your age: I am 40 + 3.5' +'years old');
console.log(2022-1969);
console.log(65/240);
console.log(0.2709*123);
console.log(((4+2) * 6/2) % 3);
var FavourtiteFood = "pizza";
var Numberofslice ="8";
console.log(FavourtiteFood, Numberofslice);
console.log('printthevalue saved to favouritefood');

console.log('HELLO WORLD');
let name;
console.log(name);

const response=confirm("Are you sure you want to ask random question?");
if(response){
    console.log("ok was pressed");
} else {
    console.log("cancel was pressed");
}
    

<button onclick="confirmAtion()"> confirm your choice</button>
<p id="display2"></p>unction confirmAtion() {
    let cctiontext;
         const confirmaction = () => {
         const response = confirm("Are you sure you want to do that?:", "cactiontext");
             if (response){
                 alert("Ok was pressed");
             }
              
             else {
                 alert("cancel was  pressed");
             }
               document.getElementById("display2").innerHTML = caciontext;
             console.log(cactiontext)
         
         }   