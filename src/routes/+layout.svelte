<script>
	import Navbar from '$lib/components/home/Navbar.svelte';
	import UpdatedNavbar from '$lib/components/home/UpdatedNavbar.svelte';
	import Notification from '$lib/components/ui/notifications/Notification.svelte';
	import '../app.css';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<UpdatedNavbar />
<Notification />

{#key data.url}
	<div transition:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}
