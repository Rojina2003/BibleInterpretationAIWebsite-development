import{j as e,r as a,e as f,O as g,L as i}from"./index-CvyB-FPv.js";const N=({children:r})=>e.jsx("div",{className:" min-h-screen h-full bg-main-bg bg-cover px-[16px]",children:r});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...r)=>r.filter((t,s,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=a.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:c="",children:o,iconNode:u,...x},h)=>a.createElement("svg",{ref:h,...w,width:t,height:t,stroke:r,strokeWidth:n?Number(s)*24/Number(t):s,className:d("lucide",c),...x},[...u.map(([m,p])=>a.createElement(m,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(r,t)=>{const s=a.forwardRef(({className:n,...c},o)=>a.createElement(b,{ref:o,iconNode:t,className:d(`lucide-${j(r)}`,n),...c}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=y("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]),C=()=>{const t=f().pathname;return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsxs("div",{className:"text-[#EA9DA1] pb-4 flex py-5 items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Powered by"}),e.jsx(i,{to:"https://frabrahamfoundation.org/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white",children:"Fr. Abraham Mutholath Foundation NFP"})]}),e.jsxs("p",{className:"lg:flex grid text-right gap-2",children:[e.jsx(i,{to:"/about-us",className:`underline underline-offset-4 ${t==="/about-us"?"text-white":""}`,children:"About us"}),e.jsx(l,{className:"text-white lg:flex hidden"}),e.jsx(i,{to:"/terms-and-conditions",className:`underline underline-offset-4 ${t==="/terms-and-conditions"?"text-white":""}`,children:"Terms & Conditions"}),e.jsx(l,{className:"text-white lg:flex hidden"}),e.jsx(i,{to:"/privacy-policy",className:`underline underline-offset-4 ${t==="/privacy-policy"?"text-white":""}`,children:"Privacy policies"})]})]})]})};export{N as C,C as F,y as c};
