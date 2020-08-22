import * as shopModule from './shop-module.js';

let baseForm = document.forms['base__value'];
let orderForm = document.forms['make__order'];

function startRender(){
    baseForm.balance.value = shopModule.balance + ' UAH';
    baseForm.beer.value = shopModule.products.beer.count + ' total';
    baseForm.wine.value = shopModule.products.wine.count + ' total';
    baseForm.pepsi.value = shopModule.products.pepsi.count + ' total';
}
startRender()

let btnAdd = document.querySelector('.add__to__order')
let btnMakeOrder = document.querySelector('.make__order');
let orderList = document.querySelector('.order__list');

btnAdd.addEventListener('click', function(){
    addToOrder()
    renderOrder()
    orderForm.count.value = ''
})

btnMakeOrder.addEventListener('click', function(){
    makeOrder()
    startRender()
    
    document.querySelector('.result').innerHTML += orderList.innerHTML;
    orderList.innerHTML = '';
    document.querySelector('.result').innerHTML += `Your total is: ${baseForm.balance.value}`
})

function addToOrder(){
    let count = orderForm.count.value;
    let name;

    for(let i = 1; i < orderForm.elements.length - 2; i++){
        
        if(orderForm.elements[i].checked){
            name = orderForm.elements[i].value
            break
        }     
    }
    shopModule.sendToOrders(name, count)
}

function renderOrder(){
    document.querySelector('.order__list').innerHTML = '';
    for(let i = 0; i< shopModule.orders.length; i++){
        document.querySelector('.order__list').innerHTML += `<p>${shopModule.orders[i].name}: ${shopModule.orders[i].count}</p>`
    }
}

function makeOrder(){
    shopModule.makeOrder()
}



