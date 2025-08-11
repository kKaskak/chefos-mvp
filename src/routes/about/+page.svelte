<script lang="ts">
	import calendar from '$assets/images/calendar-ic.svg';
	import eco from '$assets/images/ecology-ic.svg';
	import talk from '$assets/images/talk-ic.svg';
	import { SITE_NAME } from '$lib/utils/constants';

	const heroH1 = `На кратко<br />за фирма<br /> ${SITE_NAME}`;
	const heroP =
		'Ние сме малък семеен бизнес от Варна. Малка фирма, но с голям опит и още по-голяма история! Всичко започва във Варна. Преди повече от 15 години започвахме с чистенето на прозорци и витрини. Постепено добавихме други услуги, като: почистване на апартаменти, чистене на фасади, включително на по-високи сгради.';
	const cards: {
		img: string;
		imgAlt: string;
		title: string;
		description: string;
	}[] = [
		{
			img: calendar,
			imgAlt: 'Icon of monthly calendar',
			title: 'Абонаментното почистване',
			description:
				'Това представлява професионална услуга, извършвана от опитен и квалифициран професионалист. Ние използваме оборудване от най-висок клас и внимателно подбрани качествени препарати, за да гарантираме безупречни резултати и комфорт за вас.'
		},
		{
			img: talk,
			imgAlt: 'Icon of a two persons',
			title: 'Ще обсъди с Вас детайлите',
			description:
				'С удоволствие ще организираме оглед в удобно за Вас време. По време на срещата ще обсъдим най-подходящата честота за почистване и определим часовия диапазон, който най-добре отговаря на вашите нужди.'
		},
		{
			img: eco,
			imgAlt: 'Icon of s hand and a small plant',
			title: 'Екологичен подход',
			description:
				'Нашият подход се основава на устойчиви решения: минимизираме пластмасовите отпадъци, използваме уреди с висока енергийна ефективност и оборудване с нисък разход на вода. Същевременно се придържаме към местен подход, за да намалим въглеродния отпечатък, свързан с транспорта.'
		}
	];
</script>

<article id="aboutUs" itemtype="https://schema.org/AboutPage" itemref="description">
	<div
		class="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-sky-300 md:min-h-[600px] shadow-2xl"
	>
		<div class="bg-blue-600/20 absolute inset-0 w-full rounded-xl">
			<img
				src="https://images.unsplash.com/photo-1501045337096-542a73dafa4f?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Window with a lake and monatain view"
				class="h-full w-full rounded-xl object-cover opacity-30 mix-blend-overlay md:object-fill"
				loading="lazy"
			/>
		</div>
		<div
			class="relative z-10 flex h-full w-full flex-col items-center justify-between px-6 py-12 sm:items-center sm:px-8 sm:py-16 md:flex-row md:items-start md:px-20"
		>
			<!-- Left side -->
			<div class="mb-12 w-full text-white md:mb-0 md:w-2/3 lg:w-3/5">
				<div class="relative">
					<div class="absolute top-0 left-0 h-40 w-2 bg-yellow-400 rounded-full shadow-lg"></div>
					<h1 class="mb-6 ml-8 text-4xl font-bold sm:mb-8 lg:text-5xl drop-shadow-lg" itemprop="headline">
						{@html heroH1}
					</h1>
				</div>
				<p
					class="mb-8 max-w-2xl px-8 text-lg text-white/95 sm:mb-10 sm:px-0 leading-relaxed drop-shadow-md"
					id="description"
					itemprop="text"
				>
					{heroP}
				</p>
			</div>
			<!-- Right side -->
		</div>
		<div class="absolute right-0 bottom-0">
			<p class="text-white/80 mr-3 mb-3 text-xs">
				Photo by <a
					href="https://unsplash.com/@1amfcs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					class="hover:text-white transition-colors"
					>1AmFcS</a
				>
				on
				<a
					aria-label="Image source"
					href="https://unsplash.com/photos/black-window-frame-0-geTlVa3Lk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					rel="noopener noreferrer"
					class="hover:text-white transition-colors">Unsplash</a
				>
			</p>
		</div>
	</div>
	<section class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
		<div class="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-12">
			<h2 class="text-gray-900 dark:text-white mb-12 text-3xl font-bold sm:text-4xl text-center">
				Защо да се доверите на нас за почистването
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each cards as { title, description, img, imgAlt }}
					<div
						class="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
					>
						<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-200 dark:border-blue-700 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-800/50 shadow-lg">
							<img
								src={img}
								alt={imgAlt}
								class="h-12 w-12 filter-blue-600 dark:filter-blue-400 transition-transform duration-300 group-hover:scale-110"
								width="48"
								height="48"
							/>
						</div>
						<h3 class="text-gray-900 dark:text-white mb-4 text-xl font-bold">{title}</h3>
						<p class="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</article>

<style>
	.filter-blue-600 {
		filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
	}

	.dark .filter-blue-400 {
		filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%);
	}

	.drop-shadow-lg {
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.drop-shadow-md {
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
	}
</style>
