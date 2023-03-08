function clrmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Listen to Blog page Submit Button //

const form = document.querySelector('#create-account-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const entryInput = document.querySelector('#entry');

form.addEventListener('submit', (event) => {
    validateForm();
    console.log(isFormValid());
    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();
    }
});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //Title
    if (titleInput.value.trim() == '') {
        setError(titleInput, 'Title can not be empty');
    } else if (titleInput.value.trim().length < 2 || titleInput.value.trim().length > 15) {
        setError(titleInput, 'Title must be min 2 and max 15 charecters');
    } else {
        setSuccess(titleInput);
    }
    //Author
    if (authorInput.value.trim() == '') {
        setError(authorInput, 'Authors name can not be empty');
    } else {
        setSuccess(authorInput);
    }
    //Enter Comments
    if (entryInput.value.trim() == '') {
        setError(entryInput, 'Comments can not be empty');
    } else {
        setSuccess(entryInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
//display submitted values as string from URL
const paragraph = document.querySelector('#paragraph');
console.log("line1" + paragraph);
const params = new URLSearchParams(window.location.search);
console.log("line2" + params);

params.forEach((value, key) => {
    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.createElement('br'));
});


// display comments code by clicking button (Outside logic)

let textbox=document.getElementById("textbox")
let comments=document.getElementById("comments")
let add=()=>{
        let value=textbox.value
        let ul=document.getElementById("ul")
        let list=document.createElement("li")
        var date = new Date();
        var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        var date_time = current_date+" "+strTime;
        list.innerHTML=`comment:${value}`+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+`Created At:${date_time}`
        ul.insertBefore(list,ul.firstElementChild)
        textbox.value=""
    }
