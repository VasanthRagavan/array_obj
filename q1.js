const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey', 'Meat'];

if (!shoppingCart.includes('Milk')) {
    shoppingCart.unshift('Milk');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

const indexOfHoney = shoppingCart.indexOf('Honey');
if (indexOfHoney !== -1) {
    shoppingCart.splice(indexOfHoney, 1);
}

const indexOfTea = shoppingCart.indexOf('Tea');
if (indexOfTea !== -1) {
    shoppingCart[indexOfTea] = 'Green Tea';
}

console.log(shoppingCart);
