
import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconPhone from './IconPhone'

export default {
  title: 'Atoms/Icons/IconPhone',
  component: IconPhone
} as ComponentMeta<typeof IconPhone>

const component: ComponentStory<typeof IconPhone> = (args) => <IconPhone { ...args } />
export const iconPhone = component.bind({})
iconPhone.args = {
  color: 'black',
  width: 94.68,
  height: 88.17,

}
