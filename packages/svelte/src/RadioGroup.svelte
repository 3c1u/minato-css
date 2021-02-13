<script lang="ts">
import { setContext } from 'svelte'

export let name: string | undefined = undefined
const radioGroupNameKey = 'minato-svelte:radio-group-name'

setContext(radioGroupNameKey, {
	getName: () => name
})
</script>

<div class="mcss-radio-group">
  <slot />
</div>
