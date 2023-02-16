import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconPointer from './IconPointer';

export default {
  title: 'Atoms/Icons/IconPointer',
  component: IconPointer
} as ComponentMeta<typeof IconPointer>

const component: ComponentStory<typeof IconPointer> = (args) => <IconPointer { ...args } />
export const iconPointer = component.bind({})
iconPointer.args = {
  color: 'black',
  width: 89,
  height: 86,
}
