import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconStar from './IconStar'



export default {
  title: 'Commons/Atoms/Icons/IconStar',
  component: IconStar
} as ComponentMeta<typeof IconStar>

const component: ComponentStory<typeof IconStar> = (args) => <IconStar { ...args } />
export const iconStar = component.bind({})
iconStar.args = {
  color: 'blue',
  width: 155,
  height: 150,
}
