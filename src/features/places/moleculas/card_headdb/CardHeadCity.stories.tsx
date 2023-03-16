import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardHeadCity from './CardHeadCity'
import Dubai from '../../../../assets/Dubai.png'

export default {
	title: 'Place/Moleculas/CardHeadCity',
	component: CardHeadCity
} as ComponentMeta<typeof CardHeadCity>

const component: ComponentStory<typeof CardHeadCity> = (args) => <CardHeadCity { ...args } />

export const cardHeadCity = component.bind({})
cardHeadCity.args = {
	image: Dubai,
	titulo: 'hola mundo',

}

