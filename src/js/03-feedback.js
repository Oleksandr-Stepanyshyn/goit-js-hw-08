var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";


const savedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

try {
    form.elements.email.value = savedValue.email;
    form.elements.message.value = savedValue.message;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    const formValue = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(savedValue);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.elements.email.value = "";
    form.elements.message.value = "";
}