import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Commons/Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar { ...args } />;

export const avatar = Template.bind({});
avatar.args = {
  alt: 'John Doe',
  src: 'https://i.imgur.com/1bX5QH6.jpg',
  size: '70px',
};