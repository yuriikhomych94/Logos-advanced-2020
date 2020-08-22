export let balance = 1000;

export let products = {
    beer:{
        article: 'beer',
        name: 'Beer',
        price: 50,
        count: 100
    },
    wine:{
        article: 'wine',
        name: 'Wine',
        price: 50,
        count: 50
    },
    pepsi:{
        article: 'pepsi',
        name: 'Pepsi',
        price: 50,
        count: 80
    }
}

export let orders = [];


export function sendToOrders(name, count){
    let product = {
        article: products[name].article,
        name: products[name].name,
        price: products[name].price,
        count: count
    }
    orders.push(product)
}

export function makeOrder(){
    for(let i = 0; i < orders.length; i++){
        balance += orders[i].count * orders[i].price;
        products[orders[i].article].count -= orders[i].count;
    }
}

