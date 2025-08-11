<script>
	import { SITE_NAME, NAVIGATION_ITEMS } from '$constants';
	import { APP_ENV, APP_ENV_DEV, PROD_BASE_URL, DEV_BASE_URL } from '$constants';

	const b = APP_ENV === APP_ENV_DEV ? DEV_BASE_URL : PROD_BASE_URL;

	const spanStyle = 'text-blue-700 dark:text-blue-400 font-semibold';
	const pStyle = 'indent-4 text-gray-700 dark:text-gray-300 leading-relaxed';
	// process.env.NODE_ENV= development/production
</script>

<section class="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
	<div class="space-y-8 p-6 md:p-12 max-w-4xl mx-auto">
		<h1 class="my-8 text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
			Услуги за почистване във Варна
		</h1>
		<h2 class="text-lg md:text-xl mb-8 text-center font-semibold text-gray-800 dark:text-gray-200">
			Добре дошли в <span class="text-blue-700 dark:text-blue-400 font-bold"
				>{SITE_NAME}</span
			> – Вашият партньор за чистота и блясък!
		</h2>
		<div class="space-y-6 text-lg">
			<p class={pStyle}>
				Ние сме малка семейна фирма, базирана във Варна, специализирана в професионално почистване на
				<span class={spanStyle}>прозорци и витрини</span>. С грижа и внимание към детайлите,
				предлагаме също почистване на
				<span class={spanStyle}>апартаменти и офиси</span>. Разполагаме с нужно оборудване за миене на
				<span class={spanStyle}>фасади</span>.
			</p>
			<p class={pStyle}>
				Ние се гордеем, че използваме <span class={spanStyle}
					>екологично чисти и безопасни продукти</span
				>, които щаждат околната среда и вашето здраве! Така допринасяме за опазване на природата и
				създаваме по-здравословна среда за вашия дом, офис и за нашата Варна.
			</p>
			<p class={pStyle}>
				Посветени сме на това да осигури максимален комфорт и свежест за нашите клиенти. Ние не
				пренегеваме мерките за безопасност! С дългогодишен опит и лично отношение към всяка задача,
				ние се стремим да превърнем всяко пространство в излъчващо чистота и уют.
			</p>
			<p class={pStyle}>
				Свържете се с нас днес, за да разберете как можем да Ви помогнем да постигнете <span
					class={spanStyle}>перфектната визия</span
				>
				за вашия дом, офис или витрина
				<a
					aria-label="Contact form link"
					href={NAVIGATION_ITEMS.find((item) => item.name === 'contact')?.url}
					class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 ml-2"
				>
					→ Изпратете запитване
				</a>
			</p>
		</div>
	</div>
</section>
