import { ComponentMeta, ComponentStory } from '@storybook/react'
import ScrollReveal from './ScrollReveal'


export default {
	title: 'Components/Molecules/ScrollReveal',
	component: ScrollReveal
} as ComponentMeta<typeof ScrollReveal>

const component: ComponentStory<typeof ScrollReveal> = (args) => (<ScrollReveal/>
)
export const itemMenubar = component.bind({})

