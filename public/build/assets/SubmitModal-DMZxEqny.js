import{W as y,r as l,j as e}from"./app-Xnyyglcu.js";import{B as a}from"./Box-tD03Xzru.js";import{T as d}from"./Typography-CaH8pFkY.js";import{B as c}from"./Button-C59kd-A2.js";import{M as v}from"./Modal-CHaInUAj.js";import"./DefaultPropsProvider-1_IPQBpl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CldhGQjc.js";import"./useSlot-tXg9dwUO.js";function W({open:m,setOpen:o,selectedDates:i,hasSubmittedShifts:p}){const{setData:s,post:x,processing:h,errors:f}=y({date:[]});l.useEffect(()=>{s("date",t)},[i]);const[u,n]=l.useState(!1),t=Array.from(i).sort((r,b)=>new Date(r).getTime()-new Date(b).getTime()),g=()=>{t.length==0&&n(!0),n(!1),s("date",t),x(route("submit.store"),{onSuccess:()=>{o(!1),s("date",[])},onError:()=>{console.error(f)}})},j=e.jsxs(a,{sx:{width:"320px",borderRadius:"8px",bgcolor:"background.paper",border:"none",boxShadow:24,p:4,margin:"0 8px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsxs(d,{variant:"h5",component:"h2",style:{fontWeight:"bold"},children:["こちらで",p&&"再","提出しますか？"]}),e.jsx(d,{children:t.length>0?e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px"},children:"選択された日付は以下です"}),e.jsx("ul",{children:t.map(r=>e.jsx("li",{children:r},r))})]}):"選択された日付はありません"}),e.jsxs("div",{style:{gap:"8px",display:"flex"},children:[e.jsx(c,{onClick:()=>o(!1),variant:"outlined",sx:{mt:2},children:"いいえ"}),e.jsx(c,{onClick:g,variant:"contained",sx:{mt:2},disabled:h,children:"はい"})]}),u&&e.jsx("p",{style:{color:"red",marginTop:"8px",fontWeight:"bold"},children:"日程を選択してください。"})]});return e.jsx(v,{open:m,onClose:()=>o(!1),"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:e.jsx(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:j})})}export{W as default};
