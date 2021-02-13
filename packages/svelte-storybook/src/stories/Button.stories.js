import Button from '../view/Button.svelte'

export default {
  title: 'Controls/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    danger: { control: 'boolean' },
    raise: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'onClick' },
  },
}

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    click: onClick,
  },
})

export const Plain = Template.bind({})
Plain.args = {
  primary: false,
  danger: false,
  raise: true,
  disabled: false,
  label: 'Button',
}

export const Flat = Template.bind({})
Flat.args = {
  primary: false,
  danger: false,
  raise: false,
  disabled: false,
  label: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  danger: false,
  raise: true,
  disabled: false,
  label: 'Button',
}

export const Danger = Template.bind({})
Danger.args = {
  primary: false,
  danger: true,
  raise: true,
  disabled: false,
  label: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  primary: false,
  danger: false,
  raise: true,
  disabled: true,
  label: 'Button',
}
