import{b as c,d as x,j as e,k as d,L as p}from"./index-CvyB-FPv.js";import{c as g,a as u,F as h}from"./bible-logo-BIqOSx__.js";import{B as j}from"./button-DvIK63ch.js";import{L as f,F as b}from"./logoContainer-CJKcrlb3.js";import{C as y,F as v}from"./footer-DohzXldJ.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";const w=g({email:u().email("Invalid email address").required("Email is required")}),E=()=>{const i=c(),o=x();return e.jsx(y,{children:e.jsxs("div",{className:"h-screen max-w-[1263px] flex flex-col justify-between   mx-auto",children:[e.jsxs("div",{className:" lg:space-y-0 space-y-3 lg:max-h-[400px] m-auto lg:py-0 py-10 lg:gap-x-20 lg:grid lg:grid-cols-2",children:[e.jsx(f,{description:"Create an account to access personalized Bible interpretations and deepen your connection with scripture."}),e.jsxs("div",{className:"bg-white px-4 lg:px-9 rounded-3xl w-full lg:max-w-[542px] text-black",children:[e.jsx("p",{className:"font-albert-sans font-medium text-xl lg:text-3xl lg:py-8 py-5 ",children:"Forgot Password?"}),e.jsx(h,{initialValues:{email:""},validationSchema:w,onSubmit:(a,{setSubmitting:s})=>{o(d(a,i,s))},children:({isSubmitting:a,handleSubmit:s,handleChange:n,handleBlur:r,values:m,touched:l,errors:t})=>e.jsxs("form",{className:"space-y-5 ",onSubmit:s,children:[e.jsx(b,{className:"col-span-2",heading:"Email",placeholder:"Email",onChange:n,onBlur:r,value:m.email,error:t.email,touched:l.email}),l.email&&t.email&&e.jsx("div",{className:"text-red-500 text-xs col-span-2 lg:text-sm mt-1",children:t.email}),e.jsx(j,{type:"submit",text:"Login",disabled:a})]})}),e.jsxs("p",{className:"font-albert-sans py-5 text-xs lg:text-lg  ",children:["Would you like to go back to the login page?"," ",e.jsx(p,{to:"/login",children:"Login"})]})]})]}),e.jsx(v,{})]})})};export{E as default};
