import svelte from 'rollup-plugin-svelte'
import { typescript, scss } from 'svelte-preprocess'

export default {
  plugins: [svelte({
    preprocess: [
      typescript({ tsconfigFile: '../../tsconfig.json' }),
      scss()
    ],
  })]
}
