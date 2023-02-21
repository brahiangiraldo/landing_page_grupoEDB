import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuBar from './MenuBar';

export default {
  title: 'Commons/Organism/MenuBar',
  component: MenuBar
} as ComponentMeta<typeof MenuBar>

const component: ComponentStory<typeof MenuBar> = (args) => <MenuBar />
export const menuBar = component.bind({})
