<script>
	import { cart } from '$lib';
	import CartItem from './CartItem.svelte';
	import CartSummary from './CartSummary.svelte';
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
		<div class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <!-- List of Cart Items  -->
			<section aria-labelledby="cart-heading" class="lg:col-span-7">
				<h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

				<ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
					{#each $cart as item}
						<CartItem {item} />
					{/each}
				</ul>
			</section>

			<!-- Order Summary Section -->
			<CartSummary />
		</div>
	</div>
</div>
