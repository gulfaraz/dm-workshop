"use strict";(self.webpackChunkdm_workshop=self.webpackChunkdm_workshop||[]).push([[8592],{1320:(M,v,d)=>{d.d(v,{c:()=>o});var l=d(1308),u=d(7864),c=d(1898);const o=(s,n)=>{let e,t;const i=(h,w,g)=>{if(typeof document>"u")return;const _=document.elementFromPoint(h,w);_&&n(_)?_!==e&&(m(),a(_,g)):m()},a=(h,w)=>{e=h,t||(t=e);const g=e;(0,l.c)(()=>g.classList.add("ion-activated")),w()},m=(h=!1)=>{if(!e)return;const w=e;(0,l.c)(()=>w.classList.remove("ion-activated")),h&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:h=>i(h.currentX,h.currentY,u.a),onMove:h=>i(h.currentX,h.currentY,u.b),onEnd:()=>{m(!0),(0,u.h)(),t=void 0}})}},2225:(M,v,d)=>{d.d(v,{g:()=>l});const l=(n,e,t,i,a)=>c(n[1],e[1],t[1],i[1],a).map(m=>u(n[0],e[0],t[0],i[0],m)),u=(n,e,t,i,a)=>a*(3*e*Math.pow(a-1,2)+a*(-3*t*a+3*t+i*a))-n*Math.pow(a-1,3),c=(n,e,t,i,a)=>s((i-=a)-3*(t-=a)+3*(e-=a)-(n-=a),3*t-6*e+3*n,3*e-3*n,n).filter(h=>h>=0&&h<=1),s=(n,e,t,i)=>{if(0===n)return((n,e,t)=>{const i=e*e-4*n*t;return i<0?[]:[(-e+Math.sqrt(i))/(2*n),(-e-Math.sqrt(i))/(2*n)]})(e,t,i);const a=(3*(t/=n)-(e/=n)*e)/3,m=(2*e*e*e-9*e*t+27*(i/=n))/27;if(0===a)return[Math.pow(-m,1/3)];if(0===m)return[Math.sqrt(-a),-Math.sqrt(-a)];const h=Math.pow(m/2,2)+Math.pow(a/3,3);if(0===h)return[Math.pow(m/2,.5)-e/3];if(h>0)return[Math.pow(-m/2+Math.sqrt(h),1/3)-Math.pow(m/2+Math.sqrt(h),1/3)-e/3];const w=Math.sqrt(Math.pow(-a/3,3)),g=Math.acos(-m/(2*Math.sqrt(Math.pow(-a/3,3)))),_=2*Math.pow(w,1/3);return[_*Math.cos(g/3)-e/3,_*Math.cos((g+2*Math.PI)/3)-e/3,_*Math.cos((g+4*Math.PI)/3)-e/3]}},5062:(M,v,d)=>{d.d(v,{i:()=>l});const l=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(M,v,d)=>{d.r(v),d.d(v,{startFocusVisible:()=>o});const l="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,i=s||document.body,a=E=>{n.forEach(p=>p.classList.remove(l)),E.forEach(p=>p.classList.add(l)),n=E},m=()=>{e=!1,a([])},h=E=>{e=c.includes(E.key),e||a([])},w=E=>{if(e&&void 0!==E.composedPath){const p=E.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));a(p)}},g=()=>{t.activeElement===i&&a([])};return t.addEventListener("keydown",h),t.addEventListener("focusin",w),t.addEventListener("focusout",g),t.addEventListener("touchstart",m),t.addEventListener("mousedown",m),{destroy:()=>{t.removeEventListener("keydown",h),t.removeEventListener("focusin",w),t.removeEventListener("focusout",g),t.removeEventListener("touchstart",m),t.removeEventListener("mousedown",m)},setFocus:a}}},7626:(M,v,d)=>{d.d(v,{C:()=>s,a:()=>c,d:()=>o});var l=d(5861),u=d(5730);const c=function(){var n=(0,l.Z)(function*(e,t,i,a,m,h){var w;if(e)return e.attachViewToDom(t,i,m,a);if(!(h||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const g="string"==typeof i?null===(w=t.ownerDocument)||void 0===w?void 0:w.createElement(i):i;return a&&a.forEach(_=>g.classList.add(_)),m&&Object.assign(g,m),t.appendChild(g),yield new Promise(_=>(0,u.c)(g,_)),g});return function(t,i,a,m,h,w){return n.apply(this,arguments)}}(),o=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},s=()=>{let n,e;return{attachViewToDom:function(){var a=(0,l.Z)(function*(m,h,w={},g=[]){var _,E;if(n=m,h){const f="string"==typeof h?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(h):h;g.forEach(r=>f.classList.add(r)),Object.assign(f,w),n.appendChild(f),yield new Promise(r=>(0,u.c)(f,r))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const r=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");r.classList.add("ion-delegate-host"),g.forEach(y=>r.classList.add(y)),r.append(...n.children),n.appendChild(r)}const p=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),p.appendChild(n),n});return function(h,w){return a.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},7864:(M,v,d)=>{d.d(v,{a:()=>o,b:()=>s,c:()=>c,d:()=>e,h:()=>n});const l={getEngine(){var t;const i=window;return i.TapticEngine||(null===(t=i.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var t;const i=window;return!!this.getEngine()&&("web"!==(null===(t=i.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const i=this.getEngine();if(!i)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:a})},notification(t){const i=this.getEngine();if(!i)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},u=()=>l.available(),c=()=>{u()&&l.selection()},o=()=>{u()&&l.selectionStart()},s=()=>{u()&&l.selectionChanged()},n=()=>{u()&&l.selectionEnd()},e=t=>{u()&&l.impact(t)}},109:(M,v,d)=>{d.d(v,{a:()=>l,b:()=>h,c:()=>e,d:()=>w,e:()=>D,f:()=>n,g:()=>g,h:()=>c,i:()=>u,j:()=>r,k:()=>y,l:()=>t,m:()=>a,n:()=>_,o:()=>i,p:()=>s,q:()=>o,r:()=>f,s:()=>C,t:()=>m,u:()=>E,v:()=>p});const l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},9888:(M,v,d)=>{d.d(v,{s:()=>l});const l=t=>{try{if(t instanceof e)return t.value;if(!o()||"string"!=typeof t||""===t)return t;if(t.includes("onload="))return"";const i=document.createDocumentFragment(),a=document.createElement("div");i.appendChild(a),a.innerHTML=t,n.forEach(g=>{const _=i.querySelectorAll(g);for(let E=_.length-1;E>=0;E--){const p=_[E];p.parentNode?p.parentNode.removeChild(p):i.removeChild(p);const f=c(p);for(let r=0;r<f.length;r++)u(f[r])}});const m=c(i);for(let g=0;g<m.length;g++)u(m[g]);const h=document.createElement("div");h.appendChild(i);const w=h.querySelector("div");return null!==w?w.innerHTML:h.innerHTML}catch(i){return console.error(i),""}},u=t=>{if(t.nodeType&&1!==t.nodeType)return;if(typeof NamedNodeMap<"u"&&!(t.attributes instanceof NamedNodeMap))return void t.remove();for(let a=t.attributes.length-1;a>=0;a--){const m=t.attributes.item(a),h=m.name;if(!s.includes(h.toLowerCase())){t.removeAttribute(h);continue}const w=m.value,g=t[h];(null!=w&&w.toLowerCase().includes("javascript:")||null!=g&&g.toLowerCase().includes("javascript:"))&&t.removeAttribute(h)}const i=c(t);for(let a=0;a<i.length;a++)u(i[a])},c=t=>null!=t.children?t.children:t.childNodes,o=()=>{var t;const a=null===(t=window?.Ionic)||void 0===t?void 0:t.config;return!a||(a.get?a.get("sanitizerEnabled",!0):!0===a.sanitizerEnabled||void 0===a.sanitizerEnabled)},s=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(i){this.value=i}}},8416:(M,v,d)=>{d.d(v,{I:()=>s,a:()=>a,b:()=>n,c:()=>w,d:()=>_,f:()=>m,g:()=>i,i:()=>t,p:()=>g,r:()=>E,s:()=>h});var l=d(5861),u=d(5730),c=d(4147);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=p=>"ION-CONTENT"===p.tagName,i=function(){var p=(0,l.Z)(function*(f){return t(f)?(yield new Promise(r=>(0,u.c)(f,r)),f.getScrollElement()):f});return function(r){return p.apply(this,arguments)}}(),a=p=>p.querySelector(n)||p.querySelector(e),m=p=>p.closest(e),h=(p,f)=>t(p)?p.scrollToTop(f):Promise.resolve(p.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),w=(p,f,r,y)=>t(p)?p.scrollByPoint(f,r,y):Promise.resolve(p.scrollBy({top:r,left:f,behavior:y>0?"smooth":"auto"})),g=p=>(0,c.a)(p,s),_=p=>{if(t(p)){const r=p.scrollY;return p.scrollY=!1,r}return p.style.setProperty("overflow","hidden"),!0},E=(p,f)=>{t(p)?p.scrollY=f:p.style.removeProperty("overflow")}},5234:(M,v,d)=>{d.r(v),d.d(v,{KEYBOARD_DID_CLOSE:()=>u,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>f,keyboardDidClose:()=>g,keyboardDidOpen:()=>h,keyboardDidResize:()=>w,resetKeyboardAssist:()=>e,setKeyboardClose:()=>m,setKeyboardOpen:()=>a,startKeyboardAssist:()=>t,trackViewportChanges:()=>p});const l="ionKeyboardDidShow",u="ionKeyboardDidHide";let o={},s={},n=!1;const e=()=>{o={},s={},n=!1},t=r=>{i(r),r.visualViewport&&(s=f(r.visualViewport),r.visualViewport.onresize=()=>{p(r),h()||w(r)?a(r):g(r)&&m(r)})},i=r=>{r.addEventListener("keyboardDidShow",y=>a(r,y)),r.addEventListener("keyboardDidHide",()=>m(r))},a=(r,y)=>{_(r,y),n=!0},m=r=>{E(r),n=!1},h=()=>!n&&o.width===s.width&&(o.height-s.height)*s.scale>150,w=r=>n&&!g(r),g=r=>n&&s.height===r.innerHeight,_=(r,y)=>{const D=new CustomEvent(l,{detail:{keyboardHeight:y?y.keyboardHeight:r.innerHeight-s.height}});r.dispatchEvent(D)},E=r=>{const y=new CustomEvent(u);r.dispatchEvent(y)},p=r=>{o=Object.assign({},s),s=f(r.visualViewport)},f=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},9852:(M,v,d)=>{d.d(v,{c:()=>u});var l=d(3457);const u=c=>{let o,s,n;const e=()=>{o=()=>{n=!0,c&&c(!0)},s=()=>{n=!1,c&&c(!1)},null==l.w||l.w.addEventListener("keyboardWillShow",o),null==l.w||l.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",o),null==l.w||l.w.removeEventListener("keyboardWillHide",s),o=s=void 0},isKeyboardVisible:()=>n}}},7741:(M,v,d)=>{d.d(v,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(c,o,s)=>{const n=c*o/s-c+"ms",e=2*Math.PI*o/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,o,s)=>{const n=o/s,e=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,o)=>({r:6,style:{left:9-9*o+"px","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,o,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*o+(o<s/2?180:-180)}deg)`,"animation-delay":c*o/s-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,o,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*o+(o<s/2?180:-180)}deg)`,"animation-delay":c*o/s-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,o,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":c*o/s-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,o,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":c*o/s-c+"ms"}})}}},6659:(M,v,d)=>{d.r(v),d.d(v,{createSwipeBackGesture:()=>s});var l=d(5730),u=d(5062),c=d(1898);d(4349);const s=(n,e,t,i,a)=>{const m=n.ownerDocument.defaultView;let h=(0,u.i)(n);const g=r=>h?-r.deltaX:r.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(h=(0,u.i)(n),(r=>{const{startX:C}=r;return h?C>=m.innerWidth-50:C<=50})(r)&&e()),onStart:t,onMove:r=>{const C=g(r)/m.innerWidth;i(C)},onEnd:r=>{const y=g(r),C=m.innerWidth,D=y/C,L=(r=>h?-r.velocityX:r.velocityX)(r),O=L>=0&&(L>.2||y>C/2),b=(O?1-D:D)*C;let x=0;if(b>5){const S=b/Math.abs(L);x=Math.min(S,540)}a(O,D<=0?.01:(0,l.l)(0,D,.9999),x)}})}},4793:(M,v,d)=>{d.d(v,{J:()=>o});var l=d(8970),u=d(8256),c=d(4556);class o{constructor(){this.label="Export JSON",this.json={},this.export=()=>(0,l.LR)(JSON.stringify(this.json),"application/json",this.label)}}o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-json-exporter"]],inputs:{label:"label",json:"json"},decls:2,vars:1,consts:[["size","small",3,"click"]],template:function(n,e){1&n&&(u.TgZ(0,"ion-button",0),u.NdJ("click",function(){return e.export()}),u._uU(1),u.qZA()),2&n&&(u.xp6(1),u.Oqu(e.label))},dependencies:[c.YG],encapsulation:2})},8970:(M,v,d)=>{d.d(v,{LR:()=>u,RL:()=>l});const l=(o,s)=>{const n=o.split(" ").map(i=>i.toLowerCase()).join("_"),e=new Date;return`${n}_${[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()].join("")}.${s}`},u=(o,s,n)=>{const e=l(n,String(s.split("/").pop())),t=new Blob([o],{type:s}),i=window.URL.createObjectURL(t),a=document.createElement("a");a.setAttribute("href",i),a.setAttribute("download",e),document.body.appendChild(a),a.click(),a.remove()}},366:(M,v,d)=>{d.d(v,{d:()=>o});var l=d(8256),u=d(4556);const c=["fileInput"];class o{constructor(){this.label="Upload JSON",this.uploadEvent=new l.vpe,this.click=()=>this.fileInput.nativeElement.click(),this.upload=n=>{const e=n.target.files;e?.length&&this.readFile(e[0])},this.readFile=n=>{const e=new FileReader;e.onload=()=>this.uploadEvent.emit(JSON.parse(String(e.result))),e.readAsText(n)}}}o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=l.Xpm({type:o,selectors:[["app-json-uploader"]],viewQuery:function(n,e){if(1&n&&l.Gf(c,5),2&n){let t;l.iGM(t=l.CRH())&&(e.fileInput=t.first)}},inputs:{label:"label"},outputs:{uploadEvent:"uploadEvent"},decls:6,vars:1,consts:[["expand","block","fill","outline","size","large",1,"ion-margin",3,"click"],["slot","start","name","push-outline"],["type","file","accept","application/json",1,"ion-hide",3,"change"],["fileInput",""]],template:function(n,e){1&n&&(l.TgZ(0,"ion-button",0),l.NdJ("click",function(){return e.click()}),l._UZ(1,"ion-icon",1),l.TgZ(2,"ion-label"),l._uU(3),l.qZA(),l.TgZ(4,"input",2,3),l.NdJ("change",function(i){return e.upload(i)}),l.qZA()()),2&n&&(l.xp6(3),l.Oqu(e.label))},dependencies:[u.YG,u.gu,u.Q$],encapsulation:2})},4466:(M,v,d)=>{d.d(v,{m:()=>c});var l=d(4556),u=d(8256);class c{}c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[l.Pc]})},4308:(M,v,d)=>{d.d(v,{q:()=>l});class l{constructor(){this.getEntitySize=c=>this.getSize(c).split("x").map(o=>parseInt(o)),this.findEntity=(c,o,s)=>c.findIndex(n=>{const e=this.getEntitySize(n);return e[0]<=o&&e[1]<=s}),this.fillSheet=(c,o,s,n)=>{const e=this.findEntity(o,s,n);if(e>=0){const t=o.splice(e,1)[0];c.push(t);const i=this.getEntitySize(t);let a=s-i[0],m=i[1],h=s,w=n-i[1];this.columns>this.rows&&(a=i[0],m=n-i[1],h=s-i[0],w=n),this.fillSheet(c,o,a,m),this.fillSheet(c,o,h,w)}return[c,o]},this.getSheets=c=>{c.sort(this.sortEntities);const o=[];let s=this.findEntity(c,this.rows,this.columns);for(;s>=0;){const[n,e]=this.fillSheet([],c,this.rows,this.columns);c=[...e],s=this.findEntity(c,this.rows,this.columns),o.push(n)}return o},this.sortEntities=(c,o)=>{const s=this.getEntitySize(c),n=this.getEntitySize(o),e=n[1]-s[1];return 0===e?n[0]-s[0]:e}}}}}]);