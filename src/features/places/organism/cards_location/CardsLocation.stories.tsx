import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CardsLocation } from './CardsLocation'

export default {
	title: 'Place/Organism/CardsLocation',
	component: CardsLocation
} as ComponentMeta<typeof CardsLocation>

const component: ComponentStory<typeof CardsLocation> = (args) => <CardsLocation />

export const cardsLocation = component.bind({})
