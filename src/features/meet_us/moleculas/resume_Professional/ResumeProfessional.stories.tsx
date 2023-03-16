import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResumeProfessional from './ResumeProfessional';

export default {
	title: 'Meet_us/Moleculas/ResumeProfessional',
	component: ResumeProfessional
} as ComponentMeta<typeof ResumeProfessional>

const component: ComponentStory<typeof ResumeProfessional> = (args) => <ResumeProfessional { ...args } />
export const resumeProfessional = component.bind({})
resumeProfessional.args = {
	title1: 'Connecting with a team of professionals',
	body1: 'Get to know all our offices around the world. We work hand in hand with the best to offer you the best.'
}
