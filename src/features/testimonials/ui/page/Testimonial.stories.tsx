import { ComponentMeta, ComponentStory } from '@storybook/react';
import Testimonial from './Testimonial';


export default {
	title: 'Services/Organism/Page/Testimonial',
	component: Testimonial

} as ComponentMeta<typeof Testimonial>
const component: ComponentStory<typeof Testimonial> = (args) => <Testimonial />
export const testimonial = component.bind({})