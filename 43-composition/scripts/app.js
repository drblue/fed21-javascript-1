/**
 * Composition
 *
 */


const uncomfortableBroom = new Product("Uncomfortable Broom", "UBRO", 42, 5);
const selfwateringCan = new Product("Selfwatering can", "DUMB", 13, 1);
uncomfortableBroom
	.increaseStock(15)
	.decreaseStock(5);

const johans_basket = new Basket()
johans_basket
	.addProduct(uncomfortableBroom)
	.addProduct(selfwateringCan);
