let firstName = document.getElementById('first__name');
let lastName = document.getElementById('last__name');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let btn = document.getElementById('btn__sign__up')






//VALIDATE
let regExpName =  /^[a-z A-Z]{1,20}$/;
let regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/;
let regExpPass = /^[a-z A-Z 0-9]{8,15}$/


btn.addEventListener('click', function() {

    if(regExpName.test(firstName.value)) {
        firstName.style.borderBottom = '2px solid rgb(43, 204, 37)';
    } else {
        firstName.style.borderBottom = '2px solid rgb(255, 44, 44)';
    }
    if(regExpName.test(lastName.value)) {
        lastName.style.borderBottom = '2px solid rgb(43, 204, 37)';
    } else {
        lastName.style.borderBottom = '2px solid rgb(255, 44, 44)';
    }
    if(regExpEmail.test(email.value)) {
        email.style.borderBottom = '2px solid rgb(43, 204, 37)';
    } else {
        email.style.borderBottom = '2px solid rgb(255, 44, 44)';
    }
    if(regExpPass.test(pass.value)) {
        pass.style.borderBottom = '2px solid rgb(43, 204, 37)';
    }
    else {
        pass.style.borderBottom = '2px solid rgb(255, 44, 44)';
    }


})
//.................................................................




// LOCAL STORAGE

let users = [];

btn.addEventListener('click', function () {
    let name = form.firstName.value;
    let lastName = form.lastName.value;
    let email = form.email.value;
    let password = form.pass.value;


    let obj = new User(name, lastName, email, password);

 
    if(localStorage.length > 0 && localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
    } 

    users.push(obj)
    console.log(users)
    localStorage.setItem('Users', JSON.stringify(users))
})



class User {
    constructor(firstName, lastName, email, pass) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pass = pass;
    }
}


btn.addEventListener('click', function () {
        if((regExpName.test(firstName.value)) && (regExpName.test(lastName.value)) && (regExpEmail.test(email.value)) && (regExpPass.test(pass.value))) {
        firstName.style.borderBottom = ''
        lastName.style.borderBottom = ''
        email.style.borderBottom = ''
        pass.style.borderBottom = ''
        form.reset()
    }
})






//SECOND BLOCK
let firstContainer = document.querySelector('.first__container')
let secondContainer = document.querySelector('.second__container')
let formSecond = document.forms['second__form__group']
let form = document.forms['form__group']
let btnS = document.getElementById('btn__sign__in')

let emailSignIn = document.getElementById('email__sign__in')
let passSignIn = document.getElementById('password__sign__in')


btnS.addEventListener('click', function() {
    firstContainer.style.display = 'none'
    secondContainer.style.display = 'block'
})

let btnSignIn = document.getElementById('btn__s')
let btnI = document.getElementById('btn__i')

btnI.addEventListener('click', function() {
    firstContainer.style.display = 'block'
    secondContainer.style.display = 'none'
})
//..................................................

//VALIDATE SECOND BLOCK
let regExpPassSignIn  = /^[a-z A-Z 0-9]{8,15}$/
let regExpEmailSignIn = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/;








btnSignIn.addEventListener('click', function() {
    if(regExpEmailSignIn.test(emailSignIn.value)) {
        emailSignIn.style.borderBottom = '2px solid rgb(43, 204, 37)';
    } else {
        emailSignIn.style.borderBottom = '2px solid rgb(255, 44, 44)';
    }
    if(regExpPassSignIn .test(passSignIn.value)) {
        passSignIn.style.borderBottom = '2px solid rgb(43, 204, 37)';
    }
    else {
        passSignIn.style.borderBottom = '2px solid rgb(255, 44, 44)';
    }
})



btnSignIn.addEventListener('click', function() {
    if((regExpEmailSignIn.test(emailSignIn.value)) && (regExpPassSignIn .test(passSignIn.value))) {
        emailSignIn.style.borderBottom = ''
        passSignIn.style.borderBottom = ''
        formSecond.reset()
    }
});
























//..................................................................................














function login() {
    
}









