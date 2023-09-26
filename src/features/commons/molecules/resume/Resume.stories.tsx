import { ComponentMeta, ComponentStory } from '@storybook/react';
import Resume from './Resume';

export default {
	title: 'Commons/Molecules/Resume',
	component: Resume
} as ComponentMeta<typeof Resume>

const component: ComponentStory<typeof Resume> = (args) => <Resume { ...args } />
export const resume = component.bind({})
resume.args = {
	title: 'We are here for Business Solutions & Ideas.',
	body: 'Somos una empresa con experiencia en los diferentes modelos de negocio existentes en el ámbito tecnológico, financiero, administrativo y creativo.',

}
