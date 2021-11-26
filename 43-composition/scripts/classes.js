class Product {
	constructor(name, sku, price, stock = 0) {
		this.name = name
		this.sku = sku
		this.price = price
		this.stock = stock
	}

	decreaseStock = (removed = 1) => {
		if (this.stock - removed < 0) {
			throw new Error("Too few items of this product in stock.")
		}
		this.stock -= removed
		return this
	}

	increaseStock = (added) => {
		this.stock += added
		return this
	}
}

class Basket {
	constructor(products = []) {
		this.content = products
	}

	addProduct(product) {
		if (!product instanceof Product) {
			throw new Error("That won't fit in the basket.")
		}
		this.content.push(product)
		return this
	}

	removeProduct(product) {
		this.content = this.content.filter(item => item !== product)
		return this
	}
}
