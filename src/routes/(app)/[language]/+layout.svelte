<script lang="ts">
	import { page } from '$app/stores';
	import { contentLanguage } from '@stores/store';
	contentLanguage.set($page.params.language);
</script>

<slot />
