<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		href: string;
	}
	let { children, href = '' }: Props = $props();
	const aria = `link to ${href}`;
</script>

<a
	{href}
	class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:underline"
	aria-label="Developer contact page"
>
	{#if children}
		{@render children()}
	{/if}
</a>
