import Button from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const component: ComponentStory<typeof Button> = (args) => <Button { ...args } />
export const button = component.bind({})
button.args = {
  width: 100,
  height: 100,
  text: 'hola mundo',
  txtColor: 'white',
  bgColor: 'black',
}
