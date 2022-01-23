'use strict';

let inital = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let tel = document.getElementById('tel');
let city = document.getElementById('city');


function check() {
    if (inital.value == "") {
        let fio = 'Заполните Имя';
        document.getElementById("result").innerHTML = fio;
        return fio;
    }
    else if (email.value == "") {
        let pochta = 'Заполните Электронную почту';
        document.getElementById("result").innerHTML = pochta;
        return pochta;
    }
    else if (password.value == "") {
        let parol = 'Заполните Пароль';
        document.getElementById("result").innerHTML = parol;
        return parol;
    }
    else if (tel.value == "") {
        let phone = 'Заполните Мобильный телефон';
        document.getElementById("result").innerHTML = phone;
        return phone;
    }

    else if (city.value == "") {
        let gorod = 'Заполните Город';
        document.getElementById("result").innerHTML = gorod;
        return gorod;
    }
    else if (password.value.length < 8 ) {
        let parolLength = 'Пароль должен быть больше 8 символов';
        document.getElementById("result").innerHTML = parolLength;
        return parolLength;
    }
    else {
        alert (`Добро пожаловать, ${inital.value}!`)
    }
}
