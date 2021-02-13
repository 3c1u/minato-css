<script lang="ts">
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let checked: boolean = false
export let disabled: boolean = false
export let name: string | undefined = undefined
export let value: string | undefined = undefined

const handleChange = () => {
  dispatch('change', checked)
}
</script>

<label class="mcss-checkbox-container">
  <input
    class="mcss-checkbox"
    type="checkbox"
    bind:checked
    {disabled}
    {name}
    {value}
    on:change={handleChange}
  />
  <span class="mcss-checkbox-label"><slot /></span>
</label>
