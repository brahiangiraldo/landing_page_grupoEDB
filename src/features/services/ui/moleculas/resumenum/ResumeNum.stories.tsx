import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResumeNum from './ResumeNum';



export default {
	title: 'Services/Moleculas/ResumeNum',
	component: ResumeNum
} as ComponentMeta<typeof ResumeNum>

const component: ComponentStory<typeof ResumeNum> = (args) => <ResumeNum { ...args } />
export const resumeNum = component.bind({})
resumeNum.args = {
	title: '20 ++',
	body: 'Years Experience'
}
