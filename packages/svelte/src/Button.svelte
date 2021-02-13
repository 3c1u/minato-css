<script lang="ts">
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let primary: boolean | null = null
export let danger: boolean | null = null
export let raise: boolean = true
export let disabled: boolean = false
export let type: 'button' | 'reset' | 'submit' = 'button'
</script>

<button
  class="mcss-button"
  data-danger={danger ? true : undefined}
  data-primary={primary ? true : undefined}
  data-no-raise={raise ? undefined : true}
  {type}
  {disabled}
  on:click
>
  <slot />
</button>
