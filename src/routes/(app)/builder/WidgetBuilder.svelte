<script>
	import AddWidget from './AddWidget.svelte';
	import WidgetFields from './WidgetFields.svelte';
	export let addField = false;
	export let fields = [];

	//$: console.log('AddWidget:', fields);

	//ParaglideJS
	import * as m from '@src/paraglide/messages';
</script>

<div class="flex flex-col">
	{#if addField}
		<AddWidget {fields} bind:addField />
	{:else}
		<button class="variant-filled-primary btn mb-4 mt-1" on:click={() => (addField = true)}> {m.WidgetBuilder_AddColectionField()} </button>
		<WidgetFields {fields} />
	{/if}
</div>
