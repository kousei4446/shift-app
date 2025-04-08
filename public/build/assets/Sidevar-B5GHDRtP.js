import{r as x,j as o,q as X,a as P}from"./app-m-HMlsfD.js";import{c as z}from"./createSvgIcon-DvOanfjP.js";import"./Dropdown-w67JNyhh.js";import ot from"./LogoutModal-DxrNTA_C.js";import{e as nt,g as st,a as at,s as $,m as W,j as it,f as M,u as G,c as T,b as J}from"./createSimplePaletteValueFilter-D2-dPfC5.js";import{d as ct,u as lt}from"./index-B995chQ5.js";import{u as K,T as pt}from"./Typography-Bx8_tTwK.js";import{g as dt,o as Q,T as mt,r as ft,b as q,M as ut}from"./Modal-Cr83vY5A.js";import{P as xt}from"./Paper-BaBfR29X.js";import{B as ht}from"./Box-CR25OIeg.js";import{a as gt,L as vt}from"./List-Cp0FmyTt.js";import{g as yt}from"./listItemIconClasses-B-r5IkUB.js";import{L as R}from"./ListItemText-Dx0vTXA3.js";import{L as wt}from"./Logout-fnhdqEaq.js";import"./transition-_sPBLcFl.js";import"./TransitionGroupContext-C5-MDFVv.js";import"./useSlot-CrG6-reF.js";import"./listItemTextClasses-DuQvMp_m.js";function kt(r,t,s){const e=t.getBoundingClientRect(),a=s&&s.getBoundingClientRect(),f=Q(t);let i;if(t.fakeTransform)i=t.fakeTransform;else{const l=f.getComputedStyle(t);i=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let c=0,d=0;if(i&&i!=="none"&&typeof i=="string"){const l=i.split("(")[1].split(")")[0].split(",");c=parseInt(l[4],10),d=parseInt(l[5],10)}return r==="left"?a?`translateX(${a.right+c-e.left}px)`:`translateX(${f.innerWidth+c-e.left}px)`:r==="right"?a?`translateX(-${e.right-a.left-c}px)`:`translateX(-${e.left+e.width-c}px)`:r==="up"?a?`translateY(${a.bottom+d-e.top}px)`:`translateY(${f.innerHeight+d-e.top}px)`:a?`translateY(-${e.top-a.top+e.height-d}px)`:`translateY(-${e.top+e.height-d}px)`}function Et(r){return typeof r=="function"?r():r}function F(r,t,s){const e=Et(s),a=kt(r,t,e);a&&(t.style.webkitTransform=a,t.style.transform=a)}const Ct=x.forwardRef(function(t,s){const e=K(),a={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},f={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:i,appear:c=!0,children:d,container:l,direction:u="down",easing:j=a,in:g,onEnter:L,onEntered:H,onEntering:S,onExit:w,onExited:I,onExiting:V,style:b,timeout:k=f,TransitionComponent:E=mt,...C}=t,m=x.useRef(null),N=nt(dt(d),m,s),v=n=>p=>{n&&(p===void 0?n(m.current):n(m.current,p))},y=v((n,p)=>{F(u,n,l),ft(n),L&&L(n,p)}),h=v((n,p)=>{const Y=q({timeout:k,style:b,easing:j},{mode:"enter"});n.style.webkitTransition=e.transitions.create("-webkit-transform",{...Y}),n.style.transition=e.transitions.create("transform",{...Y}),n.style.webkitTransform="none",n.style.transform="none",S&&S(n,p)}),A=v(H),B=v(V),tt=v(n=>{const p=q({timeout:k,style:b,easing:j},{mode:"exit"});n.style.webkitTransition=e.transitions.create("-webkit-transform",p),n.style.transition=e.transitions.create("transform",p),F(u,n,l),w&&w(n)}),rt=v(n=>{n.style.webkitTransition="",n.style.transition="",I&&I(n)}),et=n=>{i&&i(m.current,n)},U=x.useCallback(()=>{m.current&&F(u,m.current,l)},[u,l]);return x.useEffect(()=>{if(g||u==="down"||u==="right")return;const n=ct(()=>{m.current&&F(u,m.current,l)}),p=Q(m.current);return p.addEventListener("resize",n),()=>{n.clear(),p.removeEventListener("resize",n)}},[u,g,l]),x.useEffect(()=>{g||U()},[g,U]),o.jsx(E,{nodeRef:m,onEnter:y,onEntered:A,onEntering:h,onExit:tt,onExited:rt,onExiting:B,addEndListener:et,appear:c,in:g,timeout:k,...C,children:(n,p)=>x.cloneElement(d,{ref:N,style:{visibility:n==="exited"&&!g?"hidden":void 0,...b,...d.props.style},...p})})});function jt(r){return st("MuiDrawer",r)}at("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Z=(r,t)=>{const{ownerState:s}=r;return[t.root,(s.variant==="permanent"||s.variant==="persistent")&&t.docked,t.modal]},It=r=>{const{classes:t,anchor:s,variant:e}=r,a={root:["root"],docked:[(e==="permanent"||e==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${M(s)}`,e!=="temporary"&&`paperAnchorDocked${M(s)}`]};return J(a,jt,t)},bt=$(ut,{name:"MuiDrawer",slot:"Root",overridesResolver:Z})(W(({theme:r})=>({zIndex:(r.vars||r).zIndex.drawer}))),O=$("div",{shouldForwardProp:it,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Z})({flex:"0 0 auto"}),Rt=$(xt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.paper,t[`paperAnchor${M(s.anchor)}`],s.variant!=="temporary"&&t[`paperAnchorDocked${M(s.anchor)}`]]}})(W(({theme:r})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(r.vars||r).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:t})=>t.anchor==="left"&&t.variant!=="temporary",style:{borderRight:`1px solid ${(r.vars||r).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="top"&&t.variant!=="temporary",style:{borderBottom:`1px solid ${(r.vars||r).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="right"&&t.variant!=="temporary",style:{borderLeft:`1px solid ${(r.vars||r).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="bottom"&&t.variant!=="temporary",style:{borderTop:`1px solid ${(r.vars||r).palette.divider}`}}]}))),_={left:"right",right:"left",top:"down",bottom:"up"};function Dt(r){return["left","right"].includes(r)}function Tt({direction:r},t){return r==="rtl"&&Dt(t)?_[t]:t}const Lt=x.forwardRef(function(t,s){const e=G({props:t,name:"MuiDrawer"}),a=K(),f=lt(),i={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:d,children:l,className:u,elevation:j=16,hideBackdrop:g=!1,ModalProps:{BackdropProps:L,...H}={},onClose:S,open:w=!1,PaperProps:I={},SlideProps:V,TransitionComponent:b=Ct,transitionDuration:k=i,variant:E="temporary",...C}=e,m=x.useRef(!1);x.useEffect(()=>{m.current=!0},[]);const N=Tt({direction:f?"rtl":"ltr"},c),y={...e,anchor:c,elevation:j,open:w,variant:E,...C},h=It(y),A=o.jsx(Rt,{elevation:E==="temporary"?j:0,square:!0,...I,className:T(h.paper,I.className),ownerState:y,children:l});if(E==="permanent")return o.jsx(O,{className:T(h.root,h.docked,u),ownerState:y,ref:s,...C,children:A});const B=o.jsx(b,{in:w,direction:_[N],timeout:k,appear:m.current,...V,children:A});return E==="persistent"?o.jsx(O,{className:T(h.root,h.docked,u),ownerState:y,ref:s,...C,children:B}):o.jsx(bt,{BackdropProps:{...d,...L,transitionDuration:k},className:T(h.root,h.modal,u),open:w,ownerState:y,onClose:S,hideBackdrop:g,ref:s,...C,...H,children:B})}),St=r=>{const{alignItems:t,classes:s}=r;return J({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},yt,s)},At=$("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.root,s.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(W(({theme:r})=>({minWidth:56,color:(r.vars||r).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),D=x.forwardRef(function(t,s){const e=G({props:t,name:"MuiListItemIcon"}),{className:a,...f}=e,i=x.useContext(gt),c={...e,alignItems:i.alignItems},d=St(c);return o.jsx(At,{className:T(d.root,a),ownerState:c,ref:s,...f})}),Bt=z(o.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"}),"AssignmentTurnedIn"),Pt=z(o.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),Ft=z(o.jsx("path",{d:"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m13.1-8.16c.01-.11.02-.22.02-.34s-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93c-.02-.09-.09-.15-.18-.15h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58c-.02.11-.03.23-.03.34s.01.23.03.34l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22zm-2.6.91c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m.42 3.93-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25q-.195-.15-.42-.24l-.09-.66c-.02-.06-.08-.1-.14-.1h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24s.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25q.195.15.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24s-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17m-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83M4.74 9h8.53c.27 0 .49-.22.49-.49v-.02c0-.27-.22-.49-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26c-.27 0-.49.22-.49.49v.03c0 .26.22.48.49.48M9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3"}),"Engineering"),Mt=z(o.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");function rr({setIsOpen:r}){const t=i=>c=>{c.type==="keydown"&&c.key==="Tab"||c.key==="Shift"||r(i)},{props:s}=X(),{url:e}=X(),[a,f]=x.useState(!1);return o.jsxs(Lt,{anchor:"right",variant:"temporary",open:!0,onClose:t(!1),sx:{width:"70vw",flexShrink:0,"& .MuiDrawer-paper":{width:"70vw",backgroundColor:"#2C3E50",padding:"20px",borderRadius:"8px",color:"#ecf0f1"}},children:[o.jsxs(ht,{sx:{height:"100vh",display:"flex",flexDirection:"column",padding:"10px"},children:[o.jsx(pt,{variant:"h5",gutterBottom:!0,sx:{color:"#ECF0F1",fontWeight:"bold",textAlign:"center",marginBottom:"20px"},children:"メニュー"}),o.jsxs(vt,{children:[o.jsxs(P,{href:"/home",style:{display:"flex",alignItems:"center",padding:"12px",borderRadius:"8px",marginBottom:"16px",backgroundColor:e=="/home"?"#8A9A5B":"transparent"},children:[o.jsx(D,{children:o.jsx(Mt,{sx:{color:"#ECF0F1"}})}),o.jsx(R,{primary:"ホーム",sx:{color:"#ECF0F1",fontSize:"1rem"}})]}),o.jsxs(P,{href:"/submit",style:{display:"flex",alignItems:"center",padding:"12px",borderRadius:"8px",marginBottom:"16px",backgroundColor:e=="/submit"?"#8A9A5B":"transparent"},children:[o.jsx(D,{children:o.jsx(Bt,{sx:{color:"#3498DB"}})}),o.jsx(R,{primary:"シフト提出",sx:{color:"#ECF0F1",fontSize:"1rem"}})]}),o.jsxs(P,{href:"/confirm",style:{display:"flex",alignItems:"center",padding:"12px",borderRadius:"8px",marginBottom:"16px",backgroundColor:e=="/confirm"?"#8A9A5B":"transparent"},children:[o.jsx(D,{children:o.jsx(Pt,{sx:{color:"#27AE60"}})}),o.jsx(R,{primary:"シフト確認",sx:{color:"#ECF0F1",fontSize:"1rem"}})]}),s.allowedEmail.length>=1&&o.jsxs(P,{href:"/master",style:{display:"flex",alignItems:"center",padding:"12px",borderRadius:"8px",marginBottom:"16px",backgroundColor:"transparent"},children:[o.jsx(D,{children:o.jsx(Ft,{sx:{color:"#E74C3C"}})}),o.jsx(R,{primary:"管理者用",sx:{color:"#ECF0F1",fontSize:"1rem"}})]}),o.jsxs("div",{onClick:()=>f(i=>!i),style:{display:"flex",alignItems:"center",padding:"12px",borderRadius:"8px",marginBottom:"16px",backgroundColor:"transparent"},children:[o.jsx(D,{children:o.jsx(wt,{sx:{marginLeft:"4px",color:"#F39C12"}})}),o.jsx(R,{primary:"ログアウト",sx:{color:"#ECF0F1",fontSize:"1rem"}})]})]})]}),a&&o.jsx(ot,{setOpen:f})]})}export{rr as default};
