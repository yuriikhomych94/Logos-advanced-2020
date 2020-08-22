class MyString {
    constructor(str){
        this.str = str;
    }
    reverse() {
        return this.str.split('').reverse().join('')
    }
    ucFirst() {
        return this.str[0].toUpperCase() + this.str.slice(1);
    }
    //доробити !!!!!!!!!!!
    ucWords() {
        return this.str.charAt(0).toUpperCase() + this.str.substr(1).toLowerCase();
    }

}

const myString = new MyString('IVAN');
const ucFirst = new MyString('arsenal');
const ucWords = new MyString('arsenal arsenal arsenal');

console.log(myString.reverse());
console.log(ucFirst.ucFirst());
// ДОРОБИТИ
console.log(ucWords.ucWords());

