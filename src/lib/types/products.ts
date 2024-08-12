export interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
	description: string;
}
//  Add to Cart Type for Ecommerce application

export interface CartItem {
    product : Product;
    quantity: number;
}
