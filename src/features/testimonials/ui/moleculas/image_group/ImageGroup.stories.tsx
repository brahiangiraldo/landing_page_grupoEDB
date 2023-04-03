import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageGroup from './ImageGroup';

import img4 from '../../../../../assets/img4.png'

export default {
	title: 'Testimonials/Moleculas/ImageGroup',
	component: ImageGroup
} as ComponentMeta<typeof ImageGroup>

const component: ComponentStory<typeof ImageGroup> = (args) => <ImageGroup { ...args } />
export const imageGroup = component.bind({})
imageGroup.args = {
	image1: img4
}

