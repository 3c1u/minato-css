import Breakpoint from '../view/Breakpoint.svelte'

export default {
  title: 'Layouts/Breakpoint',
  component: Breakpoint,
  argTypes: {},
}

const Template = ({ ...args }) => ({
  Component: Breakpoint,
  props: args,
})

export const Breakpoint_ = Template.bind({})
Breakpoint.args = {}
