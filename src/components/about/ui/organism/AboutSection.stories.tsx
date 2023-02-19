import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutSection from './AboutSection';

export default {
  title: 'About/Organism/AboutSection',
  component: AboutSection
} as ComponentMeta<typeof AboutSection>

const component: ComponentStory<typeof AboutSection> = (args) => <AboutSection />
export const aboutSection = component.bind({})
