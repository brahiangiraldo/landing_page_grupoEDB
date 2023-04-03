import { ComponentMeta, ComponentStory } from '@storybook/react';
import Map from './Map';

export default {
	title: 'Contact/Moleculas/Map',
	component: Map
} as ComponentMeta<typeof Map>

const component: ComponentStory<typeof Map> = (args) => <Map />
export const map = component.bind({})
