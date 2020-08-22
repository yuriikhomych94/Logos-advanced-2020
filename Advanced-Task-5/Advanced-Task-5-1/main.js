function outer() {
    let num = 0;
    function inner(val) {
        num += val;
        console.log(num)
    } 
    return inner;
}

const sum = outer();

sum(3);   //3
sum(5);   //8
sum(228); // 236
sum(1234);//1470
