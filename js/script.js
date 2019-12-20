"use strict";

    let login = prompt('Ваш логин', '')

    if (login == 'Админ') {
        let pass = prompt('Ваш пароль', '');
        
        if (pass == 'Чёрный Властелин') {
            alert('Добро пожаловать!');
        }   else if (pass == '' || pass == null) {
            alert('Вход отменен');
        }   else {
            alert('Пароль неверен');
        }
        
    }   else if (login == '' || login == null) {
            alert('Вход отмене');
    }   else {
         alert('Я вас не знаю');
    }