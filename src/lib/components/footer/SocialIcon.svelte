<script lang="ts">
	interface Props {
		href: string;
		label: string;
		svgUrl: string;
	}
	let { href, label, svgUrl }: Props = $props();
	const altTxt = `${label} service icon`;
	
	// Check if this is a Facebook icon to avoid applying the blue filter
	const isFacebook = label.toLowerCase().includes('facebook');
</script>

<a {href} class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110" rel="noopener noreferrer">
	<img 
		src={svgUrl} 
		alt={altTxt} 
		width="40" 
		height="40" 
		class={isFacebook ? '' : 'filter-blue-600 dark:filter-blue-400'} 
	/>
	<span class="sr-only">{label}</span>
</a>

<style>
	.filter-blue-600 {
		filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
	}

	.dark .filter-blue-400 {
		filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%);
	}
</style>
