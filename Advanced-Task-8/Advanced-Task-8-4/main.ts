function getSqrt(num:number = +prompt()) {
    if(num != num * 1) {
        alert('Повинно бути числове значення')
    } else if(num <= 0) {
        alert('Введіть додатнє число')
    } else {
        alert(Math.sqrt(num))
    }
}

getSqrt();



