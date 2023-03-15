import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResumeMeetOur from './ResumeMeetOur';


export default {
  title: 'Testimonials/Organism/ResumeMeetOur',
  component: ResumeMeetOur
} as ComponentMeta<typeof ResumeMeetOur>

const component: ComponentStory<typeof ResumeMeetOur> = (args) => < ResumeMeetOur { ...args } />
export const resumeMeetOur = component.bind({})
resumeMeetOur.args = {
  title: 'Meet Our Team',
  body: ' We firmly believe in a culture where empathy and values ​​prevail, this is how we transform processes.'
}
