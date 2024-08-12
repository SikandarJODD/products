<script>
	import { totalUniqueItems } from '$lib';
	import { CircleSlash2, Home, Package, User } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let navs = [
		{
			name: 'Home',
			icon: Home,
			link: '/'
		},
		{
			name: 'Products',
			icon: Package,
			link: '/products'
		},
		{
			name: 'About',
			icon: User,
			link: '/about'
		}
	];
	let isMobileMenu = false;
</script>

<nav class="sticky top-0 border-b border-neutral-400 bg-white/10 backdrop-blur-md z-50">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<a href="/">
						<CircleSlash2 class="size-6" strokeWidth={1.5} />
					</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						{#each navs as { name, link }}
							<a
								href={link}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-150 hover:text-gray-900"
								>{name}</a
							>
						{/each}
					</div>
				</div>
			</div>
			<div class="hidden sm:ml-6 sm:block">
				<div class="flex items-center">
					<a href='/viewcart' class="relative rounded-full p-1 text-gray-700">
						<span class="absolute -inset-1.5"></span>
						<span class="sr-only">Cart Icon</span>
						{#if $totalUniqueItems > 0}
							<span
								class="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border bg-white text-xs"
								>{$totalUniqueItems}</span
							>
						{/if}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-shopping-cart"
							><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path
								d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
							/></svg
						>
					</a>

					<!-- Profile dropdown -->
					<!-- <div class="relative ml-3">
						<div>
							<button
								type="button"
								class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="absolute -inset-1.5"></span>
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>

						Dropdown menu, show/hide based on menu state. Entering: "transition ease-out
						duration-100" From: "transform opacity-0 scale-95" To: "transform opacity-100 scale-100"
						Leaving: "transition ease-in duration-75" From: "transform opacity-100 scale-100" To:
						"transform opacity-0 scale-95"

						<div
							class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							Active: "bg-gray-100", Not Active: ""
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0">Your Profile</a
							>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-1">Settings</a
							>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-2">Sign out</a
							>
						</div>
					</div> -->
				</div>
			</div>
			<div class="-mr-2 flex sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (isMobileMenu = !isMobileMenu)}
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open main menu</span>
					<!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            -->
					<svg
						class="{isMobileMenu ? 'hidden' : 'block'} h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->
					<svg
						class="{isMobileMenu ? 'block' : 'hidden'} h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#key isMobileMenu}
		<div transition:slide class="sm:hidden {isMobileMenu ? 'block' : 'hidden'}" id="mobile-menu">
			<div class="space-y-1 px-2 pb-3 pt-2">
				{#each navs as { name, link, icon }}
					<a
						href={link}
						class="flex gap-1.5 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
					>
						<svelte:component this={icon} strokeWidth={1.4} class="size-[22px]" />
						{name}</a
					>
				{/each}
			</div>
			<!-- <div class="border-t border-gray-700 pb-3 pt-4">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0">
					<img
						class="h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
				<div class="ml-3">
					<div class="text-base font-medium text-white">Tom Cook</div>
					<div class="text-sm font-medium text-gray-400">tom@example.com</div>
				</div>
				<button
					type="button"
					class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				>
					<span class="absolute -inset-1.5"></span>
					<span class="sr-only">View notifications</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
						/>
					</svg>
				</button>
			</div>
			<div class="mt-3 space-y-1 px-2">
				<a
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
					>Your Profile</a
				>
				<a
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
					>Settings</a
				>
				<a
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
					>Sign out</a
				>
			</div>
		</div> -->
		</div>
	{/key}
</nav>
