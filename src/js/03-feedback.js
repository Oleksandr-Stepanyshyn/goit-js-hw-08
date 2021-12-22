var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

const savedValue = parseStorage();
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
    console.log(formValue);
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(!form.elements.email.value.trim() && !form.elements.message.value.trim());
    if (!form.elements.email.value.trim() && !form.elements.message.value.trim()) {
        return;
    };
    const savedValue = parseStorage();
    console.log(savedValue);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
};

function parseStorage() {
   return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
}