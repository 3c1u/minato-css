<script lang="ts">
import { createEventDispatcher, getContext } from 'svelte'

const dispatch = createEventDispatcher()
const radioGroupNameKey = 'minato-svelte:radio-group-name'

export let checked: boolean = false
export let disabled: boolean = false
export let name: string | undefined = undefined
export let group: number | undefined = undefined
export let value: number | undefined = undefined

$: checked = group !== undefined && group === value

const { getName, change } = getContext(radioGroupNameKey) ?? {}
$: computedName = getName ? getName() : name

const handleChange = () => {
  group = value
  dispatch('change', checked)
  change(value)
}
</script>

<label class="mcss-radio-container">
  <input
    class="mcss-radio"
    type="radio"
    {checked}
    {disabled}
    {value}
    name={computedName}
    on:change={handleChange}
  />
  <span class="mcss-radio-label" data-disabled={disabled ? true : undefined}><slot /></span>
</label>
