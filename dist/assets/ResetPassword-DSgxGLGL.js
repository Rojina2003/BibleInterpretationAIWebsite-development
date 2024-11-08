import{u as w,b as u,d as g,j as s,m as f,L as P}from"./index-CvyB-FPv.js";import{c as h,a as d,d as j,F as b}from"./bible-logo-BIqOSx__.js";import{C as y,F as N}from"./footer-DohzXldJ.js";import{L as v,F as l}from"./logoContainer-CJKcrlb3.js";import{B as R}from"./button-DvIK63ch.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";const C=h({newPassword:d().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmPassword:d().oneOf([j("newPassword"),null],"Passwords must match").required("Confirm Password is required")}),E=()=>{const{registeredMail:m,otp:c}=w(e=>e.auth),p=u(),x=g();return s.jsx(y,{children:s.jsxs("div",{className:"h-screen max-w-[1263px] flex flex-col justify-between   mx-auto",children:[s.jsxs("div",{className:" lg:space-y-0 space-y-3 lg:max-h-[400px] m-auto lg:py-0 py-10 lg:gap-x-20 lg:grid lg:grid-cols-2",children:[s.jsx(v,{description:" Reset your password to regain access to personalized Bible interpretations."}),s.jsxs("div",{className:"bg-white px-4 lg:px-9 rounded-3xl w-full lg:max-w-[542px] text-black",children:[s.jsx("p",{className:"font-albert-sans font-medium text-xl lg:text-3xl lg:py-8 py-5 ",children:"Reset Password"}),s.jsx(b,{initialValues:{newPassword:"",confirmPassword:""},validationSchema:C,onSubmit:(e,{setSubmitting:t})=>{const r={email:m,newPassword:e.newPassword,otp:c};x(f(r,p,t))},children:({isSubmitting:e,handleSubmit:t,handleChange:r,handleBlur:i,values:n,touched:o,errors:a})=>s.jsxs("form",{className:"space-y-5 ",onSubmit:t,children:[s.jsx(l,{className:"col-span-2",heading:"password",placeholder:"password",onChange:r,onBlur:i,value:n.password,error:a.password,touched:o.password}),o.password&&a.password&&s.jsx("div",{className:"text-red-500 text-xs col-span-2 lg:text-sm mt-1",children:a.password}),s.jsx(l,{heading:"Confirm Password",placeholder:"Confirm Password",name:"confirmPassword",error:a.confirmPassword,value:n.confirmPassword,onChange:r,onBlur:i,touched:o.confirmPassword,type:"password"}),o.confirmPassword&&a.confirmPassword&&s.jsx("div",{className:"text-red-500 text-xs lg:text-sm mt-1",children:a.confirmPassword}),s.jsx(R,{type:"submit",text:"RESET PASSWORD",disabled:e})]})}),s.jsxs("p",{className:"font-albert-sans py-5 text-xs lg:text-lg  ",children:["Remember your password? ",s.jsx(P,{to:"/login",children:"Login"})]})]})]}),s.jsx(N,{})]})})};export{E as default};