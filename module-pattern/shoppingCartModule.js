/*
===========================================
SHOPPING CART - MODULE PATTERN
===========================================

This version uses:

- Closure
- Encapsulation
- Private variables
- Public methods

The cart data cannot be accessed directly
from outside the module.
===========================================
*/

const ShoppingCart = (function () {

    /*
    ---------------------------------------
    PRIVATE DATA
    ---------------------------------------
    */

    let cart = [];

    /*
    ---------------------------------------
    PRIVATE HELPER FUNCTION
    ---------------------------------------
    */

    function calculateTotal() {

        return cart.reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0);
    }

    /*
    ---------------------------------------
    PUBLIC API
    ---------------------------------------
    */

    return {

        /*
        Add Item
        */
        addItem(name, quantity, price) {

            cart.push({
                name,
                quantity,
                price
            });

            console.log(`${name} added to cart.`);
        },

        /*
        Remove Item
        */
        removeItem(name) {

            const originalLength = cart.length;

            cart = cart.filter(item => item.name !== name);

            if (cart.length < originalLength) {
                console.log(`${name} removed.`);
            } else {
                console.log(`${name} not found.`);
            }
        },

        /*
        View Cart
        */
        viewCart() {

            if (cart.length === 0) {
                console.log("Cart is empty.");
                return;
            }

            console.log("\n===== SHOPPING CART =====");

            cart.forEach(item => {

                const itemTotal =
                    item.quantity * item.price;

                console.log(
                    `${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`
                );
            });

            console.log("------------------------");
            console.log(
                `Total: ${calculateTotal().toFixed(2)} TND`
            );
        },

        /*
        Clear Cart
        */
        clearCart() {
            cart = [];
            console.log("Cart cleared.");
        }
    };

})();

/*
===========================================
TESTING
===========================================
*/

ShoppingCart.addItem("Apple", 2, 1.5);
ShoppingCart.addItem("Orange", 3, 2.0);

ShoppingCart.viewCart();

ShoppingCart.removeItem("Apple");

ShoppingCart.viewCart();

ShoppingCart.clearCart();

ShoppingCart.viewCart();