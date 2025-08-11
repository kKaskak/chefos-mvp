<script lang="ts">
	import {
		NAVIGATION_ITEMS as nav,
		DEV_CONTACT,
		COMPANY_PROFILE_FB as fb
		// COMPANY_PROFILE_TT as tt
	} from '$constants';
	import Logo from './Logo.svelte';
	import FooterLink from './FooterLink.svelte';
	import FooterSection from './FooterSection.svelte';
	import SocialIcon from './SocialIcon.svelte';
	import fbic from '$assets/images/fb-ic2.svg';
	// import ttic from '$assets/images/tiktok-ic1.svg';
	let { logoUrl = '' } = $props();

	const socialIcons = [
		{
			href: fb,
			label: 'Facebook',
			svgUrl: fbic
		}
	];
	const contactUrl = nav.find((i) => i.name == 'contact')?.url ?? '/contact';
	const cookietUrl = nav.find((i) => i.name == 'cookie')?.url ?? '/about/cookie-policy';
	const hometUrl = nav.find((i) => i.name == 'home')?.url ?? '/';
	const privacytUrl = nav.find((i) => i.name == 'privacy-policy')?.url ?? '/about/privacy-policy';
	const termstUrl = nav.find((i) => i.name == 'terms')?.url ?? '/about/terms';

	const footerSections = [
		{
			title: 'За нас',
			links: [
				{ href: contactUrl, text: 'Контактна форма' },
				{ href: termstUrl, text: 'Условия за ползване' }
			]
		},
		{
			title: 'поверителност',
			links: [
				{ href: privacytUrl, text: 'Политика за поверителност' },
				{ href: cookietUrl, text: 'Политика за бисквитки' }
			]
		}
	];
	const bottomSmallLinksStyle =
		'my-2 text-sm text-gray-600 dark:text-gray-400 sm:text-center justify-self-end hover:text-gray-800 dark:hover:text-gray-200 transition-colors';
</script>

<!-- FOOTER SECTION  -->
<footer class="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
	<div class="mx-auto w-full max-w-screen-xl p-6 py-8 lg:py-12">
		<div class="md:flex md:justify-between">
			<!-- FOOTER left sidelogo and name  -->
			<div class="mb-8 md:mb-0" role="link">
				<Logo href={hometUrl} src={logoUrl} />
			</div>
			<!-- FOOTER right side links section -->
			<div class="grid grid-cols-2 gap-8 sm:gap-12">
				{#each footerSections as section}
					{@render footerSection(section.title, section.links)}
				{/each}
			</div>
		</div>
		<hr class="mt-8 mb-6 border-gray-300 sm:mx-auto lg:my-10 dark:border-gray-600" />
		<div
			id="bottom"
			class="mx-3 flex flex-col-reverse place-items-end justify-evenly justify-items-end md:flex-row gap-6"
		>
			<div class="my-2 space-y-2">
				<p class={bottomSmallLinksStyle} aria-label="Developer name">
					© {new Date().getFullYear()}
					<FooterLink href={DEV_CONTACT}>jarek.code</FooterLink>. All Rights Reserved.
				</p>
				<p class={bottomSmallLinksStyle} aria-label="Image sources: SVG Repo">
					Vectors and icons by <a href="https://www.svgrepo.com" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400">SVG Repo</a>
				</p>
				<p class={bottomSmallLinksStyle} aria-label="Image sources: Unsplash">
					Photos by <a href="https://unsplash.com" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400">Unsplash</a> and
					<a href="https://www.imgix.com" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400">imgix</a>
				</p>
			</div>
			<!-- FOOTER bottom right side social icons section -->
			<div id="top" class="my-4 flex sm:mt-0">
				{#each socialIcons as icon, i}
					<div class="{i > 0 ? 'ms-5' : ''} h-10 w-10">
						<SocialIcon {...icon} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</footer>

{#snippet footerSection(title: string, links: { href: string; text: string }[])}
	<FooterSection {title}>
		{#each links as link}
			{@render linkItem(link)}
		{/each}
	</FooterSection>
{/snippet}

{#snippet linkItem(item: { href: string; text: string })}
	{#if item.href}
		<li class="mb-3 md:mb-4">
			<FooterLink href={item.href}>{item.text}</FooterLink>
		</li>
	{/if}
{/snippet}
