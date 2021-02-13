<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { Button } from '@minato-css/svelte'

const dispatch = createEventDispatcher()

export let label: string = ''
export let primary: boolean | null = null
export let danger: boolean | null = null
export let raise: boolean = true
export let disabled: boolean = false
export let type: 'button' | 'reset' | 'submit' = 'button'
</script>

<Button {primary} {danger} {raise} {disabled} {type} on:click>{label}</Button>
