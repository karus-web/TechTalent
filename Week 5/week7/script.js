const mainHeading = document.getElementById('main-heading');
function changeHeadingcolor() {
mainHeading.style.color ='red';

}
const myFirstListItem = document.querySelector('my-list');
 function changeListFont(){
    myFirstListItem.style.fontsize ='100pt';
}
let myList = document.querySelectorAll('.my-list');
function "changelistcolor(){
    for ( let i = 0; i < myList.length;  i++){
        myList[i].style.color = 'red';
    }
}