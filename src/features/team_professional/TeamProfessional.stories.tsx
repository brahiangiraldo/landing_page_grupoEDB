import { ComponentMeta, ComponentStory } from '@storybook/react';
import TeamProfessional from './TeamProfessional';

export default {
	title: 'Team_professional/TeamProfessional',
	component: TeamProfessional
} as ComponentMeta<typeof TeamProfessional>

const component: ComponentStory<typeof TeamProfessional> = (args) => <TeamProfessional />
export const teamProfessional = component.bind({})

