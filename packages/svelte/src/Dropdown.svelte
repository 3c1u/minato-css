<script lang="ts">
import { setContext, createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let name: string | undefined = undefined
export let disabled: boolean = false
const selectGroupNameKey = 'minato-svelte:select-group-name'

setContext(selectGroupNameKey, {
  change: (value: number) => {
    dispatch('change', { value })
  },
})
</script>

<div class="mcss-selector" data-disabled={disabled ? true : undefined}>
  <select class="mcss-select" {name} {disabled}>
    <slot />
  </select>
</div>
