<script lang="ts">
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let checked: boolean = false
export let disabled: boolean = false
export let name: string | undefined = undefined
export let value: string | number | undefined = undefined
</script>

<label class="mcss-switch-container">
  <input class="mcss-switch" type="checkbox" bind:checked {disabled} {name} {value} on:change />
  <span class="mcss-switch-label" data-disabled={disabled ? true : undefined}><slot /></span>
</label>
