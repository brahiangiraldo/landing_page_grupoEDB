
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ResumeMeetOur from '../resume_meetour/ResumeMeetOur';
import CardsMeetOur from './CardsMeetOur';



export default {
  title: 'Testimonials/Organism/CardsMeetOur',
  component: CardsMeetOur
} as ComponentMeta<typeof CardsMeetOur>

const component: ComponentStory<typeof CardsMeetOur> = (args) => <CardsMeetOur { ...args } ><ResumeMeetOur title={ 'Meet Our Team ' } body={ 'We firmly believe in a culture where empathy and values ​​prevail, this is how we transform processes.' } /></CardsMeetOur>
export const cardsMeetOur = component.bind({})





