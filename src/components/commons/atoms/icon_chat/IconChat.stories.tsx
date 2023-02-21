import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconChat from './IconChat';

export default {
  title: 'Commons/Atoms/Icons/IconChat',
  component: IconChat
} as ComponentMeta<typeof IconChat>

const component: ComponentStory<typeof IconChat> = (args) => <IconChat { ...args } />
export const iconChat = component.bind({})
iconChat.args = {
  color: 'black',
  width: 117,
  height: 109,

}