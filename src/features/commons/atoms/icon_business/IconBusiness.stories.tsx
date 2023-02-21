import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconBusiness from './IconBusiness'


export default {
  title: 'Commons/Atoms/Icons/IconBusiness',
  component: IconBusiness
} as ComponentMeta<typeof IconBusiness>

const component: ComponentStory<typeof IconBusiness> = (args) => <IconBusiness { ...args } />
export const iconBusiness = component.bind({})
iconBusiness.args = {
  color: 'black',
  width: 89,
  height: 88,
}
