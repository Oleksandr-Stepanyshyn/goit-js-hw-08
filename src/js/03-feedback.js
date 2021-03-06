var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const savedValue = parseStorage();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    const formValue = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
};

function onFormSubmit(e) {
    e.preventDefault();
    if (!form.elements.email.value.trim() || !form.elements.message.value.trim()) {
        return;
    };
    const savedValue = parseStorage();
    console.log(savedValue);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
};

function fillFormFromStorage() {
    if (!savedValue) return;
    try {
    form.elements.email.value = savedValue.email;
    form.elements.message.value = savedValue.message;
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
           };
};
fillFormFromStorage();

function parseStorage() {
   return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
}