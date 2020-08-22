function max(a:number, b:number, ...args:number[]) {
    return Math.max(a, b, ...args);
}

console.log(max(398, 325, 2351, 491)); //2351
console.log(max(2, 7)); //7