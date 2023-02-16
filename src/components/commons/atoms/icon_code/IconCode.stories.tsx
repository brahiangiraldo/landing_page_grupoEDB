import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconCode from './IconCode';



export default {
  title: 'Atoms/Icons/IconCode',
  component: IconCode
} as ComponentMeta<typeof IconCode>

const component: ComponentStory<typeof IconCode> = (args) => <IconCode { ...args } />
export const iconCode = component.bind({})
iconCode.args = {
  color: 'black',
  width: 117,
  height: 109,

}