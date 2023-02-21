var r=Object.defineProperty;var t=(o,e)=>r(o,"name",{value:e,configurable:!0});import{a as m}from"./jsx-runtime-e8f5a910.js";import{B as n}from"./Button-593a1366.js";import"./index-d7929fe6.js";import"./es.object.get-own-property-descriptor-1a76aaf5.js";const f={parameters:{storySource:{source:`import Button from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Commons/Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const component: ComponentStory<typeof Button> = (args) => <Button { ...args } />
export const button = component.bind({})
button.args = {
  text: 'Hola mundo',
  txtColor: '#000fff',
  bgColor: 'blue',
  onClick: () => { }
}
`,locationsMap:{button:{startLoc:{col:49,line:9},endLoc:{col:81,line:9},startBody:{col:49,line:9},endBody:{col:81,line:9}}}}},title:"Commons/Atoms/Button",component:n},s=t(o=>m(n,{...o}),"component"),a=s.bind({});a.args={text:"Hola mundo",txtColor:"#000fff",bgColor:"blue",onClick:()=>{}};const B=["button"];export{B as __namedExportsOrder,a as button,f as default};
//# sourceMappingURL=Button.stories-c4c095b6.js.map
