import { derived, writable, type Writable } from 'svelte/store';
import type { CartItem, Product } from './types/products';
import { notify } from './utils';

// using writable for global state management
export let products: Product[] = [
	{
		id: 'noice_',
		name: 'Noise Force Plus',
		price: 3000,
		image:
			'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/f/k/-original-imagkjtjgdzhgdz5.jpeg?q=70',
		description: 'Neo Gents V Analog Watch - For Men Limited Edition',
		discount: 30,
		tag: 'Best Seller'
	},
	{
		id: 'fossil_',
		name: 'FOSSIL',
		price: 4500,
		image:
			'https://rukminim2.flixcart.com/image/612/612/k1zbssw0pkrrdj/watch-refurbished/u/v/c/c-fs4662-fossil-original-imafhcgdmbvgefhx.jpeg?q=70',
		description: 'Izzy Analog Watch - For Women ES4782  Limited Edition',
		discount: 20,
		tag: '20% off'
	},
	{
		id: 'yello_cimes',
		name: 'Yellow Chimes',
		price: 999,
		discount: 77,
		description: 'Yellow Chimes Crystal Stainless Steel Bracelet',
		image:
			'https://rukminim2.flixcart.com/image/612/612/l1xwqkw0/ring/7/s/g/-original-imagde4th6wevgnh.jpeg?q=70'
	},
	{
		id: 'devora_',
		name: 'Devora Rings',
		description: 'Devora Rings Gold Plated Cubic Zirconia Ring',
		price: 999,
		discount: 83,
		image:
			'https://rukminim2.flixcart.com/image/612/612/xif0q/ring/m/b/x/-original-imahyjfdrwpknpkm.jpeg?q=70'
	},
	{
		id: 'apple_mac',
		name: 'Apple 2022 MacBook Air',
		price: 99900,
		description: 'Apple M1 Chip 8-core CPU and 7-core GPU 256 GB SSD',
		image:
			'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70',
		tag: 'Best Seller',
		discount: 11
	},
	{
		id: 'vivo_t2_5g',
		name: 'Vivo T2 5G',
		price: 23999,
		discount: 33,
		description: 'Vivo T2 5G (Midnight Black, 128 GB)  (8 GB RAM)',
		image:
			'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70',
		tag: 'Lowest Price'
	},
	{
		id: 'samsung_galaxy',
		name: 'SAMSUNG Galaxy F14 5G',
		price: 16499,
		discount: 6,
		description: 'SAMSUNG Galaxy F14 5G (Sky Blue, 64 GB)  (4 GB RAM)',
		image:
			'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/5/z/galaxy-a14-sm-a145fzsdins-samsung-original-imagq6cp4mbhejzn.jpeg?q=70'
	},
	{
		id: 'asus_viobook',
		name: 'ASUS Vivobook Go',
		description: 'ASUS Vivobook Go Ryzen 5 Quard Code - (8 GB/512 SSD/Windows 11 Home)',
		price: 74990,
		discount: 38,
		image:
			'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/k/k/-original-imagpxgru35rbzwz.jpeg?q=70'
	},
	{
		id: 'hp_pavilion',
		name: 'HP Pavilion Gaming',
		description:
			'HP Pavilion Gaming Ryzen 5 Hexa Core - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650)',
		price: 56144,
		discount: 26,
		image:
			'https://rukminim2.flixcart.com/image/312/312/kcm9t3k0/computer/q/x/r/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg?q=70',
		tag: 'Lowest Price'
	},
	{
		id: 'united_denim',
		name: 'United DENIM',
		description: 'Men Relaxed Fit Jeans Mid Rise',
		price: 2999,
		discount: 84,
		image:
			'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/m/l/m/32-united197-dark-grey-united-denim-original-imagzb7rjxez2tgp.jpeg?q=70',
		tag: 'Special Price'
	}
];

export let cart: Writable<CartItem[]> = writable([]);

export let discount = 10; // 10% addtional discount on Total Price

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
			let productPrice = product.discount
				? product.price * (1 - product.discount / 100)
				: product.price;
			let originalPrice = product.price;
			$cart.push({ product, quantity, productPrice, productOriginalPrice: originalPrice });
		} else {
			// Product exists in the cart, update the quantity
			// We can add a check to see if the quantity is more than 5
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
			$cart[itemIndex].productOriginalPrice = $cart[itemIndex].product.price * quantity;
			if ($cart[itemIndex].product.discount) {
				$cart[itemIndex].productPrice =
					$cart[itemIndex].product.price *
					$cart[itemIndex].quantity *
					(1 - $cart[itemIndex].product.discount / 100);
			}
		}
		return $cart;
	});
};

export let increaseQuantity = (productId: string) => {
	cart.update(($cart) => {
		let itemIndex = $cart.findIndex((i) => i.product.id === productId);
		if (itemIndex !== -1) {
			if ($cart[itemIndex].quantity >= 5) {
				notify('We are Sorry, Only 5 units are allowed in each order');
			} else {
				$cart[itemIndex].quantity += 1;
				$cart[itemIndex].productOriginalPrice =
					$cart[itemIndex].product.price * $cart[itemIndex].quantity;
				if ($cart[itemIndex].product.discount) {
					$cart[itemIndex].productPrice =
						$cart[itemIndex].product.price *
						$cart[itemIndex].quantity *
						(1 - $cart[itemIndex].product.discount / 100);
				}
			}
		}
		return $cart;
	});
};

export let decreaseQuantity = (productId: string) => {
	cart.update(($cart) => {
		let itemIndex = $cart.findIndex((i) => i.product.id === productId);
		if (itemIndex !== -1) {
			$cart[itemIndex].quantity -= 1;
			$cart[itemIndex].productOriginalPrice =
				$cart[itemIndex].product.price * $cart[itemIndex].quantity;
			if ($cart[itemIndex].product.discount) {
				$cart[itemIndex].productPrice =
					$cart[itemIndex].product.price *
					$cart[itemIndex].quantity *
					(1 - $cart[itemIndex].product.discount / 100);
			}
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

export let totalPrice = derived(cart, ($cart) => {
	return $cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
});

// On Each Product we are giving 10% discount
export let totalDiscount = derived(cart, ($cart) => {
	return $cart.reduce((acc, item) => acc + item.product.price * item.quantity * 0.1, 0);
});

// We can add custom discount logic by adding discount property to the product object
export let totalDiscountAmount = derived(cart, ($cart) => {
	return $cart.reduce((acc, item) => {
		let discount = item.product.discount ? item.product.discount : 0;
		return acc + item.product.price * item.quantity * (discount / 100);
	}, 0);
});

// Total Amount to be paid after additonal discount
export let totalAmount = derived(
	[totalPrice, totalDiscountAmount],
	([$totalPrice, $totalDiscountAmount]) => {
		return ($totalPrice - $totalDiscountAmount) * (1 - discount / 100);
	}
);
