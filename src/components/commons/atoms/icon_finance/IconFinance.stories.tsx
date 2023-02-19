import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconFinance from './IconFinance';


export default {
  title: 'Commons/Atoms/Icons/IconFinance',
  component: IconFinance
} as ComponentMeta<typeof IconFinance>

const component: ComponentStory<typeof IconFinance> = (args) => <IconFinance { ...args } />
export const iconFinance = component.bind({})
iconFinance.args = {
  color: 'black',
  width: 154,
  height: 138,

}