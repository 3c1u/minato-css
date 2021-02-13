import Switch from '../view/Switch.svelte'

export default {
  title: 'Controls/Switch',
  component: Switch,
  argTypes: {
    label: { control: 'text' },
    onChange: {action: 'onChange'}
  },
}

const Template = ({ onChange, ...args }) => ({
  Component: Switch,
  props: args,
  on: {
    change: onChange,
  },
})

export const Switch_ = Template.bind({})
Switch_.args = {
  label: 'Switch',
}
