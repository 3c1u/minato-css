<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { RadioGroup, Radio } from '@minato-css/svelte'

const dispatch = createEventDispatcher()

export let name: string = 'nukitashi'
let radioGroup: number = 10
</script>

<RadioGroup name={name} on:change>
  <Radio bind:group={radioGroup} value={10}>Katagiri Nanase</Radio>
  <Radio bind:group={radioGroup} value={20}>Watarai Hinami</Radio>
  <Radio bind:group={radioGroup} value={30}>Hotori Misaki</Radio>
</RadioGroup>
