import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResumePoints from './ResumePoints';


export default {
	title: 'Meet_us/Moleculas/ResumePoints',
	component: ResumePoints
} as ComponentMeta<typeof ResumePoints>

const component: ComponentStory<typeof ResumePoints> = (args) => < ResumePoints { ...args } />
export const resumePoints = component.bind({})
resumePoints.args = {
	title: 'Objectives ',
	body: 'We make use of technology to enhance our services and hand in hand with these we constantly improve for you and your business.'
}
