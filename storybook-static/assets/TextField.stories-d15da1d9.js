var c=Object.defineProperty;var o=(e,t)=>c(e,"name",{value:t,configurable:!0});import{a as l}from"./jsx-runtime-189c9bee.js";import{r as a}from"./index-d7929fe6.js";import{c as p}from"./index-399608f9.js";import"./es.object.get-own-property-descriptor-1a76aaf5.js";const s=o(({onChange:e,size:t})=>{const[r,d]=a.useState();return a.useEffect(()=>{let n="inputSm";t==="md"?n="inputMd":t==="lg"&&(n="inputLg"),d(p("customInput",n))},[t]),l("input",{className:r,onChange:o(n=>{const m=n.target.value;e(m)},"handleOnChange")})},"TextField"),i=s;try{s.displayName="TextField",s.__docgenInfo={description:"",displayName:"TextField",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const _={parameters:{storySource:{source:`import TextField from './TextField'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Commons/Atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const component: ComponentStory<typeof TextField> = (args) => <TextField { ...args } />
export const textField = component.bind({})
textField.args = {
  onChange: (value: string) => { },
  size: 'sm'
}

`,locationsMap:{"text-field":{startLoc:{col:52,line:9},endLoc:{col:87,line:9},startBody:{col:52,line:9},endBody:{col:87,line:9}}}}},title:"Commons/Atoms/TextField",component:i},u=o(e=>l(i,{...e}),"component"),x=u.bind({});x.args={onChange:e=>{},size:"sm"};const h=["textField"];export{h as __namedExportsOrder,_ as default,x as textField};
//# sourceMappingURL=TextField.stories-d15da1d9.js.map
