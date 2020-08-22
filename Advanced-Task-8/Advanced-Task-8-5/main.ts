// BTN ADD
const bad = document.getElementById('current__bad__words') as HTMLInputElement;
const add = document.querySelector('.add') as HTMLElement;
const words = document.querySelector('.words') as HTMLInputElement;
const reset = document.querySelector('.reset') as HTMLButtonElement;
add.addEventListener('click', function(): void {
    bad.value += words.value + ' ';
    words.value = '';       
})

// CENZOR
const area = document.getElementById('area') as HTMLTextAreaElement;
const cenzor = document.querySelector('.btn__cenzor') as HTMLButtonElement;
cenzor.addEventListener('click', function (): void {
            let badWords: string[] = bad.value.split(' ');

            let arrIndex: number = 0;
            let enteredText: string|number = area.value;
            for (arrIndex = 0; arrIndex < badWords.length; arrIndex++) {
                let currentBadWord = badWords[arrIndex];
                let i: number = 0;
                let replacementString: string = '';

                for (i = 0; i < currentBadWord.length; i++) {
                    replacementString += '*';
                }
                let ff: string = '\\b' + currentBadWord + '\\b';
                let regex = RegExp(ff, 'gi');
                enteredText = enteredText.replace(regex, replacementString);
            }
            console.log(enteredText);
            area.value = enteredText;
});

reset.addEventListener('click', function(): void {
    bad.value = '';
})