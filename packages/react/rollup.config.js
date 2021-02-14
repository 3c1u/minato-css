import rollupTypescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  plugins: [rollupTypescript({ jsx: 'react' })],
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['react', 'react-dom', '@minato-css/minato-css'],
}
