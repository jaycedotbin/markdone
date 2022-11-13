<script>
	import View from '$lib/View.svelte';
	import { invoke } from '@tauri-apps/api/tauri';

	let input = '';
</script>

<svelte:head>
	<title>Markdone</title>
</svelte:head>

<div class="flex flex-row">
	<textarea bind:value={input} class="w-1/2 h-screen dark:bg-black dark:text-white" />
	{#await invoke('render_to_html', { value: input }) then output}
		<View {output} />
	{/await}
</div>
