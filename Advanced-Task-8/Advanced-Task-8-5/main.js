// BTN ADD
const bad = document.getElementById('current__bad__words');
const add = document.querySelector('.add');
const words = document.querySelector('.words');
const reset = document.querySelector('.reset');
add.addEventListener('click', function () {
    bad.value += words.value + ' ';
    words.value = '';
});
// CENZOR
const area = document.getElementById('area');
const cenzor = document.querySelector('.btn__cenzor');
cenzor.addEventListener('click', function () {
    let badWords = bad.value.split(' ');
    let arrIndex = 0;
    let enteredText = area.value;
    for (arrIndex = 0; arrIndex < badWords.length; arrIndex++) {
        let currentBadWord = badWords[arrIndex];
        let i = 0;
        let replacementString = '';
        for (i = 0; i < currentBadWord.length; i++) {
            replacementString += '*';
        }
        let ff = '\\b' + currentBadWord + '\\b';
        let regex = RegExp(ff, 'gi');
        enteredText = enteredText.replace(regex, replacementString);
    }
    console.log(enteredText);
    area.value = enteredText;
});
reset.addEventListener('click', function () {
    bad.value = '';
});
