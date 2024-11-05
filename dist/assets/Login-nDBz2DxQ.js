import{a as A,g as F,s as B,m as z,r as b,u as M,j as e,d as T,c as v,e as k,p as R,q as $,t as q,K as W}from"./index-BhwuQh57.js";import{c as U,a as w,F as V,b as D}from"./index.esm-Xv13TiJf.js";import{u as G,F as J,c as N,e as y,I as P,T as I}from"./TextField-B86ZpcrU.js";import{L as O}from"./Loader-BQUjsBGH.js";import{B as g}from"./Box-CAmCZjMz.js";import{G as j}from"./Grid2-BirJR7FY.js";import{T as p}from"./Typography-Fw5DEFoH.js";import{I as H}from"./IconButton-BPNAfOPR.js";import{a as S}from"./Button-DEpOL7wX.js";import"./Backdrop-B4RNuzOb.js";function K(n){return F("MuiInputAdornment",n)}const C=A("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var L;const _=(n,s)=>{const{ownerState:a}=n;return[s.root,s[`position${v(a.position)}`],a.disablePointerEvents===!0&&s.disablePointerEvents,s[a.variant]]},Q=n=>{const{classes:s,disablePointerEvents:a,hiddenLabel:c,position:i,size:m,variant:u}=n,h={root:["root",a&&"disablePointerEvents",i&&`position${v(i)}`,u,c&&"hiddenLabel",m&&`size${v(m)}`]};return k(h,K,s)},X=B("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:_})(z(({theme:n})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${C.positionStart}&:not(.${C.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),Y=b.forwardRef(function(s,a){const c=M({props:s,name:"MuiInputAdornment"}),{children:i,className:m,component:u="div",disablePointerEvents:h=!1,disableTypography:t=!1,position:o,variant:x,...f}=c,r=G()||{};let l=x;x&&r.variant,r&&!l&&(l=r.variant);const d={...c,hiddenLabel:r.hiddenLabel,size:r.size,disablePointerEvents:h,position:o,variant:l},E=Q(d);return e.jsx(J.Provider,{value:null,children:e.jsx(X,{as:u,ownerState:d,className:T(E.root,m),ref:a,...f,children:typeof i=="string"&&!t?e.jsx(p,{color:"textSecondary",children:i}):e.jsxs(b.Fragment,{children:[o==="start"?L||(L=e.jsx("span",{className:"notranslate",children:"​"})):null,i]})})})}),Z=N(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),ee=N(e.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff"),se=U({email:w().email("Invalid email address").required("Email is required"),password:w().min(6,"Password must be at least 6 characters").required("Password is required")}),pe=()=>{const{isAuthenticated:n,isLoading:s}=R(t=>t.auth),a=$(),c=q(),[i,m]=b.useState(!1),u=(t,o)=>{c(W(t,a,o))},h=()=>{m(t=>!t)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{className:"login-section",children:e.jsxs(j,{container:!0,sx:{height:"100%",alignItems:"center",justifyContent:"center",width:"100%"},className:"content-section",children:[e.jsx(j,{item:"true",xs:12,md:7,lg:7,sm:7,children:e.jsxs(g,{className:"left-section",children:[e.jsx(y,{href:"/",children:e.jsx("img",{style:{width:"150px",marginBottom:"20px"},src:"./assets/images/bible-logo.png",alt:"Bible Logo"})}),e.jsx(p,{fontWeight:300,fontSize:24,children:"Bible Interpretation AI"}),e.jsx(p,{variant:"h1",children:"Join the Journey of Faith and Understanding"}),e.jsx(p,{variant:"subtitle1",color:"#EA9DA1",children:"Create an account to access personalized Bible interpretations and deepen your connection with scripture."})]})}),e.jsx(j,{item:"true",xs:12,md:5,lg:5,sm:5,sx:{ml:{xs:0,sm:-5,md:-10,lg:-20}},children:e.jsxs(g,{className:"login-box",children:[e.jsx(p,{variant:"h5",mb:3,gutterBottom:!0,children:"Log in"}),e.jsx(V,{initialValues:{email:"",password:""},validationSchema:se,onSubmit:(t,{setSubmitting:o})=>{u(t,o)},children:({isSubmitting:t,handleSubmit:o,handleChange:x,handleBlur:f,values:r,touched:l,errors:d})=>e.jsxs(D,{onSubmit:o,children:[e.jsxs(e.Fragment,{children:[e.jsx(P,{sx:{fontWeight:"500",color:"black"},children:"Email"}),e.jsx(I,{fullWidth:!0,variant:"outlined",name:"email",type:"email",onChange:x,onBlur:f,value:r.email,error:l.email&&!!d.email,helperText:l.email&&d.email,className:"login-field",placeholder:"Email address"})]}),e.jsxs("div",{className:"w-100",children:[e.jsx(P,{sx:{fontWeight:"500",color:"black"},children:"Password"}),e.jsx(I,{fullWidth:!0,variant:"outlined",name:"password",type:i?"text":"password",onChange:x,onBlur:f,value:r.password,error:l.password&&!!d.password,helperText:l.password&&d.password,className:"login-field",InputProps:{endAdornment:e.jsx(Y,{position:"end",children:e.jsx(H,{onClick:h,edge:"end",children:i?e.jsx(ee,{}):e.jsx(Z,{})})})},placeholder:"Password"})]}),e.jsx(g,{className:"forgot-link",children:e.jsx(y,{href:"/forgotten-password",children:"Forgot Password?"})}),e.jsx(S,{fullWidth:!0,type:"submit",className:"login-button",disabled:t,children:"Login"})]})}),e.jsxs(g,{className:"account-footer-text",children:[e.jsx(p,{variant:"body2",className:"label-section",children:"Don’t have an account?"}),e.jsx(S,{variant:"contained",className:"footer-redirect-btn",href:"/sign-up",children:"Sign up"})]})]})})]})}),s?e.jsx(O,{open:s,message:""}):""]})};export{pe as default};
