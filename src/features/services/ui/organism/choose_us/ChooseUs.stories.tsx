import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChooseUs from './ChooseUs';


export default {
	title: 'Services/Organism/ChooseUs',
	component: ChooseUs

} as ComponentMeta<typeof ChooseUs>
const component: ComponentStory<typeof ChooseUs> = (args) => <ChooseUs />
export const chooseUs = component.bind({})