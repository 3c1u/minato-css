<script lang="ts">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let value: string | number | undefined = undefined
export let disabled: boolean = false
export let selected: boolean = false
</script>

<option class="mcss-option" {value} {disabled} {selected}>
  <slot />
</option>
