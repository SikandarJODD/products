<script>
	import { products } from '$lib';
	import ProductCard from './ProductCard.svelte';
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl px-1.5 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
		<h2 class="mb-0 text-center text-2xl font-bold text-gray-800 md:mb-10 md:text-3xl">
			Amazing Products
		</h2>
		<div class="mt-2 md:mt-6 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</div>
