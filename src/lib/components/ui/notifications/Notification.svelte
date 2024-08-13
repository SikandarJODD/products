<script>
	import { notifyTtitle, notifyDesc, showNotification } from '$lib/utils';
	import { fly } from 'svelte/transition';
</script>

{#if $showNotification}
	<div
		in:fly={{ x: 20, duration: 300, delay: 0 }}
		out:fly={{ x: -20, duration: 300, delay: 0 }}
		aria-live="assertive"
		class="pointer-events-none fixed top-8 z-[10000]
		 flex w-full items-end px-4 py-3 sm:items-start sm:px-3 sm:py-11 md:top-0"
	>
		<div
			class="{$showNotification
				? 'translate-y-0 opacity-100 sm:translate-x-0'
				: 'translate-y-2 opacity-0 sm:translate-x-2 sm:translate-y-0'} z-[10000] flex w-full transform flex-col items-center space-y-2 transition duration-300 ease-out sm:items-end"
		>
			<div
				class="pointer-events-auto w-full max-w-sm transform overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition duration-300 ease-out"
			>
				<div class="p-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<svg
								class="h-6 w-6 text-green-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="ml-3 w-0 flex-1 pt-0.5">
							<p class="text-sm font-medium text-gray-900">{$notifyTtitle}</p>
							{#if $notifyDesc}
								<p class="mt-1 text-sm text-gray-500">
									{$notifyDesc}
								</p>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
