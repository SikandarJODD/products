<script lang="ts">
	import { addToCart, cart, isPresentInCart } from '$lib';
	import type { Product } from '$lib/types/products';
	import { notify } from '$lib/utils';
	import { onMount } from 'svelte';

	export let product: Product;
	$: discountPrice = product.discount
		? product.price * (1 - product.discount / 100)
		: product.price;
	$: isPresent = isPresentInCart(product.id);
</script>

<div class="bg-white py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- images - start -->
			<div class="grid gap-4 lg:grid-cols-5">
				<div class="order-last flex gap-4 lg:order-none lg:flex-col">
					{#each { length: 3 } as item}
						<div class="overflow-hidden rounded-lg bg-gray-100">
							<img
								src={product.image}
								loading="lazy"
								alt={product.name}
								class="h-full w-full object-cover object-center"
							/>
						</div>
					{/each}
				</div>

				<div
					class="relative overflow-hidden rounded-xl border border-neutral-100 bg-white md:h-[470px] lg:col-span-4"
				>
					<img
						src={product.image}
						loading="lazy"
						alt={product.name}
						class="h-full w-full rounded-xl object-contain object-center"
					/>

					<span
						class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white"
						>sale</span
					>
				</div>
			</div>
			<!-- images - end -->

			<!-- content - start -->
			<div class="md:py-8">
				<!-- name - start -->
				<div class="mb-2 md:mb-3">
					<span class="mb-0.5 inline-block text-gray-500">Bhide Products</span>
					<h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">{product.name}</h2>
				</div>
				<!-- name - end -->

				<!-- rating - start -->
				<div class="mb-6 flex items-center gap-3 md:mb-10">
					<div class="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
						<span class="text-sm">4.2</span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
					</div>

					<span class="text-sm text-gray-500 transition duration-100">56 ratings</span>
				</div>
				<!-- rating - end -->

				<!-- price - start -->
				<div class="mb-4">
					<div class="flex items-end gap-2">
						<span class="text-xl font-bold text-gray-800 md:text-2xl"
							>₹{Math.ceil(discountPrice)}.00</span
						>
						<span class="mb-0.5 text-red-500 line-through">₹{product.price}.00</span>
					</div>

					<span class="text-sm text-gray-500">incl. VAT plus shipping</span>
				</div>
				<!-- price - end -->

				<!-- shipping notice - start -->
				<div class="mb-6 flex items-center gap-2 text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
						/>
					</svg>

					<span class="text-sm">2-4 day shipping</span>
				</div>
				<!-- shipping notice - end -->

				<!-- buttons - start -->
				<div class="flex gap-2.5">
					<button
						on:click={() => {
							if (!isPresent) {
								addToCart(product, 1);
                                isPresent = true;
							}
                            else{
                                notify('Product already present in cart');

                            }
						}}
						class="flex flex-1 scale-100 items-center justify-center gap-1.5 rounded-lg bg-neutral-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none transition-all duration-150 active:scale-95 sm:flex-none md:text-base"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-shopping-cart mb-0.5"
							><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path
								d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
							/></svg
						>
						{isPresent ? 'Added' : 'Add'} to cart</button
					>
				</div>
				<!-- buttons - end -->
			</div>
			<!-- content - end -->
		</div>
	</div>
</div>
