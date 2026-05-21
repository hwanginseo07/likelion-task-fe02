'use strict';
document.getElementById('btn').addEventListener('click', signup);

function signup() {
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;

    localStorage.setItem(id, pw);

    alert('회원가입 완료');
}

document.getElementById('loginbtn').addEventListener('click', login);

function login() {

    const loginid = document.getElementById('loginid').value;
    const loginpw = document.getElementById('loginpw').value;

    const userdata = localStorage.getItem(loginid);

    if (!userdata) {
        alert('아이디를 확인해주세요.');
        return;
    }

    if (userdata === loginpw) {
        alert('로그인 성공');
        localStorage.setItem('user', loginid);
        location.href = 'todo.html';

    } else {
        alert('비밀번호를 확인해주세요.');
    }
}
