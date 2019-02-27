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
    calculate(unitInput, numberInput);
}

function calculate(unitInput, numberInput) {
    let portion = unitConversion(unitInput, numberInput);
    let percentage = numberToPercentage(portion);
    let roundedPercentage = percentage.toFixed(2);
    document.getElementById('result').innerHTML = roundedPercentage + '%';
}

function unitConversion(unitInput, numberInput) {
    switch (unitInput) {
        case 'seconds':
            return secondCalculation(numberInput);
        case 'minutes':
            return minuteCalculation(numberInput);
        case 'hours':
            return hourCalculation(numberInput);
        case 'days':
            return dayCalculation(numberInput);
        case 'weeks':
            return weekCalculation(numberInput);
        case 'months':
            return monthCalculaion(numberInput);
        case 'years':
            return yearCalculation(numberInput);
    }
}

function secondCalculation(seconds) {
    return minuteCalculation(seconds / 60)
}

function minuteCalculation(minutes) {
    return hourCalculation(minutes / 60)
}

function hourCalculation(hours) {
    return dayCalculation(hours / 24)
}

function dayCalculation(days) {
    // 268 days is the average duration of a pregnancy (says Wikipedia)
    return days / 268;
}

function weekCalculation(weeks) {
    return dayCalculation(weeks * 7);
}

function monthCalculaion(months) {
    return dayCalculation(months * 30.416);
}

function yearCalculation(years) {
    return dayCalculation(years * 365.25);
}

function numberToPercentage(number) {
    return number * 100;
}
