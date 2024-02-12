

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


eventEmitter.on("buy", (data) => {
    console.log(`bye item! price: ${data.price}`);
});

eventEmitter.on("add_to_cart", (data) => {
    if (data.addToCart) {
        console.log("item added to cart");
    }
});

eventEmitter.on("remove_from_cart", (data) => {

    if (data.deleted) {
        console.log("item removed from cart");
    }
});

eventEmitter.on("checkout", (data) => {
    console.log("order checkout, total amount:", data.total);
});

eventEmitter.emit("add_to_cart", { price: 100, addToCart: true, deleted: false });
eventEmitter.emit("remove_from_cart", { price: 100, addToCart: false, deleted: true });
eventEmitter.emit("buy", { price: 500, addToCart: false, deleted: false });
eventEmitter.emit("checkout", { total: 600, addToCart: false, deleted: false });
