<script>
	export let href = '';
</script>

{#if href}
	<a
		{href}
		{...$$restProps}
		class="inline-flex items-center justify-center rounded-xl border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-700"
	>
		<slot>Button</slot>
	</a>
{:else}
	<button
		{...$$restProps}
		on:click
		class="inline-flex items-center justify-center rounded-xl border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-700"
	>
		<slot>Button</slot>
	</button>
{/if}
