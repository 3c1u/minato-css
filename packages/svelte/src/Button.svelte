<script lang="ts">
export let primary: boolean | null = null
</script>

<button class="mcss-button" data-primary={primary}>
  <slot />
</button>
