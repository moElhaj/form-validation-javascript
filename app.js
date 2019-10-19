const password = document.querySelector('.password');
const specialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

// DOM Selectors
var hasNumber = document.querySelector('.hasNumber');
var hasCapital = document.querySelector('.hasCapital');
var hasSpecial = document.querySelector('.hasSpecial');
var validLength = document.querySelector('.validLength');

password.addEventListener('input', () => {
    validate(password.value);
});

function validate(password) {

    if (/\d/.test(password)) {
        hasNumber.classList.add('hide');
    } else {
        hasNumber.classList.remove('hide');
    }

    if (/[A-Z]/.test(password)) {
        hasCapital.classList.add('hide');
    } else {
        hasCapital.classList.remove('hide');
    }

    if (specialCharacters.test(password)) {
        hasSpecial.classList.add('hide');
    } else {
        hasSpecial.classList.remove('hide');
    }

    if (password.length >= 6) {
        validLength.classList.add('hide');
    } else {
        validLength.classList.remove('hide');
    }
}