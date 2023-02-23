import SectionServices from './SectionServices';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Services/Organism/SectionServices',
  component: SectionServices

} as ComponentMeta<typeof SectionServices>
const component: ComponentStory<typeof SectionServices> = (args) => <SectionServices />
export const sectionServices = component.bind({})