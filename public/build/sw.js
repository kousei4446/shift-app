if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(r.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddMaster-C5EvM2Bg.js",revision:null},{url:"assets/app-DhY3GSC_.js",revision:null},{url:"assets/app-vk0T5VTB.css",revision:null},{url:"assets/AuthenticatedLayout-DucmWfa5.js",revision:null},{url:"assets/Box-C7W-y5yp.js",revision:null},{url:"assets/Button-UFRgPWXv.js",revision:null},{url:"assets/ButtonBase-DI6vJaAI.js",revision:null},{url:"assets/CalendarToday-NXdg7rCw.js",revision:null},{url:"assets/Callender-C7_P75FD.js",revision:null},{url:"assets/CardContent-vXHBRoNw.js",revision:null},{url:"assets/Complete-EApwY4mU.js",revision:null},{url:"assets/Confirm-CwDjNgIa.js",revision:null},{url:"assets/Confirm-DcQDmMn8.js",revision:null},{url:"assets/ConfirmPassword-CiQq_z4G.js",revision:null},{url:"assets/createSimplePaletteValueFilter-C9NIPy19.js",revision:null},{url:"assets/createSvgIcon-BNvcilEm.js",revision:null},{url:"assets/Dashboard-DIob4QsT.js",revision:null},{url:"assets/DeleteUserForm-DQhqfLy0.js",revision:null},{url:"assets/dividerClasses-D0n4Udfe.js",revision:null},{url:"assets/Dropdown-CIS2nm__.js",revision:null},{url:"assets/Edit-BwZZAFGu.js",revision:null},{url:"assets/EditCalendar-Yr_c6Qra.js",revision:null},{url:"assets/ForgotPassword-Qe0uApQO.js",revision:null},{url:"assets/GuestLayout-BfifRK74.js",revision:null},{url:"assets/Head-95cW0qt5.js",revision:null},{url:"assets/Home-h7NJ-nvk.js",revision:null},{url:"assets/index-BDNTt3m-.js",revision:null},{url:"assets/index-tqMABL-p.js",revision:null},{url:"assets/index.es-D00IV1KS.js",revision:null},{url:"assets/InputLabel-D0fzvrIS.js",revision:null},{url:"assets/isHostComponent-DVu5iVWx.js",revision:null},{url:"assets/isMuiElement-BvfNRnuz.js",revision:null},{url:"assets/ja-CLm39vrQ.js",revision:null},{url:"assets/List-0zgOHiIN.js",revision:null},{url:"assets/ListItem-InEDaysQ.js",revision:null},{url:"assets/listItemIconClasses-f2wozLQg.js",revision:null},{url:"assets/ListItemText-C5rMVhd-.js",revision:null},{url:"assets/listItemTextClasses-BJomz-KO.js",revision:null},{url:"assets/Login-JzIRD4Lc.js",revision:null},{url:"assets/Logout-ClI8SEQG.js",revision:null},{url:"assets/LogoutModal-C_3SFjhc.css",revision:null},{url:"assets/LogoutModal-DtHD8ngz.js",revision:null},{url:"assets/Master-DVxHBAmj.js",revision:null},{url:"assets/Master-yCDDkBs0.css",revision:null},{url:"assets/MasterModal-RUKOpYWV.js",revision:null},{url:"assets/Member-B_5-Yzww.js",revision:null},{url:"assets/Menu-CKfFIoAj.js",revision:null},{url:"assets/Modal-Su7HRUFK.js",revision:null},{url:"assets/NextMonthDates-Bn4tj26v.js",revision:null},{url:"assets/OpenCa-CKvSI3tS.js",revision:null},{url:"assets/Paper-saR0X0XO.js",revision:null},{url:"assets/PrimaryButton-CFM7WBAP.js",revision:null},{url:"assets/purify.es-a-CayzAK.js",revision:null},{url:"assets/QuickAction-D8VmjWld.js",revision:null},{url:"assets/Register-DDHYhXpe.js",revision:null},{url:"assets/ResetPassword-DHw98Zlx.js",revision:null},{url:"assets/ShiftSummary-BREOHaRw.js",revision:null},{url:"assets/ShiftTable-o_g71OjY.js",revision:null},{url:"assets/Sidevar-BdSmG6mE.js",revision:null},{url:"assets/Submit-C-EQazjY.css",revision:null},{url:"assets/Submit-xalM1NFB.js",revision:null},{url:"assets/SubmitModal-9OAJQp9P.js",revision:null},{url:"assets/TextInput-CFE426JT.js",revision:null},{url:"assets/transition-WcCaqBat.js",revision:null},{url:"assets/TransitionGroupContext-CJLaCar4.js",revision:null},{url:"assets/Typography-B2You_UE.js",revision:null},{url:"assets/UpdatePasswordForm-pwvA-Bu1.js",revision:null},{url:"assets/UpdateProfileInformationForm-DwNLVpuQ.js",revision:null},{url:"assets/UserSummary-DlbINmf7.js",revision:null},{url:"assets/useSlot-DpX_BHlc.js",revision:null},{url:"assets/useThemeProps-Czfw_WaB.js",revision:null},{url:"assets/VerifyEmail-Cs-mVLUc.js",revision:null},{url:"assets/Welcome-TWmD1_2o.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"6aa1d5bce80c12dea65fa8cba6d9f6bc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
