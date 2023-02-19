import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header
} as ComponentMeta<typeof Header>

const component: ComponentStory<typeof Header> = (args) => <Header />
export const header = component.bind({})
