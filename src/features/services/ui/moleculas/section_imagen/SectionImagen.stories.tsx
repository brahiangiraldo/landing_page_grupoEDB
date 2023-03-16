import { ComponentMeta, ComponentStory } from '@storybook/react';
import img3 from '../../../../../assets/img3.png'
import SectionImagen from './SectionImagen';



export default {
	title: 'Services/Moleculas/SectionImagen',
	component: SectionImagen
} as ComponentMeta<typeof SectionImagen>

const component: ComponentStory<typeof SectionImagen> = (args) => <div style={ { padding: '50px' } }><SectionImagen { ...args } /></div>
export const sectionImagen = component.bind({})
sectionImagen.args = {
	image: img3
}