import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconHouse from './IconHouse'

export default {
  title: 'Atoms/Icons/IconHouse',
  component: IconHouse
} as ComponentMeta<typeof IconHouse>

const component: ComponentStory<typeof IconHouse> = (args) => <IconHouse { ...args } />
export const iconHouse = component.bind({})
iconHouse.args = {
  color: 'black',
  width: 87,
  height: 86,

}