import{q as x,t as g,j as e,I as p}from"./index-BhwuQh57.js";import{c as j,a as f,F as b,b as v}from"./index.esm-Xv13TiJf.js";import{b as y}from"./bible-logo-tpMBq7Qd.js";import{B as i}from"./Box-CAmCZjMz.js";import{G as r}from"./Grid2-BirJR7FY.js";import{e as l,I as F,T as B}from"./TextField-B86ZpcrU.js";import{T as a}from"./Typography-Fw5DEFoH.js";import{a as N}from"./Button-DEpOL7wX.js";import"./Backdrop-B4RNuzOb.js";const k=j({email:f().email("Invalid email address").required("Email is required")}),S=()=>{const m=x(),c=g();return e.jsx(i,{className:"login-section",children:e.jsxs(r,{container:!0,sx:{height:"100%",alignItems:"center",justifyContent:"center",width:"100%"},children:[e.jsx(r,{item:"true",xs:12,md:7,lg:7,children:e.jsxs(i,{className:"left-section",children:[e.jsx(l,{href:"/",children:e.jsx("img",{src:y})}),e.jsx(a,{variant:"h1",children:"Join the Journey of Faith and Understanding"}),e.jsx(a,{variant:"subtitle1",color:"#EA9DA1",children:"Create an account to access personalized Bible interpretations and deepen your connection with scripture."})]})}),e.jsx(r,{item:"true",xs:12,md:5,lg:5,sx:{ml:{xs:0,sm:-5,md:-10,lg:-20}},children:e.jsxs(i,{className:"login-box",children:[e.jsx(a,{variant:"h5",gutterBottom:!0,mt:2,mb:3,children:"Forgot Password?"}),e.jsx(b,{initialValues:{email:""},validationSchema:k,onSubmit:(t,{setSubmitting:s})=>{c(p(t,m,s))},children:({isSubmitting:t,handleSubmit:s,handleChange:d,handleBlur:h,values:u,touched:o,errors:n})=>e.jsxs(v,{onSubmit:s,children:[e.jsxs(e.Fragment,{children:[e.jsx(F,{sx:{fontWeight:"500",color:"black"},children:"Email"}),e.jsx(B,{fullWidth:!0,variant:"outlined",name:"email",type:"email",onChange:d,onBlur:h,value:u.email,error:o.email&&!!n.email,helperText:o.email&&n.email,className:"login-field",placeholder:"Email address"})]}),e.jsx(N,{fullWidth:!0,type:"submit",className:"login-button",disabled:t,children:"Login"})]})}),e.jsx(i,{className:"account-footer-text",children:e.jsxs(a,{variant:"body2",children:["Would you like to go back to the login page? ",e.jsx(l,{href:"/login",children:"Login"})]})})]})})]})})};export{S as default};