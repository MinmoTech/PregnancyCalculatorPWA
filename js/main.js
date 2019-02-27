window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
};

function submit() {
    let unitInput = document.getElementById('unitInput').value;
    let numberInput = document.getElementById('numberInput').value;
    
    
}

function calculate() {
    
}

function unitConversion() {
    
}
