<script>
	import { cart } from '$lib';
	import CartItem from './CartItem.svelte';
	import CartSummary from './CartSummary.svelte';
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl px-4 pb-4 pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="text-center md:text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
			Shopping Cart
		</h1>
		<div class="mt-5 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
			<!-- List of Cart Items  -->
			<section aria-labelledby="cart-heading" class="lg:col-span-7">
				<h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

				<ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
					{#each $cart as item}
						<CartItem {item} />
					{:else}
						<p class="my-5">
							No Items in Cart. Checkout <a
								href="/products"
								class="underline underline-offset-2 font-semibold">Products</a
							> to add Items
						</p>
					{/each}
				</ul>
			</section>

			<!-- Order Summary Section -->
			<CartSummary />
		</div>
	</div>
</div>
