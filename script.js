'use strict'

const inputForm = document.getElementById('input-form'); // FORM el
const formInput = document.getElementById('text-input'); // INPUT el
// we can get value from INPUT element< not FORM !!!
let userInputValue;
const resultText = document.getElementById('result')
const resultStrongText = document.getElementById('user-input-text');


function getUserInputData(currentEvent){
    currentEvent.preventDefault();
    const userInput = formInput.value;
    
    if (userInput === ''){
        alert('Please input a value');
    } else {
        userInputValue = userInput;
        console.log(userInputValue);
        cleanString(userInputValue);
        cleanInput();
        resultStrongText.innerText = userInputValue;
        resultText.setAttribute('display','block');
    }
}

function cleanInput() {
    formInput.value = '';
}

function cleanString(str) {
    console.log(str);
    const regex = /[\w]/g;
    let result = str.toString();
    result = result.match(regex);
    result = result.join('');
    result = result.replace(/[\_]/g,'');
    console.log('cleaned string = ' + result);
    return result;
}

function isPalindrome (string){
    string = string.toLowerCase();
    

}

inputForm.addEventListener('submit', getUserInputData);