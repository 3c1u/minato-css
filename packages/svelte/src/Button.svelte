<script lang="ts">
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let primary: boolean | null = null
export let danger: boolean | null = null
export let type: string = 'button'

const handleClick = () => {
  dispatch('click')
}
</script>

<button
  class="mcss-button"
  data-danger={danger}
  data-primary={primary}
  type={type}
  on:click={handleClick}
>
  <slot />
</button>
