import rollupTypescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  plugins: [rollupTypescript({})],
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['react', 'react-dom', '@minato-css/minato-css'],
}
