const email = document.querySelector('.email');
const password = document.querySelector('.password');

let validEmail, validPassword = false;

email.addEventListener('focus', () => {
    gsap.to('.email-info', 0, { height: 0 });
    gsap.to('.email-info', .5, { height: "auto" });
});

email.addEventListener('blur', () => {
    gsap.to('.email-info', .5, { height: 0 });
});

password.addEventListener('focus', () => {
    gsap.to('.password-info', 0, { height: 0 });
    gsap.to('.password-info', .5, { height: "auto" });
});

password.addEventListener('blur', () => {
    gsap.to('.password-info', .5, { height: 0 });
});

// Email Validation
email.addEventListener('input', () => {
    validateEmail(email.value)
});

function validateEmail(value) {
    email.style.borderColor = "var(--yellow)";
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
        email.style.borderColor = "var(--green)";
        validEmail = true;
        checkValidation();
    } else {
        email.style.borderColor = "var(--red)";
    }
}

// Password Validation
const hasNumber = document.querySelector('.hasNumber');
const hasCapital = document.querySelector('.hasCapital');
const hasSmall = document.querySelector('.hasSmall');
const hasSpecial = document.querySelector('.hasSpecial');
const validLength = document.querySelector('.validLength');
const specialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

password.addEventListener('input', () => {
    validatePassword(password.value);
    console.log(password.value)
});

function validatePassword(value) {
    let checker = 0;
    password.style.borderColor = "var(--yellow)";

    if (/\d/.test(value)) {
        hasNumber.classList.add('check');
        checker = checker + 1;
    } else {
        hasNumber.classList.remove('check');
        checker = checker - 1;
    }

    if (/[A-Z]/.test(value)) {
        hasCapital.classList.add('check');
        checker = checker + 1;
    } else {
        hasCapital.classList.remove('check');
        checker = checker - 1;
    }

    if (/[a-z]/.test(value)) {
        hasSmall.classList.add('check');
        checker = checker + 1;
    } else {
        hasSmall.classList.remove('check');
        checker = checker - 1;
    }

    if (specialCharacters.test(value)) {
        hasSpecial.classList.add('check');
        checker = checker + 1;
    } else {
        hasSpecial.classList.remove('check');
        checker = checker - 1;
    }

    if (value.length >= 6) {
        validLength.classList.add('check');
        checker = checker + 1;
    } else {
        validLength.classList.remove('check');
        checker = checker - 1;
    }

    if (checker == 5) {
        password.style.borderColor = "var(--green)";
        validPassword = true;
        checkValidation();
    } else {
        password.style.borderColor = "var(--red)";
    }
}

function checkValidation() {
    if (validEmail, validPassword) {
        document.querySelector('.submit-btn').disabled = false;
    }
}

document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to('.right', 0, {
        display: "none"
    })

    if (window.innerWidth > 768) {
        gsap.to('.left', .5, {
            width: "100%"
        })
    } else {
        gsap.to('.left', .5, {
            height: "100%"
        })
    }
    document.querySelector('.left').style.textAlign = "center";
    document.querySelector('.title').innerHTML = "Awesome the credentials are valid";
    document.querySelector('.app-info').innerHTML = "";
});