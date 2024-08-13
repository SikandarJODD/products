<script lang="ts">
	import { removefromCart } from '$lib';
	import type { CartItem } from '$lib/types/products';
	import QuantityButton from './QuantityButton.svelte';

	export let item: CartItem;
</script>

<li class="group flex py-6 sm:py-10">
	<div class="flex-shrink-0">
		<img
			src={item.product.image}
			alt={item.product.name}
			class="h-24 w-24 rounded-2xl border object-contain object-center p-1 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-md sm:h-48 sm:w-full sm:min-w-40"
		/>
	</div>

	<div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
		<div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
			<div>
				<div class="flex justify-between">
					<h3 class="text-sm">
						<a
							href="/products/{item.product.id}"
							class="font-medium text-gray-700 hover:text-gray-800">{item.product.name}</a
						>
					</h3>
				</div>
				<div class="mt-1 flex text-sm">
					<p class="text-gray-500">{item.product.description}</p>
				</div>
				<div class="flex items-baseline gap-2 flex-wrap">
					<p class="mt-1 text-sm font-medium text-neutral-700 md:text-[18px]">
						₹{Math.ceil(item.productPrice)}.00
					</p>
					<p class="mt-1 text-xs font-medium text-gray-500/80 line-through md:text-[12px]">
						₹{item.product.price}.00
					</p>
					<p class="mt-1 text-xs md:text-[14px] font-medium text-emerald-600">
						{item.product.discount}% off
					</p>
				</div>
			</div>

			<div class="mt-4 sm:mt-0 sm:pr-9">
				<QuantityButton quantity={item.quantity} productId={item.product.id} />
				<div class="absolute right-0 top-0">
					<button
						on:click={() => removefromCart(item.product.id)}
						type="button"
						class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500 outline-none"
					>
						<span class="sr-only">Remove</span>
						<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<p class="mt-4 flex space-x-2 text-sm text-gray-700">
			<svg
				class="h-5 w-5 flex-shrink-0 text-green-500"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
					clip-rule="evenodd"
				/>
			</svg>
			<span>In stock</span>
		</p>
	</div>
</li>
