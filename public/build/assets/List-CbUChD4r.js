import{r as l,j as p}from"./app-Xnyyglcu.js";import{a as h,g as L,s as f,u as x,c as v,b as C}from"./DefaultPropsProvider-1_IPQBpl.js";import{L as P}from"./ListContext-CJAlIjVK.js";function y(s){return L("MuiList",s)}h("MuiList",["root","padding","dense","subheader"]);const M=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return C({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},y,e)},R=f("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:s})=>!s.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:s})=>s.subheader,style:{paddingTop:0}}]}),S=l.forwardRef(function(e,t){const o=x({props:e,name:"MuiList"}),{children:a,className:r,component:i="ul",dense:n=!1,disablePadding:c=!1,subheader:u,...g}=o,m=l.useMemo(()=>({dense:n}),[n]),d={...o,component:i,dense:n,disablePadding:c},b=M(d);return p.jsx(P.Provider,{value:m,children:p.jsxs(R,{as:i,className:v(b.root,r),ref:t,ownerState:d,...g,children:[u,a]})})});export{S as L};
