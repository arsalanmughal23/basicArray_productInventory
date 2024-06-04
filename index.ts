type TYPE_COLORS = 'magenta' | 'orange' | 'black' | 'red' | 'blue' | 'green';

type TYPE_INVENTORY = {
    stock: number,
    colorOption: TYPE_COLORS[],
}

type TYPE_PRODUCT = {
    name: string,
    price: number,
    inventory: TYPE_INVENTORY
}

let products:TYPE_PRODUCT[] = [
    {
        name: 'T-Shirt',
        price: 1200,
        inventory: {
            stock: 5,
            colorOption: ['magenta', 'orange', 'green']
        }
    },
    {
        name: 'Trouser',
        price: 1500,
        inventory: {
            stock: 2,
            colorOption: ['magenta', 'orange']
        }
    },
    {
        name: 'Jeans',
        price: 2200,
        inventory: {
            stock: 3,
            colorOption: ['magenta', 'orange']
        }
    }
];

let calculateAmountByPercentage = (amount:number, percent:number):number => {
    if(percent < 0) percent = 0
    else if(percent > 100) percent = 100;
    return amount / 100 * percent
}

let handleUpdateColor = (product:TYPE_PRODUCT, color:TYPE_COLORS):void => {
    let productIndex = products.indexOf(product);
    product?.inventory?.colorOption?.push(color);

    switch(color){
        case 'red': case 'magenta': case 'orange': case 'red': case 'green':
            product.price += calculateAmountByPercentage(product?.price, 10);
            break;
        case 'blue': case 'black':
            product.price -= calculateAmountByPercentage(product?.price, 5);
            break;
        default:
            break;
    }

    products.splice(productIndex, 1, product);
}
let changeColor = (product:TYPE_PRODUCT, color:TYPE_COLORS):void => {
    if(product?.inventory?.colorOption?.includes(color)) {
        console.log(`>>> This product is already available in ${color} color`);
        return;
    }

    handleUpdateColor(product, color);
}

let displayProducts = ():void => {
    products.map(product => {
        let { name, price, inventory } = {...product};
        console.log(`name: ${name},\t price: ${price},\t stock: ${inventory.stock},\t colors: ${inventory.colorOption}`);
    })
}

// Black color is updateable with their price for 2nd index product
// changeColor(products[2], 'black');
changeColor([...products].pop(), 'black');

// Orange color is not updatable with their price because this product is already available in orange color
// changeColor(products[2], 'orange');

displayProducts();