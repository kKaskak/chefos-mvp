<script lang="ts">
	import { ContactForm } from '$components';
	import ContactDetails from '$components/contact_form/ContactDetails.svelte';

	let { data } = $props();
	let turnstileSiteKey = $derived(data.turnstileSiteKey);
</script>

<div class="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
	<div class="px-4 py-12 lg:px-8 max-w-7xl mx-auto">
		<h1 class="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:mb-16 md:text-5xl">Контакт</h1>
		<!-- Contact form and details wrapper. Row on large, column on medium screen -->
		<div class="mx-auto flex flex-col gap-12 lg:flex-row lg:gap-16">
			<section class="w-full lg:w-1/2">
				<ContactForm formData={data.form} {turnstileSiteKey} />
			</section>
			<section class="w-full lg:w-1/2">
				<ContactDetails />
			</section>
		</div>
	</div>
</div>
