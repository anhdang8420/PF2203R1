class Product {
    name;
    price;
    image;
    category;

    constructor(name, price, image, category) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getImage() {
        return this.image;
    }

    getCategory() {
        return this.category;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setImage(image) {
        this.image = image;
    }

    setCategory(category) {
        this.category = category;
    }
}
