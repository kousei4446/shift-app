import{r as b,j as c,y as N}from"./app-Xnyyglcu.js";import{C as A}from"./CalendarToday-kSuw57Ro.js";import{c as L}from"./createSvgIcon-s03WfR7I.js";import V from"./LogoutModal-g6vOYfCz.js";import{C as O,a as D}from"./CardContent-BHVLpoci.js";import{u as H,e as U,T as Z}from"./Typography-CaH8pFkY.js";import{g as F,a as K,s as Q,c as _,r as C,h as j,b as q}from"./DefaultPropsProvider-1_IPQBpl.js";import{u as J}from"./useThemeProps-CiUk-Pry.js";import{B as w}from"./Button-C59kd-A2.js";import{L as X}from"./Logout-DXDoMpRz.js";import"./Dropdown-CYRImIz2.js";import"./ListContext-CJAlIjVK.js";import"./ButtonBase-CldhGQjc.js";import"./listItemTextClasses-BtfhgZ3W.js";import"./transition-i3fSdaC2.js";import"./Paper-BY8_QRvQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const M=b.createContext();function Y(r){return F("MuiGrid",r)}const rr=[0,1,2,3,4,5,6,7,8,9,10],tr=["column-reverse","column","row-reverse","row"],nr=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=K("MuiGrid",["root","container","item","zeroMinWidth",...rr.map(r=>`spacing-xs-${r}`),...tr.map(r=>`direction-xs-${r}`),...nr.map(r=>`wrap-xs-${r}`),...g.map(r=>`grid-xs-${r}`),...g.map(r=>`grid-sm-${r}`),...g.map(r=>`grid-md-${r}`),...g.map(r=>`grid-lg-${r}`),...g.map(r=>`grid-xl-${r}`)]);function er({theme:r,ownerState:t}){let e;return r.breakpoints.keys.reduce((o,n)=>{let i={};if(t[n]&&(e=t[n]),!e)return o;if(e===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(e==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=C({values:t.columns,breakpoints:r.breakpoints.values}),u=typeof s=="object"?s[n]:s;if(u==null)return o;const l=`${Math.round(e/u*1e8)/1e6}%`;let a={};if(t.container&&t.item&&t.columnSpacing!==0){const p=r.spacing(t.columnSpacing);if(p!=="0px"){const d=`calc(${l} + ${p})`;a={flexBasis:d,maxWidth:d}}}i={flexBasis:l,flexGrow:0,maxWidth:l,...a}}return r.breakpoints.values[n]===0?Object.assign(o,i):o[r.breakpoints.up(n)]=i,o},{})}function or({theme:r,ownerState:t}){const e=C({values:t.direction,breakpoints:r.breakpoints.values});return j({theme:r},e,o=>{const n={flexDirection:o};return o.startsWith("column")&&(n[`& > .${x.item}`]={maxWidth:"none"}),n})}function R({breakpoints:r,values:t}){let e="";Object.keys(t).forEach(n=>{e===""&&t[n]!==0&&(e=n)});const o=Object.keys(r).sort((n,i)=>r[n]-r[i]);return o.slice(0,o.indexOf(e))}function ir({theme:r,ownerState:t}){const{container:e,rowSpacing:o}=t;let n={};if(e&&o!==0){const i=C({values:o,breakpoints:r.breakpoints.values});let s;typeof i=="object"&&(s=R({breakpoints:r.breakpoints.values,values:i})),n=j({theme:r},i,(u,l)=>{const a=r.spacing(u);return a!=="0px"?{marginTop:r.spacing(-u),[`& > .${x.item}`]:{paddingTop:a}}:s!=null&&s.includes(l)?{}:{marginTop:0,[`& > .${x.item}`]:{paddingTop:0}}})}return n}function sr({theme:r,ownerState:t}){const{container:e,columnSpacing:o}=t;let n={};if(e&&o!==0){const i=C({values:o,breakpoints:r.breakpoints.values});let s;typeof i=="object"&&(s=R({breakpoints:r.breakpoints.values,values:i})),n=j({theme:r},i,(u,l)=>{const a=r.spacing(u);if(a!=="0px"){const p=r.spacing(-u);return{width:`calc(100% + ${a})`,marginLeft:p,[`& > .${x.item}`]:{paddingLeft:a}}}return s!=null&&s.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${x.item}`]:{paddingLeft:0}}})}return n}function ar(r,t,e={}){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[e[`spacing-xs-${String(r)}`]];const o=[];return t.forEach(n=>{const i=r[n];Number(i)>0&&o.push(e[`spacing-${n}-${String(i)}`])}),o}const cr=Q("div",{name:"MuiGrid",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r,{container:o,direction:n,item:i,spacing:s,wrap:u,zeroMinWidth:l,breakpoints:a}=e;let p=[];o&&(p=ar(s,a,t));const d=[];return a.forEach(m=>{const f=e[m];f&&d.push(t[`grid-${m}-${String(f)}`])}),[t.root,o&&t.container,i&&t.item,l&&t.zeroMinWidth,...p,n!=="row"&&t[`direction-xs-${String(n)}`],u!=="wrap"&&t[`wrap-xs-${String(u)}`],...d]}})(({ownerState:r})=>({boxSizing:"border-box",...r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...r.item&&{margin:0},...r.zeroMinWidth&&{minWidth:0},...r.wrap!=="wrap"&&{flexWrap:r.wrap}}),or,ir,sr,er);function ur(r,t){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[`spacing-xs-${String(r)}`];const e=[];return t.forEach(o=>{const n=r[o];if(Number(n)>0){const i=`spacing-${o}-${String(n)}`;e.push(i)}}),e}const lr=r=>{const{classes:t,container:e,direction:o,item:n,spacing:i,wrap:s,zeroMinWidth:u,breakpoints:l}=r;let a=[];e&&(a=ur(i,l));const p=[];l.forEach(m=>{const f=r[m];f&&p.push(`grid-${m}-${String(f)}`)});const d={root:["root",e&&"container",n&&"item",u&&"zeroMinWidth",...a,o!=="row"&&`direction-xs-${String(o)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...p]};return q(d,Y,t)},v=b.forwardRef(function(t,e){const o=J({props:t,name:"MuiGrid"}),{breakpoints:n}=H(),i=U(o),{className:s,columns:u,columnSpacing:l,component:a="div",container:p=!1,direction:d="row",item:m=!1,rowSpacing:f,spacing:$=0,wrap:B="wrap",zeroMinWidth:I=!1,...S}=i,z=f||$,E=l||$,T=b.useContext(M),k=p?u||12:T,W={},y={...S};n.keys.forEach(h=>{S[h]!=null&&(W[h]=S[h],delete y[h])});const G={...i,columns:k,container:p,direction:d,item:m,rowSpacing:z,columnSpacing:E,wrap:B,zeroMinWidth:I,spacing:$,...W,breakpoints:n.keys},P=lr(G);return c.jsx(M.Provider,{value:k,children:c.jsx(cr,{ownerState:G,className:_(P.root,s),as:a,ref:e,...y})})}),pr=L(c.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment");function Nr(){const[r,t]=b.useState(!1);return c.jsx(O,{sx:{margin:"auto 8px",boxShadow:3,borderRadius:2,backgroundColor:"#fff"},children:c.jsxs(D,{children:[c.jsx(Z,{variant:"h6",component:"h3",gutterBottom:!0,sx:{fontWeight:"bold",color:"#333"},children:"クイックアクション"}),c.jsxs(v,{container:!0,spacing:2,children:[c.jsx(v,{item:!0,xs:12,sm:4,children:c.jsx(w,{variant:"outlined",startIcon:c.jsx(A,{}),fullWidth:!0,sx:{height:"100%",textAlign:"center",padding:"16px",borderRadius:2,"&:hover":{backgroundColor:"#f5f5f5",borderColor:"#1976d2"}},onClick:()=>N.get("/submit"),children:"シフト提出"})}),c.jsx(v,{item:!0,xs:12,sm:4,children:c.jsx(w,{onClick:()=>N.get("/confirm"),variant:"outlined",startIcon:c.jsx(pr,{}),fullWidth:!0,sx:{height:"100%",textAlign:"center",padding:"16px",borderRadius:2,"&:hover":{backgroundColor:"#f5f5f5",borderColor:"#1976d2"}},children:"シフト確認"})}),c.jsx(v,{item:!0,xs:12,sm:4,children:c.jsx(w,{onClick:()=>t(e=>!e),variant:"outlined",startIcon:c.jsx(X,{}),fullWidth:!0,sx:{height:"100%",textAlign:"center",padding:"16px",borderRadius:2,"&:hover":{backgroundColor:"#f5f5f5",borderColor:"#1976d2"}},children:"ログアウト"})}),r&&c.jsx(V,{setOpen:t})]})]})})}export{Nr as QuickActions};
