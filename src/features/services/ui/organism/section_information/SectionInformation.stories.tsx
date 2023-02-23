
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SectionInformation } from './SectionInformation';

export default {
  title: 'Services/Organism/SectionServices',
  component: SectionInformation

} as ComponentMeta<typeof SectionInformation>
const component: ComponentStory<typeof SectionInformation> = (args) => <SectionInformation />
export const sectioninformation = component.bind({})