<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { Switch } from '@minato-css/svelte'

export let label: string = ''
export let checked: boolean = false
export let disabled: boolean = false
export let name: string | undefined = undefined
export let value: string | number | undefined = undefined
</script>

<Switch bind:checked {disabled} {name} {value} on:change>{label}</Switch>
