import{p as f,q as j,t as w,r as y,j as e,N as r,O as N}from"./index-C0r0L49c.js";import{c as m,C as v,F as k,B as S,g as E,f as F}from"./logos_facebook-CoGTA_dG.js";import{c as L,a as x,F as P}from"./index.esm-Yq5dxOJ6.js";import{L as C}from"./Loader-uTIw1SUj.js";import{b as q}from"./bible-logo-BonHSJb1.js";import"./Backdrop-TQYrrEm-.js";import"./Box-CS5yWT2U.js";import"./Typography-_2sXtjKH.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=m("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=m("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),A=L({email:x().email("Invalid email address").required("Email is required"),password:x().min(6,"Password must be at least 6 characters").required("Password is required")}),V=()=>{const{isAuthenticated:M,isLoading:n}=f(s=>s.auth),p=j(),h=w(),[i,u]=y.useState(!1),g=(s,a)=>{h(N(s,p,a))},b=()=>{u(s=>!s)};return e.jsxs(v,{children:[e.jsxs("div",{className:"lg:h-screen h-full max-w-[1263px] mx-auto lg:space-y-0 space-y-3 items-center gap-5 lg:py-0 py-10 lg:gap-20 grid lg:grid-cols-2 ",children:[e.jsxs("div",{className:"font-albert-sans space-y-6 text-white max-w-[629px] ",children:[e.jsx(r,{to:"/",children:e.jsx("img",{style:{width:"150px",marginBottom:"20px"},src:q,alt:"Bible Logo"})}),e.jsx("h1",{className:"font-bold text-3xl lg:text-4xl ",children:"Join the Journey of Faith and Understanding"}),e.jsx("p",{className:"lg:text-lg text-sm text-[#EA9DA1] ",children:"Create an account to access personalized Bible interpretations and deepen your connection with scripture."})]}),e.jsxs("div",{className:"bg-white px-4 lg:px-9 rounded-3xl w-full lg:max-w-[542px] text-black",children:[e.jsx("p",{className:"font-albert-sans font-medium text-xl lg:text-3xl lg:py-8 py-5 ",children:"Log in"}),e.jsx(P,{initialValues:{email:"",password:""},validationSchema:A,onSubmit:(s,{setSubmitting:a})=>{g(s,a)},children:({isSubmitting:s,handleSubmit:a,handleChange:o,handleBlur:c,values:d,touched:l,errors:t})=>e.jsxs("form",{className:"lg:space-y-5 space-y-2",onSubmit:a,children:[e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"col-span-2",heading:"Email",placeholder:"Email",onChange:o,onBlur:c,value:d.email,error:t.email,touched:l.email}),l.email&&t.email&&e.jsx("div",{className:"text-red-500 text-xs col-span-2 lg:text-sm mt-1",children:t.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"font-albert-sans font-medium text-xs lg:text-sm mb-2 ",children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:i?"text":"password",name:"password",onChange:o,onBlur:c,value:d.password,className:"bg-[#F1F0EE] rounded-lg w-full py-2 px-4  ",placeholder:"Password"}),e.jsx("button",{type:"button",onClick:b,className:"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500",children:i?e.jsx(B,{}):e.jsx(I,{})})]}),l.password&&t.password&&e.jsx("div",{className:"text-red-500 text-xs mt-1",children:t.password})]}),e.jsx(r,{className:"flex justify-end",to:"/forgotten-password",children:"Forgot Password?"}),e.jsx(S,{type:"submit",text:"Create an account",disabled:s})]})}),e.jsxs("p",{className:"flex items-center w-full my-5 mx-auto",children:[e.jsx("span",{className:"flex-grow border-b border-[#999999]"}),e.jsx("span",{className:"mx-4 text-[#999999]",children:"or"}),e.jsx("span",{className:"flex-grow border-t border-[#999999]"})]}),e.jsxs("div",{className:"space-y-4 pb-4",children:[e.jsx("button",{className:"border-black w-full rounded-3xl border py-2 ",children:e.jsxs("h1",{className:"flex justify-center text-[#545555] items-center gap-4",children:[e.jsx("img",{className:"h-fit",src:E})," Sign up with Google"]})}),e.jsx("button",{className:"border-black w-full rounded-3xl border py-2 ",children:e.jsxs("h1",{className:"flex justify-center text-[#545555] items-center gap-4",children:[e.jsx("img",{className:"h-fit",src:F}),"Sign up with Facebook"]})})]}),e.jsxs("div",{className:"flex justify-between py-5 items-center",children:[e.jsx("p",{className:"font-albert-sans font-bold text-xs lg:text-lg  ",children:"Already have an account?"}),e.jsx("button",{className:"border-[1px] lg:py-3 px-7 lg:rounded-xl rounded-md w-fit border-black ",children:e.jsx(r,{to:"/Sign up",className:"font-medium font-albert-sans !no-underline whitespace-nowrap !text-black text-sm lg:text-lg",children:"Sign up"})})]})]})]}),n?e.jsx(C,{open:n,message:""}):""]})};export{V as default};
