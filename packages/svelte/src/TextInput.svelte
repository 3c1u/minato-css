<script lang="ts">
export let type: string = 'text'
export let placeholder: string | undefined = undefined
</script>

<div class="mcss-text-input-container">
  <input type={type} placeholder={placeholder} class="mcss-text-input" />
</div>
