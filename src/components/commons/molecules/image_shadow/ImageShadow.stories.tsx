import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageShadow from './ImageShadow';
import img1 from '../../../../assets/img1.png'

export default {
  title: 'Commons/Molecules/ImageShadow',
  component: ImageShadow
} as ComponentMeta<typeof ImageShadow>

const component: ComponentStory<typeof ImageShadow> = (args) => <div style={ { padding: '50px' } }><ImageShadow { ...args } /></div>
export const imageShadow = component.bind({})
imageShadow.args = {
  image: img1
}
