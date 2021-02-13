<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { RadioGroup, Radio } from '@minato-css/svelte'

export let name: string = 'nukitashi'
let radioGroup: number = 10
</script>

<RadioGroup name={name} on:change>
  <Radio bind:group={radioGroup} value={10}>Katagiri Nanase</Radio>
  <Radio bind:group={radioGroup} value={20}>Watarai Hinami</Radio>
  <Radio bind:group={radioGroup} value={30}>Hotori Misaki</Radio>
  <Radio bind:group={radioGroup} value={40} disabled>Kotoyose Fumino</Radio>
</RadioGroup>
