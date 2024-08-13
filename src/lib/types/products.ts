export interface Product {
	id: string;
	name: string;
	price: number;
	image: string;
	description: string;
	discount?: number;
	tag?: string;
}
//  Add to Cart Type for Ecommerce application

export interface CartItem {
	product: Product;
	quantity: number;
	productPrice: number;
}
