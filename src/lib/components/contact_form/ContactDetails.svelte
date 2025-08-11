<script lang="ts">
	import { COMPANY_EMAIL_DATA, COMPANY_PHONE_DATA } from '$constants';

	const ContactType: {
		tel: string;
		email: string;
		address: string;
	} = {
		tel: 'tel',
		email: 'email',
		address: 'address'
	};

	// {@html svgIcons[data.type as ObjectKey]}
	type ObjectKey = keyof typeof svgIcons;

	const svgIcons: { address: string; email: string; tel: string } = {
		address:
			'<path stroke-linecap="round"stroke-linejoin="round" stroke-width="2"	d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round"	stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>',
		email:
			'<path stroke-linecap="round"	stroke-linejoin="round"	stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
		tel: '<path stroke-linecap="round"	stroke-linejoin="round"	stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>'
	};

	interface ContactItem {
		type: string;
		title: string;
		elements: { content: string; leading: string }[];
	}

	function makeContactItemElements(
		content: string[],
		leadings: string[] = []
	): { content: string; leading: string }[] {
		return content.map((c, i) => ({
			content: c,
			leading: leadings[i] || ''
		}));
	}

	const contactItems: ContactItem[] = [
		{
			type: ContactType.email,
			title: 'Email',
			elements: makeContactItemElements(COMPANY_EMAIL_DATA)
		},
		{
			type: ContactType.tel,
			title: 'Телефон',
			elements: makeContactItemElements(COMPANY_PHONE_DATA, ['Стефан'])
		}
	];

	const contactLinkStyle =
		'transform transition-all duration-200 hover:text-blue-600 hover:font-semibold text-gray-700 dark:text-gray-300';
</script>

<div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
	<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Контактна информация</h2>
	{#each contactItems as data}
		<!-- Contact card -->
		<div class="mb-8 flex items-start pt-2 last:mb-0">
			<!-- Contact card icon wrapper (left side)-->
			<div
				class="mr-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 shadow-lg"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					{@html svgIcons[data.type as ObjectKey]}
				</svg>
			</div>
			<!-- Contact card title and content text (right side)-->
			<div class="flex-1">
				<h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">{data.title}</h3>
				{#each data.elements as e}
					{#if data.type === ContactType.tel}
						<a
							href={`tel:${e.content}`}
							class={contactLinkStyle}
							aria-label={`Perform phone call to ${e.content}`}
							>{e.leading}: ({e.content.slice(0, 4)})
							{e.content.slice(4, 6)}-{e.content.slice(6, 9)}-{e.content.slice(
								9,
								e.content.length
							)}</a
						> <br />
					{:else if data.type === ContactType.email}
						<a
							href={`mailto:${e.content}?subject=ChefosCleaning%20contactForm&body=Hi%2C%20I%20have%20a%20question`}
							class={contactLinkStyle}
							aria-label={`Send email to ${e.content}`}
						>
							{e.content}
						</a>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</div>
