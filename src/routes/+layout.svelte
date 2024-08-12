<script>
	import Navbar from '$lib/components/home/Navbar.svelte';
	import '../app.css';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<Navbar />
{#key data.url}
	<div transition:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}
