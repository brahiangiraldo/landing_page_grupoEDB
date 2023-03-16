var m=Object.defineProperty;var t=(a,e)=>m(a,"name",{value:e,configurable:!0});import{a as n,j as o}from"./jsx-runtime-189c9bee.js";import{c as l}from"./index-399608f9.js";import"./index-d7929fe6.js";import"./es.object.get-own-property-descriptor-1a76aaf5.js";const i=t(()=>(console.log("hello world"),n("form",{onSubmit:t(e=>{e.preventDefault();const c=e.currentTarget.phone.value;alert(c)},"handleForm"),children:o("section",{className:"form-container",children:[o("section",{className:"fullname",children:[o("section",{children:[n("label",{className:"font-from-name",htmlFor:"FirstName",children:"First Name"}),n("input",{className:"form-input",id:"FirstName",name:"FirstName"})]}),o("section",{children:[n("label",{className:"font-from-name",htmlFor:"LastName",children:"Last Name"}),n("input",{className:"form-input",id:"LastName",name:"LastName"})]})]}),o("section",{children:[n("label",{className:"font-from-name",htmlFor:"Email",children:"Email"}),n("input",{className:`${l("form-input","sm")}`,id:"Email",name:"Email"})]}),o("section",{children:[n("label",{className:"font-from-name",htmlFor:"",children:"Phone Number"}),n("input",{className:`${l("form-input","sm")}`,id:"PhoneNumber",name:"PhoneNumber"})]}),o("section",{children:[n("label",{className:"font-from-name",htmlFor:"",children:"Message"}),n("input",{className:`${l("form-input","ms")}`,id:"Message",name:"Message"})]}),n("button",{className:"button",type:"submit",children:"Send message"})]})})),"CallToAction"),s=i,N={parameters:{storySource:{source:`
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CallToAction from './CallToAction'

export default {
	title: 'Contact/Organism/CallToAction',
	component: CallToAction
} as ComponentMeta<typeof CallToAction>

const component: ComponentStory<typeof CallToAction> = (args) => <CallToAction />

export const callToAction = component.bind({})









`,locationsMap:{"call-to-action":{startLoc:{col:55,line:10},endLoc:{col:81,line:10},startBody:{col:55,line:10},endBody:{col:81,line:10}}}}},title:"Contact/Organism/CallToAction",component:s},r=t(a=>n(s,{}),"component"),C=r.bind({}),T=["callToAction"];export{T as __namedExportsOrder,C as callToAction,N as default};
//# sourceMappingURL=CallToAction.stories-5b4a544f.js.map
