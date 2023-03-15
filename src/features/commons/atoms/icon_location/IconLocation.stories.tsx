import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconLocation from './IconLocation'


export default {
  title: 'Commons/Atoms/Icons/IconLocation',
  component: IconLocation
} as ComponentMeta<typeof IconLocation>

const component: ComponentStory<typeof IconLocation> = (args) => <IconLocation { ...args } />
export const iconLocation = component.bind({})
iconLocation.args = {
  color: "#41A5EE",
  width: 87,
  height: 86,

}