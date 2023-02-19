import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconDevices from './IconDevices';


export default {
  title: 'Commons/Atoms/Icons/IconDevices',
  component: IconDevices
} as ComponentMeta<typeof IconDevices>

const component: ComponentStory<typeof IconDevices> = (args) => <IconDevices { ...args } />
export const iconDevices = component.bind({})
iconDevices.args = {
  color: 'black',
  width: 155,
  height: 150,
}
