//BLUPRINT OF AN OBJECT
class Product {
    static TAX = 0.08;
    constructor(name, price = 0, description = "") {
        //DYNAMIC PROPERTIES
        this.name = name;
        this.price = price;
        this.description = description;
    }
    toString() {
        return `NAME: "${this.name}", PRICE: $${this.price.toFixed(2)}`;
    }
    details() {
        return `
            NAME: "${this.name}"
            PRICE: $${this.price.toFixed(2)}
            DESCRIPTION:
            ${this.description}
        `;
    }
}
class LineItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}
class Order {
    constructor(customer, lineItems = []) {
        this.customer = customer;
        this.lineItems = lineItems;
    }
    getOrderTotal() {
        let total = 0;
        this.lineItems.forEach(
            line =>
                total += line.quantity * line.product.price
        );
        return total;
    }
}
class Customer {
    constructor(name) {
        this.name = name;
        this.orders = [];
        this.balanceDollars = 0;
    }
}

class Store {
    constructor(name, productList) {
        this.name = name;
        this.productList = productList;
        this.customerList = [];
    }
    showCatalog() {
        console.log("CATALOG NAME: " + this.name)
        this.productList.forEach((p, i) => console.log(i, p.toString()));
    }
    showDetailedCatalog() {
        console.log("CATALOG NAME: " + this.name)
        this.productList.forEach((p, i) => console.log(i, p.details()));
    }
}
//TESTS
const store = new Store("TARGET", [
    new Product("Pencil", 1.99, "Something erasable to write with."),
    new Product("Paper", 12.50, "Something to write or draw on."),
    new Product("Water", 1.99, "Something erasable to write with."),
    new Product("Sandwich", 12.50, "Something to write or draw on.")
]);
store.showDetailedCatalog();

console.log(store.productList[1].price)

let cust = new Customer("NINA MARIE");

const order = new Order(cust, [
    new LineItem(store.productList[2], 4),
    new LineItem(store.productList[3], 2)
]);
cust.orders.push(order)

console.log(order.getOrderTotal())

store.customerList.push(cust);