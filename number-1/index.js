"use strict";

let a = document.getElementById('num-1');
let b = document.getElementById('num-2');

function culcSum() {
    let sum = +a.value + +b.value;
    document.getElementById("result").innerHTML = sum ;
    return sum;
}

function culcSub() {
    let sub = +a.value - +b.value;
    document.getElementById("result").innerHTML = sub;
    return sub;
}

function culcMult() {
    let mult = +a.value * +b.value;
    document.getElementById("result").innerHTML = mult;
    return mult;
}

function culcDiv() {
    if (b.value != 0) {
        let div = +a.value / +b.value;
    document.getElementById("result").innerHTML = div;
    return div;
        }
        else {
            let div = 'На ноль делить нельзя!';
        document.getElementById("result").innerHTML = div;
        return div;
}
}

