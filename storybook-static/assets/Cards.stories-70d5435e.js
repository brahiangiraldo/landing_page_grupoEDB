var e=Object.defineProperty;var n=(o,t)=>e(o,"name",{value:t,configurable:!0});import{a as r}from"./jsx-runtime-189c9bee.js";import{C as s}from"./Cards-04ce390d.js";import"./index-d7929fe6.js";import"./es.object.get-own-property-descriptor-1a76aaf5.js";const C={parameters:{storySource:{source:`
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Cards from './Cards';



export default {
	title: 'Commons/Molecules/Cards',
	component: Cards
} as ComponentMeta<typeof Cards>

const component: ComponentStory<typeof Cards> = (args) => <Cards { ...args } />
export const cards = component.bind({})
cards.args = {

	children: <p>Hello wordsss</p>

}




`,locationsMap:{cards:{startLoc:{col:48,line:12},endLoc:{col:79,line:12},startBody:{col:48,line:12},endBody:{col:79,line:12}}}}},title:"Commons/Molecules/Cards",component:s},a=n(o=>r(s,{...o}),"component"),c=a.bind({});c.args={children:r("p",{children:"Hello wordsss"})};const f=["cards"];export{f as __namedExportsOrder,c as cards,C as default};
//# sourceMappingURL=Cards.stories-70d5435e.js.map
