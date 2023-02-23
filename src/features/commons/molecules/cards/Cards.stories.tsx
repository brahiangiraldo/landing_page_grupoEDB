
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Cards from './Cards';
// import Cards from './Cards';


export default {
  title: 'Commons/Molecules/Cards',
  component: Cards
} as ComponentMeta<typeof Cards>

const component: ComponentStory<typeof Cards> = (args) => <Cards { ...args } />
export const cards = component.bind({})
cards.args = {

  children: <p>Hello word</p>

}




