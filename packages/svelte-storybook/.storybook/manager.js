import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import brandImage from '../../../assets/logo-sm.png'

const theme = create({
  base: 'light',
  brandTitle: 'minato.css',
  brandUrl: 'https://github.com/minato-css',
  brandImage,
})

addons.setConfig({
  theme,
})
