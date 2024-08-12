<script>
	import ShoppingCartImg from '$lib/images/shopping-cart.svg';
	import CustomerSupportImg from '$lib/images/customer-support.svg';
	import FreeShippingImg from '$lib/images/icon-delivery-light.svg';

	let features = [
		{
			title: 'Free Shipping',
			desc: 'Free shipping on all orders over ₹1,000.00',
			img: FreeShippingImg
		},
		{
			title: '24/7 Customer Support',
			desc: 'We are here to help you with any queries you have. We provide 24/7 customer support.',
			img: CustomerSupportImg
		},
		{
			title: 'Qucik Shopping',
			desc: 'We provide quick shopping experience. You can add items to cart and checkout in no time.',
			img: ShoppingCartImg
		}
	];
</script>

<div class="bg-gray-50">
	<div class="mx-auto max-w-7xl py-10 sm:px-2 sm:py-32 lg:px-4">
		<div class='my-10'>
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">Our Features</h2>
		</div>
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3"
		>
			{#each features as feature}
				<div class="text-center sm:flex sm:text-left lg:block lg:text-center border rounded-lg py-5">
					<div class="sm:flex-shrink-0">
						<div class="flow-root">
							<img class="mx-auto h-24 w-28" src={feature.img} alt={feature.title} />
						</div>
					</div>
					<div class="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
						<h3 class="text-sm font-medium text-gray-900">{feature.title}</h3>
						<p class="mt-2 text-sm text-gray-500">
							{feature.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
