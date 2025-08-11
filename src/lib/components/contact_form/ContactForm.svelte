<script lang="ts">
	import { page } from '$app/state';
	import { superForm } from 'sveltekit-superforms';
	import { Turnstile } from 'svelte-turnstile'; // CF Turnstile

	let { formData, turnstileSiteKey } = $props();

	const { delayed, enhance, errors, form, message } = superForm(formData, {
		delayMs: 200,
		timeoutMs: 5000,
		clearOnSubmit: 'errors',
		multipleSubmits: 'prevent',
		onResult({ result }) {
			const status403 = result.status == 403;
			const t: number = result.data?.form?.data?.throttling ?? 0;
			if (status403 && t > 0) {
				throttling = t;
				isLoading = true;
				setThrottling(t);
			}
		}
	});

	const errorStyle = 'bg-red-50/80 text-red-800 border-red-500 dark:bg-red-900/20 dark:text-red-300 dark:border-red-600';
	const successStyle = 'bg-green-50/80 text-green-800 font-medium border-green-600 dark:bg-green-900/20 dark:text-green-300 dark:border-green-500';
	const checkboxText = 'С изпращането Вие се съгласявате с Условията и Политиката за поверителност';

	function setThrottling(delaySec: number) {
		setTimeout(
			() => {
				isLoading = false;
			},
			delaySec * 60 * 1000
		);
	}

	let isLoading = $state(false);
	let throttling = $state(0);
	let termsCheckbox = $state(false);
</script>

<!-- Contact Form wrapper -->
<div class="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
	<h2 class="mb-8 text-2xl font-bold md:text-3xl text-center text-gray-900 dark:text-white">Форма за контакт</h2>
	<!-- Superforms -->
	<form method="POST" action="?/sendemail" use:enhance class="space-y-6">
		<!-- Email input wrapper -->
		<div>
			<label for="email" class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
			<input
				bind:value={$form.email}
				disabled={isLoading}
				required
				maxlength="50"
				type="email"
				placeholder="Твоят e-mail *"
				class="w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none disabled:opacity-50"
				id="email"
				name="email"
				aria-invalid={$errors?.email ? 'true' : undefined}
				aria-describedby="email-error"
			/>
			{#if $errors?.email}{@render errorMsg($errors?.email?.toString(), 'email')}{/if}
		</div>
		<!-- Message input wrapper -->
		<div>
			<label for="msg" class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Съобщение</label>
			<textarea
				bind:value={$form.msg}
				placeholder="Съобщение *"
				rows="6"
				class="w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none resize-vertical"
				name="msg"
				id="msg"
				aria-invalid={$errors?.msg ? 'true' : undefined}
				aria-describedby="msg-error"
			></textarea>
			{#if $errors?.msg}{@render errorMsg($errors?.msg?.toString(), 'msg')}{/if}
		</div>
		<!-- Checkboxes wrapper -->
		<div>
			<div class="flex items-start space-x-3">
				<input
					name="terms"
					bind:checked={termsCheckbox}
					value={termsCheckbox}
					type="checkbox"
					required
					id="terms"
					class="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700"
					aria-invalid={$errors.terms ? 'true' : undefined}
					aria-describedby="terms-error"
				/>
				<label for="terms" class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
					{checkboxText}
				</label>
			</div>
			{#if $errors?.terms}{@render errorMsg($errors?.terms?.toString(), 'terms')}{/if}
		</div>
		{#if $message}
			<p
				class="rounded-lg border-2 p-4 text-center font-medium {page.status == 200
					? successStyle
					: errorStyle}"
				role="alert"
				aria-live="polite"
			>
				{$message}
			</p>
		{/if}
		<button
			type="submit"
			disabled={isLoading || $delayed}
			class="w-full transform rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] focus:ring-4 focus:ring-blue-500/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
		>
			<div class="flex items-center justify-center gap-3">
				{#if !$delayed}
					Изпрати
				{:else}
					{@render loadingSpinner()}
				{/if}
			</div>
		</button>

		<!-- CF Turnstile sveltekit-turnstile -->
		<div class="flex justify-center mt-6">
			<Turnstile siteKey={turnstileSiteKey ?? ''} responseFieldName="cfTurnstileResponse" />
		</div>
	</form>
</div>

{#snippet errorMsg(txt: string | undefined, id: string = '')}
	<p class="mt-2 text-sm" id={`${id}-error`}>
		<span class="inline-flex items-center rounded-lg bg-red-50 px-3 py-2 text-red-800 dark:bg-red-900/20 dark:text-red-300 border border-red-200 dark:border-red-800"
			>{txt ?? ''}</span
		>
	</p>
{/snippet}

{#snippet loadingSpinner()}
	<svg
		class="animate-spin text-white"
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
	>
		<path
			d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-blue-300"
		>
		</path>
	</svg>
{/snippet}
