<script lang="ts">
	let { children, title = '' } = $props();
</script>

<div>
	<h2 class="mb-6 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide md:text-base">
		{title}
	</h2>
	<ul class="font-medium text-gray-600 dark:text-gray-300">
		{#if children}
			{@render children()}
		{/if}
	</ul>
</div>
