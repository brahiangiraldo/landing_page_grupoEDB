import { ComponentMeta, ComponentStory } from '@storybook/react';
import meetour from '../../../../assets/meetour.png'
import MeetOur from './MeetOur';




export default {
	title: 'Meet_us/Moleculas/MeetOur',
	component: MeetOur
} as ComponentMeta<typeof MeetOur>

const component: ComponentStory<typeof MeetOur> = (args) => <div style={ { padding: '50px' } }><MeetOur { ...args } /></div>
export const meetOur = component.bind({})
meetOur.args = {
	image: meetour
}
