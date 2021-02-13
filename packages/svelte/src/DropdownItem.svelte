<script lang="ts">
import { createEventDispatcher, getContext } from 'svelte'

const dispatch = createEventDispatcher()
const selectGroupNameKey = 'minato-svelte:select-group-name'

export let value: string | number | undefined = undefined
export let disabled: boolean = false
export let selected: boolean = false

const { change } = getContext(selectGroupNameKey) ?? {}

const handleChange = () => {
  dispatch('change', value)
  change(value)
}
</script>

<option class="mcss-option" {value} {disabled} {selected} on:blur={handleChange}>
  <slot />
</option>
