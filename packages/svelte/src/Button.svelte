<script lang="ts">
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let primary: boolean | null = null
export let danger: boolean | null = null
export let raise: boolean = true
export let disabled: boolean = false
export let type: ButtonType = 'button'

const handleClick = () => {
  dispatch('click')
}
</script>

<button
  class="mcss-button"
  data-danger={danger}
  data-primary={primary}
  data-no-raise={raise ? undefined : true}
  {type}
  {disabled}
  on:click={handleClick}
>
  <slot />
</button>
