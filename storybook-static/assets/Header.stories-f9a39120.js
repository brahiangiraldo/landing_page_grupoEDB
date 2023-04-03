var a=Object.defineProperty;var t=(r,o)=>a(r,"name",{value:o,configurable:!0});import{j as s,a as e}from"./jsx-runtime-189c9bee.js";import{H as c}from"./HeaderBody-524306e3.js";import{H as d}from"./HeaderTemplate-0577e7d3.js";import"./index-d7929fe6.js";import"./es.object.get-own-property-descriptor-1a76aaf5.js";const i=t(()=>s("section",{className:"menuBar",children:[e("section",{className:"logoMenuBar",children:"GRUPO EDB"}),e("section",{className:"optionsMenuBar",children:[{text:"Home",redirecTo:"#"},{text:"About",redirecTo:"#"},{text:"Services",redirecTo:"#"},{text:"Location",redirecTo:"#"}].map(o=>e("a",{href:o.redirecTo,children:o.text}))})]}),"MenuBar"),m=t(()=>e(d,{head:e(i,{}),body:e(c,{})}),"Header"),n=m,y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header
} as ComponentMeta<typeof Header>

const component: ComponentStory<typeof Header> = (args) => <Header />
export const header = component.bind({})
`,locationsMap:{header:{startLoc:{col:49,line:9},endLoc:{col:69,line:9},startBody:{col:49,line:9},endBody:{col:69,line:9}}}}},title:"Header",component:n},p=t(r=>e(n,{}),"component"),B=p.bind({}),b=["header"];export{b as __namedExportsOrder,y as default,B as header};
//# sourceMappingURL=Header.stories-f9a39120.js.map
