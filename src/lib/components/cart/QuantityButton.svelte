<script lang="ts">
	import { decreaseQuantity, increaseQuantity } from '$lib';
	import { Minus, Plus } from 'lucide-svelte';
	export let quantity: number = 1;
	export let productId: string = '';
</script>

<div class="flex h-full w-full gap-1">
	<button
		class="icon {quantity === 5 ? 'active:bg-neutral-100 active:text-neutral-200' : ''} "
		on:click={() => increaseQuantity(productId)}
	>
		<Plus class="size-4" strokeWidth={1.6} />
	</button>
	<button class="quantity_value"> {quantity} </button>
	<button class="icon" disabled={quantity === 1} on:click={() => decreaseQuantity(productId)}>
		<Minus class="size-4" strokeWidth={1.6} />
	</button>
</div>

<style>
	button {
		background-color: #f7fdfe;
		border: none;
		cursor: pointer;
		height: 1.8rem;
		min-width: 1.8rem;
		padding: 0.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #ccc;
		border-radius: 0.375rem;
		transition: all 0.2s;
		outline: none;
	}
	.quantity_value {
		background-color: #f7fdfe;
		border: 1px solid #ccc;
		border-radius: 0.375rem;
		padding: 0.25rem 0.5rem;
	}
	.icon:active {
		background-color: #f0f0f0;
		transform: scale(0.95);
	}
	button:disabled {
		background-color: #f4f4f4;
		color: #9e9e9e;
		cursor: not-allowed;
	}
</style>
