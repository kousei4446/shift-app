import{r as h,j as t}from"./app-m-HMlsfD.js";import j from"./Head-DhxMtF_9.js";import l from"./Sidevar-B5GHDRtP.js";import{QuickActions as D}from"./QuickAction-C_rKBODu.js";import{UserSummary as w}from"./UserSummary-Blgb2Cl_.js";import{ShiftSummary as g}from"./ShiftSummary-CbUXBtZW.js";import"./createSvgIcon-DvOanfjP.js";import"./createSimplePaletteValueFilter-D2-dPfC5.js";import"./Dropdown-w67JNyhh.js";import"./transition-_sPBLcFl.js";import"./Box-CR25OIeg.js";import"./Typography-Bx8_tTwK.js";import"./Menu-De1-uKzX.js";import"./index-B995chQ5.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CrG6-reF.js";import"./Modal-Cr83vY5A.js";import"./TransitionGroupContext-C5-MDFVv.js";import"./Paper-BaBfR29X.js";import"./ButtonBase-C_SP5a7J.js";import"./List-Cp0FmyTt.js";import"./dividerClasses-BjDrb0Wk.js";import"./listItemTextClasses-DuQvMp_m.js";import"./listItemIconClasses-B-r5IkUB.js";import"./Logout-fnhdqEaq.js";import"./LogoutModal-DxrNTA_C.js";import"./ListItemText-Dx0vTXA3.js";import"./CalendarToday-DFlSGCmj.js";import"./CardContent-DoEcaqyY.js";import"./useThemeProps-DnS_9u4U.js";import"./Button-BrUfJDNj.js";import"./ListItem-Bi7eic8d.js";import"./isMuiElement-Ct4HNmcj.js";function tt({compShift:c}){var n;const[m,e]=h.useState(!1),p=c.sort((r,o)=>new Date(r.date)-new Date(o.date)),i=new Date,f=i.getMonth(),s=i.getFullYear(),d=p.filter(r=>{const o=new Date(r.date),x=o.getMonth(),a=o.getFullYear();return a>s||a===s&&x>=f}),u=((n=p.find(r=>new Date(r.date)>=i))==null?void 0:n.date)||"シフトがまだ確定していません。";return t.jsxs("div",{children:[t.jsx(j,{isOpen:m,setIsOpen:e}),m&&t.jsx(l,{setIsOpen:e}),t.jsx("div",{style:{marginBottom:"8px"}}),t.jsx(w,{mes:u}),t.jsx(D,{}),t.jsx(g,{data:d})]})}export{tt as default};
