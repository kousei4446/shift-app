var wt=Object.defineProperty;var Lt=(t,e,n)=>e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>Lt(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as _,j as v}from"./app-DhY3GSC_.js";import{_ as Nt,c as y,a as pt,D as Q,s as tt,u as ft,g as jt,e as at,b as vt}from"./createSimplePaletteValueFilter-C9NIPy19.js";import{_ as kt,a as $t,T as lt,b as G}from"./TransitionGroupContext-CJLaCar4.js";const ut={};function dt(t,e){const n=l.useRef(ut);return n.current===ut&&(n.current=t(e)),n}const Ft=[];function Ut(t){l.useEffect(t,Ft)}class et{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new et}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function zt(){const t=dt(et.create).current;return Ut(t.disposeEffect),t}function ct(t){try{return t.matches(":focus-visible")}catch{}return!1}function Ot(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,e){var n=function(s){return e&&l.isValidElement(s)?e(s):s},a=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function At(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var a=Object.create(null),o=[];for(var s in t)s in e?o.length&&(a[s]=o,o=[]):o.push(s);var i,p={};for(var u in e){if(a[u])for(i=0;i<a[u].length;i++){var f=a[u][i];p[a[u][i]]=n(f)}p[u]=n(u)}for(i=0;i<o.length;i++)p[o[i]]=n(o[i]);return p}function j(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Yt(t,e){return nt(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:j(n,"appear",t),enter:j(n,"enter",t),exit:j(n,"exit",t)})})}function Xt(t,e,n){var a=nt(t.children),o=At(e,a);return Object.keys(o).forEach(function(s){var i=o[s];if(l.isValidElement(i)){var p=s in e,u=s in a,f=e[s],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[s]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:j(i,"exit",t),enter:j(i,"enter",t)}):!u&&p&&!d?o[s]=l.cloneElement(i,{in:!1}):u&&p&&l.isValidElement(f)&&(o[s]=l.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:j(i,"exit",t),enter:j(i,"enter",t)}))}}),o}var Kt=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Wt={component:"div",childFactory:function(e){return e}},ot=function(t){kt(e,t);function e(a,o){var s;s=t.call(this,a,o)||this;var i=s.handleExited.bind(Ot(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,s){var i=s.children,p=s.handleExited,u=s.firstRender;return{children:u?Yt(o,p):Xt(o,i,p),firstRender:!1}},n.handleExited=function(o,s){var i=nt(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(p){var u=Nt({},p.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,s=o.component,i=o.childFactory,p=$t(o,["component","childFactory"]),u=this.state.contextValue,f=Kt(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,s===null?_.createElement(lt.Provider,{value:u},f):_.createElement(lt.Provider,{value:u},_.createElement(s,p,f))},e}(_.Component);ot.propTypes={};ot.defaultProps=Wt;class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=dt(q.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=_t(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Ht(){return q.use()}function _t(){let t,e;const n=new Promise((a,o)=>{t=a,e=o});return n.resolve=t,n.reject=e,n}function Gt(t){const{className:e,classes:n,pulsate:a=!1,rippleX:o,rippleY:s,rippleSize:i,in:p,onExited:u,timeout:f}=t,[d,M]=l.useState(!1),g=y(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:i,height:i,top:-(i/2)+s,left:-(i/2)+o},h=y(n.child,d&&n.childLeaving,a&&n.childPulsate);return!p&&!d&&M(!0),l.useEffect(()=>{if(!p&&u!=null){const S=setTimeout(u,f);return()=>{clearTimeout(S)}}},[u,p,f]),v.jsx("span",{className:g,style:V,children:v.jsx("span",{className:h})})}const m=pt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,qt=80,Zt=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Jt=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Qt=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,te=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ee=tt(Gt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Zt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${Jt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Qt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ne=l.forwardRef(function(e,n){const a=ft({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:i,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),M=l.useRef(null);l.useEffect(()=>{M.current&&(M.current(),M.current=null)},[u]);const g=l.useRef(!1),V=zt(),h=l.useRef(null),S=l.useRef(null),x=l.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:F,rippleSize:w,cb:U}=c;f(E=>[...E,v.jsx(ee,{classes:{ripple:y(s.ripple,m.ripple),rippleVisible:y(s.rippleVisible,m.rippleVisible),ripplePulsate:y(s.ripplePulsate,m.ripplePulsate),child:y(s.child,m.child),childLeaving:y(s.childLeaving,m.childLeaving),childPulsate:y(s.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:F,rippleSize:w},d.current)]),d.current+=1,M.current=U},[s]),k=l.useCallback((c={},R={},b=()=>{})=>{const{pulsate:F=!1,center:w=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const E=U?null:S.current,I=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,D;if(w||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)B=Math.round(I.width/2),T=Math.round(I.height/2);else{const{clientX:z,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;B=Math.round(z-I.left),T=Math.round(L-I.top)}if(w)D=Math.sqrt((2*I.width**2+I.height**2)/3),D%2===0&&(D+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;D=Math.sqrt(z**2+L**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{x({pulsate:F,rippleX:B,rippleY:T,rippleSize:D,cb:b})},V.start(qt,()=>{h.current&&(h.current(),h.current=null)})):x({pulsate:F,rippleX:B,rippleY:T,rippleSize:D,cb:b})},[o,x,V]),K=l.useCallback(()=>{k({},{pulsate:!0})},[k]),$=l.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,V.start(0,()=>{$(c,R)});return}h.current=null,f(b=>b.length>0?b.slice(1):b),M.current=R},[V]);return l.useImperativeHandle(n,()=>({pulsate:K,start:k,stop:$}),[K,k,$]),v.jsx(te,{className:y(m.root,s.root,i),ref:S,...p,children:v.jsx(ot,{component:null,exit:!0,children:u})})});function oe(t){return jt("MuiButtonBase",t)}const se=pt("MuiButtonBase",["root","disabled","focusVisible"]),ie=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:o}=t,i=vt({root:["root",e&&"disabled",n&&"focusVisible"]},oe,o);return n&&a&&(i.root+=` ${a}`),i},re=tt("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${se.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),fe=l.forwardRef(function(e,n){const a=ft({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:i,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:V,LinkComponent:h="a",onBlur:S,onClick:x,onContextMenu:k,onDragLeave:K,onFocus:$,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:F,onMouseLeave:w,onMouseUp:U,onTouchEnd:E,onTouchMove:I,onTouchStart:B,tabIndex:T=0,TouchRippleProps:D,touchRippleRef:z,type:L,...O}=a,A=l.useRef(null),C=Ht(),ht=at(C.ref,z),[N,W]=l.useState(!1);f&&N&&W(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const mt=C.shouldMount&&!d&&!f;l.useEffect(()=>{N&&g&&!d&&C.pulsate()},[d,g,N,C]);function P(r,it,St=M){return G(rt=>(it&&it(rt),St||C[r](rt),!0))}const gt=P("start",F),bt=P("stop",k),Mt=P("stop",K),Rt=P("stop",U),Et=P("stop",r=>{N&&r.preventDefault(),w&&w(r)}),yt=P("start",B),xt=P("stop",E),Tt=P("stop",I),Ct=P("stop",r=>{ct(r.target)||W(!1),S&&S(r)},!1),Pt=G(r=>{A.current||(A.current=r.currentTarget),ct(r.target)&&(W(!0),c&&c(r)),$&&$(r)}),Z=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Vt=G(r=>{g&&!r.repeat&&N&&r.key===" "&&C.stop(r,()=>{C.start(r)}),r.target===r.currentTarget&&Z()&&r.key===" "&&r.preventDefault(),R&&R(r),r.target===r.currentTarget&&Z()&&r.key==="Enter"&&!f&&(r.preventDefault(),x&&x(r))}),It=G(r=>{g&&r.key===" "&&N&&!r.defaultPrevented&&C.stop(r,()=>{C.pulsate(r)}),b&&b(r),x&&r.target===r.currentTarget&&Z()&&r.key===" "&&!r.defaultPrevented&&x(r)});let H=u;H==="button"&&(O.href||O.to)&&(H=h);const Y={};H==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Bt=at(n,A),st={...a,centerRipple:s,component:u,disabled:f,disableRipple:d,disableTouchRipple:M,focusRipple:g,tabIndex:T,focusVisible:N},Dt=ie(st);return v.jsxs(re,{as:H,className:y(Dt.root,p),ownerState:st,onBlur:Ct,onClick:x,onContextMenu:bt,onFocus:Pt,onKeyDown:Vt,onKeyUp:It,onMouseDown:gt,onMouseLeave:Et,onMouseUp:Rt,onDragLeave:Mt,onTouchEnd:xt,onTouchMove:Tt,onTouchStart:yt,ref:Bt,tabIndex:f?-1:T,type:L,...Y,...O,children:[i,mt?v.jsx(ne,{ref:ht,center:s,...D}):null]})});export{fe as B,zt as u};
