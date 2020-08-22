class FirstWorker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalaryFirstWorker(){
        return this.rate * this.days
    }
}

const worker = new FirstWorker('Ivan', 'Ivanov', 10, 31);

console.log(worker.firstName);
console.log(worker.secondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalaryFirstWorker());


class SecondWorker extends FirstWorker{
    constructor(firstName, secondName, rate, days){
        super(firstName, secondName, rate, days)
    }
    getSalarySecondWorker() {
        return this.rate * this.days;
    }
    get salary(){
        return this.getSalaryFirstWorker() + this.getSalarySecondWorker() - this.days - this.days;
    }
}

const secondWorker = new SecondWorker('Petro', 'Petriv', 12, 31);
console.log(secondWorker.firstName);
console.log(secondWorker.secondName);
console.log(secondWorker.rate);
console.log(secondWorker.days);
console.log(secondWorker.getSalarySecondWorker());


console.log(secondWorker.salary);



