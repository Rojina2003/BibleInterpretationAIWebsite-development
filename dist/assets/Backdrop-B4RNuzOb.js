import{d as H,r as U,_ as Q,$ as V,a0 as I,R as _,j as G,a as Y,g as tt,s as et,u as nt,e as st}from"./index-BhwuQh57.js";import{_ as ot,a as it,T as Z,u as $}from"./Box-CAmCZjMz.js";import{u as rt}from"./Typography-Fw5DEFoH.js";function at(n){return typeof n=="string"}function ct(n,r,o){return n===void 0||at(n)?r:{...r,ownerState:{...r.ownerState,...o}}}function ut(n,r=[]){if(n===void 0)return{};const o={};return Object.keys(n).filter(s=>s.match(/^on[A-Z]/)&&typeof n[s]=="function"&&!r.includes(s)).forEach(s=>{o[s]=n[s]}),o}function F(n){if(n===void 0)return{};const r={};return Object.keys(n).filter(o=>!(o.match(/^on[A-Z]/)&&typeof n[o]=="function")).forEach(o=>{r[o]=n[o]}),r}function lt(n){const{getSlotProps:r,additionalProps:o,externalSlotProps:s,externalForwardedProps:t,className:e}=n;if(!r){const m=H(o==null?void 0:o.className,e,t==null?void 0:t.className,s==null?void 0:s.className),h={...o==null?void 0:o.style,...t==null?void 0:t.style,...s==null?void 0:s.style},v={...o,...t,...s};return m.length>0&&(v.className=m),Object.keys(h).length>0&&(v.style=h),{props:v,internalRef:void 0}}const i=ut({...t,...s}),a=F(s),u=F(t),c=r(i),l=H(c==null?void 0:c.className,o==null?void 0:o.className,e,t==null?void 0:t.className,s==null?void 0:s.className),p={...c==null?void 0:c.style,...o==null?void 0:o.style,...t==null?void 0:t.style,...s==null?void 0:s.style},d={...c,...o,...u,...a};return l.length>0&&(d.className=l),Object.keys(p).length>0&&(d.style=p),{props:d,internalRef:c.ref}}function ft(n,r,o){return typeof n=="function"?n(r,o):n}function pt(n){var r;return parseInt(U.version,10)>=19?((r=n==null?void 0:n.props)==null?void 0:r.ref)||null:(n==null?void 0:n.ref)||null}function dt(){const n=rt(V);return n[Q]||n}const P={disabled:!1};var ht=function(r){return r.scrollTop},L="unmounted",C="exited",S="entering",O="entered",W="exiting",T=function(n){ot(r,n);function r(s,t){var e;e=n.call(this,s,t)||this;var i=t,a=i&&!i.isMounting?s.enter:s.appear,u;return e.appearStatus=null,s.in?a?(u=C,e.appearStatus=S):u=O:s.unmountOnExit||s.mountOnEnter?u=L:u=C,e.state={status:u},e.nextCallback=null,e}r.getDerivedStateFromProps=function(t,e){var i=t.in;return i&&e.status===L?{status:C}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(t){var e=null;if(t!==this.props){var i=this.state.status;this.props.in?i!==S&&i!==O&&(e=S):(i===S||i===O)&&(e=W)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var t=this.props.timeout,e,i,a;return e=i=a=t,t!=null&&typeof t!="number"&&(e=t.exit,i=t.enter,a=t.appear!==void 0?t.appear:i),{exit:e,enter:i,appear:a}},o.updateStatus=function(t,e){if(t===void 0&&(t=!1),e!==null)if(this.cancelNextCallback(),e===S){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:I.findDOMNode(this);i&&ht(i)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===C&&this.setState({status:L})},o.performEnter=function(t){var e=this,i=this.props.enter,a=this.context?this.context.isMounting:t,u=this.props.nodeRef?[a]:[I.findDOMNode(this),a],c=u[0],l=u[1],p=this.getTimeouts(),d=a?p.appear:p.enter;if(!t&&!i||P.disabled){this.safeSetState({status:O},function(){e.props.onEntered(c)});return}this.props.onEnter(c,l),this.safeSetState({status:S},function(){e.props.onEntering(c,l),e.onTransitionEnd(d,function(){e.safeSetState({status:O},function(){e.props.onEntered(c,l)})})})},o.performExit=function(){var t=this,e=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:I.findDOMNode(this);if(!e||P.disabled){this.safeSetState({status:C},function(){t.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:W},function(){t.props.onExiting(a),t.onTransitionEnd(i.exit,function(){t.safeSetState({status:C},function(){t.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},o.setNextCallback=function(t){var e=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(t,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:I.findDOMNode(this),a=t==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=u[0],l=u[1];this.props.addEndListener(c,l)}t!=null&&setTimeout(this.nextCallback,t)},o.render=function(){var t=this.state.status;if(t===L)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=it(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return _.createElement(Z.Provider,{value:null},typeof i=="function"?i(t,a):_.cloneElement(_.Children.only(i),a))},r}(_.Component);T.contextType=Z;T.propTypes={};function R(){}T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:R,onEntering:R,onEntered:R,onExit:R,onExiting:R,onExited:R};T.UNMOUNTED=L;T.EXITED=C;T.ENTERING=S;T.ENTERED=O;T.EXITING=W;const Et=n=>n.scrollTop;function X(n,r){const{timeout:o,easing:s,style:t={}}=n;return{duration:t.transitionDuration??(typeof o=="number"?o:o[r.mode]||0),easing:t.transitionTimingFunction??(typeof s=="object"?s[r.mode]:s),delay:t.transitionDelay}}function A(n,r){const{className:o,elementType:s,ownerState:t,externalForwardedProps:e,getSlotOwnerState:i,internalForwardedProps:a,...u}=r,{component:c,slots:l={[n]:void 0},slotProps:p={[n]:void 0},...d}=e,m=l[n]||s,h=ft(p[n],t),{props:{component:v,...x},internalRef:b}=lt({className:o,...u,externalForwardedProps:n==="root"?d:void 0,externalSlotProps:h}),D=$(b,h==null?void 0:h.ref,r.ref),N=i?i(x):{},y={...t,...N},k=n==="root"?v||c:v,E=ct(m,{...n==="root"&&!c&&!l[n]&&a,...n!=="root"&&!l[n]&&a,...x,...k&&{as:k},ref:D},y);return Object.keys(N).forEach(w=>{delete E[w]}),[m,E]}const mt={entering:{opacity:1},entered:{opacity:1}},vt=U.forwardRef(function(r,o){const s=dt(),t={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:e,appear:i=!0,children:a,easing:u,in:c,onEnter:l,onEntered:p,onEntering:d,onExit:m,onExited:h,onExiting:v,style:x,timeout:b=t,TransitionComponent:D=T,...N}=r,y=U.useRef(null),k=$(y,pt(a),o),E=f=>g=>{if(f){const M=y.current;g===void 0?f(M):f(M,g)}},w=E(d),j=E((f,g)=>{Et(f);const M=X({style:x,timeout:b,easing:u},{mode:"enter"});f.style.webkitTransition=s.transitions.create("opacity",M),f.style.transition=s.transitions.create("opacity",M),l&&l(f,g)}),B=E(p),z=E(v),q=E(f=>{const g=X({style:x,timeout:b,easing:u},{mode:"exit"});f.style.webkitTransition=s.transitions.create("opacity",g),f.style.transition=s.transitions.create("opacity",g),m&&m(f)}),J=E(h),K=f=>{e&&e(y.current,f)};return G.jsx(D,{appear:i,in:c,nodeRef:y,onEnter:j,onEntered:B,onEntering:w,onExit:q,onExited:J,onExiting:z,addEndListener:K,timeout:b,...N,children:(f,g)=>U.cloneElement(a,{style:{opacity:0,visibility:f==="exited"&&!c?"hidden":void 0,...mt[f],...x,...a.props.style},ref:k,...g})})});function xt(n){return tt("MuiBackdrop",n)}Y("MuiBackdrop",["root","invisible"]);const yt=n=>{const{ownerState:r,...o}=n;return o},gt=n=>{const{classes:r,invisible:o}=n;return st({root:["root",o&&"invisible"]},xt,r)},Tt=et("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,o.invisible&&r.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Nt=U.forwardRef(function(r,o){const s=nt({props:r,name:"MuiBackdrop"}),{children:t,className:e,component:i="div",invisible:a=!1,open:u,components:c={},componentsProps:l={},slotProps:p={},slots:d={},TransitionComponent:m,transitionDuration:h,...v}=s,x={...s,component:i,invisible:a},b=gt(x),D={transition:m,root:c.Root,...d},N={...l,...p},y={slots:D,slotProps:N},[k,E]=A("root",{elementType:Tt,externalForwardedProps:y,className:H(b.root,e),ownerState:x}),[w,j]=A("transition",{elementType:vt,externalForwardedProps:y,ownerState:x}),B=yt(j);return G.jsx(w,{in:u,timeout:h,...v,...B,children:G.jsx(k,{"aria-hidden":!0,...E,classes:b,ref:o,children:t})})});export{Nt as B,vt as F,T,dt as a,X as b,ft as c,ct as d,ut as e,pt as g,lt as m,Et as r,A as u};
