
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SectionCardsInformation from './SectionCardsInformation';


export default {
	title: 'Services/Organism/SectionCardsInformation',
	component: SectionCardsInformation

} as ComponentMeta<typeof SectionCardsInformation>
const component: ComponentStory<typeof SectionCardsInformation> = (args) => <SectionCardsInformation />
export const sectionCardsInformation = component.bind({})