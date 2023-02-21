import TextField from './TextField'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Commons/Atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const component: ComponentStory<typeof TextField> = (args) => <TextField { ...args } />
export const textField = component.bind({})
textField.args = {
  onChange: (value: string) => { },
  size: 'sm'
}

