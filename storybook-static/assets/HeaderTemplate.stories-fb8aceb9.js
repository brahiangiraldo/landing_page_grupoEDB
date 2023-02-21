var r=Object.defineProperty;var o=(e,n)=>r(e,"name",{value:n,configurable:!0});import{a as t}from"./jsx-runtime-e8f5a910.js";import{H as a}from"./HeaderTemplate-3a886af5.js";import"./index-d7929fe6.js";import"./es.object.get-own-property-descriptor-1a76aaf5.js";const h={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
import HeaderTemplate from './HeaderTemplate'

export default {
  title: 'Header/templates',
  component: HeaderTemplate
} as ComponentMeta<typeof HeaderTemplate>

const component: ComponentStory<typeof HeaderTemplate> = (args) => <HeaderTemplate { ...args } />
export const headerTemplate = component.bind({})
headerTemplate.args = {
  head: <div style={ { background: '#06D92D', width: '100%', height: '100%' } }></div>,
  body: <div style={ { background: '#E3F70D', width: '100%', height: '100%' } }></div>
}
`,locationsMap:{"header-template":{startLoc:{col:57,line:9},endLoc:{col:97,line:9},startBody:{col:57,line:9},endBody:{col:97,line:9}}}}},title:"Header/templates",component:a},d=o(e=>t(a,{...e}),"component"),p=d.bind({});p.args={head:t("div",{style:{background:"#06D92D",width:"100%",height:"100%"}}),body:t("div",{style:{background:"#E3F70D",width:"100%",height:"100%"}})};const y=["headerTemplate"];export{y as __namedExportsOrder,h as default,p as headerTemplate};
//# sourceMappingURL=HeaderTemplate.stories-fb8aceb9.js.map
