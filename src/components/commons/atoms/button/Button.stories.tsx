import Button from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const component: ComponentStory<typeof Button> = (args) => <Button { ...args } />
export const button = component.bind({})
button.args = {
  text: 'Hola mundo',
  txtColor: '#000fff',
  bgColor: 'blue',
  onClick: () => { }
}
