<script>
	import { PackageSearch } from 'lucide-svelte';
	import BorderAnimatedButton from '../ui/buttons/BorderAnimatedButton.svelte';
	import Button from '../ui/Button.svelte';
	import { addToCart, cart } from '$lib';
</script>

<div class="flex min-h-[80vh] flex-col items-center justify-center">
	<div class="text-center">
		<h1
			class="bg-gradient-to-b from-neutral-500 to-neutral-900 bg-clip-text text-4xl font-bold text-transparent"
		>
			Amazing Products
		</h1>
		<p class="mt-5 px-10 text-neutral-600 md:px-0">
			We provide the best products in the market. Check out our <a
				href="/products"
				class="font-semibold text-neutral-800 underline underline-offset-2">products</a
			> to see what we have to offer.
		</p>
	</div>
	<div class="mt-6">
		<Button href="/products">
			<span class="flex gap-1.5">
				<PackageSearch strokeWidth={1.4} class="size-5" />
				Products
			</span>
		</Button>
	</div>
</div>
