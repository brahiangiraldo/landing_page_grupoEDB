import Button from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
	title: 'Commons/Atoms/Button',
	component: Button
} as ComponentMeta<typeof Button>

const component: ComponentStory<typeof Button> = (args) => <Button { ...args } />
export const button = component.bind({})
button.args = {
	width: 213,
	height: 51,
	text: 'Read More',
	txtColor: 'white',
	bgColor: 'black',
}
