<script lang="ts">
import { setContext, createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let name: string | undefined = undefined
export let disabled: boolean = false

const handleChange = (event: Event) => {
  dispatch('change', (event.target as HTMLSelectElement).value)
}
</script>

<div class="mcss-selector" data-disabled={disabled ? true : undefined}>
  <select class="mcss-select" {name} {disabled} on:change={handleChange}>
    <slot />
  </select>
</div>
