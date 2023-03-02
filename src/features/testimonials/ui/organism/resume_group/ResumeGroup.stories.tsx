import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResumeGroup from './ResumeGroup';




export default {
  title: 'Testimonials/Organism/ResumeGroup',
  component: ResumeGroup
} as ComponentMeta<typeof ResumeGroup>

const component: ComponentStory<typeof ResumeGroup> = (args) => <ResumeGroup { ...args } />
export const resumeGroup = component.bind({})
resumeGroup.args = {
  title: 'Testimonials around the world',
  body: 'Read the testimonials of our clients around the world. Meet the customers who have purchased our services.'
}
