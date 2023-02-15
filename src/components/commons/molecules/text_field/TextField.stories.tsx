import TextField from './TextField'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const component: ComponentStory<typeof TextField> = (args) => <TextField />
export const textField = component.bind({})
