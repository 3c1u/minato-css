import svelte from 'rollup-plugin-svelte'
import { scss } from 'svelte-preprocess'

export default {
  plugins: [svelte({
    preprocess: [scss()],
  })]
}
