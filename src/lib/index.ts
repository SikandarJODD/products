import { derived, writable, type Writable } from 'svelte/store';
import type { CartItem, Product } from './types/products';

// using writable for global state management
export let products: Product[] = [
	{
		id: 'noice_#10',
		name: 'Noise Force Plus',
		price: 100,
		image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/f/k/-original-imagkjtjgdzhgdz5.jpeg?q=70',
		description: 'Neo Gents V Analog Watch - For Men NQ1849SL03'
	},
	{
		id: 'fossil_#12',
		name: 'FOSSIL',
		price: 200,
		image: 'https://rukminim2.flixcart.com/image/612/612/k1zbssw0pkrrdj/watch-refurbished/u/v/c/c-fs4662-fossil-original-imafhcgdmbvgefhx.jpeg?q=70',
		description: 'Izzy Analog Watch - For Women ES4782'
	}
];

export let cart: Writable<CartItem[]> = writable([]);

// Total Unique items in the cart
export let totalUniqueItems = derived(cart, ($cart) => {
	return $cart.length;
});

// Total items in the cart
export let totalItems = derived(cart, ($cart) => {
	return $cart.reduce((acc, item) => acc + item.quantity, 0);
});

// Add to Cart function
export let addToCart = (product: Product, quantity: number) => {
	cart.update(($cart) => {
		// so we implement a simple check to see if the product is already in the cart
		let itemIndex = $cart.findIndex((i) => i.product.id === product.id);
		if (itemIndex === -1) {
			$cart.push({ product, quantity });
		} else {
			// Product exists in the cart, update the quantity
			$cart[itemIndex].quantity += quantity;
		}
		return $cart;
	});
};

// Remove from Cart function : Remove Button - Flipkart
export let removefromCart = (productId: string) => {
	cart.update(($cart) => {
		return $cart.filter((i) => i.product.id !== productId);
	});
};

// Clear Cart function : Clear Cart Button - Flipkart
export let clearCart = () => {
	cart.set([]);
};

// we need 3 buttons remove, add and input text box to update the quantity of the product

// Update the Quantity of Cart Item
export let updateQuantity = (productId: string, quantity: number) => {
	cart.update(($cart) => {
		let itemIndex = $cart.findIndex((i) => i.product.id === productId);
		if (itemIndex !== -1) {
			$cart[itemIndex].quantity = quantity;
		}
		return $cart;
	});
};

export let increaseQuantity = (productId: string) => {
	cart.update(($cart) => {
		let itemIndex = $cart.findIndex((i) => i.product.id === productId);
		if (itemIndex !== -1) {
			$cart[itemIndex].quantity += 1;
		}
		return $cart;
	});
};

export let decreaseQuantity = (productId: string) => {
	cart.update(($cart) => {
		let itemIndex = $cart.findIndex((i) => i.product.id === productId);
		if (itemIndex !== -1) {
			$cart[itemIndex].quantity -= 1;
		}
		return $cart;
	});
};

export let isPresentInCart = (productId: string): boolean => {
	let isPresent = 0;
	cart.subscribe(($cart) => {
		isPresent = $cart.findIndex((i) => i.product.id === productId);
	});
	return isPresent === -1 ? false : true;
};
