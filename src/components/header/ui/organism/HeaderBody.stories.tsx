import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderBody from './HeaderBody';

export default {
  title: 'Header/Organism/HeaderBody',
  component: HeaderBody
} as ComponentMeta<typeof HeaderBody>

const component: ComponentStory<typeof HeaderBody> = (args) => <div style={ { width: '80vw', height: '90vh' } }><HeaderBody /></div>
export const headerBody = component.bind({})
