'use strict'

const inputForm = document.getElementById('input-form'); // FORM el
const formInput = document.getElementById('text-input'); // INPUT el
// we can get value from INPUT element< not FORM !!!
let userInputValue;
const resultTextBlock = document.getElementById('result')
const resultStrongText = document.getElementById('user-input-text');
const resultText = document.getElementById('result-text');


function getUserInputData(currentEvent){
    currentEvent.preventDefault();
    const userInput = formInput.value;
    
    if (userInput === ''){
        alert('Please input a value');
    } else {
        userInputValue = userInput;
        cleanString(userInputValue);
        cleanInput();
        resultStrongText.innerText = userInputValue;
        resultTextBlock.setAttribute('display','block');
        let cleanedString = cleanString(userInputValue);
        
        resultText.innerText = isPalindrome(cleanedString) ? ' is a palindrome' : " is not a palindrome  ";
    }
}

function cleanInput() {
    formInput.value = '';
}

function cleanString(str) {
    const regex = /[\w]/g;
    let result = str.toString();
    result = result.match(regex);
    result = result.join('');
    result = result.replace(/[\_]/g,'');
    result = result.toLowerCase();
    return result;
}

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

const reverseString = (str) => str.split('').reverse().join('');

function isPalindrome (str){
    return str === reverseString(str);
}

inputForm.addEventListener('submit', getUserInputData);