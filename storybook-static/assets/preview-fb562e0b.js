var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{w as m}from"./es.object.get-own-property-descriptor-1a76aaf5.js";import"./web.url.constructor-51b51339.js";import"./es.number.is-integer-50525d9f.js";import{a as f,S as u,e as p}from"./iframe-c207796f.js";import{m as k}from"./make-decorator-0abf6570.js";var L="links",l=m.document,h=m.HTMLElement,E=n(function(e){return f.getChannel().emit(p,e)},"navigate"),d=n(function(e){var r=e.target;if(r instanceof h){var v=r,i=v.dataset,o=i.sbKind,s=i.sbStory;(o||s)&&(e.preventDefault(),E({kind:o,story:s}))}},"linksListener"),a=!1,w=n(function(){a||(a=!0,l.addEventListener("click",d))},"on"),g=n(function(){a&&(a=!1,l.removeEventListener("click",d))},"off"),S=k({name:"withLinks",parameterName:L,wrapper:n(function(e,r){return w(),f.getChannel().once(u,g),e(r)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var H=[S];export{H as decorators};
//# sourceMappingURL=preview-fb562e0b.js.map