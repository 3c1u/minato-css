module.exports = {
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes('svelte-loader'),
    )
    svelteLoader.options.preprocess = require('svelte-preprocess')({
      scss: {},
      typescript: {
        tsconfigFile: '../../tsconfig.json',
        transpileOnly: true,
      },
    })
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
