<script lang="ts">
	import { NAVIGATION_ITEMS } from '$constants';
	import logo1 from '$assets/images/chefos_logo_1.svg';
	import { AppBar, Modal } from '@skeletonlabs/skeleton-svelte';
	import Menu from 'lucide-svelte/icons/menu';
	const mainNavLinkStyles =
		'text-gray-800 dark:text-gray-200 text-base font-medium translate-y-0 transition-all duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transform px-3 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/20';
	const mobileNavLinkStyles = 'px-4 py-3 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800/50 rounded-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400';

	const mainNavLinks = NAVIGATION_ITEMS.filter((item) => item.isMain);
	const mobileNavLinks = NAVIGATION_ITEMS.filter((item) => item.isMobile);

	import { onMount } from 'svelte';
	let drawerState = $state(false);
	function drawerClose() {
		drawerState = false;
	}
	function drawerOpen() {
		drawerState = true;
	}

	// Close Modal navigation when window is expanded
	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth > 639) {
				drawerState = false;
			}
		};
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}
		// Cleanup on component destroy
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		};
	});
</script>

<!-- NAVBAR -->
<div
	class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md flex w-full items-center justify-between border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg sticky top-0 z-50"
	role="navigation"
>
	<AppBar
		headlineClasses="sm:hidden"
		centerClasses="hidden sm:block"
		leadClasses="h-16 flex items-center justify-start"
		classes="z-[1] flex justify-between bg-transparent w-full"
		trailClasses="mr-6 flex items-center"
	>
		{#snippet lead()}
			<div class="flex items-center h-full pl-4">
				<img src={logo1} width="80" height="80" alt="website logo" aria-label="website logo" class="drop-shadow-sm" />
			</div>
		{/snippet}
		{#snippet trail()}
			<div class="hidden space-x-3 sm:flex items-center">
				{#each mainNavLinks as item}
					{#if item.url !== ''}
						{@render link2(item.url, item.title, false)}
					{/if}
				{/each}
			</div>
			<div class="z-[] block sm:hidden">
				<Modal
					onclick={drawerOpen}
					open={drawerState}
					triggerBase="btn preset-tonal bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
					contentBase="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-6 space-y-4 shadow-2xl w-[280px] fixed top-0 right-0 border border-gray-200/50 dark:border-gray-700/50"
					positionerJustify="justify-start"
					positionerAlign=""
					positionerPadding=""
					transitionsPositionerIn={{ x: 0, duration: 400 }}
					transitionsPositionerOut={{ x: 300, duration: 200 }}
				>
					{#snippet trigger()}
						{#if !drawerState}
							<Menu size={20} aria-label="open" role="button" class="text-gray-700 dark:text-gray-300" />
						{/if}
					{/snippet}
					{#snippet content()}
						<div class="flex flex-col items-end space-y-4 p-4">
							<button
								type="button"
								class="btn preset-filled pb-3 bg-red-500 hover:bg-red-600 text-white"
								aria-label="close"
								onclick={drawerClose}>×</button
							>
							{#each mobileNavLinks as item}
								{#if item.url !== ''}
									{@render link2(item.url, item.title, true)}
								{/if}
							{/each}
						</div>
					{/snippet}
				</Modal>
			</div>
		{/snippet}
	</AppBar>
</div>

{#snippet link2(href: string, title: string, isMobile: boolean)}
	{#if isMobile}
		<a {href} class={mobileNavLinkStyles} onclick={() => drawerClose()}>{title}</a>
	{:else}
		<a {href} class={mainNavLinkStyles}>{title}</a>
	{/if}
{/snippet}
