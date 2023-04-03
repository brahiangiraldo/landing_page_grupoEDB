import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'

export default {
	title: 'Footer/Footer',
	component: Footer
} as ComponentMeta<typeof Footer>

const component: ComponentStory<typeof Footer> = (args) => <Footer { ...args } />
export const footer = component.bind({})
footer.args = {
	color: "#E7E9EB",

}
