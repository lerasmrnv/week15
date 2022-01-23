"use strict";

const container = document.querySelector('.container');
const list = document.querySelector('.list');

function onColorChange(evt) {
    console.log(evt.target.value);
    switch(evt.target.value) {
        case 'white':
            container.style.background = 'white';
            container.style.color = 'black';
            break;
        case 'black':
            container.style.background = 'black';
            container.style.color = 'white';
            break;
        case 'blue':
            container.style.background = '#bdf8ff';
            container.style.color = '#00373d';
    }
}

list.addEventListener('change', onColorChange);

