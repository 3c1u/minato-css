<script lang="ts">
import { Dropdown, DropdownItem } from '@minato-css/svelte'

export let name: string = 'nukitashi2'
export let disabled: boolean = false
</script>

<Dropdown on:change {name} {disabled}>
    <DropdownItem>Reizeiin Tohka</DropdownItem>
    <DropdownItem>Tadasugawa Rei</DropdownItem>
    <DropdownItem>Onabuta Ikuko</DropdownItem>
</Dropdown>
