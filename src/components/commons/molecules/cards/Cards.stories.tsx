
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Cards from './Cards'
// import Cards from './Cards';


export default {
  title: 'Commons/Molecules/Cards',
  component: Cards
} as ComponentMeta<typeof Cards>

const component: ComponentStory<typeof Cards> = (args) => <Cards { ...args } />
export const cards = component.bind({})
cards.args = {
  title: 'Título de la card',
  description: 'Descripción de la card',
  width: '100px',
  minHeight: '100px',
  bgColor: 'cyan_blue',
  src: 'https://i.imgur.com/1bX5QH6.jpg',

}




