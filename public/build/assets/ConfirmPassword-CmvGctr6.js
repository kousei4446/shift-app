import{W as n,r as d,j as s,Y as l}from"./app-Xnyyglcu.js";import{G as c}from"./GuestLayout-D0wTDjcE.js";import{T as u,I as f}from"./TextInput-BZ1FEHWt.js";import{I as x}from"./InputLabel-Bqg3JjYT.js";import{P as w}from"./PrimaryButton-BjuS-ECq.js";import"./Head-D2ll7owL.js";import"./createSvgIcon-s03WfR7I.js";import"./DefaultPropsProvider-1_IPQBpl.js";import"./Dropdown-CYRImIz2.js";import"./ListContext-CJAlIjVK.js";import"./ButtonBase-CldhGQjc.js";import"./listItemTextClasses-BtfhgZ3W.js";import"./transition-i3fSdaC2.js";import"./Box-tD03Xzru.js";import"./Typography-CaH8pFkY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Menu-CvPk3jsu.js";import"./index-DM6sAJfc.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-tXg9dwUO.js";import"./Modal-CHaInUAj.js";import"./Paper-BY8_QRvQ.js";import"./List-CbUChD4r.js";import"./Logout-DXDoMpRz.js";function A(){const{data:t,setData:o,post:e,processing:a,errors:i,reset:m}=n({password:""});d.useEffect(()=>()=>{m("password")},[]);const p=r=>{r.preventDefault(),e(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:p,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>o("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:a,children:"Confirm"})})]})]})}export{A as default};
