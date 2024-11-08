import{r as M,j as a,a as R}from"./index-CvyB-FPv.js";import{B as w}from"./Backdrop-ajIqkWb4.js";import{B as I}from"./Box-xi6j_WV9.js";import{g as B,a as E,p as P,q as b,s as h,c as l,m as S,e as z,b as F,d as N,T as U}from"./Typography-Bs-fR0eg.js";function T(e){return B("MuiCircularProgress",e)}E("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,x=P`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,A=typeof g!="string"?b`
        animation: ${g} 1.4s linear infinite;
      `:null,K=typeof x!="string"?b`
        animation: ${x} 1.4s ease-in-out infinite;
      `:null,L=e=>{const{classes:r,variant:s,color:o,disableShrink:c}=e,p={root:["root",s,`color${l(o)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,c&&"circleDisableShrink"]};return N(p,T,r)},V=h("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${l(s.color)}`]]}})(S(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:A||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(z()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),q=h("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),G=h("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${l(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(S(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:K||{animation:`${x} 1.4s ease-in-out infinite`}}]}))),O=M.forwardRef(function(r,s){const o=F({props:r,name:"MuiCircularProgress"}),{className:c,color:p="primary",disableShrink:$=!1,size:d=40,style:D,thickness:i=3.6,value:m=0,variant:y="indeterminate",...j}=o,n={...o,color:p,disableShrink:$,size:d,thickness:i,value:m,variant:y},u=L(n),f={},v={},k={};if(y==="determinate"){const C=2*Math.PI*((t-i)/2);f.strokeDasharray=C.toFixed(3),k["aria-valuenow"]=Math.round(m),f.strokeDashoffset=`${((100-m)/100*C).toFixed(3)}px`,v.transform="rotate(-90deg)"}return a.jsx(V,{className:R(u.root,c),style:{width:d,height:d,...v,...D},ownerState:n,ref:s,role:"progressbar",...k,...j,children:a.jsx(q,{className:u.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:a.jsx(G,{className:u.circle,style:f,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})})}),Q=({open:e=!1,message:r=""})=>a.jsx(w,{sx:{backdropFilter:"blur(1px)",backgroundColor:"rgb(52 52 52 /1%)",zIndex:s=>s.zIndex.modal+1},open:e,children:a.jsxs(I,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[a.jsx(O,{color:"#905E5E91"}),a.jsx(U,{children:r})]})});export{Q as L};
