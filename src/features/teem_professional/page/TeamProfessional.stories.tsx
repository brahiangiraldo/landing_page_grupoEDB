import { ComponentMeta, ComponentStory } from '@storybook/react';
import TeamProfesional from './TeamProfesional';


export default {
	title: 'Team/Page/TeamProfessional',
	component: TeamProfesional
} as ComponentMeta<typeof TeamProfesional>

const component: ComponentStory<typeof TeamProfesional> = (args) => <TeamProfesional />
export const teamProfesional = component.bind({})
