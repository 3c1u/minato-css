import Dropdown from '../view/Dropdown.svelte'

export default {
  title: 'Controls/Dropdown',
  component: Dropdown,
  argTypes: {
    name: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
}

const Template = ({ onChange, ...args }) => ({
  Component: Dropdown,
  props: args,
  on: {
    change: onChange,
  },
})

export const Dropdown_ = Template.bind({})
Dropdown_.args = {
  name: 'nukitashi2',
  disabled: false,
}
