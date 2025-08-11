<script lang="ts">
	import quality from '$assets/images/quality2.svg';
	import safety from '$assets/images/safety1.svg';
	import comfort from '$assets/images/comfort.svg';
	const bottomItems = [
		{
			description:
				'Предлагаме услуги с изключително качеатво. Наблягаме на детайлите. Голям опит плюс качествени препарати и инструменти са неоценеи. Ние се придържаме към устойчиви практики, като пестене на ресурси и избягване на ненужна консумация.',
			svg: quality,
			title: 'Качествено'
		},
		{
			description:
				'Безопасността е един от нашите приоритети! Винаги внимаваме за да създадем безопасна работна среда за нас и нашите клиенти - "safety first". Използваме продукти, които са нетоксични и сертифицирани като безопасни.',
			svg: safety,
			title: 'Безопасно'
		},
		{
			description:
				'Стараем се да е удобно за Теб! Доколкото е възможно, съобразяваме се с очакванията на нашите клиенти. Докато едновременно прилагаме изпробвани практики които помагат за опазването на околната среда - ние сме социално отговорна компания.',
			svg: comfort,
			title: 'Удобно'
		}
	];
</script>

{#snippet item(svg: string, title: string, description: string)}
	<!-- BOTTOM CONTAINER ITEMS -->
	<div
		class="flex flex-col items-center rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
	>
		<div
			class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-200 dark:border-blue-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-800/50 md:h-24 md:w-24 shadow-lg"
		>
			{#if svg}
				<img src={svg} width="48" height="48" alt={title} class="filter-blue-600 dark:filter-blue-400" />
			{/if}
		</div>
		<h2 class="text-gray-900 dark:text-white mb-4 text-xl font-bold">{title}</h2>
		<p class="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
	</div>
{/snippet}

<div
	class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl relative z-10 mx-4 -mt-16 flex flex-col gap-6 rounded-2xl px-8 py-12 md:mx-8 md:-mt-20 md:grid md:grid-cols-3 md:px-16 md:py-16 lg:grid-cols-3 border border-gray-200/50 dark:border-gray-700/50"
>
	<!-- BOTTOM CONTAINER ITEMS -->
	{#each bottomItems as { svg, title, description }}
		{@render item(svg, title, description)}
	{/each}
</div>

<style>
	.filter-blue-600 {
		filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
	}

	.dark .filter-blue-400 {
		filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%);
	}
</style>
