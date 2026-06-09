/*
===========================================
SHOPPING CART - PROCEDURAL PROGRAMMING
===========================================

This version uses:
- Global variables
- Standalone functions
- Direct manipulation of data

The goal is to demonstrate a classic
procedural programming approach.
*/

// Global cart array
let cart = [];

/*
-------------------------------------------
Add Item
-------------------------------------------
Adds a new item to the shopping cart.
*/
function addItem(name, quantity, price) {
    cart.push({
        name,
        quantity,
        price
    });

    console.log(`${name} added to cart.`);
}

/*
-------------------------------------------
View Cart
-------------------------------------------
Displays all cart items and total price.
*/
function viewCart() {

    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    let total = 0;

    console.log("\n===== SHOPPING CART =====");

    cart.forEach(item => {

        const itemTotal = item.quantity * item.price;

        total += itemTotal;

        console.log(
            `${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`
        );
    });

    console.log("------------------------");
    console.log(`Total: ${total.toFixed(2)} TND`);
}

/*
-------------------------------------------
Remove Item
-------------------------------------------
Removes an item by name.
*/
function removeItem(name) {

    const originalLength = cart.length;

    cart = cart.filter(item => item.name !== name);

    if (cart.length < originalLength) {
        console.log(`${name} removed.`);
    } else {
        console.log(`${name} not found.`);
    }
}

/*
-------------------------------------------
Clear Cart
-------------------------------------------
Removes all items.
*/
function clearCart() {
    cart = [];
    console.log("Cart cleared.");
}

/*
===========================================
TESTING
===========================================
*/

addItem("Apple", 2, 1.5);
addItem("Orange", 3, 2.0);


viewCart();

removeItem("Apple");

viewCart();

clearCart();

viewCart();