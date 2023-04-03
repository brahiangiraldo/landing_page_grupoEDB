import { ComponentMeta, ComponentStory } from '@storybook/react';
import TeamProfessional from './TeamProfessional';

export default {
	title: 'Meet_us/Page/TeamProfessional',
	component: TeamProfessional
} as ComponentMeta<typeof TeamProfessional>

const component: ComponentStory<typeof TeamProfessional> = (args) => <TeamProfessional />
export const teamProfessional = component.bind({})

