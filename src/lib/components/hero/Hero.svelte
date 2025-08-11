<script>
	import HeroBottomContainer from './HeroBottomContainer.svelte';
	import { HOME_TITLE, HERO_TAGLINE } from '$constants';
	import { goto } from '$app/navigation';

	let { topNavigation } = $props();
	
	function handleActionBtn() {
		// Navigate to contact form using SvelteKit's goto instead of window.location.href
		goto('/contact');
	}
	const actionBtnStyle =
		'btn preset-tonal-primary text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 mb-6 ml-4 transform font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 p-4 md:mb-1 md:p-6 text-lg';
</script>

<!-- HERO SECTION-->
<section role="banner" class="relative">
	<div
		id="chefos-hero-bg"
		class="h-[400px] w-full bg-cover bg-center md:h-[600px] relative"
		style="background-image: var(--chefos-hero-bg-image);"
	>
		<!-- Overlay for better text readability -->
		<div class="absolute inset-0 bg-black/20"></div>
		
		<!-- NAVBAR-->
		{#if topNavigation}
			{@render topNavigation()}
		{/if}
		<!-- HERO CENTER-->
		{@render centerContent()}
	</div>
	<!-- SERVICES SECTION -->
	<HeroBottomContainer />
</section>

{#snippet centerContent()}
	<div class="relative flex h-[250px] items-end text-center text-white md:h-[400px] z-10">
		<!-- action button -->
		<button aria-label="Contact us" onclick={handleActionBtn} type="button" class={actionBtnStyle}
			>Свържи се с нас</button
		>
		<!-- title and subtitle -->
		<div class="absolute top-0 left-0 mt-[1.0rem] ml-[1rem] md:mt-[6rem] md:ml-[4rem] text-shadow-lg">
			<h1 class="text-left text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
				{@html HOME_TITLE}
			</h1>
			<p class="text-md md:text-lg text-left font-medium drop-shadow-md">{@html HERO_TAGLINE}</p>
		</div>
		<!-- hero image attributing -->
		<p class="absolute right-0 bottom-0 mb-3 text-[0.75rem] md:mb-0 lg:mb-0 text-white/80">
			Photo by <a
				href="https://unsplash.com/@markokelecevic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
				class="hover:text-white transition-colors"
				>markokelecevic</a
			>
			on
			<a
				aria-label="Image source"
				rel="noopener noreferrer"
				href="https://unsplash.com/photos/blue-and-white-chair-under-white-umbrella-on-beach-during-daytime-1gMmmVdcIl8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
				class="hover:text-white transition-colors"
				>Unsplash</a
			>
		</p>
	</div>
{/snippet}

<style>
	#chefos-hero-bg {
		--chefos-hero-bg-image: url('https://4forin-593620436.imgix.net/chefos/chefoscleaning-home-hero1_tfa2l3.png?auto=compress&auto=format&w=600&q=40');
	}

	@media (min-width: 768px) {
		#chefos-hero-bg {
			--chefos-hero-bg-image: url('https://4forin-593620436.imgix.net/chefos/chefoscleaning-home-hero1_tfa2l3.png?auto=compress&auto=format&w=1300&q=55');
		}
	}

	.text-shadow-lg {
		text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}

	.drop-shadow-lg {
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.drop-shadow-md {
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
	}
</style>
