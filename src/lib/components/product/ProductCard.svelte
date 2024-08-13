<script lang="ts">
	import { notify } from '$lib/utils';
	import { scale } from 'svelte/transition';
	import { addToCart, isPresentInCart } from '$lib/index';
	import type { Product } from '$lib/types/products';
	import { ShoppingCart } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let product: Product;

	let alreadyPresent = false;
	onMount(() => {
		alreadyPresent = isPresentInCart(product.id);
	});
	$: productPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;
</script>

<div
	class="group relative h-auto overflow-hidden rounded-lg border pb-2 hover:border-neutral-700/20"
>
	<a href="/products/{product.id}">
		<div
			class="aspect-h-1 aspect-w-1 lg:aspect-none h-52 w-full overflow-hidden rounded-md p-1 transition-all duration-300 group-hover:opacity-75 md:h-96 lg:h-80"
		>
			<img
				src={product.image}
				alt="Front of men&#039;s Basic Tee in black."
				class="h-full w-full rounded-xl object-contain object-center lg:h-full lg:w-full"
			/>
		</div>
		<div class="mt-4 flex min-h-8 md:min-h-14 justify-between px-3">
			<div>
				<h3 class="text-sm font-semibold text-gray-900">
					<a href="/products/{product.id}">
						{product.name}
					</a>
				</h3>
				<p class="mt-1 text-xs text-gray-500">{product.description.slice(0, 60)}...</p>
			</div>
		</div>
		<div class="mt-4 flex flex-wrap items-baseline justify-between px-3">
			<div class="flex items-baseline gap-1">
				<p class="text-[16px] font-medium text-gray-900">
					₹{Math.ceil(productPrice)}.00
				</p>
				<span class="ml-px text-xs text-neutral-500/80 line-through">₹{product.price}.00</span>
			</div>
			{#if product.tag}
				<div class="md:-0">
					<span
						class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-[11px] font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
					>
						<svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
							<circle cx="3" cy="3" r="3" />
						</svg>
						{product.tag}
					</span>
				</div>
			{/if}
		</div>
	</a>
	<div class="z-50 mt-2 px-2">
		<button
			on:click={() => {
				if (isPresentInCart(product.id) === true) {
					alreadyPresent = true;
				} else {
					addToCart(product, 1);
					console.log(product, 'working');
					alreadyPresent = true;
				}
				notify(`${product.name} added to cart!`, 'Visit cart to see your order details.');
			}}
			class="flex w-full items-center justify-center gap-1 rounded-md border py-2 font-medium
            {alreadyPresent ? 'bg-green-200' : 'bg-gray-100'} transition-all duration-300
            "
		>
			{#if alreadyPresent}
				<svg
					in:scale
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					class="mb-0.5 size-5"
					viewBox="0 0 256 256"
					><path
						d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
					></path></svg
				>
				Added to Cart
			{:else}
				<ShoppingCart strokeWidth={1.5} class="mb-0.5 size-5" />
				Add to Cart
			{/if}
		</button>
	</div>
</div>
