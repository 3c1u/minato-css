<script lang="ts">
export let placeholder: string | undefined = undefined
export let name: string | undefined = undefined
export let value: string = ''
</script>

<div class="mcss-text-input-container">
  <input type='text' {placeholder} {name} class="mcss-text-input" bind:value />
</div>
