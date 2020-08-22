function CoffeeMake (){}

    CoffeeMake.prototype.on = function () {
        console.log('on |', this.coffee)
    }
    CoffeeMake.prototype.off = function(){
        console.log('off ()', this.coffee)
}

//DRIP COFFEE MAKER
function DripCoffeeMaker(coffee) {
    this.coffee = coffee;
}
DripCoffeeMaker.prototype = CoffeeMake.prototype;

DripCoffeeMaker.prototype.addMilk = function() {
    console.log('Add:', this.coffee)
}

//COFFE MACHINE
function CoffeeMachine (coffee){
    this.coffee = coffee;
}

CoffeeMachine.prototype = DripCoffeeMaker.prototype;

CoffeeMachine.prototype.createFoam = function() {
    console.log('Create:', this.coffee)
}

//ESPRESSO MAKER
function EspressoMaker(coffee) {
    this.coffee = coffee;
}

EspressoMaker.prototype = CoffeeMachine.prototype;

EspressoMaker.prototype.createEspresso = function () {
    console.log('Make:', this.coffee);
}



const dripCoffeeMaker = new DripCoffeeMaker('Milk');
const coffeeMachine = new CoffeeMachine('Foam');
const espressoMaker = new EspressoMaker('Espresso');
dripCoffeeMaker.on();
dripCoffeeMaker.off();
dripCoffeeMaker.addMilk();

coffeeMachine.on();
coffeeMachine.off();
coffeeMachine.addMilk();
coffeeMachine.createFoam();

espressoMaker.on();
espressoMaker.off();
espressoMaker.addMilk();
espressoMaker.createFoam();
espressoMaker.createEspresso();






