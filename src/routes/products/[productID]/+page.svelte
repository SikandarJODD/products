<script>
	import { page } from '$app/stores';
	import { products } from '$lib';
	import ProductDetails from '$lib/components/product/ProductDetails.svelte';
	let routeID = $page.params.productID;
	let singleProduct = products.filter((product) => product.id === routeID)[0];
</script>

<ProductDetails product={singleProduct} />
