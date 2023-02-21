import { ComponentMeta, ComponentStory } from '@storybook/react';
import Clients from './Clients';

export default {
  title: 'OurClientes/Organism/Clients',
  component: Clients
} as ComponentMeta<typeof Clients>

const component: ComponentStory<typeof Clients> = (args) => <Clients />
export const clients = component.bind({})
