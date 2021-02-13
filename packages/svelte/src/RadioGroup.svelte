<script lang="ts">
import { setContext, createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let name: string | undefined = undefined
const radioGroupNameKey = 'minato-svelte:radio-group-name'

setContext(radioGroupNameKey, {
	getName: () => name,
  change: (value: number) => {
    dispatch('change', { value })
  }
})
</script>

<div class="mcss-radio-group">
  <slot />
</div>
