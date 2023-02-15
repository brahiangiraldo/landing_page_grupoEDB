import Button from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const component: ComponentStory<typeof Button> = (args) => <Button { ...args } />
export const buttonOne = component.bind({})
buttonOne.args = {
  text: 'Hola mundo',
  color: '#000fff'
}
