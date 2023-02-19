import { ComponentMeta, ComponentStory } from '@storybook/react';
import Banner from './Banner';

export default {
  title: 'Commons/Organism/Banner',
  component: Banner
} as ComponentMeta<typeof Banner>

const component: ComponentStory<typeof Banner> = (args) => <Banner />
export const banner = component.bind({})
