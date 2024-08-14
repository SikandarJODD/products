<script>
	import FeatureSection from '$lib/components/home/FeatureSection.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
	import HeroSection from '$lib/components/home/HeroSection.svelte';
</script>

<svelte:head>
	<title>Bhide Products</title>
	<meta name="description" content="Building Products & Add to Cart Functionality using Svelte" />
</svelte:head>

<HeroSection />
<FeatureSection />

<!-- Footer -->
<!-- I kept footer in +page.svelte, i don't want to involve footer in every page like products, confirm order, view cart -->
<Footer />
