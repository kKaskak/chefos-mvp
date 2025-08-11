<script lang="ts">
	let { href = '/', src = '', text = '' } = $props();
</script>

<a {href} class="flex items-center group hover:scale-105 transition-transform duration-200">
	<img {src} alt="footer logo" width="90" height="90" class="me-3 h-16 drop-shadow-sm" />
	<span class="text-white dark:text-gray-100 mb-2 self-end text-base font-bold whitespace-nowrap group-hover:text-blue-300 dark:group-hover:text-blue-400 transition-colors"
		>{text}</span
	>
</a>
