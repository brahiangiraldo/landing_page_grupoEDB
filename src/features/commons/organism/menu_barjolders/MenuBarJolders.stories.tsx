import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuBarJolders from './MenuBarJolders';

export default {
	title: 'Commons/Organism/MenuBarJolders',
	component: MenuBarJolders
} as ComponentMeta<typeof MenuBarJolders>

const component: ComponentStory<typeof MenuBarJolders> = (args) => <MenuBarJolders />
export const menuBarJolders = component.bind({})

