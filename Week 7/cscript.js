function clrmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Listen to Contact page Submit Button //

const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const telephoneInput = document.querySelector('#telephone');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    validateForm();
    console.log(isFormValid());
    if (isFormValid() == true) {
        form.submit();
        sendEmail();
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
    //USERNAME
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Name can not be empty');
    } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    } else {
        setSuccess(usernameInput);
    }
    //EMAIL
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'Provide email address');
    } else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'Provide valid email address');
    }

    //TELEPHONE
    if (telephoneInput.value.trim() == '') {
        setError(telephoneInput, 'Telephone can not be empty');
    } else if (isTelephoneValid(telephoneInput.value)) {
        setSuccess(telephoneInput);
    } else {
        setError(telephoneInput, 'Telephone doesnt match UK Phone number');
    }
    //MESSAGE
    if (messageInput.value.trim() == '') {
        setError(messageInput, 'Message can not be empty');
    } else {
        setSuccess(messageInput);
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

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

function isTelephoneValid(telephone) {
    const reg = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/i;

    return reg.test(telephone);
}

const paragraph = document.querySelector('#paragraph');
const params = new URLSearchParams(window.location.search);

params.forEach((value, key) => {
    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.createElement('br'));
});

function sendEmail() {
    var link = "mailto:cake@cakeshop.com?cc=cakeshop@cakeshop.com&subject=" + encodeURIComponent("Email from User1") + "&body=" + encodeURIComponent(document.getElementById('message').value);
    window.location.href = link;
}
