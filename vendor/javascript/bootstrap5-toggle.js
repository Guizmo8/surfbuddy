var t={};function sanitize(t){var i;return t&&(i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},t.replace(/[&<>"'/]/g,(function(t){return i[t]})))}!function(){class s{constructor(t,i){const n="BOOTSTRAP TOGGLE DEPRECATION CHECK -- a0Jhux0QySypjjs4tLtEo8xT2kx0AbYaq9K6mgNjWSs0HF0L8T8J0M0o3Kr7zkm7 --",o="attribute",a="option",l=function(t,i,n){console.warn(`Bootstrap Toggle deprecation warning: Using ${i} ${t} is deprected. Use ${n} instead.`)},h="On",r="primary",d=null,m=null,g="Off",b="secondary",c=null,u=null,f="",p="",v=null,A=null,y=0,E=!1,L=null;i=i||{},this.element=t,this.options={onlabel:this.element.getAttribute("data-onlabel")||i.onlabel||n||h,onstyle:sanitize(this.element.getAttribute("data-onstyle"))||i.onstyle||r,onvalue:sanitize(this.element.getAttribute("value"))||sanitize(this.element.getAttribute("data-onvalue"))||i.onvalue||d,ontitle:sanitize(this.element.getAttribute("data-ontitle"))||i.ontitle||sanitize(this.element.getAttribute("title"))||m,offlabel:this.element.getAttribute("data-offlabel")||i.offlabel||n||g,offstyle:sanitize(this.element.getAttribute("data-offstyle"))||i.offstyle||b,offvalue:sanitize(this.element.getAttribute("data-offvalue"))||i.offvalue||c,offtitle:sanitize(this.element.getAttribute("data-offtitle"))||i.offtitle||sanitize(this.element.getAttribute("title"))||u,size:sanitize(this.element.getAttribute("data-size"))||i.size||f,style:sanitize(this.element.getAttribute("data-style"))||i.style||p,width:sanitize(this.element.getAttribute("data-width"))||i.width||v,height:sanitize(this.element.getAttribute("data-height"))||i.height||A,tabindex:sanitize(this.element.getAttribute("tabindex"))||i.tabindex||y,tristate:this.element.hasAttribute("tristate")||i.tristate||E,name:sanitize(this.element.getAttribute("name"))||i.name||L},this.options.onlabel===n&&(sanitize(this.element.getAttribute("data-on"))?(l(o,"data-on","data-onlabel"),this.options.onlabel=this.element.getAttribute("data-on")):i.on?(l(a,"on","onlabel"),this.options.onlabel=i.on):this.options.onlabel=h),this.options.offlabel===n&&(sanitize(this.element.getAttribute("data-off"))?(l(o,"data-off","data-offlabel"),this.options.offlabel=this.element.getAttribute("data-off")):i.off?(l(a,"off","offlabel"),this.options.offlabel=i.off):this.options.offlabel=g),this.render()}render(){function e(t){var i=window.getComputedStyle(t),n=(t=t.offsetHeight,parseFloat(i.borderTopWidth));return t-parseFloat(i.borderBottomWidth)-n-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)}let t;switch(this.options.size){case"large":case"lg":t="btn-lg";break;case"small":case"sm":t="btn-sm";break;case"mini":case"xs":t="btn-xs";break;default:t=""}var i=document.createElement("span"),n=(i.setAttribute("class","btn btn-"+this.options.onstyle+" "+t),i.innerHTML=this.options.onlabel,this.options.ontitle&&i.setAttribute("title",this.options.ontitle),document.createElement("span")),o=(n.setAttribute("class","btn btn-"+this.options.offstyle+" "+t),n.innerHTML=this.options.offlabel,this.options.offtitle&&n.setAttribute("title",this.options.offtitle),document.createElement("span")),a=(o.setAttribute("class","toggle-handle btn "+t),document.createElement("div"));a.setAttribute("class","toggle-group"),a.appendChild(i),a.appendChild(n),a.appendChild(o);let h=document.createElement("div"),r=(h.setAttribute("class","toggle btn"),h.classList.add(this.element.checked?"btn-"+this.options.onstyle:"btn-"+this.options.offstyle),h.setAttribute("tabindex",this.options.tabindex),this.element.checked||h.classList.add("off"),this.options.size&&h.classList.add(t),this.options.style&&this.options.style.split(" ").forEach((t=>{h.classList.add(t)})),(this.element.disabled||this.element.readOnly)&&(h.classList.add("disabled"),h.setAttribute("disabled","disabled")),this.options.onvalue&&this.element.setAttribute("value",this.options.onvalue),null);this.options.offvalue&&((r=this.element.cloneNode()).setAttribute("value",this.options.offvalue),r.setAttribute("data-toggle","invert-toggle"),r.removeAttribute("id"),r.checked=!this.element.checked),this.element.parentElement.insertBefore(h,this.element),h.appendChild(this.element),r&&h.appendChild(r),h.appendChild(a),this.options.width?h.style.width=this.options.width+"px":(h.style["min-width"]="100px",h.style["min-width"]=Math.max(i.getBoundingClientRect().width,n.getBoundingClientRect().width)+o.getBoundingClientRect().width/2+"px"),this.options.height?h.style.height=this.options.height+"px":(h.style["min-height"]="36px",h.style["min-height"]=Math.max(i.getBoundingClientRect().height,n.getBoundingClientRect().height)+"px"),i.classList.add("toggle-on"),n.classList.add("toggle-off"),this.options.height&&(i.style.lineHeight=e(i)+"px",n.style.lineHeight=e(n)+"px"),h.addEventListener("touchstart",(t=>{this.#e(t)}),{passive:!0}),h.addEventListener("click",(t=>{this.#e(t)})),h.addEventListener("keypress",(t=>{" "==t.key&&this.#e(t)})),this.element.id&&document.querySelectorAll('label[for="'+this.element.id+'"]').forEach((t=>{t.addEventListener("touchstart",(t=>{this.toggle(),h.focus()})),t.addEventListener("click",(t=>{this.toggle(),h.focus()}))})),this.ecmasToggle=h,this.invElement=r,this.element.bsToggle=this}#e(t){this.options.tristate?this.ecmasToggle.classList.contains("indeterminate")?(this.determinate(!0),this.toggle()):this.indeterminate():this.toggle()}toggle(t=!1){this.element.checked?this.off(t):this.on(t)}on(t=!1){if(this.element.disabled||this.element.readOnly)return!1;this.ecmasToggle.classList.remove("btn-"+this.options.offstyle),this.ecmasToggle.classList.add("btn-"+this.options.onstyle),this.ecmasToggle.classList.remove("off"),this.element.checked=!0,this.invElement&&(this.invElement.checked=!1),t||this.trigger()}off(t=!1){if(this.element.disabled||this.element.readOnly)return!1;this.ecmasToggle.classList.remove("btn-"+this.options.onstyle),this.ecmasToggle.classList.add("btn-"+this.options.offstyle),this.ecmasToggle.classList.add("off"),this.element.checked=!1,this.invElement&&(this.invElement.checked=!0),t||this.trigger()}indeterminate(t=!1){if(!this.options.tristate||this.element.disabled||this.element.readOnly)return!1;this.ecmasToggle.classList.add("indeterminate"),this.element.indeterminate=!0,this.element.removeAttribute("name"),this.invElement&&(this.invElement.indeterminate=!0),this.invElement&&this.invElement.removeAttribute("name"),t||this.trigger()}determinate(t=!1){if(!this.options.tristate||this.element.disabled||this.element.readOnly)return!1;this.ecmasToggle.classList.remove("indeterminate"),this.element.indeterminate=!1,this.options.name&&this.element.setAttribute("name",this.options.name),this.invElement&&(this.invElement.indeterminate=!1),this.invElement&&this.options.name&&this.invElement.setAttribute("name",this.options.name),t||this.trigger()}enable(){this.ecmasToggle.classList.remove("disabled"),this.ecmasToggle.removeAttribute("disabled"),this.element.removeAttribute("disabled"),this.element.removeAttribute("readonly"),this.invElement&&(this.invElement.removeAttribute("disabled"),this.invElement.removeAttribute("readonly"))}disable(){this.ecmasToggle.classList.add("disabled"),this.ecmasToggle.setAttribute("disabled",""),this.element.setAttribute("disabled",""),this.element.removeAttribute("readonly"),this.invElement&&(this.invElement.setAttribute("disabled",""),this.invElement.removeAttribute("readonly"))}readonly(){this.ecmasToggle.classList.add("disabled"),this.ecmasToggle.setAttribute("disabled",""),this.element.removeAttribute("disabled"),this.element.setAttribute("readonly",""),this.invElement&&(this.invElement.removeAttribute("disabled"),this.invElement.setAttribute("readonly",""))}update(t){this.element.disabled?this.disable():this.element.readOnly?this.readonly():this.enable(),this.element.checked?this.on(t):this.off(t)}trigger(t){t||this.element.dispatchEvent(new Event("change",{bubbles:!0}))}destroy(){this.ecmasToggle.parentNode.insertBefore(this.element,this.ecmasToggle),this.ecmasToggle.parentNode.removeChild(this.ecmasToggle),delete this.element.bsToggle,delete this.ecmasToggle}rerender(){this.destroy(),this.element.bootstrapToggle()}}Element.prototype.bootstrapToggle=function(t,i){var n=this.bsToggle||new s(this,t);t&&"string"==typeof t&&("toggle"==t.toLowerCase()?n.toggle(i):"on"==t.toLowerCase()?n.on(i):"off"==t.toLowerCase()?n.off(i):"indeterminate"==t.toLowerCase()?n.indeterminate(i):"determinate"==t.toLowerCase()?n.determinate(i):"enable"==t.toLowerCase()?n.enable():"disable"==t.toLowerCase()?n.disable():"readonly"==t.toLowerCase()?n.readonly():"destroy"==t.toLowerCase()?n.destroy():"rerender"==t.toLowerCase()&&n.rerender())},"undefined"!=typeof window&&(window.onload=function(){document.querySelectorAll('input[type=checkbox][data-toggle="toggle"]').forEach((function(t){t.bootstrapToggle()}))}),t&&(t=s)}();var i=t;export{i as default};
