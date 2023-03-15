
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardGroup from './CardGroup'




export default {
	title: 'Place/Moleculas/CardGroup',
	component: CardGroup
} as ComponentMeta<typeof CardGroup>

const component: ComponentStory<typeof CardGroup> = (args) => <CardGroup />

export const cardGroup = component.bind({})

