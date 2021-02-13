import CheckboxGroup from '../view/CheckboxGroup.svelte'

export default {
  title: 'Controls/Checkbox Group',
  component: CheckboxGroup,
  argTypes: {},
}

const Template = ({ ...args }) => ({
  Component: CheckboxGroup,
  props: args,
})

export const CheckboxGroup_ = Template.bind({})
