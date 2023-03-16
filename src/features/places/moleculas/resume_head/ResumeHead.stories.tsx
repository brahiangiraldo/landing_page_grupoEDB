import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResumeHead from './ResumeHead';





export default {
	title: 'Place/Moleculas/ResumeHead',
	component: ResumeHead
} as ComponentMeta<typeof ResumeHead>

const component: ComponentStory<typeof ResumeHead> = (args) => <ResumeHead { ...args } />
export const resumeHead = component.bind({})
resumeHead.args = {
	title: 'Know all our headquarters',
	body: 'Get to know all our offices around the world. We work hand in hand with the best to offer you the best.'
}
