import RadioGroup from '../view/RadioGroup.svelte'

export default {
  title: 'Controls/Radio Group',
  component: RadioGroup,
  argTypes: {
    name: { control: 'text' },
    onChange: { action: 'onChange' },
  },
}

const Template = ({ onChange, ...args }) => ({
  Component: RadioGroup,
  props: args,
  on: {
    change: onChange,
  },
})

export const RadioGroup_ = Template.bind({})
RadioGroup_.args = {
  name: 'nukitashi',
}
