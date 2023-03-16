var i=Object.defineProperty;var r=(t,e)=>i(t,"name",{value:e,configurable:!0});import{a,F as m}from"./jsx-runtime-189c9bee.js";import"./index-d7929fe6.js";import"./es.object.get-own-property-descriptor-1a76aaf5.js";const o=r(({size:t,alt:e,src:s})=>a(m,{children:a("div",{className:"avatar",style:{width:t,height:t},children:a("img",{alt:e,src:s,className:"avatar-img"})})}),"Avatar"),n=o;try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}}}catch{}const g={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Commons/Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar { ...args } />;

export const avatar = Template.bind({});
avatar.args = {
  alt: 'John Doe',
  src: 'https://i.imgur.com/1bX5QH6.jpg',
  size: '70px',
};`,locationsMap:{avatar:{startLoc:{col:48,line:9},endLoc:{col:80,line:9},startBody:{col:48,line:9},endBody:{col:80,line:9}}}}},title:"Commons/Atoms/Avatar",component:n},c=r(t=>a(n,{...t}),"Template"),p=c.bind({});p.args={alt:"John Doe",src:"https://i.imgur.com/1bX5QH6.jpg",size:"70px"};const y=["avatar"];export{y as __namedExportsOrder,p as avatar,g as default};
//# sourceMappingURL=Avatar.stories-15805c36.js.map
