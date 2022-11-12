'use strict';

let form = document.getElementById('form');
form.addEventListener('submit', checkPassword);

function checkPassword(e) {
    e.preventDefault();
    let info = e.target;
    if (info.username.value !== 'test' || info.password.value !== '1234') {
        alert('Wrong password!');
        return;
    }
    window.location.href = 'content.html';
}