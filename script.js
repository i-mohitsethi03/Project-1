// Array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Add the product to the cart array
    cart.push({ name: productName, price: productPrice });

    // Update the cart count
    document.getElementById('cart-count').innerText = cart.length;
}

// Bind the 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action (page reload)

        // Get product details
        let productName = this.parentElement.querySelector('#product-name').innerText;
        let productPrice = parseFloat(this.parentElement.querySelector('#product-price').innerText.replace('$', ''));

        // Add product to cart
        addToCart(productName, productPrice);
    });
});
