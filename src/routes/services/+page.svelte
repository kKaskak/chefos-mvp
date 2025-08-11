<script lang="ts">
	import cleaning from '$assets/images/cleaning1.svg';
	import facade from '$assets/images/facade36.svg';
	import windows from '$assets/images/windows2.svg';

	const services: {
		img: string;
		imgAlt: string;
		title: string;
		description: string;
	}[] = [
		{
			img: windows,
			imgAlt: 'Window cleaning device',
			title: 'Прозорци и витрини',
			description: description(
				'Услугата включва премахване на прах, замърсявания и петна от вътрешната и външната страна на прозорците и витрините. Използваме професионални инструменти като телескопични мопове,<u> деминерализирана вода</u>, специализирани почистващи препарати, които осигуряват безупречен блясък без следи. Подходящо както за стандартни прозорци, така и за големи стъклени витрини.<br/>',
				'Върнете свежестта и кристалния блясък на вашите прозорци и витрини!'
			)
		},
		{
			img: cleaning,
			imgAlt: 'Small desk, bucket and broom',
			title: 'Офиси и домове',
			description: description(
				'Тази услуга включва цялостно почистване на жилището, офис или помещение: прахосмукиране на подове и килими, измиване на твърди настилки, почистване на мебели, кухненски плотове и уреди, както и санитарни помещения. Доколкото е възможно съобразяваме се с предпочитанията на клиента. Добре поддържаната хигиена ще допринесе за комфорта у дома и за продуктивността в офиса.<br/>',
				'Грижим се за всеки детайл, за да ви осигурим комфорт и чистота.'
			)
		},
		{
			img: facade,
			imgAlt: 'Shiny house',
			title: 'Фасади',
			description: description(
				'Тази услуга включва премахване на замърсявания, мухъл и налепи от фасадата на сградата. Фасадата  най-честа има нужда от почистване за поддържане на търговски вид. Използваме рофесионално оборудване за високо налягане. Процесът е съобразен със спецификата на материала – фасадните плочи, мазилка или стъкло, за да се гарантира дълготраен резултат без повреди.<br/>',
				'Възвърни първоначална красота на фасадата.'
			)
		}
	];

	function description(p: string, span: string): string {
		return `<p itemprop="description" class="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">${p}<span class="text-blue-700 dark:text-blue-400 font-semibold">${span}</span></p>`;
	}
</script>

<article itemscope itemtype="https://schema.org/Service" class="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
	<div class="overflow-hidden px-4 w-full py-16">
		<div class="mx-auto max-w-6xl">
			<h1
				class="relative mx-4 mt-2 mb-12 overflow-visible py-8 text-center text-5xl font-bold md:overflow-hidden"
			>
				<span
					class="text-blue-200/20 dark:text-blue-800/20 absolute top-1/2 left-1/2 z-5 w-full -translate-x-1/2 -translate-y-1/2 transform align-text-top text-6xl tracking-widest md:text-7xl md:tracking-[0.2em] lg:text-9xl"
					>SERVICES</span
				>
				<span class="relative z-20 align-bottom text-2xl text-gray-800 dark:text-white md:text-4xl lg:text-6xl font-bold"
					>КАКВО ПРЕДЛАГАМЕ</span
				>
			</h1>
			<div class="mx-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-2 lg:grid-cols-3">
				{#each services as { title, description, img, imgAlt }}
					<div
						class="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
					>
						<div
							class="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-200 dark:border-blue-700 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-800/50 md:h-24 md:w-24 shadow-lg"
						>
							<img src={img} alt={imgAlt} width="48" height="48" class="filter-blue-600 dark:filter-blue-400" />
						</div>
						<h2 itemprop="name" class="mb-4 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
						{@html description}
					</div>
				{/each}
			</div>
		</div>
	</div>
</article>

<style>
	.filter-blue-600 {
		filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
	}

	.dark .filter-blue-400 {
		filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%);
	}
</style>
