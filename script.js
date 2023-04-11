window.onload = function() {
    validatePasswords();
};

function validatePasswords () {
    const password = document.querySelector('#password');
    const confirm = document.querySelector('#confirm');
    const error = document.querySelector('#error-message');

    confirm.addEventListener('input', () => {
        if (password.value !== confirm.value) {
            password.classList.add('error');
            confirm.classList.add('error');
            error.textContent = '*Passwords do not match!'
        }
        else {
            password.classList.remove('error');
            confirm.classList.remove('error');
            error.textContent = ''
        }
    })

    password.addEventListener('input', () => {
        if (password.value !== confirm.value) {
            password.classList.add('error');
            confirm.classList.add('error');
            error.textContent = '*Passwords do not match!'
        }
        else {
            password.classList.remove('error');
            confirm.classList.remove('error');
            error.textContent = ''
        }
    })

}