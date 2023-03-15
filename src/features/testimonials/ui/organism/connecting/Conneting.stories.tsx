import { ComponentMeta, ComponentStory } from '@storybook/react';
import Connecting from './Connecting';




export default {
	title: 'Testimonials/Organism/Connecting',
	component: Connecting
} as ComponentMeta<typeof Connecting>

const component: ComponentStory<typeof Connecting> = (args) => < Connecting />
export const connecting = component.bind({})

