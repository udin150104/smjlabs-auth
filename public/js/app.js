const Wd="modulepreload",qd=function(a){return"/"+a},Fi={},Fe=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){let h=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");i=h(e.map(c=>{if(c=qd(c),c in Fi)return;Fi[c]=!0;const d=c.endsWith(".css"),l=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Wd,d||(u.as="script"),u.crossOrigin="",u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),d)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return i.then(r=>{for(const o of r||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})};var rt="top",pt="bottom",ut="right",ot="left",T1="auto",sa=[rt,pt,ut,ot],_e="start",Ke="end",ch="clippingParents",ei="viewport",Re="popper",dh="reference",Ls=sa.reduce(function(a,t){return a.concat([t+"-"+_e,t+"-"+Ke])},[]),ai=[].concat(sa,[T1]).reduce(function(a,t){return a.concat([t,t+"-"+_e,t+"-"+Ke])},[]),lh="beforeRead",ph="read",uh="afterRead",fh="beforeMain",mh="main",Mh="afterMain",vh="beforeWrite",gh="write",yh="afterWrite",wh=[lh,ph,uh,fh,mh,Mh,vh,gh,yh];function Ft(a){return a?(a.nodeName||"").toLowerCase():null}function ft(a){if(a==null)return window;if(a.toString()!=="[object Window]"){var t=a.ownerDocument;return t&&t.defaultView||window}return a}function Se(a){var t=ft(a).Element;return a instanceof t||a instanceof Element}function xt(a){var t=ft(a).HTMLElement;return a instanceof t||a instanceof HTMLElement}function si(a){if(typeof ShadowRoot>"u")return!1;var t=ft(a).ShadowRoot;return a instanceof t||a instanceof ShadowRoot}function Zd(a){var t=a.state;Object.keys(t.elements).forEach(function(e){var s=t.styles[e]||{},i=t.attributes[e]||{},n=t.elements[e];!xt(n)||!Ft(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(r){var o=i[r];o===!1?n.removeAttribute(r):n.setAttribute(r,o===!0?"":o)}))})}function Ud(a){var t=a.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(s){var i=t.elements[s],n=t.attributes[s]||{},r=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:e[s]),o=r.reduce(function(h,c){return h[c]="",h},{});!xt(i)||!Ft(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(h){i.removeAttribute(h)}))})}}const ii={name:"applyStyles",enabled:!0,phase:"write",fn:Zd,effect:Ud,requires:["computeStyles"]};function Pt(a){return a.split("-")[0]}var xe=Math.max,M1=Math.min,Xe=Math.round;function Vs(){var a=navigator.userAgentData;return a!=null&&a.brands&&Array.isArray(a.brands)?a.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function xh(){return!/^((?!chrome|android).)*safari/i.test(Vs())}function Qe(a,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var s=a.getBoundingClientRect(),i=1,n=1;t&&xt(a)&&(i=a.offsetWidth>0&&Xe(s.width)/a.offsetWidth||1,n=a.offsetHeight>0&&Xe(s.height)/a.offsetHeight||1);var r=Se(a)?ft(a):window,o=r.visualViewport,h=!xh()&&e,c=(s.left+(h&&o?o.offsetLeft:0))/i,d=(s.top+(h&&o?o.offsetTop:0))/n,l=s.width/i,u=s.height/n;return{width:l,height:u,top:d,right:c+l,bottom:d+u,left:c,x:c,y:d}}function ni(a){var t=Qe(a),e=a.offsetWidth,s=a.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:a.offsetLeft,y:a.offsetTop,width:e,height:s}}function _h(a,t){var e=t.getRootNode&&t.getRootNode();if(a.contains(t))return!0;if(e&&si(e)){var s=t;do{if(s&&a.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function Zt(a){return ft(a).getComputedStyle(a)}function jd(a){return["table","td","th"].indexOf(Ft(a))>=0}function oe(a){return((Se(a)?a.ownerDocument:a.document)||window.document).documentElement}function L1(a){return Ft(a)==="html"?a:a.assignedSlot||a.parentNode||(si(a)?a.host:null)||oe(a)}function Ri(a){return!xt(a)||Zt(a).position==="fixed"?null:a.offsetParent}function Yd(a){var t=/firefox/i.test(Vs()),e=/Trident/i.test(Vs());if(e&&xt(a)){var s=Zt(a);if(s.position==="fixed")return null}var i=L1(a);for(si(i)&&(i=i.host);xt(i)&&["html","body"].indexOf(Ft(i))<0;){var n=Zt(i);if(n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].indexOf(n.willChange)!==-1||t&&n.willChange==="filter"||t&&n.filter&&n.filter!=="none")return i;i=i.parentNode}return null}function Ha(a){for(var t=ft(a),e=Ri(a);e&&jd(e)&&Zt(e).position==="static";)e=Ri(e);return e&&(Ft(e)==="html"||Ft(e)==="body"&&Zt(e).position==="static")?t:e||Yd(a)||t}function ri(a){return["top","bottom"].indexOf(a)>=0?"x":"y"}function ba(a,t,e){return xe(a,M1(t,e))}function Gd(a,t,e){var s=ba(a,t,e);return s>e?e:s}function Sh(){return{top:0,right:0,bottom:0,left:0}}function bh(a){return Object.assign({},Sh(),a)}function Ah(a,t){return t.reduce(function(e,s){return e[s]=a,e},{})}var Kd=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,bh(typeof t!="number"?t:Ah(t,sa))};function Xd(a){var t,e=a.state,s=a.name,i=a.options,n=e.elements.arrow,r=e.modifiersData.popperOffsets,o=Pt(e.placement),h=ri(o),c=[ot,ut].indexOf(o)>=0,d=c?"height":"width";if(!(!n||!r)){var l=Kd(i.padding,e),u=ni(n),f=h==="y"?rt:ot,m=h==="y"?pt:ut,v=e.rects.reference[d]+e.rects.reference[h]-r[h]-e.rects.popper[d],g=r[h]-e.rects.reference[h],w=Ha(n),x=w?h==="y"?w.clientHeight||0:w.clientWidth||0:0,C=v/2-g/2,T=l[f],P=x-u[d]-l[m],O=x/2-u[d]/2+C,S=ba(T,O,P),L=h;e.modifiersData[s]=(t={},t[L]=S,t.centerOffset=S-O,t)}}function Qd(a){var t=a.state,e=a.options,s=e.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||_h(t.elements.popper,i)&&(t.elements.arrow=i))}const Eh={name:"arrow",enabled:!0,phase:"main",fn:Xd,effect:Qd,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Je(a){return a.split("-")[1]}var Jd={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tl(a,t){var e=a.x,s=a.y,i=t.devicePixelRatio||1;return{x:Xe(e*i)/i||0,y:Xe(s*i)/i||0}}function zi(a){var t,e=a.popper,s=a.popperRect,i=a.placement,n=a.variation,r=a.offsets,o=a.position,h=a.gpuAcceleration,c=a.adaptive,d=a.roundOffsets,l=a.isFixed,u=r.x,f=u===void 0?0:u,m=r.y,v=m===void 0?0:m,g=typeof d=="function"?d({x:f,y:v}):{x:f,y:v};f=g.x,v=g.y;var w=r.hasOwnProperty("x"),x=r.hasOwnProperty("y"),C=ot,T=rt,P=window;if(c){var O=Ha(e),S="clientHeight",L="clientWidth";if(O===ft(e)&&(O=oe(e),Zt(O).position!=="static"&&o==="absolute"&&(S="scrollHeight",L="scrollWidth")),O=O,i===rt||(i===ot||i===ut)&&n===Ke){T=pt;var b=l&&O===P&&P.visualViewport?P.visualViewport.height:O[S];v-=b-s.height,v*=h?1:-1}if(i===ot||(i===rt||i===pt)&&n===Ke){C=ut;var E=l&&O===P&&P.visualViewport?P.visualViewport.width:O[L];f-=E-s.width,f*=h?1:-1}}var V=Object.assign({position:o},c&&Jd),H=d===!0?tl({x:f,y:v},ft(e)):{x:f,y:v};if(f=H.x,v=H.y,h){var F;return Object.assign({},V,(F={},F[T]=x?"0":"",F[C]=w?"0":"",F.transform=(P.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",F))}return Object.assign({},V,(t={},t[T]=x?v+"px":"",t[C]=w?f+"px":"",t.transform="",t))}function el(a){var t=a.state,e=a.options,s=e.gpuAcceleration,i=s===void 0?!0:s,n=e.adaptive,r=n===void 0?!0:n,o=e.roundOffsets,h=o===void 0?!0:o,c={placement:Pt(t.placement),variation:Je(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,zi(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:h})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,zi(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const oi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:el,data:{}};var ja={passive:!0};function al(a){var t=a.state,e=a.instance,s=a.options,i=s.scroll,n=i===void 0?!0:i,r=s.resize,o=r===void 0?!0:r,h=ft(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return n&&c.forEach(function(d){d.addEventListener("scroll",e.update,ja)}),o&&h.addEventListener("resize",e.update,ja),function(){n&&c.forEach(function(d){d.removeEventListener("scroll",e.update,ja)}),o&&h.removeEventListener("resize",e.update,ja)}}const hi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:al,data:{}};var sl={left:"right",right:"left",bottom:"top",top:"bottom"};function c1(a){return a.replace(/left|right|bottom|top/g,function(t){return sl[t]})}var il={start:"end",end:"start"};function Bi(a){return a.replace(/start|end/g,function(t){return il[t]})}function ci(a){var t=ft(a),e=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:e,scrollTop:s}}function di(a){return Qe(oe(a)).left+ci(a).scrollLeft}function nl(a,t){var e=ft(a),s=oe(a),i=e.visualViewport,n=s.clientWidth,r=s.clientHeight,o=0,h=0;if(i){n=i.width,r=i.height;var c=xh();(c||!c&&t==="fixed")&&(o=i.offsetLeft,h=i.offsetTop)}return{width:n,height:r,x:o+di(a),y:h}}function rl(a){var t,e=oe(a),s=ci(a),i=(t=a.ownerDocument)==null?void 0:t.body,n=xe(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=xe(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-s.scrollLeft+di(a),h=-s.scrollTop;return Zt(i||e).direction==="rtl"&&(o+=xe(e.clientWidth,i?i.clientWidth:0)-n),{width:n,height:r,x:o,y:h}}function li(a){var t=Zt(a),e=t.overflow,s=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+s)}function Ch(a){return["html","body","#document"].indexOf(Ft(a))>=0?a.ownerDocument.body:xt(a)&&li(a)?a:Ch(L1(a))}function Aa(a,t){var e;t===void 0&&(t=[]);var s=Ch(a),i=s===((e=a.ownerDocument)==null?void 0:e.body),n=ft(s),r=i?[n].concat(n.visualViewport||[],li(s)?s:[]):s,o=t.concat(r);return i?o:o.concat(Aa(L1(r)))}function ks(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function ol(a,t){var e=Qe(a,!1,t==="fixed");return e.top=e.top+a.clientTop,e.left=e.left+a.clientLeft,e.bottom=e.top+a.clientHeight,e.right=e.left+a.clientWidth,e.width=a.clientWidth,e.height=a.clientHeight,e.x=e.left,e.y=e.top,e}function Wi(a,t,e){return t===ei?ks(nl(a,e)):Se(t)?ol(t,e):ks(rl(oe(a)))}function hl(a){var t=Aa(L1(a)),e=["absolute","fixed"].indexOf(Zt(a).position)>=0,s=e&&xt(a)?Ha(a):a;return Se(s)?t.filter(function(i){return Se(i)&&_h(i,s)&&Ft(i)!=="body"}):[]}function cl(a,t,e,s){var i=t==="clippingParents"?hl(a):[].concat(t),n=[].concat(i,[e]),r=n[0],o=n.reduce(function(h,c){var d=Wi(a,c,s);return h.top=xe(d.top,h.top),h.right=M1(d.right,h.right),h.bottom=M1(d.bottom,h.bottom),h.left=xe(d.left,h.left),h},Wi(a,r,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Th(a){var t=a.reference,e=a.element,s=a.placement,i=s?Pt(s):null,n=s?Je(s):null,r=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,h;switch(i){case rt:h={x:r,y:t.y-e.height};break;case pt:h={x:r,y:t.y+t.height};break;case ut:h={x:t.x+t.width,y:o};break;case ot:h={x:t.x-e.width,y:o};break;default:h={x:t.x,y:t.y}}var c=i?ri(i):null;if(c!=null){var d=c==="y"?"height":"width";switch(n){case _e:h[c]=h[c]-(t[d]/2-e[d]/2);break;case Ke:h[c]=h[c]+(t[d]/2-e[d]/2);break}}return h}function ta(a,t){t===void 0&&(t={});var e=t,s=e.placement,i=s===void 0?a.placement:s,n=e.strategy,r=n===void 0?a.strategy:n,o=e.boundary,h=o===void 0?ch:o,c=e.rootBoundary,d=c===void 0?ei:c,l=e.elementContext,u=l===void 0?Re:l,f=e.altBoundary,m=f===void 0?!1:f,v=e.padding,g=v===void 0?0:v,w=bh(typeof g!="number"?g:Ah(g,sa)),x=u===Re?dh:Re,C=a.rects.popper,T=a.elements[m?x:u],P=cl(Se(T)?T:T.contextElement||oe(a.elements.popper),h,d,r),O=Qe(a.elements.reference),S=Th({reference:O,element:C,placement:i}),L=ks(Object.assign({},C,S)),b=u===Re?L:O,E={top:P.top-b.top+w.top,bottom:b.bottom-P.bottom+w.bottom,left:P.left-b.left+w.left,right:b.right-P.right+w.right},V=a.modifiersData.offset;if(u===Re&&V){var H=V[i];Object.keys(E).forEach(function(F){var $=[ut,pt].indexOf(F)>=0?1:-1,j=[rt,pt].indexOf(F)>=0?"y":"x";E[F]+=H[j]*$})}return E}function dl(a,t){t===void 0&&(t={});var e=t,s=e.placement,i=e.boundary,n=e.rootBoundary,r=e.padding,o=e.flipVariations,h=e.allowedAutoPlacements,c=h===void 0?ai:h,d=Je(s),l=d?o?Ls:Ls.filter(function(m){return Je(m)===d}):sa,u=l.filter(function(m){return c.indexOf(m)>=0});u.length===0&&(u=l);var f=u.reduce(function(m,v){return m[v]=ta(a,{placement:v,boundary:i,rootBoundary:n,padding:r})[Pt(v)],m},{});return Object.keys(f).sort(function(m,v){return f[m]-f[v]})}function ll(a){if(Pt(a)===T1)return[];var t=c1(a);return[Bi(a),t,Bi(t)]}function pl(a){var t=a.state,e=a.options,s=a.name;if(!t.modifiersData[s]._skip){for(var i=e.mainAxis,n=i===void 0?!0:i,r=e.altAxis,o=r===void 0?!0:r,h=e.fallbackPlacements,c=e.padding,d=e.boundary,l=e.rootBoundary,u=e.altBoundary,f=e.flipVariations,m=f===void 0?!0:f,v=e.allowedAutoPlacements,g=t.options.placement,w=Pt(g),x=w===g,C=h||(x||!m?[c1(g)]:ll(g)),T=[g].concat(C).reduce(function(Ve,Gt){return Ve.concat(Pt(Gt)===T1?dl(t,{placement:Gt,boundary:d,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:v}):Gt)},[]),P=t.rects.reference,O=t.rects.popper,S=new Map,L=!0,b=T[0],E=0;E<T.length;E++){var V=T[E],H=Pt(V),F=Je(V)===_e,$=[rt,pt].indexOf(H)>=0,j=$?"width":"height",K=ta(t,{placement:V,boundary:d,rootBoundary:l,altBoundary:u,padding:c}),tt=$?F?ut:ot:F?pt:rt;P[j]>O[j]&&(tt=c1(tt));var Yt=c1(tt),W=[];if(n&&W.push(K[H]<=0),o&&W.push(K[tt]<=0,K[Yt]<=0),W.every(function(Ve){return Ve})){b=V,L=!1;break}S.set(V,W)}if(L)for(var Mt=m?3:1,B1=function(Gt){var ua=T.find(function(Za){var de=S.get(Za);if(de)return de.slice(0,Gt).every(function(W1){return W1})});if(ua)return b=ua,"break"},pa=Mt;pa>0;pa--){var qa=B1(pa);if(qa==="break")break}t.placement!==b&&(t.modifiersData[s]._skip=!0,t.placement=b,t.reset=!0)}}const Lh={name:"flip",enabled:!0,phase:"main",fn:pl,requiresIfExists:["offset"],data:{_skip:!1}};function qi(a,t,e){return e===void 0&&(e={x:0,y:0}),{top:a.top-t.height-e.y,right:a.right-t.width+e.x,bottom:a.bottom-t.height+e.y,left:a.left-t.width-e.x}}function Zi(a){return[rt,ut,pt,ot].some(function(t){return a[t]>=0})}function ul(a){var t=a.state,e=a.name,s=t.rects.reference,i=t.rects.popper,n=t.modifiersData.preventOverflow,r=ta(t,{elementContext:"reference"}),o=ta(t,{altBoundary:!0}),h=qi(r,s),c=qi(o,i,n),d=Zi(h),l=Zi(c);t.modifiersData[e]={referenceClippingOffsets:h,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":l})}const Vh={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ul};function fl(a,t,e){var s=Pt(a),i=[ot,rt].indexOf(s)>=0?-1:1,n=typeof e=="function"?e(Object.assign({},t,{placement:a})):e,r=n[0],o=n[1];return r=r||0,o=(o||0)*i,[ot,ut].indexOf(s)>=0?{x:o,y:r}:{x:r,y:o}}function ml(a){var t=a.state,e=a.options,s=a.name,i=e.offset,n=i===void 0?[0,0]:i,r=ai.reduce(function(d,l){return d[l]=fl(l,t.rects,n),d},{}),o=r[t.placement],h=o.x,c=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=c),t.modifiersData[s]=r}const kh={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ml};function Ml(a){var t=a.state,e=a.name;t.modifiersData[e]=Th({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const pi={name:"popperOffsets",enabled:!0,phase:"read",fn:Ml,data:{}};function vl(a){return a==="x"?"y":"x"}function gl(a){var t=a.state,e=a.options,s=a.name,i=e.mainAxis,n=i===void 0?!0:i,r=e.altAxis,o=r===void 0?!1:r,h=e.boundary,c=e.rootBoundary,d=e.altBoundary,l=e.padding,u=e.tether,f=u===void 0?!0:u,m=e.tetherOffset,v=m===void 0?0:m,g=ta(t,{boundary:h,rootBoundary:c,padding:l,altBoundary:d}),w=Pt(t.placement),x=Je(t.placement),C=!x,T=ri(w),P=vl(T),O=t.modifiersData.popperOffsets,S=t.rects.reference,L=t.rects.popper,b=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,E=typeof b=="number"?{mainAxis:b,altAxis:b}:Object.assign({mainAxis:0,altAxis:0},b),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(O){if(n){var F,$=T==="y"?rt:ot,j=T==="y"?pt:ut,K=T==="y"?"height":"width",tt=O[T],Yt=tt+g[$],W=tt-g[j],Mt=f?-L[K]/2:0,B1=x===_e?S[K]:L[K],pa=x===_e?-L[K]:-S[K],qa=t.elements.arrow,Ve=f&&qa?ni(qa):{width:0,height:0},Gt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Sh(),ua=Gt[$],Za=Gt[j],de=ba(0,S[K],Ve[K]),W1=C?S[K]/2-Mt-de-ua-E.mainAxis:B1-de-ua-E.mainAxis,Nd=C?-S[K]/2+Mt+de+Za+E.mainAxis:pa+de+Za+E.mainAxis,q1=t.elements.arrow&&Ha(t.elements.arrow),$d=q1?T==="y"?q1.clientTop||0:q1.clientLeft||0:0,Vi=(F=V?.[T])!=null?F:0,Fd=tt+W1-Vi-$d,Rd=tt+Nd-Vi,ki=ba(f?M1(Yt,Fd):Yt,tt,f?xe(W,Rd):W);O[T]=ki,H[T]=ki-tt}if(o){var Hi,zd=T==="x"?rt:ot,Bd=T==="x"?pt:ut,le=O[P],Ua=P==="y"?"height":"width",Oi=le+g[zd],Di=le-g[Bd],Z1=[rt,ot].indexOf(w)!==-1,Ii=(Hi=V?.[P])!=null?Hi:0,Pi=Z1?Oi:le-S[Ua]-L[Ua]-Ii+E.altAxis,Ni=Z1?le+S[Ua]+L[Ua]-Ii-E.altAxis:Di,$i=f&&Z1?Gd(Pi,le,Ni):ba(f?Pi:Oi,le,f?Ni:Di);O[P]=$i,H[P]=$i-le}t.modifiersData[s]=H}}const Hh={name:"preventOverflow",enabled:!0,phase:"main",fn:gl,requiresIfExists:["offset"]};function yl(a){return{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}}function wl(a){return a===ft(a)||!xt(a)?ci(a):yl(a)}function xl(a){var t=a.getBoundingClientRect(),e=Xe(t.width)/a.offsetWidth||1,s=Xe(t.height)/a.offsetHeight||1;return e!==1||s!==1}function _l(a,t,e){e===void 0&&(e=!1);var s=xt(t),i=xt(t)&&xl(t),n=oe(t),r=Qe(a,i,e),o={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(s||!s&&!e)&&((Ft(t)!=="body"||li(n))&&(o=wl(t)),xt(t)?(h=Qe(t,!0),h.x+=t.clientLeft,h.y+=t.clientTop):n&&(h.x=di(n))),{x:r.left+o.scrollLeft-h.x,y:r.top+o.scrollTop-h.y,width:r.width,height:r.height}}function Sl(a){var t=new Map,e=new Set,s=[];a.forEach(function(n){t.set(n.name,n)});function i(n){e.add(n.name);var r=[].concat(n.requires||[],n.requiresIfExists||[]);r.forEach(function(o){if(!e.has(o)){var h=t.get(o);h&&i(h)}}),s.push(n)}return a.forEach(function(n){e.has(n.name)||i(n)}),s}function bl(a){var t=Sl(a);return wh.reduce(function(e,s){return e.concat(t.filter(function(i){return i.phase===s}))},[])}function Al(a){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(a())})})),t}}function El(a){var t=a.reduce(function(e,s){var i=e[s.name];return e[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,e},{});return Object.keys(t).map(function(e){return t[e]})}var Ui={placement:"bottom",modifiers:[],strategy:"absolute"};function ji(){for(var a=arguments.length,t=new Array(a),e=0;e<a;e++)t[e]=arguments[e];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function V1(a){a===void 0&&(a={});var t=a,e=t.defaultModifiers,s=e===void 0?[]:e,i=t.defaultOptions,n=i===void 0?Ui:i;return function(o,h,c){c===void 0&&(c=n);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ui,n),modifiersData:{},elements:{reference:o,popper:h},attributes:{},styles:{}},l=[],u=!1,f={state:d,setOptions:function(w){var x=typeof w=="function"?w(d.options):w;v(),d.options=Object.assign({},n,d.options,x),d.scrollParents={reference:Se(o)?Aa(o):o.contextElement?Aa(o.contextElement):[],popper:Aa(h)};var C=bl(El([].concat(s,d.options.modifiers)));return d.orderedModifiers=C.filter(function(T){return T.enabled}),m(),f.update()},forceUpdate:function(){if(!u){var w=d.elements,x=w.reference,C=w.popper;if(ji(x,C)){d.rects={reference:_l(x,Ha(C),d.options.strategy==="fixed"),popper:ni(C)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(E){return d.modifiersData[E.name]=Object.assign({},E.data)});for(var T=0;T<d.orderedModifiers.length;T++){if(d.reset===!0){d.reset=!1,T=-1;continue}var P=d.orderedModifiers[T],O=P.fn,S=P.options,L=S===void 0?{}:S,b=P.name;typeof O=="function"&&(d=O({state:d,options:L,name:b,instance:f})||d)}}}},update:Al(function(){return new Promise(function(g){f.forceUpdate(),g(d)})}),destroy:function(){v(),u=!0}};if(!ji(o,h))return f;f.setOptions(c).then(function(g){!u&&c.onFirstUpdate&&c.onFirstUpdate(g)});function m(){d.orderedModifiers.forEach(function(g){var w=g.name,x=g.options,C=x===void 0?{}:x,T=g.effect;if(typeof T=="function"){var P=T({state:d,name:w,instance:f,options:C}),O=function(){};l.push(P||O)}})}function v(){l.forEach(function(g){return g()}),l=[]}return f}}var Cl=V1(),Tl=[hi,pi,oi,ii],Ll=V1({defaultModifiers:Tl}),Vl=[hi,pi,oi,ii,kh,Lh,Hh,Eh,Vh],ui=V1({defaultModifiers:Vl});const fi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Mh,afterRead:uh,afterWrite:yh,applyStyles:ii,arrow:Eh,auto:T1,basePlacements:sa,beforeMain:fh,beforeRead:lh,beforeWrite:vh,bottom:pt,clippingParents:ch,computeStyles:oi,createPopper:ui,createPopperBase:Cl,createPopperLite:Ll,detectOverflow:ta,end:Ke,eventListeners:hi,flip:Lh,hide:Vh,left:ot,main:mh,modifierPhases:wh,offset:kh,placements:ai,popper:Re,popperGenerator:V1,popperOffsets:pi,preventOverflow:Hh,read:ph,reference:dh,right:ut,start:_e,top:rt,variationPlacements:Ls,viewport:ei,write:gh},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Kt=new Map,U1={set(a,t,e){Kt.has(a)||Kt.set(a,new Map);const s=Kt.get(a);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,e)},get(a,t){return Kt.has(a)&&Kt.get(a).get(t)||null},remove(a,t){if(!Kt.has(a))return;const e=Kt.get(a);e.delete(t),e.size===0&&Kt.delete(a)}},kl=1e6,Hl=1e3,Hs="transitionend",Oh=a=>(a&&window.CSS&&window.CSS.escape&&(a=a.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),a),Ol=a=>a==null?`${a}`:Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase(),Dl=a=>{do a+=Math.floor(Math.random()*kl);while(document.getElementById(a));return a},Il=a=>{if(!a)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(a);const s=Number.parseFloat(t),i=Number.parseFloat(e);return!s&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Hl)},Dh=a=>{a.dispatchEvent(new Event(Hs))},Wt=a=>!a||typeof a!="object"?!1:(typeof a.jquery<"u"&&(a=a[0]),typeof a.nodeType<"u"),ne=a=>Wt(a)?a.jquery?a[0]:a:typeof a=="string"&&a.length>0?document.querySelector(Oh(a)):null,ia=a=>{if(!Wt(a)||a.getClientRects().length===0)return!1;const t=getComputedStyle(a).getPropertyValue("visibility")==="visible",e=a.closest("details:not([open])");if(!e)return t;if(e!==a){const s=a.closest("summary");if(s&&s.parentNode!==e||s===null)return!1}return t},re=a=>!a||a.nodeType!==Node.ELEMENT_NODE||a.classList.contains("disabled")?!0:typeof a.disabled<"u"?a.disabled:a.hasAttribute("disabled")&&a.getAttribute("disabled")!=="false",Ih=a=>{if(!document.documentElement.attachShadow)return null;if(typeof a.getRootNode=="function"){const t=a.getRootNode();return t instanceof ShadowRoot?t:null}return a instanceof ShadowRoot?a:a.parentNode?Ih(a.parentNode):null},v1=()=>{},Oa=a=>{a.offsetHeight},Ph=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,j1=[],Pl=a=>{document.readyState==="loading"?(j1.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of j1)t()}),j1.push(a)):a()},_t=()=>document.documentElement.dir==="rtl",bt=a=>{Pl(()=>{const t=Ph();if(t){const e=a.NAME,s=t.fn[e];t.fn[e]=a.jQueryInterface,t.fn[e].Constructor=a,t.fn[e].noConflict=()=>(t.fn[e]=s,a.jQueryInterface)}})},ht=(a,t=[],e=a)=>typeof a=="function"?a.call(...t):e,Nh=(a,t,e=!0)=>{if(!e){ht(a);return}const i=Il(t)+5;let n=!1;const r=({target:o})=>{o===t&&(n=!0,t.removeEventListener(Hs,r),ht(a))};t.addEventListener(Hs,r),setTimeout(()=>{n||Dh(t)},i)},mi=(a,t,e,s)=>{const i=a.length;let n=a.indexOf(t);return n===-1?!e&&s?a[i-1]:a[0]:(n+=e?1:-1,s&&(n=(n+i)%i),a[Math.max(0,Math.min(n,i-1))])},Nl=/[^.]*(?=\..*)\.|.*/,$l=/\..*/,Fl=/::\d+$/,Y1={};let Yi=1;const $h={mouseenter:"mouseover",mouseleave:"mouseout"},Rl=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Fh(a,t){return t&&`${t}::${Yi++}`||a.uidEvent||Yi++}function Rh(a){const t=Fh(a);return a.uidEvent=t,Y1[t]=Y1[t]||{},Y1[t]}function zl(a,t){return function e(s){return Mi(s,{delegateTarget:a}),e.oneOff&&y.off(a,s.type,t),t.apply(a,[s])}}function Bl(a,t,e){return function s(i){const n=a.querySelectorAll(t);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const o of n)if(o===r)return Mi(i,{delegateTarget:r}),s.oneOff&&y.off(a,i.type,t,e),e.apply(r,[i])}}function zh(a,t,e=null){return Object.values(a).find(s=>s.callable===t&&s.delegationSelector===e)}function Bh(a,t,e){const s=typeof t=="string",i=s?e:t||e;let n=Wh(a);return Rl.has(n)||(n=a),[s,i,n]}function Gi(a,t,e,s,i){if(typeof t!="string"||!a)return;let[n,r,o]=Bh(t,e,s);t in $h&&(r=(m=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return m.call(this,v)})(r));const h=Rh(a),c=h[o]||(h[o]={}),d=zh(c,r,n?e:null);if(d){d.oneOff=d.oneOff&&i;return}const l=Fh(r,t.replace(Nl,"")),u=n?Bl(a,e,r):zl(a,r);u.delegationSelector=n?e:null,u.callable=r,u.oneOff=i,u.uidEvent=l,c[l]=u,a.addEventListener(o,u,n)}function Os(a,t,e,s,i){const n=zh(t[e],s,i);n&&(a.removeEventListener(e,n,!!i),delete t[e][n.uidEvent])}function Wl(a,t,e,s){const i=t[e]||{};for(const[n,r]of Object.entries(i))n.includes(s)&&Os(a,t,e,r.callable,r.delegationSelector)}function Wh(a){return a=a.replace($l,""),$h[a]||a}const y={on(a,t,e,s){Gi(a,t,e,s,!1)},one(a,t,e,s){Gi(a,t,e,s,!0)},off(a,t,e,s){if(typeof t!="string"||!a)return;const[i,n,r]=Bh(t,e,s),o=r!==t,h=Rh(a),c=h[r]||{},d=t.startsWith(".");if(typeof n<"u"){if(!Object.keys(c).length)return;Os(a,h,r,n,i?e:null);return}if(d)for(const l of Object.keys(h))Wl(a,h,l,t.slice(1));for(const[l,u]of Object.entries(c)){const f=l.replace(Fl,"");(!o||t.includes(f))&&Os(a,h,r,u.callable,u.delegationSelector)}},trigger(a,t,e){if(typeof t!="string"||!a)return null;const s=Ph(),i=Wh(t),n=t!==i;let r=null,o=!0,h=!0,c=!1;n&&s&&(r=s.Event(t,e),s(a).trigger(r),o=!r.isPropagationStopped(),h=!r.isImmediatePropagationStopped(),c=r.isDefaultPrevented());const d=Mi(new Event(t,{bubbles:o,cancelable:!0}),e);return c&&d.preventDefault(),h&&a.dispatchEvent(d),d.defaultPrevented&&r&&r.preventDefault(),d}};function Mi(a,t={}){for(const[e,s]of Object.entries(t))try{a[e]=s}catch{Object.defineProperty(a,e,{configurable:!0,get(){return s}})}return a}function Ki(a){if(a==="true")return!0;if(a==="false")return!1;if(a===Number(a).toString())return Number(a);if(a===""||a==="null")return null;if(typeof a!="string")return a;try{return JSON.parse(decodeURIComponent(a))}catch{return a}}function G1(a){return a.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const qt={setDataAttribute(a,t,e){a.setAttribute(`data-bs-${G1(t)}`,e)},removeDataAttribute(a,t){a.removeAttribute(`data-bs-${G1(t)}`)},getDataAttributes(a){if(!a)return{};const t={},e=Object.keys(a.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of e){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),t[i]=Ki(a.dataset[s])}return t},getDataAttribute(a,t){return Ki(a.getAttribute(`data-bs-${G1(t)}`))}};class Da{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const s=Wt(e)?qt.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Wt(e)?qt.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,i]of Object.entries(e)){const n=t[s],r=Wt(n)?"element":Ol(n);if(!new RegExp(i).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${i}".`)}}}const ql="5.3.7";class Ht extends Da{constructor(t,e){super(),t=ne(t),t&&(this._element=t,this._config=this._getConfig(e),U1.set(this._element,this.constructor.DATA_KEY,this))}dispose(){U1.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,s=!0){Nh(t,e,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return U1.get(ne(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return ql}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const K1=a=>{let t=a.getAttribute("data-bs-target");if(!t||t==="#"){let e=a.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Oh(e)).join(","):null},k={find(a,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,a))},findOne(a,t=document.documentElement){return Element.prototype.querySelector.call(t,a)},children(a,t){return[].concat(...a.children).filter(e=>e.matches(t))},parents(a,t){const e=[];let s=a.parentNode.closest(t);for(;s;)e.push(s),s=s.parentNode.closest(t);return e},prev(a,t){let e=a.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(a,t){let e=a.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(a){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,a).filter(e=>!re(e)&&ia(e))},getSelectorFromElement(a){const t=K1(a);return t&&k.findOne(t)?t:null},getElementFromSelector(a){const t=K1(a);return t?k.findOne(t):null},getMultipleElementsFromSelector(a){const t=K1(a);return t?k.find(t):[]}},k1=(a,t="hide")=>{const e=`click.dismiss${a.EVENT_KEY}`,s=a.NAME;y.on(document,e,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),re(this))return;const n=k.getElementFromSelector(this)||this.closest(`.${s}`);a.getOrCreateInstance(n)[t]()})},Zl="alert",Ul="bs.alert",qh=`.${Ul}`,jl=`close${qh}`,Yl=`closed${qh}`,Gl="fade",Kl="show";class Ia extends Ht{static get NAME(){return Zl}close(){if(y.trigger(this._element,jl).defaultPrevented)return;this._element.classList.remove(Kl);const e=this._element.classList.contains(Gl);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),y.trigger(this._element,Yl),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Ia.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}k1(Ia,"close");bt(Ia);const Xl="button",Ql="bs.button",Jl=`.${Ql}`,tp=".data-api",ep="active",Xi='[data-bs-toggle="button"]',ap=`click${Jl}${tp}`;class Pa extends Ht{static get NAME(){return Xl}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ep))}static jQueryInterface(t){return this.each(function(){const e=Pa.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}y.on(document,ap,Xi,a=>{a.preventDefault();const t=a.target.closest(Xi);Pa.getOrCreateInstance(t).toggle()});bt(Pa);const sp="swipe",na=".bs.swipe",ip=`touchstart${na}`,np=`touchmove${na}`,rp=`touchend${na}`,op=`pointerdown${na}`,hp=`pointerup${na}`,cp="touch",dp="pen",lp="pointer-event",pp=40,up={endCallback:null,leftCallback:null,rightCallback:null},fp={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class g1 extends Da{constructor(t,e){super(),this._element=t,!(!t||!g1.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return up}static get DefaultType(){return fp}static get NAME(){return sp}dispose(){y.off(this._element,na)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),ht(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=pp)return;const e=t/this._deltaX;this._deltaX=0,e&&ht(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(y.on(this._element,op,t=>this._start(t)),y.on(this._element,hp,t=>this._end(t)),this._element.classList.add(lp)):(y.on(this._element,ip,t=>this._start(t)),y.on(this._element,np,t=>this._move(t)),y.on(this._element,rp,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===dp||t.pointerType===cp)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const mp="carousel",Mp="bs.carousel",he=`.${Mp}`,Zh=".data-api",vp="ArrowLeft",gp="ArrowRight",yp=500,fa="next",ke="prev",ze="left",d1="right",wp=`slide${he}`,X1=`slid${he}`,xp=`keydown${he}`,_p=`mouseenter${he}`,Sp=`mouseleave${he}`,bp=`dragstart${he}`,Ap=`load${he}${Zh}`,Ep=`click${he}${Zh}`,Uh="carousel",Ya="active",Cp="slide",Tp="carousel-item-end",Lp="carousel-item-start",Vp="carousel-item-next",kp="carousel-item-prev",jh=".active",Yh=".carousel-item",Hp=jh+Yh,Op=".carousel-item img",Dp=".carousel-indicators",Ip="[data-bs-slide], [data-bs-slide-to]",Pp='[data-bs-ride="carousel"]',Np={[vp]:d1,[gp]:ze},$p={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Fp={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ra extends Ht{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=k.findOne(Dp,this._element),this._addEventListeners(),this._config.ride===Uh&&this.cycle()}static get Default(){return $p}static get DefaultType(){return Fp}static get NAME(){return mp}next(){this._slide(fa)}nextWhenVisible(){!document.hidden&&ia(this._element)&&this.next()}prev(){this._slide(ke)}pause(){this._isSliding&&Dh(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){y.one(this._element,X1,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){y.one(this._element,X1,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const i=t>s?fa:ke;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&y.on(this._element,xp,t=>this._keydown(t)),this._config.pause==="hover"&&(y.on(this._element,_p,()=>this.pause()),y.on(this._element,Sp,()=>this._maybeEnableCycle())),this._config.touch&&g1.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of k.find(Op,this._element))y.on(s,bp,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(ze)),rightCallback:()=>this._slide(this._directionToOrder(d1)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),yp+this._config.interval))}};this._swipeHelper=new g1(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Np[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=k.findOne(jh,this._indicatorsElement);e.classList.remove(Ya),e.removeAttribute("aria-current");const s=k.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(Ya),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const s=this._getActive(),i=t===fa,n=e||mi(this._getItems(),s,i,this._config.wrap);if(n===s)return;const r=this._getItemIndex(n),o=f=>y.trigger(this._element,f,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:r});if(o(wp).defaultPrevented||!s||!n)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=n;const d=i?Lp:Tp,l=i?Vp:kp;n.classList.add(l),Oa(n),s.classList.add(d),n.classList.add(d);const u=()=>{n.classList.remove(d,l),n.classList.add(Ya),s.classList.remove(Ya,l,d),this._isSliding=!1,o(X1)};this._queueCallback(u,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Cp)}_getActive(){return k.findOne(Hp,this._element)}_getItems(){return k.find(Yh,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return _t()?t===ze?ke:fa:t===ze?fa:ke}_orderToDirection(t){return _t()?t===ke?ze:d1:t===ke?d1:ze}static jQueryInterface(t){return this.each(function(){const e=ra.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}y.on(document,Ep,Ip,function(a){const t=k.getElementFromSelector(this);if(!t||!t.classList.contains(Uh))return;a.preventDefault();const e=ra.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){e.to(s),e._maybeEnableCycle();return}if(qt.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});y.on(window,Ap,()=>{const a=k.find(Pp);for(const t of a)ra.getOrCreateInstance(t)});bt(ra);const Rp="collapse",zp="bs.collapse",Na=`.${zp}`,Bp=".data-api",Wp=`show${Na}`,qp=`shown${Na}`,Zp=`hide${Na}`,Up=`hidden${Na}`,jp=`click${Na}${Bp}`,Q1="show",We="collapse",Ga="collapsing",Yp="collapsed",Gp=`:scope .${We} .${We}`,Kp="collapse-horizontal",Xp="width",Qp="height",Jp=".collapse.show, .collapse.collapsing",Ds='[data-bs-toggle="collapse"]',tu={parent:null,toggle:!0},eu={parent:"(null|element)",toggle:"boolean"};let vi=class Is extends Ht{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const s=k.find(Ds);for(const i of s){const n=k.getSelectorFromElement(i),r=k.find(n).filter(o=>o===this._element);n!==null&&r.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return tu}static get DefaultType(){return eu}static get NAME(){return Rp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Jp).filter(o=>o!==this._element).map(o=>Is.getOrCreateInstance(o,{toggle:!1}))),t.length&&t[0]._isTransitioning||y.trigger(this._element,Wp).defaultPrevented)return;for(const o of t)o.hide();const s=this._getDimension();this._element.classList.remove(We),this._element.classList.add(Ga),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Ga),this._element.classList.add(We,Q1),this._element.style[s]="",y.trigger(this._element,qp)},r=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||y.trigger(this._element,Zp).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Oa(this._element),this._element.classList.add(Ga),this._element.classList.remove(We,Q1);for(const i of this._triggerArray){const n=k.getElementFromSelector(i);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ga),this._element.classList.add(We),y.trigger(this._element,Up)};this._element.style[e]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Q1)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=ne(t.parent),t}_getDimension(){return this._element.classList.contains(Kp)?Xp:Qp}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ds);for(const e of t){const s=k.getElementFromSelector(e);s&&this._addAriaAndCollapsedClass([e],this._isShown(s))}}_getFirstLevelChildren(t){const e=k.find(Gp,this._config.parent);return k.find(t,this._config.parent).filter(s=>!e.includes(s))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle(Yp,!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const s=Is.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}};y.on(document,jp,Ds,function(a){(a.target.tagName==="A"||a.delegateTarget&&a.delegateTarget.tagName==="A")&&a.preventDefault();for(const t of k.getMultipleElementsFromSelector(this))vi.getOrCreateInstance(t,{toggle:!1}).toggle()});bt(vi);const Qi="dropdown",au="bs.dropdown",Ee=`.${au}`,gi=".data-api",su="Escape",Ji="Tab",iu="ArrowUp",t2="ArrowDown",nu=2,ru=`hide${Ee}`,ou=`hidden${Ee}`,hu=`show${Ee}`,cu=`shown${Ee}`,Gh=`click${Ee}${gi}`,Kh=`keydown${Ee}${gi}`,du=`keyup${Ee}${gi}`,Be="show",lu="dropup",pu="dropend",uu="dropstart",fu="dropup-center",mu="dropdown-center",Me='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Mu=`${Me}.${Be}`,l1=".dropdown-menu",vu=".navbar",gu=".navbar-nav",yu=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",wu=_t()?"top-end":"top-start",xu=_t()?"top-start":"top-end",_u=_t()?"bottom-end":"bottom-start",Su=_t()?"bottom-start":"bottom-end",bu=_t()?"left-start":"right-start",Au=_t()?"right-start":"left-start",Eu="top",Cu="bottom",Tu={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Lu={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Vt extends Ht{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=k.next(this._element,l1)[0]||k.prev(this._element,l1)[0]||k.findOne(l1,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Tu}static get DefaultType(){return Lu}static get NAME(){return Qi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(re(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!y.trigger(this._element,hu,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(gu))for(const s of[].concat(...document.body.children))y.on(s,"mouseover",v1);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Be),this._element.classList.add(Be),y.trigger(this._element,cu,t)}}hide(){if(re(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!y.trigger(this._element,ru,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))y.off(s,"mouseover",v1);this._popper&&this._popper.destroy(),this._menu.classList.remove(Be),this._element.classList.remove(Be),this._element.setAttribute("aria-expanded","false"),qt.removeDataAttribute(this._menu,"popper"),y.trigger(this._element,ou,t),this._element.focus()}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Wt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Qi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof fi>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Wt(this._config.reference)?t=ne(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=ui(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Be)}_getPlacement(){const t=this._parent;if(t.classList.contains(pu))return bu;if(t.classList.contains(uu))return Au;if(t.classList.contains(fu))return Eu;if(t.classList.contains(mu))return Cu;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(lu)?e?xu:wu:e?Su:_u}_detectNavbar(){return this._element.closest(vu)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(qt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...ht(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const s=k.find(yu,this._menu).filter(i=>ia(i));s.length&&mi(s,e,t===t2,!s.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Vt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===nu||t.type==="keyup"&&t.key!==Ji)return;const e=k.find(Mu);for(const s of e){const i=Vt.getInstance(s);if(!i||i._config.autoClose===!1)continue;const n=t.composedPath(),r=n.includes(i._menu);if(n.includes(i._element)||i._config.autoClose==="inside"&&!r||i._config.autoClose==="outside"&&r||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Ji||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:i._element};t.type==="click"&&(o.clickEvent=t),i._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),s=t.key===su,i=[iu,t2].includes(t.key);if(!i&&!s||e&&!s)return;t.preventDefault();const n=this.matches(Me)?this:k.prev(this,Me)[0]||k.next(this,Me)[0]||k.findOne(Me,t.delegateTarget.parentNode),r=Vt.getOrCreateInstance(n);if(i){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),n.focus())}}y.on(document,Kh,Me,Vt.dataApiKeydownHandler);y.on(document,Kh,l1,Vt.dataApiKeydownHandler);y.on(document,Gh,Vt.clearMenus);y.on(document,du,Vt.clearMenus);y.on(document,Gh,Me,function(a){a.preventDefault(),Vt.getOrCreateInstance(this).toggle()});bt(Vt);const Xh="backdrop",Vu="fade",e2="show",a2=`mousedown.bs.${Xh}`,ku={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Hu={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Qh extends Da{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return ku}static get DefaultType(){return Hu}static get NAME(){return Xh}show(t){if(!this._config.isVisible){ht(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Oa(e),e.classList.add(e2),this._emulateAnimation(()=>{ht(t)})}hide(t){if(!this._config.isVisible){ht(t);return}this._getElement().classList.remove(e2),this._emulateAnimation(()=>{this.dispose(),ht(t)})}dispose(){this._isAppended&&(y.off(this._element,a2),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Vu),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=ne(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),y.on(t,a2,()=>{ht(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Nh(t,this._getElement(),this._config.isAnimated)}}const Ou="focustrap",Du="bs.focustrap",y1=`.${Du}`,Iu=`focusin${y1}`,Pu=`keydown.tab${y1}`,Nu="Tab",$u="forward",s2="backward",Fu={autofocus:!0,trapElement:null},Ru={autofocus:"boolean",trapElement:"element"};class Jh extends Da{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Fu}static get DefaultType(){return Ru}static get NAME(){return Ou}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),y.off(document,y1),y.on(document,Iu,t=>this._handleFocusin(t)),y.on(document,Pu,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,y.off(document,y1))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const s=k.focusableChildren(e);s.length===0?e.focus():this._lastTabNavDirection===s2?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===Nu&&(this._lastTabNavDirection=t.shiftKey?s2:$u)}}const i2=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",n2=".sticky-top",Ka="padding-right",r2="margin-right";class Ps{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ka,e=>e+t),this._setElementAttributes(i2,Ka,e=>e+t),this._setElementAttributes(n2,r2,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ka),this._resetElementAttributes(i2,Ka),this._resetElementAttributes(n2,r2)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const i=this.getWidth(),n=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+i)return;this._saveInitialAttribute(r,e);const o=window.getComputedStyle(r).getPropertyValue(e);r.style.setProperty(e,`${s(Number.parseFloat(o))}px`)};this._applyManipulationCallback(t,n)}_saveInitialAttribute(t,e){const s=t.style.getPropertyValue(e);s&&qt.setDataAttribute(t,e,s)}_resetElementAttributes(t,e){const s=i=>{const n=qt.getDataAttribute(i,e);if(n===null){i.style.removeProperty(e);return}qt.removeDataAttribute(i,e),i.style.setProperty(e,n)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,e){if(Wt(t)){e(t);return}for(const s of k.find(t,this._element))e(s)}}const zu="modal",Bu="bs.modal",St=`.${Bu}`,Wu=".data-api",qu="Escape",Zu=`hide${St}`,Uu=`hidePrevented${St}`,tc=`hidden${St}`,ec=`show${St}`,ju=`shown${St}`,Yu=`resize${St}`,Gu=`click.dismiss${St}`,Ku=`mousedown.dismiss${St}`,Xu=`keydown.dismiss${St}`,Qu=`click${St}${Wu}`,o2="modal-open",Ju="fade",h2="show",J1="modal-static",t4=".modal.show",e4=".modal-dialog",a4=".modal-body",s4='[data-bs-toggle="modal"]',i4={backdrop:!0,focus:!0,keyboard:!0},n4={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class be extends Ht{constructor(t,e){super(t,e),this._dialog=k.findOne(e4,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ps,this._addEventListeners()}static get Default(){return i4}static get DefaultType(){return n4}static get NAME(){return zu}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||y.trigger(this._element,ec,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(o2),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||y.trigger(this._element,Zu).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(h2),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){y.off(window,St),y.off(this._dialog,St),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Qh({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Jh({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=k.findOne(a4,this._dialog);e&&(e.scrollTop=0),Oa(this._element),this._element.classList.add(h2);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,ju,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){y.on(this._element,Xu,t=>{if(t.key===qu){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),y.on(window,Yu,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),y.on(this._element,Ku,t=>{y.one(this._element,Gu,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(o2),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,tc)})}_isAnimated(){return this._element.classList.contains(Ju)}_triggerBackdropTransition(){if(y.trigger(this._element,Uu).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(J1)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(J1),this._queueCallback(()=>{this._element.classList.remove(J1),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),s=e>0;if(s&&!t){const i=_t()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!s&&t){const i=_t()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const s=be.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](e)}})}}y.on(document,Qu,s4,function(a){const t=k.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&a.preventDefault(),y.one(t,ec,i=>{i.defaultPrevented||y.one(t,tc,()=>{ia(this)&&this.focus()})});const e=k.findOne(t4);e&&be.getInstance(e).hide(),be.getOrCreateInstance(t).toggle(this)});k1(be);bt(be);const r4="offcanvas",o4="bs.offcanvas",jt=`.${o4}`,ac=".data-api",h4=`load${jt}${ac}`,c4="Escape",c2="show",d2="showing",l2="hiding",d4="offcanvas-backdrop",sc=".offcanvas.show",l4=`show${jt}`,p4=`shown${jt}`,u4=`hide${jt}`,p2=`hidePrevented${jt}`,ic=`hidden${jt}`,f4=`resize${jt}`,m4=`click${jt}${ac}`,M4=`keydown.dismiss${jt}`,v4='[data-bs-toggle="offcanvas"]',g4={backdrop:!0,keyboard:!0,scroll:!1},y4={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ut extends Ht{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return g4}static get DefaultType(){return y4}static get NAME(){return r4}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||y.trigger(this._element,l4,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ps().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(d2);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(c2),this._element.classList.remove(d2),y.trigger(this._element,p4,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||y.trigger(this._element,u4).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(l2),this._backdrop.hide();const e=()=>{this._element.classList.remove(c2,l2),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ps().reset(),y.trigger(this._element,ic)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){y.trigger(this._element,p2);return}this.hide()},e=!!this._config.backdrop;return new Qh({className:d4,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Jh({trapElement:this._element})}_addEventListeners(){y.on(this._element,M4,t=>{if(t.key===c4){if(this._config.keyboard){this.hide();return}y.trigger(this._element,p2)}})}static jQueryInterface(t){return this.each(function(){const e=Ut.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}y.on(document,m4,v4,function(a){const t=k.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&a.preventDefault(),re(this))return;y.one(t,ic,()=>{ia(this)&&this.focus()});const e=k.findOne(sc);e&&e!==t&&Ut.getInstance(e).hide(),Ut.getOrCreateInstance(t).toggle(this)});y.on(window,h4,()=>{for(const a of k.find(sc))Ut.getOrCreateInstance(a).show()});y.on(window,f4,()=>{for(const a of k.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(a).position!=="fixed"&&Ut.getOrCreateInstance(a).hide()});k1(Ut);bt(Ut);const w4=/^aria-[\w-]*$/i,nc={"*":["class","dir","id","lang","role",w4],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},x4=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),_4=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,S4=(a,t)=>{const e=a.nodeName.toLowerCase();return t.includes(e)?x4.has(e)?!!_4.test(a.nodeValue):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(e))};function b4(a,t,e){if(!a.length)return a;if(e&&typeof e=="function")return e(a);const i=new window.DOMParser().parseFromString(a,"text/html"),n=[].concat(...i.body.querySelectorAll("*"));for(const r of n){const o=r.nodeName.toLowerCase();if(!Object.keys(t).includes(o)){r.remove();continue}const h=[].concat(...r.attributes),c=[].concat(t["*"]||[],t[o]||[]);for(const d of h)S4(d,c)||r.removeAttribute(d.nodeName)}return i.body.innerHTML}const A4="TemplateFactory",E4={allowList:nc,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},C4={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},T4={entry:"(string|element|function|null)",selector:"(string|element)"};class L4 extends Da{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return E4}static get DefaultType(){return C4}static get NAME(){return A4}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,n]of Object.entries(this._config.content))this._setContent(t,n,i);const e=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&e.classList.add(...s.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,s]of Object.entries(t))super._typeCheckConfig({selector:e,entry:s},T4)}_setContent(t,e,s){const i=k.findOne(s,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(Wt(e)){this._putElementInTemplate(ne(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?b4(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return ht(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const V4="tooltip",k4=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",H4="modal",Xa="show",O4=".tooltip-inner",u2=`.${H4}`,f2="hide.bs.modal",ma="hover",es="focus",as="click",D4="manual",I4="hide",P4="hidden",N4="show",$4="shown",F4="inserted",R4="click",z4="focusin",B4="focusout",W4="mouseenter",q4="mouseleave",Z4={AUTO:"auto",TOP:"top",RIGHT:_t()?"left":"right",BOTTOM:"bottom",LEFT:_t()?"right":"left"},U4={allowList:nc,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},j4={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ce extends Ht{constructor(t,e){if(typeof fi>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return U4}static get DefaultType(){return j4}static get NAME(){return V4}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),y.off(this._element.closest(u2),f2,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=y.trigger(this._element,this.constructor.eventName(N4)),s=(Ih(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),y.trigger(this._element,this.constructor.eventName(F4))),this._popper=this._createPopper(i),i.classList.add(Xa),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))y.on(o,"mouseover",v1);const r=()=>{y.trigger(this._element,this.constructor.eventName($4)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||y.trigger(this._element,this.constructor.eventName(I4)).defaultPrevented)return;if(this._getTipElement().classList.remove(Xa),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))y.off(i,"mouseover",v1);this._activeTrigger[as]=!1,this._activeTrigger[es]=!1,this._activeTrigger[ma]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),y.trigger(this._element,this.constructor.eventName(P4)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ts,Xa),e.classList.add(`bs-${this.constructor.NAME}-auto`);const s=Dl(this.constructor.NAME).toString();return e.setAttribute("id",s),this._isAnimated()&&e.classList.add(ts),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new L4({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[O4]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(Xa)}_createPopper(t){const e=ht(this._config.placement,[this,t,this._element]),s=Z4[e.toUpperCase()];return ui(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return ht(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...e,...ht(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")y.on(this._element,this.constructor.eventName(R4),this._config.selector,s=>{const i=this._initializeOnDelegatedTarget(s);i._activeTrigger[as]=!(i._isShown()&&i._activeTrigger[as]),i.toggle()});else if(e!==D4){const s=e===ma?this.constructor.eventName(W4):this.constructor.eventName(z4),i=e===ma?this.constructor.eventName(q4):this.constructor.eventName(B4);y.on(this._element,s,this._config.selector,n=>{const r=this._initializeOnDelegatedTarget(n);r._activeTrigger[n.type==="focusin"?es:ma]=!0,r._enter()}),y.on(this._element,i,this._config.selector,n=>{const r=this._initializeOnDelegatedTarget(n);r._activeTrigger[n.type==="focusout"?es:ma]=r._element.contains(n.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},y.on(this._element.closest(u2),f2,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=qt.getDataAttributes(this._element);for(const s of Object.keys(e))k4.has(s)&&delete e[s];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:ne(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,s]of Object.entries(this._config))this.constructor.Default[e]!==s&&(t[e]=s);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Ce.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}bt(Ce);const Y4="popover",G4=".popover-header",K4=".popover-body",X4={...Ce.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Q4={...Ce.DefaultType,content:"(null|string|element|function)"};class H1 extends Ce{static get Default(){return X4}static get DefaultType(){return Q4}static get NAME(){return Y4}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[G4]:this._getTitle(),[K4]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=H1.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}bt(H1);const J4="scrollspy",t5="bs.scrollspy",yi=`.${t5}`,e5=".data-api",a5=`activate${yi}`,m2=`click${yi}`,s5=`load${yi}${e5}`,i5="dropdown-item",He="active",n5='[data-bs-spy="scroll"]',ss="[href]",r5=".nav, .list-group",M2=".nav-link",o5=".nav-item",h5=".list-group-item",c5=`${M2}, ${o5} > ${M2}, ${h5}`,d5=".dropdown",l5=".dropdown-toggle",p5={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},u5={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class $a extends Ht{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return p5}static get DefaultType(){return u5}static get NAME(){return J4}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=ne(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(y.off(this._config.target,m2),y.on(this._config.target,m2,ss,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const s=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=r=>this._targetLinks.get(`#${r.target.id}`),s=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(e(r))},i=(this._rootElement||document.documentElement).scrollTop,n=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(r));continue}const o=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&o){if(s(r),!i)return;continue}!n&&!o&&s(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=k.find(ss,this._config.target);for(const e of t){if(!e.hash||re(e))continue;const s=k.findOne(decodeURI(e.hash),this._element);ia(s)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(He),this._activateParents(t),y.trigger(this._element,a5,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(i5)){k.findOne(l5,t.closest(d5)).classList.add(He);return}for(const e of k.parents(t,r5))for(const s of k.prev(e,c5))s.classList.add(He)}_clearActiveClass(t){t.classList.remove(He);const e=k.find(`${ss}.${He}`,t);for(const s of e)s.classList.remove(He)}static jQueryInterface(t){return this.each(function(){const e=$a.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}y.on(window,s5,()=>{for(const a of k.find(n5))$a.getOrCreateInstance(a)});bt($a);const f5="tab",m5="bs.tab",Te=`.${m5}`,M5=`hide${Te}`,v5=`hidden${Te}`,g5=`show${Te}`,y5=`shown${Te}`,w5=`click${Te}`,x5=`keydown${Te}`,_5=`load${Te}`,S5="ArrowLeft",v2="ArrowRight",b5="ArrowUp",g2="ArrowDown",is="Home",y2="End",ve="active",w2="fade",ns="show",A5="dropdown",rc=".dropdown-toggle",E5=".dropdown-menu",rs=`:not(${rc})`,C5='.list-group, .nav, [role="tablist"]',T5=".nav-item, .list-group-item",L5=`.nav-link${rs}, .list-group-item${rs}, [role="tab"]${rs}`,oc='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',os=`${L5}, ${oc}`,V5=`.${ve}[data-bs-toggle="tab"], .${ve}[data-bs-toggle="pill"], .${ve}[data-bs-toggle="list"]`;class Ae extends Ht{constructor(t){super(t),this._parent=this._element.closest(C5),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),y.on(this._element,x5,e=>this._keydown(e)))}static get NAME(){return f5}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),s=e?y.trigger(e,M5,{relatedTarget:t}):null;y.trigger(t,g5,{relatedTarget:e}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(ve),this._activate(k.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(ns);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),y.trigger(t,y5,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(w2))}_deactivate(t,e){if(!t)return;t.classList.remove(ve),t.blur(),this._deactivate(k.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(ns);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),y.trigger(t,v5,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(w2))}_keydown(t){if(![S5,v2,b5,g2,is,y2].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(i=>!re(i));let s;if([is,y2].includes(t.key))s=e[t.key===is?0:e.length-1];else{const i=[v2,g2].includes(t.key);s=mi(e,t.target,i,!0)}s&&(s.focus({preventScroll:!0}),Ae.getOrCreateInstance(s).show())}_getChildren(){return k.find(os,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const s of e)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",e),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=k.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const s=this._getOuterElement(t);if(!s.classList.contains(A5))return;const i=(n,r)=>{const o=k.findOne(n,s);o&&o.classList.toggle(r,e)};i(rc,ve),i(E5,ns),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,s){t.hasAttribute(e)||t.setAttribute(e,s)}_elemIsActive(t){return t.classList.contains(ve)}_getInnerElement(t){return t.matches(os)?t:k.findOne(os,t)}_getOuterElement(t){return t.closest(T5)||t}static jQueryInterface(t){return this.each(function(){const e=Ae.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}y.on(document,w5,oc,function(a){["A","AREA"].includes(this.tagName)&&a.preventDefault(),!re(this)&&Ae.getOrCreateInstance(this).show()});y.on(window,_5,()=>{for(const a of k.find(V5))Ae.getOrCreateInstance(a)});bt(Ae);const k5="toast",H5="bs.toast",ce=`.${H5}`,O5=`mouseover${ce}`,D5=`mouseout${ce}`,I5=`focusin${ce}`,P5=`focusout${ce}`,N5=`hide${ce}`,$5=`hidden${ce}`,F5=`show${ce}`,R5=`shown${ce}`,z5="fade",x2="hide",Qa="show",Ja="showing",B5={animation:"boolean",autohide:"boolean",delay:"number"},W5={animation:!0,autohide:!0,delay:5e3};class Fa extends Ht{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return W5}static get DefaultType(){return B5}static get NAME(){return k5}show(){if(y.trigger(this._element,F5).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(z5);const e=()=>{this._element.classList.remove(Ja),y.trigger(this._element,R5),this._maybeScheduleHide()};this._element.classList.remove(x2),Oa(this._element),this._element.classList.add(Qa,Ja),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||y.trigger(this._element,N5).defaultPrevented)return;const e=()=>{this._element.classList.add(x2),this._element.classList.remove(Ja,Qa),y.trigger(this._element,$5)};this._element.classList.add(Ja),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Qa),super.dispose()}isShown(){return this._element.classList.contains(Qa)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){y.on(this._element,O5,t=>this._onInteraction(t,!0)),y.on(this._element,D5,t=>this._onInteraction(t,!1)),y.on(this._element,I5,t=>this._onInteraction(t,!0)),y.on(this._element,P5,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Fa.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}k1(Fa);bt(Fa);const q5=Object.freeze(Object.defineProperty({__proto__:null,Alert:Ia,Button:Pa,Carousel:ra,Collapse:vi,Dropdown:Vt,Modal:be,Offcanvas:Ut,Popover:H1,ScrollSpy:$a,Tab:Ae,Toast:Fa,Tooltip:Ce},Symbol.toStringTag,{value:"Module"}));function hs(a,t){a.split(/\s+/).forEach(e=>{t(e)})}class Z5{constructor(){this._events={}}on(t,e){hs(t,s=>{const i=this._events[s]||[];i.push(e),this._events[s]=i})}off(t,e){var s=arguments.length;if(s===0){this._events={};return}hs(t,i=>{if(s===1){delete this._events[i];return}const n=this._events[i];n!==void 0&&(n.splice(n.indexOf(e),1),this._events[i]=n)})}trigger(t,...e){var s=this;hs(t,i=>{const n=s._events[i];n!==void 0&&n.forEach(r=>{r.apply(s,e)})})}}function U5(a){return a.plugins={},class extends a{constructor(){super(...arguments),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(t,e){a.plugins[t]={name:t,fn:e}}initializePlugins(t){var e,s;const i=this,n=[];if(Array.isArray(t))t.forEach(r=>{typeof r=="string"?n.push(r):(i.plugins.settings[r.name]=r.options,n.push(r.name))});else if(t)for(e in t)t.hasOwnProperty(e)&&(i.plugins.settings[e]=t[e],n.push(e));for(;s=n.shift();)i.require(s)}loadPlugin(t){var e=this,s=e.plugins,i=a.plugins[t];if(!a.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin');s.requested[t]=!0,s.loaded[t]=i.fn.apply(e,[e.plugins.settings[t]||{}]),s.names.push(t)}require(t){var e=this,s=e.plugins;if(!e.plugins.loaded.hasOwnProperty(t)){if(s.requested[t])throw new Error('Plugin has circular dependency ("'+t+'")');e.loadPlugin(t)}return s.loaded[t]}}}const O1=a=>(a=a.filter(Boolean),a.length<2?a[0]||"":Y5(a)==1?"["+a.join("")+"]":"(?:"+a.join("|")+")"),hc=a=>{if(!j5(a))return a.join("");let t="",e=0;const s=()=>{e>1&&(t+="{"+e+"}")};return a.forEach((i,n)=>{if(i===a[n-1]){e++;return}s(),t+=i,e=1}),s(),t},cc=a=>{let t=Array.from(a);return O1(t)},j5=a=>new Set(a).size!==a.length,Ta=a=>(a+"").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu,"\\$1"),Y5=a=>a.reduce((t,e)=>Math.max(t,G5(e)),0),G5=a=>Array.from(a).length,dc=a=>{if(a.length===1)return[[a]];let t=[];const e=a.substring(1);return dc(e).forEach(function(i){let n=i.slice(0);n[0]=a.charAt(0)+n[0],t.push(n),n=i.slice(0),n.unshift(a.charAt(0)),t.push(n)}),t},K5=[[0,65535]],X5="[̀-ͯ·ʾʼ]";let w1,lc;const Q5=3,wi={},_2={"/":"⁄∕",0:"߀",a:"ⱥɐɑ",aa:"ꜳ",ae:"æǽǣ",ao:"ꜵ",au:"ꜷ",av:"ꜹꜻ",ay:"ꜽ",b:"ƀɓƃ",c:"ꜿƈȼↄ",d:"đɗɖᴅƌꮷԁɦ",e:"ɛǝᴇɇ",f:"ꝼƒ",g:"ǥɠꞡᵹꝿɢ",h:"ħⱨⱶɥ",i:"ɨı",j:"ɉȷ",k:"ƙⱪꝁꝃꝅꞣ",l:"łƚɫⱡꝉꝇꞁɭ",m:"ɱɯϻ",n:"ꞥƞɲꞑᴎлԉ",o:"øǿɔɵꝋꝍᴑ",oe:"œ",oi:"ƣ",oo:"ꝏ",ou:"ȣ",p:"ƥᵽꝑꝓꝕρ",q:"ꝗꝙɋ",r:"ɍɽꝛꞧꞃ",s:"ßȿꞩꞅʂ",t:"ŧƭʈⱦꞇ",th:"þ",tz:"ꜩ",u:"ʉ",v:"ʋꝟʌ",vy:"ꝡ",w:"ⱳ",y:"ƴɏỿ",z:"ƶȥɀⱬꝣ",hv:"ƕ"};for(let a in _2){let t=_2[a]||"";for(let e=0;e<t.length;e++){let s=t.substring(e,e+1);wi[s]=a}}const J5=new RegExp(Object.keys(wi).join("|")+"|"+X5,"gu"),t3=a=>{w1===void 0&&(w1=i3(K5))},S2=(a,t="NFKD")=>a.normalize(t),x1=a=>Array.from(a).reduce((t,e)=>t+e3(e),""),e3=a=>(a=S2(a).toLowerCase().replace(J5,t=>wi[t]||""),S2(a,"NFC"));function*a3(a){for(const[t,e]of a)for(let s=t;s<=e;s++){let i=String.fromCharCode(s),n=x1(i);n!=i.toLowerCase()&&(n.length>Q5||n.length!=0&&(yield{folded:n,composed:i,code_point:s}))}}const s3=a=>{const t={},e=(s,i)=>{const n=t[s]||new Set,r=new RegExp("^"+cc(n)+"$","iu");i.match(r)||(n.add(Ta(i)),t[s]=n)};for(let s of a3(a))e(s.folded,s.folded),e(s.folded,s.composed);return t},i3=a=>{const t=s3(a),e={};let s=[];for(let n in t){let r=t[n];r&&(e[n]=cc(r)),n.length>1&&s.push(Ta(n))}s.sort((n,r)=>r.length-n.length);const i=O1(s);return lc=new RegExp("^"+i,"u"),e},n3=(a,t=1)=>{let e=0;return a=a.map(s=>(w1[s]&&(e+=s.length),w1[s]||s)),e>=t?hc(a):""},r3=(a,t=1)=>(t=Math.max(t,a.length-1),O1(dc(a).map(e=>n3(e,t)))),b2=(a,t=!0)=>{let e=a.length>1?1:0;return O1(a.map(s=>{let i=[];const n=t?s.length():s.length()-1;for(let r=0;r<n;r++)i.push(r3(s.substrs[r]||"",e));return hc(i)}))},o3=(a,t)=>{for(const e of t){if(e.start!=a.start||e.end!=a.end||e.substrs.join("")!==a.substrs.join(""))continue;let s=a.parts;const i=r=>{for(const o of s){if(o.start===r.start&&o.substr===r.substr)return!1;if(!(r.length==1||o.length==1)&&(r.start<o.start&&r.end>o.start||o.start<r.start&&o.end>r.start))return!0}return!1};if(!(e.parts.filter(i).length>0))return!0}return!1};class _1{parts;substrs;start;end;constructor(){this.parts=[],this.substrs=[],this.start=0,this.end=0}add(t){t&&(this.parts.push(t),this.substrs.push(t.substr),this.start=Math.min(t.start,this.start),this.end=Math.max(t.end,this.end))}last(){return this.parts[this.parts.length-1]}length(){return this.parts.length}clone(t,e){let s=new _1,i=JSON.parse(JSON.stringify(this.parts)),n=i.pop();for(const h of i)s.add(h);let r=e.substr.substring(0,t-n.start),o=r.length;return s.add({start:n.start,end:n.start+o,length:o,substr:r}),s}}const h3=a=>{t3(),a=x1(a);let t="",e=[new _1];for(let s=0;s<a.length;s++){let n=a.substring(s).match(lc);const r=a.substring(s,s+1),o=n?n[0]:null;let h=[],c=new Set;for(const d of e){const l=d.last();if(!l||l.length==1||l.end<=s)if(o){const u=o.length;d.add({start:s,end:s+u,length:u,substr:o}),c.add("1")}else d.add({start:s,end:s+1,length:1,substr:r}),c.add("2");else if(o){let u=d.clone(s,l);const f=o.length;u.add({start:s,end:s+f,length:f,substr:o}),h.push(u)}else c.add("3")}if(h.length>0){h=h.sort((d,l)=>d.length()-l.length());for(let d of h)o3(d,e)||e.push(d);continue}if(s>0&&c.size==1&&!c.has("3")){t+=b2(e,!1);let d=new _1;const l=e[0];l&&d.add(l.last()),e=[d]}}return t+=b2(e,!0),t},c3=(a,t)=>{if(a)return a[t]},d3=(a,t)=>{if(a){for(var e,s=t.split(".");(e=s.shift())&&(a=a[e]););return a}},cs=(a,t,e)=>{var s,i;return!a||(a=a+"",t.regex==null)||(i=a.search(t.regex),i===-1)?0:(s=t.string.length/a.length,i===0&&(s+=.5),s*e)},ds=(a,t)=>{var e=a[t];if(typeof e=="function")return e;e&&!Array.isArray(e)&&(a[t]=[e])},t1=(a,t)=>{if(Array.isArray(a))a.forEach(t);else for(var e in a)a.hasOwnProperty(e)&&t(a[e],e)},l3=(a,t)=>typeof a=="number"&&typeof t=="number"?a>t?1:a<t?-1:0:(a=x1(a+"").toLowerCase(),t=x1(t+"").toLowerCase(),a>t?1:t>a?-1:0);class p3{items;settings;constructor(t,e){this.items=t,this.settings=e||{diacritics:!0}}tokenize(t,e,s){if(!t||!t.length)return[];const i=[],n=t.split(/\s+/);var r;return s&&(r=new RegExp("^("+Object.keys(s).map(Ta).join("|")+"):(.*)$")),n.forEach(o=>{let h,c=null,d=null;r&&(h=o.match(r))&&(c=h[1],o=h[2]),o.length>0&&(this.settings.diacritics?d=h3(o)||null:d=Ta(o),d&&e&&(d="\\b"+d)),i.push({string:o,regex:d?new RegExp(d,"iu"):null,field:c})}),i}getScoreFunction(t,e){var s=this.prepareSearch(t,e);return this._getScoreFunction(s)}_getScoreFunction(t){const e=t.tokens,s=e.length;if(!s)return function(){return 0};const i=t.options.fields,n=t.weights,r=i.length,o=t.getAttrFn;if(!r)return function(){return 1};const h=function(){return r===1?function(c,d){const l=i[0].field;return cs(o(d,l),c,n[l]||1)}:function(c,d){var l=0;if(c.field){const u=o(d,c.field);!c.regex&&u?l+=1/r:l+=cs(u,c,1)}else t1(n,(u,f)=>{l+=cs(o(d,f),c,u)});return l/r}}();return s===1?function(c){return h(e[0],c)}:t.options.conjunction==="and"?function(c){var d,l=0;for(let u of e){if(d=h(u,c),d<=0)return 0;l+=d}return l/s}:function(c){var d=0;return t1(e,l=>{d+=h(l,c)}),d/s}}getSortFunction(t,e){var s=this.prepareSearch(t,e);return this._getSortFunction(s)}_getSortFunction(t){var e,s=[];const i=this,n=t.options,r=!t.query&&n.sort_empty?n.sort_empty:n.sort;if(typeof r=="function")return r.bind(this);const o=function(c,d){return c==="$score"?d.score:t.getAttrFn(i.items[d.id],c)};if(r)for(let c of r)(t.query||c.field!=="$score")&&s.push(c);if(t.query){e=!0;for(let c of s)if(c.field==="$score"){e=!1;break}e&&s.unshift({field:"$score",direction:"desc"})}else s=s.filter(c=>c.field!=="$score");return s.length?function(c,d){var l,u;for(let f of s)if(u=f.field,l=(f.direction==="desc"?-1:1)*l3(o(u,c),o(u,d)),l)return l;return 0}:null}prepareSearch(t,e){const s={};var i=Object.assign({},e);if(ds(i,"sort"),ds(i,"sort_empty"),i.fields){ds(i,"fields");const n=[];i.fields.forEach(r=>{typeof r=="string"&&(r={field:r,weight:1}),n.push(r),s[r.field]="weight"in r?r.weight:1}),i.fields=n}return{options:i,query:t.toLowerCase().trim(),tokens:this.tokenize(t,i.respect_word_boundaries,s),total:0,items:[],weights:s,getAttrFn:i.nesting?d3:c3}}search(t,e){var s=this,i,n;n=this.prepareSearch(t,e),e=n.options,t=n.query;const r=e.score||s._getScoreFunction(n);t.length?t1(s.items,(h,c)=>{i=r(h),(e.filter===!1||i>0)&&n.items.push({score:i,id:c})}):t1(s.items,(h,c)=>{n.items.push({score:1,id:c})});const o=s._getSortFunction(n);return o&&n.items.sort(o),n.total=n.items.length,typeof e.limit=="number"&&(n.items=n.items.slice(0,e.limit)),n}}const Tt=a=>typeof a>"u"||a===null?null:p1(a),p1=a=>typeof a=="boolean"?a?"1":"0":a+"",ls=a=>(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),u3=(a,t)=>t>0?window.setTimeout(a,t):(a.call(null),null),f3=(a,t)=>{var e;return function(s,i){var n=this;e&&(n.loading=Math.max(n.loading-1,0),clearTimeout(e)),e=setTimeout(function(){e=null,n.loadedSearches[s]=!0,a.call(n,s,i)},t)}},A2=(a,t,e)=>{var s,i=a.trigger,n={};a.trigger=function(){var r=arguments[0];if(t.indexOf(r)!==-1)n[r]=arguments;else return i.apply(a,arguments)},e.apply(a,[]),a.trigger=i;for(s of t)s in n&&i.apply(a,n[s])},m3=a=>({start:a.selectionStart||0,length:(a.selectionEnd||0)-(a.selectionStart||0)}),Y=(a,t=!1)=>{a&&(a.preventDefault(),t&&a.stopPropagation())},it=(a,t,e,s)=>{a.addEventListener(t,e,s)},pe=(a,t)=>{if(!t||!t[a])return!1;var e=(t.altKey?1:0)+(t.ctrlKey?1:0)+(t.shiftKey?1:0)+(t.metaKey?1:0);return e===1},ps=(a,t)=>{const e=a.getAttribute("id");return e||(a.setAttribute("id",t),t)},E2=a=>a.replace(/[\\"']/g,"\\$&"),ue=(a,t)=>{t&&a.append(t)},Q=(a,t)=>{if(Array.isArray(a))a.forEach(t);else for(var e in a)a.hasOwnProperty(e)&&t(a[e],e)},Dt=a=>{if(a.jquery)return a[0];if(a instanceof HTMLElement)return a;if(pc(a)){var t=document.createElement("template");return t.innerHTML=a.trim(),t.content.firstChild}return document.querySelector(a)},pc=a=>typeof a=="string"&&a.indexOf("<")>-1,M3=a=>a.replace(/['"\\]/g,"\\$&"),us=(a,t)=>{var e=document.createEvent("HTMLEvents");e.initEvent(t,!0,!1),a.dispatchEvent(e)},e1=(a,t)=>{Object.assign(a.style,t)},dt=(a,...t)=>{var e=uc(t);a=fc(a),a.map(s=>{e.map(i=>{s.classList.add(i)})})},Xt=(a,...t)=>{var e=uc(t);a=fc(a),a.map(s=>{e.map(i=>{s.classList.remove(i)})})},uc=a=>{var t=[];return Q(a,e=>{typeof e=="string"&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},fc=a=>(Array.isArray(a)||(a=[a]),a),fs=(a,t,e)=>{if(!(e&&!e.contains(a)))for(;a&&a.matches;){if(a.matches(t))return a;a=a.parentNode}},C2=(a,t=0)=>t>0?a[a.length-1]:a[0],v3=a=>Object.keys(a).length===0,T2=(a,t)=>{if(!a)return-1;t=t||a.nodeName;for(var e=0;a=a.previousElementSibling;)a.matches(t)&&e++;return e},q=(a,t)=>{Q(t,(e,s)=>{e==null?a.removeAttribute(s):a.setAttribute(s,""+e)})},Ns=(a,t)=>{a.parentNode&&a.parentNode.replaceChild(t,a)},g3=(a,t)=>{if(t===null)return;if(typeof t=="string"){if(!t.length)return;t=new RegExp(t,"i")}const e=n=>{var r=n.data.match(t);if(r&&n.data.length>0){var o=document.createElement("span");o.className="highlight";var h=n.splitText(r.index);h.splitText(r[0].length);var c=h.cloneNode(!0);return o.appendChild(c),Ns(h,o),1}return 0},s=n=>{n.nodeType===1&&n.childNodes&&!/(script|style)/i.test(n.tagName)&&(n.className!=="highlight"||n.tagName!=="SPAN")&&Array.from(n.childNodes).forEach(r=>{i(r)})},i=n=>n.nodeType===3?e(n):(s(n),0);i(a)},y3=a=>{var t=a.querySelectorAll("span.highlight");Array.prototype.forEach.call(t,function(e){var s=e.parentNode;s.replaceChild(e.firstChild,e),s.normalize()})},w3=65,x3=13,_3=27,S3=37,b3=38,A3=39,E3=40,L2=8,C3=46,V2=9,T3=typeof navigator>"u"?!1:/Mac/.test(navigator.userAgent),a1=T3?"metaKey":"ctrlKey",k2={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,refreshThrottle:300,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:'<input type="text" autocomplete="off" size="1" />',copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(a){return a.length>0},render:{}};function H2(a,t){var e=Object.assign({},k2,t),s=e.dataAttr,i=e.labelField,n=e.valueField,r=e.disabledField,o=e.optgroupField,h=e.optgroupLabelField,c=e.optgroupValueField,d=a.tagName.toLowerCase(),l=a.getAttribute("placeholder")||a.getAttribute("data-placeholder");if(!l&&!e.allowEmptyOption){let v=a.querySelector('option[value=""]');v&&(l=v.textContent)}var u={placeholder:l,options:[],optgroups:[],items:[],maxItems:null},f=()=>{var v,g=u.options,w={},x=1;let C=0;var T=S=>{var L=Object.assign({},S.dataset),b=s&&L[s];return typeof b=="string"&&b.length&&(L=Object.assign(L,JSON.parse(b))),L},P=(S,L)=>{var b=Tt(S.value);if(b!=null&&!(!b&&!e.allowEmptyOption)){if(w.hasOwnProperty(b)){if(L){var E=w[b][o];E?Array.isArray(E)?E.push(L):w[b][o]=[E,L]:w[b][o]=L}}else{var V=T(S);V[i]=V[i]||S.textContent,V[n]=V[n]||b,V[r]=V[r]||S.disabled,V[o]=V[o]||L,V.$option=S,V.$order=V.$order||++C,w[b]=V,g.push(V)}S.selected&&u.items.push(b)}},O=S=>{var L,b;b=T(S),b[h]=b[h]||S.getAttribute("label")||"",b[c]=b[c]||x++,b[r]=b[r]||S.disabled,b.$order=b.$order||++C,u.optgroups.push(b),L=b[c],Q(S.children,E=>{P(E,L)})};u.maxItems=a.hasAttribute("multiple")?null:1,Q(a.children,S=>{v=S.tagName.toLowerCase(),v==="optgroup"?O(S):v==="option"&&P(S)})},m=()=>{const v=a.getAttribute(s);if(v)u.options=JSON.parse(v),Q(u.options,w=>{u.items.push(w[n])});else{var g=a.value.trim()||"";if(!e.allowEmptyOption&&!g.length)return;const w=g.split(e.delimiter);Q(w,x=>{const C={};C[i]=x,C[n]=x,u.options.push(C)}),u.items=w}};return d==="select"?f():m(),Object.assign({},k2,u,t)}var O2=0;class J extends U5(Z5){constructor(t,e){super(),this.order=0,this.isOpen=!1,this.isDisabled=!1,this.isReadOnly=!1,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.ignoreHover=!1,this.hasOptions=!1,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],this.refreshTimeout=null,O2++;var s,i=Dt(t);if(i.tomselect)throw new Error("Tom Select already initialized on this element");i.tomselect=this;var n=window.getComputedStyle&&window.getComputedStyle(i,null);s=n.getPropertyValue("direction");const r=H2(i,e);this.settings=r,this.input=i,this.tabIndex=i.tabIndex||0,this.is_select_tag=i.tagName.toLowerCase()==="select",this.rtl=/rtl/i.test(s),this.inputId=ps(i,"tomselect-"+O2),this.isRequired=i.required,this.sifter=new p3(this.options,{diacritics:r.diacritics}),r.mode=r.mode||(r.maxItems===1?"single":"multi"),typeof r.hideSelected!="boolean"&&(r.hideSelected=r.mode==="multi"),typeof r.hidePlaceholder!="boolean"&&(r.hidePlaceholder=r.mode!=="multi");var o=r.createFilter;typeof o!="function"&&(typeof o=="string"&&(o=new RegExp(o)),o instanceof RegExp?r.createFilter=g=>o.test(g):r.createFilter=g=>this.settings.duplicates||!this.options[g]),this.initializePlugins(r.plugins),this.setupCallbacks(),this.setupTemplates();const h=Dt("<div>"),c=Dt("<div>"),d=this._render("dropdown"),l=Dt('<div role="listbox" tabindex="-1">'),u=this.input.getAttribute("class")||"",f=r.mode;var m;if(dt(h,r.wrapperClass,u,f),dt(c,r.controlClass),ue(h,c),dt(d,r.dropdownClass,f),r.copyClassesToDropdown&&dt(d,u),dt(l,r.dropdownContentClass),ue(d,l),Dt(r.dropdownParent||h).appendChild(d),pc(r.controlInput)){m=Dt(r.controlInput);var v=["autocorrect","autocapitalize","autocomplete","spellcheck"];Q(v,g=>{i.getAttribute(g)&&q(m,{[g]:i.getAttribute(g)})}),m.tabIndex=-1,c.appendChild(m),this.focus_node=m}else r.controlInput?(m=Dt(r.controlInput),this.focus_node=m):(m=Dt("<input/>"),this.focus_node=c);this.wrapper=h,this.dropdown=d,this.dropdown_content=l,this.control=c,this.control_input=m,this.setup()}setup(){const t=this,e=t.settings,s=t.control_input,i=t.dropdown,n=t.dropdown_content,r=t.wrapper,o=t.control,h=t.input,c=t.focus_node,d={passive:!0},l=t.inputId+"-ts-dropdown";q(n,{id:l}),q(c,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":l});const u=ps(c,t.inputId+"-ts-control"),f="label[for='"+M3(t.inputId)+"']",m=document.querySelector(f),v=t.focus.bind(t);if(m){it(m,"click",v),q(m,{for:u});const x=ps(m,t.inputId+"-ts-label");q(c,{"aria-labelledby":x}),q(n,{"aria-labelledby":x})}if(r.style.width=h.style.width,t.plugins.names.length){const x="plugin-"+t.plugins.names.join(" plugin-");dt([r,i],x)}(e.maxItems===null||e.maxItems>1)&&t.is_select_tag&&q(h,{multiple:"multiple"}),e.placeholder&&q(s,{placeholder:e.placeholder}),!e.splitOn&&e.delimiter&&(e.splitOn=new RegExp("\\s*"+Ta(e.delimiter)+"+\\s*")),e.load&&e.loadThrottle&&(e.load=f3(e.load,e.loadThrottle)),it(i,"mousemove",()=>{t.ignoreHover=!1}),it(i,"mouseenter",x=>{var C=fs(x.target,"[data-selectable]",i);C&&t.onOptionHover(x,C)},{capture:!0}),it(i,"click",x=>{const C=fs(x.target,"[data-selectable]");C&&(t.onOptionSelect(x,C),Y(x,!0))}),it(o,"click",x=>{var C=fs(x.target,"[data-ts-item]",o);if(C&&t.onItemSelect(x,C)){Y(x,!0);return}s.value==""&&(t.onClick(),Y(x,!0))}),it(c,"keydown",x=>t.onKeyDown(x)),it(s,"keypress",x=>t.onKeyPress(x)),it(s,"input",x=>t.onInput(x)),it(c,"blur",x=>t.onBlur(x)),it(c,"focus",x=>t.onFocus(x)),it(s,"paste",x=>t.onPaste(x));const g=x=>{const C=x.composedPath()[0];if(!r.contains(C)&&!i.contains(C)){t.isFocused&&t.blur(),t.inputState();return}C==s&&t.isOpen?x.stopPropagation():Y(x,!0)},w=()=>{t.isOpen&&t.positionDropdown()};it(document,"mousedown",g),it(window,"scroll",w,d),it(window,"resize",w,d),this._destroy=()=>{document.removeEventListener("mousedown",g),window.removeEventListener("scroll",w),window.removeEventListener("resize",w),m&&m.removeEventListener("click",v)},this.revertSettings={innerHTML:h.innerHTML,tabIndex:h.tabIndex},h.tabIndex=-1,h.insertAdjacentElement("afterend",t.wrapper),t.sync(!1),e.items=[],delete e.optgroups,delete e.options,it(h,"invalid",()=>{t.isValid&&(t.isValid=!1,t.isInvalid=!0,t.refreshState())}),t.updateOriginalInput(),t.refreshItems(),t.close(!1),t.inputState(),t.isSetup=!0,h.disabled?t.disable():h.readOnly?t.setReadOnly(!0):t.enable(),t.on("change",this.onChange),dt(h,"tomselected","ts-hidden-accessible"),t.trigger("initialize"),e.preload===!0&&t.preload()}setupOptions(t=[],e=[]){this.addOptions(t),Q(e,s=>{this.registerOptionGroup(s)})}setupTemplates(){var t=this,e=t.settings.labelField,s=t.settings.optgroupLabelField,i={optgroup:n=>{let r=document.createElement("div");return r.className="optgroup",r.appendChild(n.options),r},optgroup_header:(n,r)=>'<div class="optgroup-header">'+r(n[s])+"</div>",option:(n,r)=>"<div>"+r(n[e])+"</div>",item:(n,r)=>"<div>"+r(n[e])+"</div>",option_create:(n,r)=>'<div class="create">Add <strong>'+r(n.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"};t.settings.render=Object.assign({},i,t.settings.render)}setupCallbacks(){var t,e,s={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(t in s)e=this.settings[s[t]],e&&this.on(t,e)}sync(t=!0){const e=this,s=t?H2(e.input,{delimiter:e.settings.delimiter}):e.settings;e.setupOptions(s.options,s.optgroups),e.setValue(s.items||[],!0),e.lastQuery=null}onClick(){var t=this;if(t.activeItems.length>0){t.clearActiveItems(),t.focus();return}t.isFocused&&t.isOpen?t.blur():t.focus()}onMouseDown(){}onChange(){us(this.input,"input"),us(this.input,"change")}onPaste(t){var e=this;if(e.isInputHidden||e.isLocked){Y(t);return}e.settings.splitOn&&setTimeout(()=>{var s=e.inputValue();if(s.match(e.settings.splitOn)){var i=s.trim().split(e.settings.splitOn);Q(i,n=>{Tt(n)&&(this.options[n]?e.addItem(n):e.createItem(n))})}},0)}onKeyPress(t){var e=this;if(e.isLocked){Y(t);return}var s=String.fromCharCode(t.keyCode||t.which);if(e.settings.create&&e.settings.mode==="multi"&&s===e.settings.delimiter){e.createItem(),Y(t);return}}onKeyDown(t){var e=this;if(e.ignoreHover=!0,e.isLocked){t.keyCode!==V2&&Y(t);return}switch(t.keyCode){case w3:if(pe(a1,t)&&e.control_input.value==""){Y(t),e.selectAll();return}break;case _3:e.isOpen&&(Y(t,!0),e.close()),e.clearActiveItems();return;case E3:if(!e.isOpen&&e.hasOptions)e.open();else if(e.activeOption){let s=e.getAdjacent(e.activeOption,1);s&&e.setActiveOption(s)}Y(t);return;case b3:if(e.activeOption){let s=e.getAdjacent(e.activeOption,-1);s&&e.setActiveOption(s)}Y(t);return;case x3:e.canSelect(e.activeOption)?(e.onOptionSelect(t,e.activeOption),Y(t)):(e.settings.create&&e.createItem()||document.activeElement==e.control_input&&e.isOpen)&&Y(t);return;case S3:e.advanceSelection(-1,t);return;case A3:e.advanceSelection(1,t);return;case V2:e.settings.selectOnTab&&(e.canSelect(e.activeOption)&&(e.onOptionSelect(t,e.activeOption),Y(t)),e.settings.create&&e.createItem()&&Y(t));return;case L2:case C3:e.deleteSelection(t);return}e.isInputHidden&&!pe(a1,t)&&Y(t)}onInput(t){if(this.isLocked)return;const e=this.inputValue();if(this.lastValue!==e){if(this.lastValue=e,e==""){this._onInput();return}this.refreshTimeout&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=u3(()=>{this.refreshTimeout=null,this._onInput()},this.settings.refreshThrottle)}}_onInput(){const t=this.lastValue;this.settings.shouldLoad.call(this,t)&&this.load(t),this.refreshOptions(),this.trigger("type",t)}onOptionHover(t,e){this.ignoreHover||this.setActiveOption(e,!1)}onFocus(t){var e=this,s=e.isFocused;if(e.isDisabled||e.isReadOnly){e.blur(),Y(t);return}e.ignoreFocus||(e.isFocused=!0,e.settings.preload==="focus"&&e.preload(),s||e.trigger("focus"),e.activeItems.length||(e.inputState(),e.refreshOptions(!!e.settings.openOnFocus)),e.refreshState())}onBlur(t){if(document.hasFocus()!==!1){var e=this;if(e.isFocused){e.isFocused=!1,e.ignoreFocus=!1;var s=()=>{e.close(),e.setActiveItem(),e.setCaret(e.items.length),e.trigger("blur")};e.settings.create&&e.settings.createOnBlur?e.createItem(null,s):s()}}}onOptionSelect(t,e){var s,i=this;e.parentElement&&e.parentElement.matches("[data-disabled]")||(e.classList.contains("create")?i.createItem(null,()=>{i.settings.closeAfterSelect&&i.close()}):(s=e.dataset.value,typeof s<"u"&&(i.lastQuery=null,i.addItem(s),i.settings.closeAfterSelect&&i.close(),!i.settings.hideSelected&&t.type&&/click/.test(t.type)&&i.setActiveOption(e))))}canSelect(t){return!!(this.isOpen&&t&&this.dropdown_content.contains(t))}onItemSelect(t,e){var s=this;return!s.isLocked&&s.settings.mode==="multi"?(Y(t),s.setActiveItem(e,t),!0):!1}canLoad(t){return!(!this.settings.load||this.loadedSearches.hasOwnProperty(t))}load(t){const e=this;if(!e.canLoad(t))return;dt(e.wrapper,e.settings.loadingClass),e.loading++;const s=e.loadCallback.bind(e);e.settings.load.call(e,t,s)}loadCallback(t,e){const s=this;s.loading=Math.max(s.loading-1,0),s.lastQuery=null,s.clearActiveOption(),s.setupOptions(t,e),s.refreshOptions(s.isFocused&&!s.isInputHidden),s.loading||Xt(s.wrapper,s.settings.loadingClass),s.trigger("load",t,e)}preload(){var t=this.wrapper.classList;t.contains("preloaded")||(t.add("preloaded"),this.load(""))}setTextboxValue(t=""){var e=this.control_input,s=e.value!==t;s&&(e.value=t,us(e,"update"),this.lastValue=t)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(t,e){var s=e?[]:["change"];A2(this,s,()=>{this.clear(e),this.addItems(t,e)})}setMaxItems(t){t===0&&(t=null),this.settings.maxItems=t,this.refreshState()}setActiveItem(t,e){var s=this,i,n,r,o,h,c;if(s.settings.mode!=="single"){if(!t){s.clearActiveItems(),s.isFocused&&s.inputState();return}if(i=e&&e.type.toLowerCase(),i==="click"&&pe("shiftKey",e)&&s.activeItems.length){for(c=s.getLastActive(),r=Array.prototype.indexOf.call(s.control.children,c),o=Array.prototype.indexOf.call(s.control.children,t),r>o&&(h=r,r=o,o=h),n=r;n<=o;n++)t=s.control.children[n],s.activeItems.indexOf(t)===-1&&s.setActiveItemClass(t);Y(e)}else i==="click"&&pe(a1,e)||i==="keydown"&&pe("shiftKey",e)?t.classList.contains("active")?s.removeActiveItem(t):s.setActiveItemClass(t):(s.clearActiveItems(),s.setActiveItemClass(t));s.inputState(),s.isFocused||s.focus()}}setActiveItemClass(t){const e=this,s=e.control.querySelector(".last-active");s&&Xt(s,"last-active"),dt(t,"active last-active"),e.trigger("item_select",t),e.activeItems.indexOf(t)==-1&&e.activeItems.push(t)}removeActiveItem(t){var e=this.activeItems.indexOf(t);this.activeItems.splice(e,1),Xt(t,"active")}clearActiveItems(){Xt(this.activeItems,"active"),this.activeItems=[]}setActiveOption(t,e=!0){t!==this.activeOption&&(this.clearActiveOption(),t&&(this.activeOption=t,q(this.focus_node,{"aria-activedescendant":t.getAttribute("id")}),q(t,{"aria-selected":"true"}),dt(t,"active"),e&&this.scrollToOption(t)))}scrollToOption(t,e){if(!t)return;const s=this.dropdown_content,i=s.clientHeight,n=s.scrollTop||0,r=t.offsetHeight,o=t.getBoundingClientRect().top-s.getBoundingClientRect().top+n;o+r>i+n?this.scroll(o-i+r,e):o<n&&this.scroll(o,e)}scroll(t,e){const s=this.dropdown_content;e&&(s.style.scrollBehavior=e),s.scrollTop=t,s.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(Xt(this.activeOption,"active"),q(this.activeOption,{"aria-selected":null})),this.activeOption=null,q(this.focus_node,{"aria-activedescendant":null})}selectAll(){const t=this;if(t.settings.mode==="single")return;const e=t.controlChildren();e.length&&(t.inputState(),t.close(),t.activeItems=e,Q(e,s=>{t.setActiveItemClass(s)}))}inputState(){var t=this;t.control.contains(t.control_input)&&(q(t.control_input,{placeholder:t.settings.placeholder}),t.activeItems.length>0||!t.isFocused&&t.settings.hidePlaceholder&&t.items.length>0?(t.setTextboxValue(),t.isInputHidden=!0):(t.settings.hidePlaceholder&&t.items.length>0&&q(t.control_input,{placeholder:""}),t.isInputHidden=!1),t.wrapper.classList.toggle("input-hidden",t.isInputHidden))}inputValue(){return this.control_input.value.trim()}focus(){var t=this;t.isDisabled||t.isReadOnly||(t.ignoreFocus=!0,t.control_input.offsetWidth?t.control_input.focus():t.focus_node.focus(),setTimeout(()=>{t.ignoreFocus=!1,t.onFocus()},0))}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(t){return this.sifter.getScoreFunction(t,this.getSearchOptions())}getSearchOptions(){var t=this.settings,e=t.sortField;return typeof t.sortField=="string"&&(e=[{field:t.sortField}]),{fields:t.searchField,conjunction:t.searchConjunction,sort:e,nesting:t.nesting}}search(t){var e,s,i=this,n=this.getSearchOptions();if(i.settings.score&&(s=i.settings.score.call(i,t),typeof s!="function"))throw new Error('Tom Select "score" setting must be a function that returns a function');return t!==i.lastQuery?(i.lastQuery=t,e=i.sifter.search(t,Object.assign(n,{score:s})),i.currentResults=e):e=Object.assign({},i.currentResults),i.settings.hideSelected&&(e.items=e.items.filter(r=>{let o=Tt(r.id);return!(o&&i.items.indexOf(o)!==-1)})),e}refreshOptions(t=!0){var e,s,i,n,r,o,h,c,d,l;const u={},f=[];var m=this,v=m.inputValue();const g=v===m.lastQuery||v==""&&m.lastQuery==null;var w=m.search(v),x=null,C=m.settings.shouldOpen||!1,T=m.dropdown_content;g&&(x=m.activeOption,x&&(d=x.closest("[data-group]"))),n=w.items.length,typeof m.settings.maxOptions=="number"&&(n=Math.min(n,m.settings.maxOptions)),n>0&&(C=!0);const P=(S,L)=>{let b=u[S];if(b!==void 0){let V=f[b];if(V!==void 0)return[b,V.fragment]}let E=document.createDocumentFragment();return b=f.length,f.push({fragment:E,order:L,optgroup:S}),[b,E]};for(e=0;e<n;e++){let S=w.items[e];if(!S)continue;let L=S.id,b=m.options[L];if(b===void 0)continue;let E=p1(L),V=m.getOption(E,!0);for(m.settings.hideSelected||V.classList.toggle("selected",m.items.includes(E)),r=b[m.settings.optgroupField]||"",o=Array.isArray(r)?r:[r],s=0,i=o&&o.length;s<i;s++){r=o[s];let H=b.$order,F=m.optgroups[r];F===void 0?r="":H=F.$order;const[$,j]=P(r,H);s>0&&(V=V.cloneNode(!0),q(V,{id:b.$id+"-clone-"+s,"aria-selected":null}),V.classList.add("ts-cloned"),Xt(V,"active"),m.activeOption&&m.activeOption.dataset.value==L&&d&&d.dataset.group===r.toString()&&(x=V)),j.appendChild(V),r!=""&&(u[r]=$)}}m.settings.lockOptgroupOrder&&f.sort((S,L)=>S.order-L.order),h=document.createDocumentFragment(),Q(f,S=>{let L=S.fragment,b=S.optgroup;if(!L||!L.children.length)return;let E=m.optgroups[b];if(E!==void 0){let V=document.createDocumentFragment(),H=m.render("optgroup_header",E);ue(V,H),ue(V,L);let F=m.render("optgroup",{group:E,options:V});ue(h,F)}else ue(h,L)}),T.innerHTML="",ue(T,h),m.settings.highlight&&(y3(T),w.query.length&&w.tokens.length&&Q(w.tokens,S=>{g3(T,S.regex)}));var O=S=>{let L=m.render(S,{input:v});return L&&(C=!0,T.insertBefore(L,T.firstChild)),L};if(m.loading?O("loading"):m.settings.shouldLoad.call(m,v)?w.items.length===0&&O("no_results"):O("not_loading"),c=m.canCreate(v),c&&(l=O("option_create")),m.hasOptions=w.items.length>0||c,C){if(w.items.length>0){if(!x&&m.settings.mode==="single"&&m.items[0]!=null&&(x=m.getOption(m.items[0])),!T.contains(x)){let S=0;l&&!m.settings.addPrecedence&&(S=1),x=m.selectable()[S]}}else l&&(x=l);t&&!m.isOpen&&(m.open(),m.scrollToOption(x,"auto")),m.setActiveOption(x)}else m.clearActiveOption(),t&&m.isOpen&&m.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(t,e=!1){const s=this;if(Array.isArray(t))return s.addOptions(t,e),!1;const i=Tt(t[s.settings.valueField]);return i===null||s.options.hasOwnProperty(i)?!1:(t.$order=t.$order||++s.order,t.$id=s.inputId+"-opt-"+t.$order,s.options[i]=t,s.lastQuery=null,e&&(s.userOptions[i]=e,s.trigger("option_add",i,t)),i)}addOptions(t,e=!1){Q(t,s=>{this.addOption(s,e)})}registerOption(t){return this.addOption(t)}registerOptionGroup(t){var e=Tt(t[this.settings.optgroupValueField]);return e===null?!1:(t.$order=t.$order||++this.order,this.optgroups[e]=t,e)}addOptionGroup(t,e){var s;e[this.settings.optgroupValueField]=t,(s=this.registerOptionGroup(e))&&this.trigger("optgroup_add",s,e)}removeOptionGroup(t){this.optgroups.hasOwnProperty(t)&&(delete this.optgroups[t],this.clearCache(),this.trigger("optgroup_remove",t))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(t,e){const s=this;var i,n;const r=Tt(t),o=Tt(e[s.settings.valueField]);if(r===null)return;const h=s.options[r];if(h==null)return;if(typeof o!="string")throw new Error("Value must be set in option data");const c=s.getOption(r),d=s.getItem(r);if(e.$order=e.$order||h.$order,delete s.options[r],s.uncacheValue(o),s.options[o]=e,c){if(s.dropdown_content.contains(c)){const l=s._render("option",e);Ns(c,l),s.activeOption===c&&s.setActiveOption(l)}c.remove()}d&&(n=s.items.indexOf(r),n!==-1&&s.items.splice(n,1,o),i=s._render("item",e),d.classList.contains("active")&&dt(i,"active"),Ns(d,i)),s.lastQuery=null}removeOption(t,e){const s=this;t=p1(t),s.uncacheValue(t),delete s.userOptions[t],delete s.options[t],s.lastQuery=null,s.trigger("option_remove",t),s.removeItem(t,e)}clearOptions(t){const e=(t||this.clearFilter).bind(this);this.loadedSearches={},this.userOptions={},this.clearCache();const s={};Q(this.options,(i,n)=>{e(i,n)&&(s[n]=i)}),this.options=this.sifter.items=s,this.lastQuery=null,this.trigger("option_clear")}clearFilter(t,e){return this.items.indexOf(e)>=0}getOption(t,e=!1){const s=Tt(t);if(s===null)return null;const i=this.options[s];if(i!=null){if(i.$div)return i.$div;if(e)return this._render("option",i)}return null}getAdjacent(t,e,s="option"){var i=this,n;if(!t)return null;s=="item"?n=i.controlChildren():n=i.dropdown_content.querySelectorAll("[data-selectable]");for(let r=0;r<n.length;r++)if(n[r]==t)return e>0?n[r+1]:n[r-1];return null}getItem(t){if(typeof t=="object")return t;var e=Tt(t);return e!==null?this.control.querySelector(`[data-value="${E2(e)}"]`):null}addItems(t,e){var s=this,i=Array.isArray(t)?t:[t];i=i.filter(r=>s.items.indexOf(r)===-1);const n=i[i.length-1];i.forEach(r=>{s.isPending=r!==n,s.addItem(r,e)})}addItem(t,e){var s=e?[]:["change","dropdown_close"];A2(this,s,()=>{var i,n;const r=this,o=r.settings.mode,h=Tt(t);if(!(h&&r.items.indexOf(h)!==-1&&(o==="single"&&r.close(),o==="single"||!r.settings.duplicates))&&!(h===null||!r.options.hasOwnProperty(h))&&(o==="single"&&r.clear(e),!(o==="multi"&&r.isFull()))){if(i=r._render("item",r.options[h]),r.control.contains(i)&&(i=i.cloneNode(!0)),n=r.isFull(),r.items.splice(r.caretPos,0,h),r.insertAtCaret(i),r.isSetup){if(!r.isPending&&r.settings.hideSelected){let c=r.getOption(h),d=r.getAdjacent(c,1);d&&r.setActiveOption(d)}!r.isPending&&!r.settings.closeAfterSelect&&r.refreshOptions(r.isFocused&&o!=="single"),r.settings.closeAfterSelect!=!1&&r.isFull()?r.close():r.isPending||r.positionDropdown(),r.trigger("item_add",h,i),r.isPending||r.updateOriginalInput({silent:e})}(!r.isPending||!n&&r.isFull())&&(r.inputState(),r.refreshState())}})}removeItem(t=null,e){const s=this;if(t=s.getItem(t),!t)return;var i,n;const r=t.dataset.value;i=T2(t),t.remove(),t.classList.contains("active")&&(n=s.activeItems.indexOf(t),s.activeItems.splice(n,1),Xt(t,"active")),s.items.splice(i,1),s.lastQuery=null,!s.settings.persist&&s.userOptions.hasOwnProperty(r)&&s.removeOption(r,e),i<s.caretPos&&s.setCaret(s.caretPos-1),s.updateOriginalInput({silent:e}),s.refreshState(),s.positionDropdown(),s.trigger("item_remove",r,t)}createItem(t=null,e=()=>{}){arguments.length===3&&(e=arguments[2]),typeof e!="function"&&(e=()=>{});var s=this,i=s.caretPos,n;if(t=t||s.inputValue(),!s.canCreate(t))return e(),!1;s.lock();var r=!1,o=h=>{if(s.unlock(),!h||typeof h!="object")return e();var c=Tt(h[s.settings.valueField]);if(typeof c!="string")return e();s.setTextboxValue(),s.addOption(h,!0),s.setCaret(i),s.addItem(c),e(h),r=!0};return typeof s.settings.create=="function"?n=s.settings.create.call(this,t,o):n={[s.settings.labelField]:t,[s.settings.valueField]:t},r||o(n),!0}refreshItems(){var t=this;t.lastQuery=null,t.isSetup&&t.addItems(t.items),t.updateOriginalInput(),t.refreshState()}refreshState(){const t=this;t.refreshValidityState();const e=t.isFull(),s=t.isLocked;t.wrapper.classList.toggle("rtl",t.rtl);const i=t.wrapper.classList;i.toggle("focus",t.isFocused),i.toggle("disabled",t.isDisabled),i.toggle("readonly",t.isReadOnly),i.toggle("required",t.isRequired),i.toggle("invalid",!t.isValid),i.toggle("locked",s),i.toggle("full",e),i.toggle("input-active",t.isFocused&&!t.isInputHidden),i.toggle("dropdown-active",t.isOpen),i.toggle("has-options",v3(t.options)),i.toggle("has-items",t.items.length>0)}refreshValidityState(){var t=this;t.input.validity&&(t.isValid=t.input.validity.valid,t.isInvalid=!t.isValid)}isFull(){return this.settings.maxItems!==null&&this.items.length>=this.settings.maxItems}updateOriginalInput(t={}){const e=this;var s,i;const n=e.input.querySelector('option[value=""]');if(e.is_select_tag){let h=function(c,d,l){return c||(c=Dt('<option value="'+ls(d)+'">'+ls(l)+"</option>")),c!=n&&e.input.append(c),r.push(c),(c!=n||o>0)&&(c.selected=!0),c};const r=[],o=e.input.querySelectorAll("option:checked").length;e.input.querySelectorAll("option:checked").forEach(c=>{c.selected=!1}),e.items.length==0&&e.settings.mode=="single"?h(n,"",""):e.items.forEach(c=>{if(s=e.options[c],i=s[e.settings.labelField]||"",r.includes(s.$option)){const d=e.input.querySelector(`option[value="${E2(c)}"]:not(:checked)`);h(d,c,i)}else s.$option=h(s.$option,c,i)})}else e.input.value=e.getValue();e.isSetup&&(t.silent||e.trigger("change",e.getValue()))}open(){var t=this;t.isLocked||t.isOpen||t.settings.mode==="multi"&&t.isFull()||(t.isOpen=!0,q(t.focus_node,{"aria-expanded":"true"}),t.refreshState(),e1(t.dropdown,{visibility:"hidden",display:"block"}),t.positionDropdown(),e1(t.dropdown,{visibility:"visible",display:"block"}),t.focus(),t.trigger("dropdown_open",t.dropdown))}close(t=!0){var e=this,s=e.isOpen;t&&(e.setTextboxValue(),e.settings.mode==="single"&&e.items.length&&e.inputState()),e.isOpen=!1,q(e.focus_node,{"aria-expanded":"false"}),e1(e.dropdown,{display:"none"}),e.settings.hideSelected&&e.clearActiveOption(),e.refreshState(),s&&e.trigger("dropdown_close",e.dropdown)}positionDropdown(){if(this.settings.dropdownParent==="body"){var t=this.control,e=t.getBoundingClientRect(),s=t.offsetHeight+e.top+window.scrollY,i=e.left+window.scrollX;e1(this.dropdown,{width:e.width+"px",top:s+"px",left:i+"px"})}}clear(t){var e=this;if(e.items.length){var s=e.controlChildren();Q(s,i=>{e.removeItem(i,!0)}),e.inputState(),t||e.updateOriginalInput(),e.trigger("clear")}}insertAtCaret(t){const e=this,s=e.caretPos,i=e.control;i.insertBefore(t,i.children[s]||null),e.setCaret(s+1)}deleteSelection(t){var e,s,i,n,r=this;e=t&&t.keyCode===L2?-1:1,s=m3(r.control_input);const o=[];if(r.activeItems.length)n=C2(r.activeItems,e),i=T2(n),e>0&&i++,Q(r.activeItems,h=>o.push(h));else if((r.isFocused||r.settings.mode==="single")&&r.items.length){const h=r.controlChildren();let c;e<0&&s.start===0&&s.length===0?c=h[r.caretPos-1]:e>0&&s.start===r.inputValue().length&&(c=h[r.caretPos]),c!==void 0&&o.push(c)}if(!r.shouldDelete(o,t))return!1;for(Y(t,!0),typeof i<"u"&&r.setCaret(i);o.length;)r.removeItem(o.pop());return r.inputState(),r.positionDropdown(),r.refreshOptions(!1),!0}shouldDelete(t,e){const s=t.map(i=>i.dataset.value);return!(!s.length||typeof this.settings.onDelete=="function"&&this.settings.onDelete(s,e)===!1)}advanceSelection(t,e){var s,i,n=this;n.rtl&&(t*=-1),!n.inputValue().length&&(pe(a1,e)||pe("shiftKey",e)?(s=n.getLastActive(t),s?s.classList.contains("active")?i=n.getAdjacent(s,t,"item"):i=s:t>0?i=n.control_input.nextElementSibling:i=n.control_input.previousElementSibling,i&&(i.classList.contains("active")&&n.removeActiveItem(s),n.setActiveItemClass(i))):n.moveCaret(t))}moveCaret(t){}getLastActive(t){let e=this.control.querySelector(".last-active");if(e)return e;var s=this.control.querySelectorAll(".active");if(s)return C2(s,t)}setCaret(t){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.setLocked(!0)}unlock(){this.setLocked(!1)}setLocked(t=this.isReadOnly||this.isDisabled){this.isLocked=t,this.refreshState()}disable(){this.setDisabled(!0),this.close()}enable(){this.setDisabled(!1)}setDisabled(t){this.focus_node.tabIndex=t?-1:this.tabIndex,this.isDisabled=t,this.input.disabled=t,this.control_input.disabled=t,this.setLocked()}setReadOnly(t){this.isReadOnly=t,this.input.readOnly=t,this.control_input.readOnly=t,this.setLocked()}destroy(){var t=this,e=t.revertSettings;t.trigger("destroy"),t.off(),t.wrapper.remove(),t.dropdown.remove(),t.input.innerHTML=e.innerHTML,t.input.tabIndex=e.tabIndex,Xt(t.input,"tomselected","ts-hidden-accessible"),t._destroy(),delete t.input.tomselect}render(t,e){var s,i;const n=this;if(typeof this.settings.render[t]!="function"||(i=n.settings.render[t].call(this,e,ls),!i))return null;if(i=Dt(i),t==="option"||t==="option_create"?e[n.settings.disabledField]?q(i,{"aria-disabled":"true"}):q(i,{"data-selectable":""}):t==="optgroup"&&(s=e.group[n.settings.optgroupValueField],q(i,{"data-group":s}),e.group[n.settings.disabledField]&&q(i,{"data-disabled":""})),t==="option"||t==="item"){const r=p1(e[n.settings.valueField]);q(i,{"data-value":r}),t==="item"?(dt(i,n.settings.itemClass),q(i,{"data-ts-item":""})):(dt(i,n.settings.optionClass),q(i,{role:"option",id:e.$id}),e.$div=i,n.options[r]=e)}return i}_render(t,e){const s=this.render(t,e);if(s==null)throw"HTMLElement expected";return s}clearCache(){Q(this.options,t=>{t.$div&&(t.$div.remove(),delete t.$div)})}uncacheValue(t){const e=this.getOption(t);e&&e.remove()}canCreate(t){return this.settings.create&&t.length>0&&this.settings.createFilter.call(this,t)}hook(t,e,s){var i=this,n=i[e];i[e]=function(){var r,o;return t==="after"&&(r=n.apply(i,arguments)),o=s.apply(i,arguments),t==="instead"?o:(t==="before"&&(r=n.apply(i,arguments)),r)}}}const L3=(a,t,e,s)=>{a.addEventListener(t,e,s)};function V3(){L3(this.input,"change",()=>{this.sync()})}const k3=a=>typeof a>"u"||a===null?null:H3(a),H3=a=>typeof a=="boolean"?a?"1":"0":a+"",D2=(a,t=!1)=>{a&&(a.preventDefault(),t&&a.stopPropagation())},O3=a=>{if(a.jquery)return a[0];if(a instanceof HTMLElement)return a;if(D3(a)){var t=document.createElement("template");return t.innerHTML=a.trim(),t.content.firstChild}return document.querySelector(a)},D3=a=>typeof a=="string"&&a.indexOf("<")>-1;function I3(a){var t=this,e=t.onOptionSelect;t.settings.hideSelected=!1;const s=Object.assign({className:"tomselect-checkbox",checkedClassNames:void 0,uncheckedClassNames:void 0},a);var i=function(o,h){h?(o.checked=!0,s.uncheckedClassNames&&o.classList.remove(...s.uncheckedClassNames),s.checkedClassNames&&o.classList.add(...s.checkedClassNames)):(o.checked=!1,s.checkedClassNames&&o.classList.remove(...s.checkedClassNames),s.uncheckedClassNames&&o.classList.add(...s.uncheckedClassNames))},n=function(o){setTimeout(()=>{var h=o.querySelector("input."+s.className);h instanceof HTMLInputElement&&i(h,o.classList.contains("selected"))},1)};t.hook("after","setupTemplates",()=>{var r=t.settings.render.option;t.settings.render.option=(o,h)=>{var c=O3(r.call(t,o,h)),d=document.createElement("input");s.className&&d.classList.add(s.className),d.addEventListener("click",function(u){D2(u)}),d.type="checkbox";const l=k3(o[t.settings.valueField]);return i(d,!!(l&&t.items.indexOf(l)>-1)),c.prepend(d),c}}),t.on("item_remove",r=>{var o=t.getOption(r);o&&(o.classList.remove("selected"),n(o))}),t.on("item_add",r=>{var o=t.getOption(r);o&&n(o)}),t.hook("instead","onOptionSelect",(r,o)=>{if(o.classList.contains("selected")){o.classList.remove("selected"),t.removeItem(o.dataset.value),t.refreshOptions(),D2(r,!0);return}e.call(t,r,o),n(o)})}const P3=a=>{if(a.jquery)return a[0];if(a instanceof HTMLElement)return a;if(N3(a)){var t=document.createElement("template");return t.innerHTML=a.trim(),t.content.firstChild}return document.querySelector(a)},N3=a=>typeof a=="string"&&a.indexOf("<")>-1;function $3(a){const t=this,e=Object.assign({className:"clear-button",title:"Clear All",html:s=>`<div class="${s.className}" title="${s.title}">&#10799;</div>`},a);t.on("initialize",()=>{var s=P3(e.html(e));s.addEventListener("click",i=>{t.isLocked||(t.clear(),t.settings.mode==="single"&&t.settings.allowEmptyOption&&t.addItem(""),i.preventDefault(),i.stopPropagation())}),t.control.appendChild(s)})}const F3=(a,t=!1)=>{a&&(a.preventDefault(),t&&a.stopPropagation())},Oe=(a,t,e,s)=>{a.addEventListener(t,e,s)},R3=(a,t)=>{if(Array.isArray(a))a.forEach(t);else for(var e in a)a.hasOwnProperty(e)&&t(a[e],e)},z3=a=>{if(a.jquery)return a[0];if(a instanceof HTMLElement)return a;if(B3(a)){var t=document.createElement("template");return t.innerHTML=a.trim(),t.content.firstChild}return document.querySelector(a)},B3=a=>typeof a=="string"&&a.indexOf("<")>-1,W3=(a,t)=>{R3(t,(e,s)=>{e==null?a.removeAttribute(s):a.setAttribute(s,""+e)})},q3=(a,t)=>{var e;(e=a.parentNode)==null||e.insertBefore(t,a.nextSibling)},Z3=(a,t)=>{var e;(e=a.parentNode)==null||e.insertBefore(t,a)},U3=(a,t)=>{do{var e;if(t=(e=t)==null?void 0:e.previousElementSibling,a==t)return!0}while(t&&t.previousElementSibling);return!1};function j3(){var a=this;if(a.settings.mode!=="multi")return;var t=a.lock,e=a.unlock;let s=!0,i;a.hook("after","setupTemplates",()=>{var n=a.settings.render.item;a.settings.render.item=(r,o)=>{const h=z3(n.call(a,r,o));W3(h,{draggable:"true"});const c=v=>{s||F3(v),v.stopPropagation()},d=v=>{i=h,setTimeout(()=>{h.classList.add("ts-dragging")},0)},l=v=>{v.preventDefault(),h.classList.add("ts-drag-over"),f(h,i)},u=()=>{h.classList.remove("ts-drag-over")},f=(v,g)=>{g!==void 0&&(U3(g,h)?q3(v,g):Z3(v,g))},m=()=>{var v;document.querySelectorAll(".ts-drag-over").forEach(w=>w.classList.remove("ts-drag-over")),(v=i)==null||v.classList.remove("ts-dragging"),i=void 0;var g=[];a.control.querySelectorAll("[data-value]").forEach(w=>{if(w.dataset.value){let x=w.dataset.value;x&&g.push(x)}}),a.setValue(g)};return Oe(h,"mousedown",c),Oe(h,"dragstart",d),Oe(h,"dragenter",l),Oe(h,"dragover",l),Oe(h,"dragleave",u),Oe(h,"dragend",m),h}}),a.hook("instead","lock",()=>(s=!1,t.call(a))),a.hook("instead","unlock",()=>(s=!0,e.call(a)))}const Y3=(a,t=!1)=>{a&&(a.preventDefault(),t&&a.stopPropagation())},G3=a=>{if(a.jquery)return a[0];if(a instanceof HTMLElement)return a;if(K3(a)){var t=document.createElement("template");return t.innerHTML=a.trim(),t.content.firstChild}return document.querySelector(a)},K3=a=>typeof a=="string"&&a.indexOf("<")>-1;function X3(a){const t=this,e=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:s=>'<div class="'+s.headerClass+'"><div class="'+s.titleRowClass+'"><span class="'+s.labelClass+'">'+s.title+'</span><a class="'+s.closeClass+'">&times;</a></div></div>'},a);t.on("initialize",()=>{var s=G3(e.html(e)),i=s.querySelector("."+e.closeClass);i&&i.addEventListener("click",n=>{Y3(n,!0),t.close()}),t.dropdown.insertBefore(s,t.dropdown.firstChild)})}const Q3=(a,t)=>{if(Array.isArray(a))a.forEach(t);else for(var e in a)a.hasOwnProperty(e)&&t(a[e],e)},J3=(a,...t)=>{var e=tf(t);a=ef(a),a.map(s=>{e.map(i=>{s.classList.remove(i)})})},tf=a=>{var t=[];return Q3(a,e=>{typeof e=="string"&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},ef=a=>(Array.isArray(a)||(a=[a]),a),af=(a,t)=>{if(!a)return-1;t=t||a.nodeName;for(var e=0;a=a.previousElementSibling;)a.matches(t)&&e++;return e};function sf(){var a=this;a.hook("instead","setCaret",t=>{a.settings.mode==="single"||!a.control.contains(a.control_input)?t=a.items.length:(t=Math.max(0,Math.min(a.items.length,t)),t!=a.caretPos&&!a.isPending&&a.controlChildren().forEach((e,s)=>{s<t?a.control_input.insertAdjacentElement("beforebegin",e):a.control.appendChild(e)})),a.caretPos=t}),a.hook("instead","moveCaret",t=>{if(!a.isFocused)return;const e=a.getLastActive(t);if(e){const s=af(e);a.setCaret(t>0?s+1:s),a.setActiveItem(),J3(e,"last-active")}else a.setCaret(a.caretPos+t)})}const nf=27,rf=9,of=(a,t=!1)=>{a&&(a.preventDefault(),t&&a.stopPropagation())},hf=(a,t,e,s)=>{a.addEventListener(t,e,s)},cf=(a,t)=>{if(Array.isArray(a))a.forEach(t);else for(var e in a)a.hasOwnProperty(e)&&t(a[e],e)},I2=a=>{if(a.jquery)return a[0];if(a instanceof HTMLElement)return a;if(df(a)){var t=document.createElement("template");return t.innerHTML=a.trim(),t.content.firstChild}return document.querySelector(a)},df=a=>typeof a=="string"&&a.indexOf("<")>-1,lf=(a,...t)=>{var e=pf(t);a=uf(a),a.map(s=>{e.map(i=>{s.classList.add(i)})})},pf=a=>{var t=[];return cf(a,e=>{typeof e=="string"&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},uf=a=>(Array.isArray(a)||(a=[a]),a);function ff(){const a=this;a.settings.shouldOpen=!0,a.hook("before","setup",()=>{a.focus_node=a.control,lf(a.control_input,"dropdown-input");const t=I2('<div class="dropdown-input-wrap">');t.append(a.control_input),a.dropdown.insertBefore(t,a.dropdown.firstChild);const e=I2('<input class="items-placeholder" tabindex="-1" />');e.placeholder=a.settings.placeholder||"",a.control.append(e)}),a.on("initialize",()=>{a.control_input.addEventListener("keydown",e=>{switch(e.keyCode){case nf:a.isOpen&&(of(e,!0),a.close()),a.clearActiveItems();return;case rf:a.focus_node.tabIndex=-1;break}return a.onKeyDown.call(a,e)}),a.on("blur",()=>{a.focus_node.tabIndex=a.isDisabled?-1:a.tabIndex}),a.on("dropdown_open",()=>{a.control_input.focus()});const t=a.onBlur;a.hook("instead","onBlur",e=>{if(!(e&&e.relatedTarget==a.control_input))return t.call(a)}),hf(a.control_input,"blur",()=>a.onBlur()),a.hook("before","close",()=>{a.isOpen&&a.focus_node.focus({preventScroll:!0})})})}const s1=(a,t,e,s)=>{a.addEventListener(t,e,s)};function mf(){var a=this;a.on("initialize",()=>{var t=document.createElement("span"),e=a.control_input;t.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",a.wrapper.appendChild(t);var s=["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"];for(const n of s)t.style[n]=e.style[n];var i=()=>{t.textContent=e.value,e.style.width=t.clientWidth+"px"};i(),a.on("update item_add item_remove",i),s1(e,"input",i),s1(e,"keyup",i),s1(e,"blur",i),s1(e,"update",i)})}function Mf(){var a=this,t=a.deleteSelection;this.hook("instead","deleteSelection",e=>a.activeItems.length?t.call(a,e):!1)}function vf(){this.hook("instead","setActiveItem",()=>{}),this.hook("instead","selectAll",()=>{})}const P2=37,gf=39,yf=(a,t,e)=>{for(;a&&a.matches;){if(a.matches(t))return a;a=a.parentNode}},wf=(a,t)=>{if(!a)return-1;t=t||a.nodeName;for(var e=0;a=a.previousElementSibling;)a.matches(t)&&e++;return e};function xf(){var a=this,t=a.onKeyDown;a.hook("instead","onKeyDown",e=>{var s,i,n,r;if(!a.isOpen||!(e.keyCode===P2||e.keyCode===gf))return t.call(a,e);a.ignoreHover=!0,r=yf(a.activeOption,"[data-group]"),s=wf(a.activeOption,"[data-selectable]"),r&&(e.keyCode===P2?r=r.previousSibling:r=r.nextSibling,r&&(n=r.querySelectorAll("[data-selectable]"),i=n[Math.min(n.length-1,s)],i&&a.setActiveOption(i)))})}const _f=a=>(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),N2=(a,t=!1)=>{a&&(a.preventDefault(),t&&a.stopPropagation())},$2=(a,t,e,s)=>{a.addEventListener(t,e,s)},F2=a=>{if(a.jquery)return a[0];if(a instanceof HTMLElement)return a;if(Sf(a)){var t=document.createElement("template");return t.innerHTML=a.trim(),t.content.firstChild}return document.querySelector(a)},Sf=a=>typeof a=="string"&&a.indexOf("<")>-1;function bf(a){const t=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},a);var e=this;if(t.append){var s='<a href="javascript:void(0)" class="'+t.className+'" tabindex="-1" title="'+_f(t.title)+'">'+t.label+"</a>";e.hook("after","setupTemplates",()=>{var i=e.settings.render.item;e.settings.render.item=(n,r)=>{var o=F2(i.call(e,n,r)),h=F2(s);return o.appendChild(h),$2(h,"mousedown",c=>{N2(c,!0)}),$2(h,"click",c=>{e.isLocked||(N2(c,!0),!e.isLocked&&e.shouldDelete([o],c)&&(e.removeItem(o),e.refreshOptions(!1),e.inputState()))}),o}})}}function Af(a){const t=this,e=Object.assign({text:s=>s[t.settings.labelField]},a);t.on("item_remove",function(s){if(t.isFocused&&t.control_input.value.trim()===""){var i=t.options[s];i&&t.setTextboxValue(e.text.call(t,i))}})}const Ef=(a,t)=>{if(Array.isArray(a))a.forEach(t);else for(var e in a)a.hasOwnProperty(e)&&t(a[e],e)},Cf=(a,...t)=>{var e=Tf(t);a=Lf(a),a.map(s=>{e.map(i=>{s.classList.add(i)})})},Tf=a=>{var t=[];return Ef(a,e=>{typeof e=="string"&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},Lf=a=>(Array.isArray(a)||(a=[a]),a);function Vf(){const a=this,t=a.canLoad,e=a.clearActiveOption,s=a.loadCallback;var i={},n,r=!1,o,h=[];if(a.settings.shouldLoadMore||(a.settings.shouldLoadMore=()=>{if(n.clientHeight/(n.scrollHeight-n.scrollTop)>.9)return!0;if(a.activeOption){var u=a.selectable(),f=Array.from(u).indexOf(a.activeOption);if(f>=u.length-2)return!0}return!1}),!a.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method";a.settings.sortField=[{field:"$order"},{field:"$score"}];const c=l=>typeof a.settings.maxOptions=="number"&&n.children.length>=a.settings.maxOptions?!1:!!(l in i&&i[l]),d=(l,u)=>a.items.indexOf(u)>=0||h.indexOf(u)>=0;a.setNextUrl=(l,u)=>{i[l]=u},a.getUrl=l=>{if(l in i){const u=i[l];return i[l]=!1,u}return a.clearPagination(),a.settings.firstUrl.call(a,l)},a.clearPagination=()=>{i={}},a.hook("instead","clearActiveOption",()=>{if(!r)return e.call(a)}),a.hook("instead","canLoad",l=>l in i?c(l):t.call(a,l)),a.hook("instead","loadCallback",(l,u)=>{if(!r)a.clearOptions(d);else if(o){const f=l[0];f!==void 0&&(o.dataset.value=f[a.settings.valueField])}s.call(a,l,u),r=!1}),a.hook("after","refreshOptions",()=>{const l=a.lastValue;var u;c(l)?(u=a.render("loading_more",{query:l}),u&&(u.setAttribute("data-selectable",""),o=u)):l in i&&!n.querySelector(".no-results")&&(u=a.render("no_more_results",{query:l})),u&&(Cf(u,a.settings.optionClass),n.append(u))}),a.on("initialize",()=>{h=Object.keys(a.options),n=a.dropdown_content,a.settings.render=Object.assign({},{loading_more:()=>'<div class="loading-more-results">Loading more results ... </div>',no_more_results:()=>'<div class="no-more-results">No more results</div>'},a.settings.render),n.addEventListener("scroll",()=>{a.settings.shouldLoadMore.call(a)&&c(a.lastValue)&&(r||(r=!0,a.load.call(a,a.lastValue)))})})}J.define("change_listener",V3);J.define("checkbox_options",I3);J.define("clear_button",$3);J.define("drag_drop",j3);J.define("dropdown_header",X3);J.define("caret_position",sf);J.define("dropdown_input",ff);J.define("input_autogrow",mf);J.define("no_backspace_delete",Mf);J.define("no_active_items",vf);J.define("optgroup_columns",xf);J.define("remove_button",bf);J.define("restore_on_backspace",Af);J.define("virtual_scroll",Vf);class At extends Error{}class kf{constructor(){this.base="TD:",this.failedToSetInvalidDate="Failed to set invalid date",this.failedToParseInput="Failed parse input field"}unexpectedOption(t){const e=new At(`${this.base} Unexpected option: ${t} does not match a known option.`);throw e.code=1,e}unexpectedOptions(t){const e=new At(`${this.base}: ${t.join(", ")}`);throw e.code=1,e}unexpectedOptionValue(t,e,s){const i=new At(`${this.base} Unexpected option value: ${t} does not accept a value of "${e}". Valid values are: ${s.join(", ")}`);throw i.code=2,i}typeMismatch(t,e,s){const i=new At(`${this.base} Mismatch types: ${t} has a type of ${e} instead of the required ${s}`);throw i.code=3,i}numbersOutOfRange(t,e,s){const i=new At(`${this.base} ${t} expected an array of number between ${e} and ${s}.`);throw i.code=4,i}failedToParseDate(t,e,s=!1){const i=new At(`${this.base} Could not correctly parse "${e}" to a date for ${t}.`);if(i.code=5,!s)throw i;console.warn(i)}mustProvideElement(){const t=new At(`${this.base} No element was provided.`);throw t.code=6,t}subscribeMismatch(){const t=new At(`${this.base} The subscribed events does not match the number of callbacks`);throw t.code=7,t}conflictingConfiguration(t){const e=new At(`${this.base} A configuration value conflicts with another rule. ${t}`);throw e.code=8,e}customDateFormatError(t){const e=new At(`${this.base} Custom Date Format: ${t}`);throw e.code=9,e}dateString(){console.warn(`${this.base} Using a string for date options is not recommended unless you specify an ISO string or use the customDateFormat plugin.`)}deprecatedWarning(t,e){console.warn(`${this.base} Warning ${t} is deprecated and will be removed in a future version. ${e}`)}throwError(t){const e=new At(`${this.base} ${t}`);throw e.code=9,e}}const mc="tempus-dominus",Mc="td";class Hf{constructor(){this.key=`.${Mc}`,this.change=`change${this.key}`,this.update=`update${this.key}`,this.error=`error${this.key}`,this.show=`show${this.key}`,this.hide=`hide${this.key}`,this.blur=`blur${this.key}`,this.focus=`focus${this.key}`,this.keyup=`keyup${this.key}`,this.keydown=`keydown${this.key}`}}class Of{constructor(){this.widget=`${mc}-widget`,this.calendarHeader="calendar-header",this.switch="picker-switch",this.toolbar="toolbar",this.noHighlight="no-highlight",this.sideBySide="timepicker-sbs",this.previous="previous",this.next="next",this.disabled="disabled",this.old="old",this.new="new",this.active="active",this.dateContainer="date-container",this.decadesContainer=`${this.dateContainer}-decades`,this.decade="decade",this.yearsContainer=`${this.dateContainer}-years`,this.year="year",this.monthsContainer=`${this.dateContainer}-months`,this.month="month",this.daysContainer=`${this.dateContainer}-days`,this.day="day",this.calendarWeeks="cw",this.dayOfTheWeek="dow",this.today="today",this.weekend="weekend",this.rangeIn="range-in",this.rangeStart="range-start",this.rangeEnd="range-end",this.timeContainer="time-container",this.separator="separator",this.clockContainer=`${this.timeContainer}-clock`,this.hourContainer=`${this.timeContainer}-hour`,this.minuteContainer=`${this.timeContainer}-minute`,this.secondContainer=`${this.timeContainer}-second`,this.hour="hour",this.minute="minute",this.second="second",this.toggleMeridiem="toggleMeridiem",this.show="show",this.collapsing="td-collapsing",this.collapse="td-collapse",this.inline="inline",this.lightTheme="light",this.darkTheme="dark",this.isDarkPreferredQuery="(prefers-color-scheme: dark)"}}class p{}p.NAME=mc;p.dataKey=Mc;p.events=new Hf;p.css=new Of;p.errorMessages=new kf;const Df={dateFormats:{LTS:"h:mm:ss T",LT:"h:mm T",L:"MM/dd/yyyy",LL:"MMMM d, yyyy",LLL:"MMMM d, yyyy h:mm T",LLLL:"dddd, MMMM d, yyyy h:mm T"},format:"L LT",locale:"default",hourCycle:void 0,ordinal:a=>{const t=["th","st","nd","rd"],e=a%100;return`[${a}${t[(e-20)%10]||t[e]||t[0]}]`}};var gt={...Df},M;(function(a){a.seconds="seconds",a.minutes="minutes",a.hours="hours",a.date="date",a.month="month",a.year="year"})(M||(M={}));const Ma={month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"},R2=a=>{switch(a){case"date":return{dateStyle:"short"};case"month":return{month:"numeric",year:"numeric"};case"year":return{year:"numeric"}}},vc=a=>{if(!a)return"h12";const t={hour:"2-digit",minute:"2-digit",numberingSystem:"latn"},e=new ct().setLocalization({locale:a});e.hours=0;const s=e.parts(void 0,t).hour;if(s==="12")return"h12";if(s==="24")return"h24";e.hours=23;const i=e.parts(void 0,t).hour;if(s==="00"&&i==="11")return"h11";if(s==="00"&&i==="23")return"h23";console.warn(`couldn't determine hour cycle for ${a}. start: ${s}. end: ${i}`)};let ct=class nt extends Date{constructor(){super(...arguments),this.localization=gt,this.nonLeapLadder=[0,31,59,90,120,151,181,212,243,273,304,334],this.leapLadder=[0,31,60,91,121,152,182,213,244,274,305,335],this.dateTimeRegex=/(\[[^[\]]*])|y{1,4}|M{1,4}|d{1,4}|H{1,2}|h{1,2}|t|T|m{1,2}|s{1,2}|f{3}/g,this.formattingTokens=/(\[[^[\]]*])|([-_:/.,()\s]+)|(T|t|yyyy|yy?|MM?M?M?|Do|dd?d?d?|hh?|HH?|mm?|ss?)/g,this.match2=/\d\d/,this.match3=/\d{3}/,this.match4=/\d{4}/,this.match1to2=/\d\d?/,this.matchSigned=/[+-]?\d+/,this.matchOffset=/[+-]\d\d:?(\d\d)?|Z/,this.matchWord=/[^\d_:/,\-()\s]+/,this.zoneExpressions=[this.matchOffset,(t,e)=>{t.offset=this.offsetFromString(e)}],this.expressions={t:{pattern:void 0,parser:(t,e)=>{t.afternoon=this.meridiemMatch(e)}},T:{pattern:void 0,parser:(t,e)=>{t.afternoon=this.meridiemMatch(e)}},fff:{pattern:this.match3,parser:(t,e)=>{t.milliseconds=+e}},s:{pattern:this.match1to2,parser:this.addInput("seconds")},ss:{pattern:this.match1to2,parser:this.addInput("seconds")},m:{pattern:this.match1to2,parser:this.addInput("minutes")},mm:{pattern:this.match1to2,parser:this.addInput("minutes")},H:{pattern:this.match1to2,parser:this.addInput("hours")},h:{pattern:this.match1to2,parser:this.addInput("hours")},HH:{pattern:this.match1to2,parser:this.addInput("hours")},hh:{pattern:this.match1to2,parser:this.addInput("hours")},d:{pattern:this.match1to2,parser:this.addInput("day")},dd:{pattern:this.match2,parser:this.addInput("day")},Do:{pattern:this.matchWord,parser:(t,e)=>{if(t.day=+(e.match(/\d+/)[0]||1),!!this.localization.ordinal)for(let s=1;s<=31;s+=1)this.localization.ordinal(s).replace(/[[\]]/g,"")===e&&(t.day=s)}},M:{pattern:this.match1to2,parser:this.addInput("month")},MM:{pattern:this.match2,parser:this.addInput("month")},MMM:{pattern:this.matchWord,parser:(t,e)=>{const s=this.getAllMonths(),n=(this.getAllMonths("short")||s.map(r=>r.slice(0,3))).indexOf(e)+1;if(n<1)throw new Error;t.month=n%12||n}},MMMM:{pattern:this.matchWord,parser:(t,e)=>{const i=this.getAllMonths().indexOf(e)+1;if(i<1)throw new Error;t.month=i%12||i}},y:{pattern:this.matchSigned,parser:this.addInput("year")},yy:{pattern:this.match2,parser:(t,e)=>{t.year=this.parseTwoDigitYear(+e)}},yyyy:{pattern:this.match4,parser:this.addInput("year")}}}setLocale(t){return this.localization||(this.localization=gt,this.localization.locale=t),this}setLocalization(t){return this.localization=t,this}static convert(t,e="default",s=void 0){if(!t)throw new Error("A date is required");return s||(s=gt,s.locale=e),new nt(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()).setLocalization(s)}get clone(){return new nt(this.year,this.month,this.date,this.hours,this.minutes,this.seconds,this.getMilliseconds()).setLocalization(this.localization)}static isValid(t){return t===void 0||JSON.stringify(t)==="null"?!1:t.constructor.name===nt.name}startOf(t,e=0){if(this[t]===void 0)throw new Error(`Unit '${t}' is not valid`);switch(t){case"seconds":this.setMilliseconds(0);break;case"minutes":this.setSeconds(0,0);break;case"hours":this.setMinutes(0,0,0);break;case"date":this.setHours(0,0,0,0);break;case"weekDay":{if(this.startOf(M.date),this.weekDay===e)break;const s=(this.weekDay-e+7)%7;this.manipulate(s*-1,M.date);break}case"month":this.startOf(M.date),this.setDate(1);break;case"year":this.startOf(M.date),this.setMonth(0,1);break}return this}endOf(t,e=0){if(this[t]===void 0)throw new Error(`Unit '${t}' is not valid`);switch(t){case"seconds":this.setMilliseconds(999);break;case"minutes":this.setSeconds(59,999);break;case"hours":this.setMinutes(59,59,999);break;case"date":this.setHours(23,59,59,999);break;case"weekDay":{this.endOf(M.date);const s=6+e;if(this.weekDay===s)break;this.manipulate(s-this.weekDay,M.date);break}case"month":this.endOf(M.date),this.manipulate(1,M.month),this.setDate(0);break;case"year":this.endOf(M.date),this.setMonth(11,31);break}return this}manipulate(t,e){if(this[e]===void 0)throw new Error(`Unit '${e}' is not valid`);return this[e]+=t,this}isBefore(t,e){if(!nt.isValid(t))return!1;if(!e)return this.valueOf()<t.valueOf();if(this[e]===void 0)throw new Error(`Unit '${e}' is not valid`);return this.clone.startOf(e).valueOf()<t.clone.startOf(e).valueOf()}isAfter(t,e){if(!nt.isValid(t))return!1;if(!e)return this.valueOf()>t.valueOf();if(this[e]===void 0)throw new Error(`Unit '${e}' is not valid`);return this.clone.startOf(e).valueOf()>t.clone.startOf(e).valueOf()}isSame(t,e){if(!nt.isValid(t))return!1;if(!e)return this.valueOf()===t.valueOf();if(this[e]===void 0)throw new Error(`Unit '${e}' is not valid`);return t=nt.convert(t),this.clone.startOf(e).valueOf()===t.startOf(e).valueOf()}isBetween(t,e,s,i="()"){if(!nt.isValid(t)||!nt.isValid(e))return!1;if(s&&this[s]===void 0)throw new Error(`Unit '${s}' is not valid`);const n=i[0]==="(",r=i[1]===")",o=n?this.isAfter(t,s):!this.isBefore(t,s),h=r?this.isBefore(e,s):!this.isAfter(e,s);return o&&h}parts(t=this.localization.locale,e={dateStyle:"full",timeStyle:"long"}){const s={};return new Intl.DateTimeFormat(t,e).formatToParts(this).filter(i=>i.type!=="literal").forEach(i=>s[i.type]=i.value),s}get seconds(){return this.getSeconds()}set seconds(t){this.setSeconds(t)}get secondsFormatted(){return this.parts(void 0,Ma).second}get minutes(){return this.getMinutes()}set minutes(t){this.setMinutes(t)}get minutesFormatted(){return this.parts(void 0,Ma).minute}get hours(){return this.getHours()}set hours(t){this.setHours(t)}getHoursFormatted(t="h12"){return this.parts(void 0,{...Ma,hourCycle:t}).hour}meridiem(t=this.localization.locale){return new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0}).formatToParts(this).find(e=>e.type==="dayPeriod")?.value}get date(){return this.getDate()}set date(t){this.setDate(t)}get dateFormatted(){return this.parts(void 0,Ma).day}get weekDay(){return this.getDay()}get month(){return this.getMonth()}set month(t){const e=new Date(this.year,t+1);e.setDate(0);const s=e.getDate();this.date>s&&(this.date=s),this.setMonth(t)}get monthFormatted(){return this.parts(void 0,Ma).month}get year(){return this.getFullYear()}set year(t){this.setFullYear(t)}get week(){const t=this.computeOrdinal(),e=this.getUTCDay();let s=Math.floor((t-e+10)/7);return s<1?s=this.weeksInWeekYear():s>this.weeksInWeekYear()&&(s=1),s}weeksInWeekYear(){const t=(this.year+Math.floor(this.year/4)-Math.floor(this.year/100)+Math.floor(this.year/400))%7,e=this.year-1,s=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7;return t===4||s===3?53:52}dateToDataValue(){return nt.isValid(this)?`${this.year}-${this.month.toString().padStart(2,"0")}-${this.date.toString().padStart(2,"0")}`:""}get isLeapYear(){return this.year%4===0&&(this.year%100!==0||this.year%400===0)}computeOrdinal(){return this.date+(this.isLeapYear?this.leapLadder:this.nonLeapLadder)[this.month]}getAllMonths(t="long"){const e=new Intl.DateTimeFormat(this.localization.locale,{month:t}).format;return[...Array(12).keys()].map(s=>e(new Date(2021,s)))}replaceTokens(t,e){return t.replace(/(\[[^[\]]*])|(LTS?|l{1,4}|L{1,4})/g,(s,i,n)=>{const r=n&&n.toUpperCase();return i||e[r]||gt.dateFormats[r]})}parseTwoDigitYear(t){return t+(t>68?1900:2e3)}offsetFromString(t){if(!t||t==="Z")return 0;const[e,s,i]=t.match(/([+-]|\d\d)/g),n=+s*60+(+i||0),r=e==="+"?-n:n;return n===0?0:r}zoneInformation(t,e){let s=t.parts(this.localization.locale,{timeZoneName:"longOffset"}).timeZoneName.replace("GMT","").replace(":","");const i=s.includes("-");return s=s.replace("-",""),e==="z"?s=s.substring(1,2):e==="zz"&&(s=s.substring(0,2)),`${i?"-":""}${s}`}addInput(t){return(e,s)=>{e[t]=+s}}getLocaleAfternoon(){return new Intl.DateTimeFormat(this.localization.locale,{hour:"numeric",hour12:!0}).formatToParts(new Date(2022,3,4,13)).find(t=>t.type==="dayPeriod")?.value?.replace(/\s+/g," ")}meridiemMatch(t){return t.toLowerCase()===this.getLocaleAfternoon().toLowerCase()}correctHours(t){const{afternoon:e}=t;if(e!==void 0){const{hours:s}=t;e?s<12&&(t.hours+=12):s===12&&(t.hours=0),delete t.afternoon}}makeParser(t){t=this.replaceTokens(t,this.localization.dateFormats);const e=t.match(this.formattingTokens),{length:s}=e,i=[];for(let n=0;n<s;n+=1){const r=e[n],o=this.expressions[r];o?.parser?i[n]=o:i[n]=r.replace(/^\[[^[\]]*]$/g,"")}return n=>{const r={hours:0,minutes:0,seconds:0,milliseconds:0};for(let o=0,h=0;o<s;o+=1){const c=i[o];if(typeof c=="string")h+=c.length;else{const d=n.slice(h);let l=d;c.pattern&&(l=c.pattern.exec(d)[0]),c.parser.call(this,r,l),n=n.replace(l,"")}}return this.correctHours(r),r}}static fromString(t,e){e?.format||p.errorMessages.customDateFormatError("No format was provided");try{const s=new nt;if(s.setLocalization(e),["x","X"].indexOf(e.format)>-1)return new nt((e.format==="X"?1e3:1)*+t);t=t.replace(/\s+/g," ");const i=s.makeParser(e.format),{year:n,month:r,day:o,hours:h,minutes:c,seconds:d,milliseconds:l,zone:u}=i(t),f=o||(!n&&!r?s.getDate():1),m=n||s.getFullYear();let v=0;return n&&!r||(v=r>0?r-1:s.getMonth()),u?new nt(Date.UTC(m,v,f,h,c,d,l+u.offset*60*1e3)):new nt(m,v,f,h,c,d,l)}catch{p.errorMessages.customDateFormatError(`Unable to parse provided input: ${t}, format: ${e.format}`)}}format(t,e=this.localization.locale){if(t&&typeof t=="object")return new Intl.DateTimeFormat(e,t).format(this);const s=this.replaceTokens(t||this.localization.format||`${gt.dateFormats.L}, ${gt.dateFormats.LT}`,this.localization.dateFormats),i=h=>new Intl.DateTimeFormat(this.localization.locale,h).format(this);this.localization.hourCycle||(this.localization.hourCycle=vc(this.localization.locale));const n=this.localization.hourCycle.startsWith("h1")?"h24":this.localization.hourCycle,r=this.localization.hourCycle.startsWith("h2")?"h12":this.localization.hourCycle,o={y:this.year,yy:i({year:"2-digit"}),yyyy:this.year,M:i({month:"numeric"}),MM:this.monthFormatted,MMM:this.getAllMonths("short")[this.getMonth()],MMMM:this.getAllMonths()[this.getMonth()],d:this.date,dd:this.dateFormatted,ddd:i({weekday:"short"}),dddd:i({weekday:"long"}),H:this.getHours(),HH:this.getHoursFormatted(n),h:this.hours>12?this.hours-12:this.hours,hh:this.getHoursFormatted(r),t:this.meridiem(),T:this.meridiem().toUpperCase(),m:this.minutes,mm:this.minutesFormatted,s:this.seconds,ss:this.secondsFormatted,fff:this.getMilliseconds()};return s.replace(this.dateTimeRegex,(h,c)=>c||o[h]).replace(/\[/g,"").replace(/]/g,"")}};class If{constructor(){this.cache=new Map}locate(t){const e=this.cache.get(t);if(e)return e;const s=new t;return this.cache.set(t,s),s}}const Pf=()=>{D=new If};let D;const ea=[{name:"calendar",className:p.css.daysContainer,unit:M.month,step:1},{name:"months",className:p.css.monthsContainer,unit:M.year,step:1},{name:"years",className:p.css.yearsContainer,unit:M.year,step:10},{name:"decades",className:p.css.decadesContainer,unit:M.year,step:100}];class mt{constructor(){this._currentCalendarViewMode=0,this._viewDate=new ct,this.minimumCalendarViewMode=0,this.currentView="calendar"}get currentCalendarViewMode(){return this._currentCalendarViewMode}set currentCalendarViewMode(t){this._currentCalendarViewMode=t,this.currentView=ea[t].name}get viewDate(){return this._viewDate}set viewDate(t){this._viewDate=t,this.options&&(this.options.viewDate=t)}refreshCurrentView(){this.currentView=ea[this.currentCalendarViewMode].name}get isTwelveHour(){return["h12","h11"].includes(this.options.localization.hourCycle)}}class Ot{constructor(){this.optionsStore=D.locate(mt)}isValid(t,e){return!(!this._enabledDisabledDatesIsValid(e,t)||e!==M.month&&e!==M.year&&this.optionsStore.options.restrictions.daysOfWeekDisabled?.length>0&&this.optionsStore.options.restrictions.daysOfWeekDisabled.indexOf(t.weekDay)!==-1||!this._minMaxIsValid(e,t)||(e===M.hours||e===M.minutes||e===M.seconds)&&(!this._enabledDisabledHoursIsValid(t)||this.optionsStore.options.restrictions.disabledTimeIntervals?.filter(s=>t.isBetween(s.from,s.to)).length!==0))}_enabledDisabledDatesIsValid(t,e){return t!==M.date?!0:!(this.optionsStore.options.restrictions.disabledDates.length>0&&this._isInDisabledDates(e)||this.optionsStore.options.restrictions.enabledDates.length>0&&!this._isInEnabledDates(e))}_isInDisabledDates(t){return!this.optionsStore.options.restrictions.disabledDates||this.optionsStore.options.restrictions.disabledDates.length===0?!1:!!this.optionsStore.options.restrictions.disabledDates.find(e=>e.isSame(t,M.date))}_isInEnabledDates(t){return!this.optionsStore.options.restrictions.enabledDates||this.optionsStore.options.restrictions.enabledDates.length===0?!0:!!this.optionsStore.options.restrictions.enabledDates.find(e=>e.isSame(t,M.date))}_minMaxIsValid(t,e){return!(this.optionsStore.options.restrictions.minDate&&e.isBefore(this.optionsStore.options.restrictions.minDate,t)||this.optionsStore.options.restrictions.maxDate&&e.isAfter(this.optionsStore.options.restrictions.maxDate,t))}_enabledDisabledHoursIsValid(t){return!(this.optionsStore.options.restrictions.disabledHours.length>0&&this._isInDisabledHours(t)||this.optionsStore.options.restrictions.enabledHours.length>0&&!this._isInEnabledHours(t))}_isInDisabledHours(t){if(!this.optionsStore.options.restrictions.disabledHours||this.optionsStore.options.restrictions.disabledHours.length===0)return!1;const e=t.hours;return this.optionsStore.options.restrictions.disabledHours.includes(e)}_isInEnabledHours(t){if(!this.optionsStore.options.restrictions.enabledHours||this.optionsStore.options.restrictions.enabledHours.length===0)return!0;const e=t.hours;return this.optionsStore.options.restrictions.enabledHours.includes(e)}dateRangeIsValid(t,e,s){if(!this.optionsStore.options.dateRange||t.length!==2&&e!==1)return!0;const i=t[0].clone;if(i.isSame(s,M.date))return!0;for(i.manipulate(1,M.date);!i.isSame(s,M.date);){if(!this.isValid(i,M.date))return!1;i.manipulate(1,M.date)}return!0}}class va{constructor(){this.subscribers=[]}subscribe(t){return this.subscribers.push(t),this.unsubscribe.bind(this,this.subscribers.length-1)}unsubscribe(t){this.subscribers.splice(t,1)}emit(t){this.subscribers.forEach(e=>{e(t)})}destroy(){this.subscribers=null,this.subscribers=[]}}class D1{constructor(){this.triggerEvent=new va,this.viewUpdate=new va,this.updateDisplay=new va,this.action=new va,this.updateViewDate=new va}destroy(){this.triggerEvent.destroy(),this.viewUpdate.destroy(),this.updateDisplay.destroy(),this.action.destroy(),this.updateViewDate.destroy()}}const gc={clear:"Clear selection",close:"Close the picker",dateFormats:gt.dateFormats,dayViewHeaderFormat:{month:"long",year:"2-digit"},decrementHour:"Decrement Hour",decrementMinute:"Decrement Minute",decrementSecond:"Decrement Second",format:gt.format,hourCycle:gt.hourCycle,incrementHour:"Increment Hour",incrementMinute:"Increment Minute",incrementSecond:"Increment Second",locale:gt.locale,maxWeekdayLength:0,nextCentury:"Next Century",nextDecade:"Next Decade",nextMonth:"Next Month",nextYear:"Next Year",ordinal:gt.ordinal,pickHour:"Pick Hour",pickMinute:"Pick Minute",pickSecond:"Pick Second",previousCentury:"Previous Century",previousDecade:"Previous Decade",previousMonth:"Previous Month",previousYear:"Previous Year",selectDate:"Select Date",selectDecade:"Select Decade",selectMonth:"Select Month",selectTime:"Select Time",selectYear:"Select Year",startOfTheWeek:0,today:"Go to today",toggleMeridiem:"Toggle Meridiem",toggleAriaLabel:"Change date"},Ea={allowInputToggle:!1,container:void 0,dateRange:!1,debug:!1,defaultDate:void 0,display:{icons:{type:"icons",time:"fa-solid fa-clock",date:"fa-solid fa-calendar",up:"fa-solid fa-arrow-up",down:"fa-solid fa-arrow-down",previous:"fa-solid fa-chevron-left",next:"fa-solid fa-chevron-right",today:"fa-solid fa-calendar-check",clear:"fa-solid fa-trash",close:"fa-solid fa-xmark"},sideBySide:!1,calendarWeeks:!1,viewMode:"calendar",toolbarPlacement:"bottom",keepOpen:!1,buttons:{today:!1,clear:!1,close:!1},components:{calendar:!0,date:!0,month:!0,year:!0,decades:!0,clock:!0,hours:!0,minutes:!0,seconds:!1,useTwentyfourHour:void 0},inline:!1,theme:"auto",placement:"bottom",keyboardNavigation:!0},keepInvalid:!1,localization:gc,meta:{},multipleDates:!1,multipleDatesSeparator:"; ",promptTimeOnDateChange:!1,promptTimeOnDateChangeTransitionDelay:200,restrictions:{minDate:void 0,maxDate:void 0,disabledDates:[],enabledDates:[],daysOfWeekDisabled:[],disabledTimeIntervals:[],disabledHours:[],enabledHours:[]},stepping:1,useCurrent:!0,viewDate:new ct};({...gc});function yc(a,t){if(!a)return null;if(a.constructor.name===ct.name)return a;if(a.constructor.name===Date.name)return ct.convert(a);if(typeof a=="string"){const e=ct.fromString(a,t);return JSON.stringify(e)==="null"?null:e}return null}function I1(a,t,e){typeof a=="string"&&t!=="input"&&p.errorMessages.dateString();const s=yc(a,e);return s||p.errorMessages.failedToParseDate(t,a,t==="input"),s}function wc(a,t,e,s=gt){Array.isArray(t)||p.errorMessages.typeMismatch(a,e,"array of DateTime or Date");for(let i=0;i<t.length;i++){const n=t[i],r=I1(n,a,s);r.setLocalization(s),t[i]=r}}function xc(a,t,e){(!Array.isArray(t)||t.some(s=>typeof s!="number"))&&p.errorMessages.typeMismatch(a,e,"array of numbers")}function $s(a){return({value:t,localization:e})=>{const s=I1(t,a,e);if(s!==void 0)return s.setLocalization(e),s}}function z2(a){const t=$s(a);return e=>e.value===void 0?e.value:t(e)}function _c(a,t,e){return({value:s,providedType:i})=>s===void 0?[]:(xc(a,s,i),s.some(n=>n<t||n>e)&&p.errorMessages.numbersOutOfRange(a,t,e),s)}function B2(a){return _c(a,0,23)}function W2(a){return({value:t,providedType:e,localization:s})=>t===void 0?[]:(wc(a,t,e,s),t)}function De(a){return({value:t,path:e})=>(a.includes(t)||p.errorMessages.unexpectedOptionValue(e.substring(1),t,a),t)}const Nf=Object.freeze({defaultDate:$s("defaultDate"),viewDate:$s("viewDate"),minDate:z2("restrictions.minDate"),maxDate:z2("restrictions.maxDate"),disabledHours:B2("restrictions.disabledHours"),enabledHours:B2("restrictions.enabledHours"),disabledDates:W2("restrictions.disabledDates"),enabledDates:W2("restrictions.enabledDates"),daysOfWeekDisabled:_c("restrictions.daysOfWeekDisabled",0,6),disabledTimeIntervals:({key:a,value:t,providedType:e,localization:s})=>{if(t===void 0)return[];Array.isArray(t)||p.errorMessages.typeMismatch(a,e,"array of { from: DateTime|Date, to: DateTime|Date }");const i=t;for(let n=0;n<i.length;n++)Object.keys(i[n]).forEach(r=>{const o=`${a}[${n}].${r}`,h=i[n][r],c=I1(h,o,s);c.setLocalization(s),i[n][r]=c});return i},toolbarPlacement:De(["top","bottom","default"]),type:De(["icons","sprites"]),viewMode:De(["clock","calendar","months","years","decades"]),theme:De(["light","dark","auto"]),placement:De(["top","bottom"]),meta:({value:a})=>a,dayViewHeaderFormat:({value:a})=>a,container:({value:a,path:t})=>(a&&!(a instanceof HTMLElement||a instanceof Element||a?.appendChild)&&p.errorMessages.typeMismatch(t.substring(1),typeof a,"HTMLElement"),a),useTwentyfourHour:({value:a,path:t,providedType:e,defaultType:s})=>{if(p.errorMessages.deprecatedWarning("useTwentyfourHour",'Please use "options.localization.hourCycle" instead'),a===void 0||e==="boolean")return a;p.errorMessages.typeMismatch(t,e,s)},hourCycle:De(["h11","h12","h23","h24"])}),$f=({value:a,defaultType:t,providedType:e,path:s})=>{switch(t){case"boolean":return a==="true"||a===!0;case"number":return+a;case"string":return a.toString();case"object":return{};case"function":return a;default:p.errorMessages.typeMismatch(s,e,t)}};function Ff(a){return(Nf[a.key]||$f)(a)}class X{static deepCopy(t){const e={};return Object.keys(t).forEach(s=>{const i=t[s];if(i instanceof ct){e[s]=i.clone;return}else if(i instanceof Date){e[s]=new Date(i.valueOf());return}e[s]=i,!(typeof i!="object"||i instanceof HTMLElement||i instanceof Element)&&(Array.isArray(i)||(e[s]=X.deepCopy(i)))}),e}static objectPath(t,e){return t.charAt(0)==="."&&(t=t.slice(1)),t?t.split(".").reduce((s,i)=>X.isValue(s)||X.isValue(s[i])?s[i]:void 0,e):e}static spread(t,e,s,i=""){const n=X.objectPath(i,Ea),r=Object.keys(t).filter(o=>!Object.keys(n).includes(o));if(r.length>0){const o=X.getFlattenDefaultOptions(),h=r.map(c=>{let l=`"${i}${i?".":""}${c}" is not a known option.`;const u=o.find(f=>f.includes(c));return u&&(l+=` Did you mean "${u}"?`),l});p.errorMessages.unexpectedOptions(h)}Object.keys(t).filter(o=>o!=="__proto__"&&o!=="constructor").forEach(o=>{i+=`.${o}`,i.charAt(0)==="."&&(i=i.slice(1));const h=n[o],c=typeof t[o],d=typeof h,l=t[o];if(l==null){e[o]=l,i=i.substring(0,i.lastIndexOf(`.${o}`));return}typeof h=="object"&&!Array.isArray(t[o])&&!(h instanceof Date||X.ignoreProperties.includes(o))?X.spread(t[o],e[o],s,i):e[o]=X.processKey(o,l,c,d,i,s),i=i.substring(0,i.lastIndexOf(`.${o}`))})}static processKey(t,e,s,i,n,r){return Ff({key:t,value:e,providedType:s,defaultType:i,path:n,localization:r})}static _mergeOptions(t,e){const s=X.deepCopy(e),i=e.localization?.locale!=="default"?e.localization:t?.localization||Ea.localization;return X.spread(t,s,i,""),s}static _dataToOptions(t,e){const s=JSON.parse(JSON.stringify(t.dataset));if(s?.tdTargetInput&&delete s.tdTargetInput,s?.tdTargetToggle&&delete s.tdTargetToggle,!s||Object.keys(s).length===0)return e;const i={},n=h=>{const c={};return Object.keys(h).forEach(d=>{c[d.toLowerCase()]=d}),c},r=this.normalizeObject(n),o=n(e);return Object.keys(s).filter(h=>h.startsWith(p.dataKey)).map(h=>h.substring(2)).forEach(h=>{let c=o[h.toLowerCase()];if(h.includes("_")){const d=h.split("_");c=o[d[0].toLowerCase()],c!==void 0&&e[c].constructor===Object&&(i[c]=r(d,1,e[c],s[`td${h}`]))}else c!==void 0&&(i[c]=s[`td${h}`])}),this._mergeOptions(i,e)}static normalizeObject(t){const e=(s,i,n,r)=>{const h=t(n)[s[i].toLowerCase()],c={};return h===void 0||(n[h]?.constructor===Object?(i++,c[h]=e(s,i,n[h],r)):c[h]=r),c};return e}static _dateTypeCheck(t,e){return yc(t,e)}static _typeCheckDateArray(t,e,s,i){return wc(t,e,s,i)}static _typeCheckNumberArray(t,e,s){return xc(t,e,s)}static dateConversion(t,e,s){return I1(t,e,s)}static getFlattenDefaultOptions(){if(this._flattenDefaults)return this._flattenDefaults;const t=(e,s=[])=>Array.isArray(e)?[]:Object(e)===e?Object.entries(e).flatMap(([i,n])=>t(n,[...s,i])):s.join(".");return this._flattenDefaults=t(Ea),this._flattenDefaults}static _validateConflicts(t){t.display.sideBySide&&(!t.display.components.clock||!(t.display.components.hours||t.display.components.minutes||t.display.components.seconds))&&p.errorMessages.conflictingConfiguration("Cannot use side by side mode without the clock components"),t.restrictions.minDate&&t.restrictions.maxDate&&(t.restrictions.minDate.isAfter(t.restrictions.maxDate)&&p.errorMessages.conflictingConfiguration("minDate is after maxDate"),t.restrictions.maxDate.isBefore(t.restrictions.minDate)&&p.errorMessages.conflictingConfiguration("maxDate is before minDate")),t.multipleDates&&t.dateRange&&p.errorMessages.conflictingConfiguration('Cannot uss option "multipleDates" with "dateRange"')}}X.ignoreProperties=["meta","dayViewHeaderFormat","container","dateForms","ordinal"];X.isValue=a=>a!=null;class Rt{constructor(){this._dates=[],this.optionsStore=D.locate(mt),this.validation=D.locate(Ot),this._eventEmitters=D.locate(D1)}get picked(){return[...this._dates]}get lastPicked(){return this._dates[this.lastPickedIndex]?.clone}get lastPickedIndex(){return this._dates.length===0?0:this._dates.length-1}formatInput(t){return t?(t.localization=this.optionsStore.options.localization,t.format()):""}parseInput(t){try{return X.dateConversion(t,"input",this.optionsStore.options.localization)}catch{this._eventEmitters.triggerEvent.emit({type:p.events.error,reason:p.errorMessages.failedToParseInput,format:this.optionsStore.options.localization.format,value:t});return}}setFromInput(t,e){if(!t){this.setValue(void 0,e);return}const s=this.parseInput(t);s&&(s.setLocalization(this.optionsStore.options.localization),this.setValue(s,e))}add(t){this._dates.push(t)}isPicked(t,e){if(!ct.isValid(t))return!1;if(!e)return this._dates.find(n=>n.isSame(t))!==void 0;const s=R2(e),i=t.format(s);return this._dates.map(n=>n.format(s)).find(n=>n===i)!==void 0}pickedIndex(t,e){if(!ct.isValid(t))return-1;if(!e)return this._dates.map(n=>n.valueOf()).indexOf(t.valueOf());const s=R2(e),i=t.format(s);return this._dates.map(n=>n.format(s)).indexOf(i)}clear(){this.optionsStore.unset=!0,this._eventEmitters.triggerEvent.emit({type:p.events.change,date:void 0,oldDate:this.lastPicked,isClear:!0,isValid:!0}),this._dates=[],this.optionsStore.input&&(this.optionsStore.input.value=""),this._eventEmitters.updateDisplay.emit("all")}static getStartEndYear(t,e){const s=t/10,i=Math.floor(e/t)*t,n=i+s*9,r=Math.floor(e/s)*s;return[i,n,r]}updateInput(t){if(!this.optionsStore.input)return;let e=this.formatInput(t);(this.optionsStore.options.multipleDates||this.optionsStore.options.dateRange)&&(e=this._dates.map(s=>this.formatInput(s)).join(this.optionsStore.options.multipleDatesSeparator)),this.optionsStore.input.value!=e&&(this.optionsStore.input.value=e)}setValue(t,e){const s=typeof e>"u",i=!t&&s;let n=this.optionsStore.unset?null:this._dates[e]?.clone;if(!n&&!this.optionsStore.unset&&s&&i&&(n=this.lastPicked),t&&n?.isSame(t)){this.updateInput(t);return}if(!t){this._setValueNull(i,e,n);return}e=e||0,t=t.clone,this.optionsStore.options.stepping!==1&&(t.minutes=Math.round(t.minutes/this.optionsStore.options.stepping)*this.optionsStore.options.stepping,t.startOf(M.minutes));const r=o=>{this._dates[e]=t,this._eventEmitters.updateViewDate.emit(t.clone),this.updateInput(t),this.optionsStore.unset=!1,this._eventEmitters.updateDisplay.emit("all"),this._eventEmitters.triggerEvent.emit({type:p.events.change,date:t,oldDate:n,isClear:i,isValid:o})};if(this.validation.isValid(t)&&this.validation.dateRangeIsValid(this.picked,e,t)){r(!0);return}this.optionsStore.options.keepInvalid&&r(!1),this._eventEmitters.triggerEvent.emit({type:p.events.error,reason:p.errorMessages.failedToSetInvalidDate,date:t,oldDate:n})}_setValueNull(t,e,s){!this.optionsStore.options.multipleDates||this._dates.length===1||t?(this.optionsStore.unset=!0,this._dates=[]):this._dates.splice(e,1),this.updateInput(),this._eventEmitters.triggerEvent.emit({type:p.events.change,date:void 0,oldDate:s,isClear:t,isValid:!0}),this._eventEmitters.updateDisplay.emit("all")}}var Fs;(function(a){a.next="next",a.previous="previous",a.changeCalendarView="changeCalendarView",a.selectMonth="selectMonth",a.selectYear="selectYear",a.selectDecade="selectDecade",a.selectDay="selectDay",a.selectHour="selectHour",a.selectMinute="selectMinute",a.selectSecond="selectSecond",a.incrementHours="incrementHours",a.incrementMinutes="incrementMinutes",a.incrementSeconds="incrementSeconds",a.decrementHours="decrementHours",a.decrementMinutes="decrementMinutes",a.decrementSeconds="decrementSeconds",a.toggleMeridiem="toggleMeridiem",a.togglePicker="togglePicker",a.showClock="showClock",a.showHours="showHours",a.showMinutes="showMinutes",a.showSeconds="showSeconds",a.clear="clear",a.close="close",a.today="today"})(Fs||(Fs={}));var _=Fs;class Rf{constructor(){this.optionsStore=D.locate(mt),this.dates=D.locate(Rt),this.validation=D.locate(Ot)}getPicker(){const t=document.createElement("div");if(t.classList.add(p.css.daysContainer),t.role="grid",t.append(...this._daysOfTheWeek()),this.optionsStore.options.display.calendarWeeks){const i=document.createElement("div");i.classList.add(p.css.calendarWeeks,p.css.noHighlight),t.appendChild(i)}const{rangeHoverEvent:e,rangeHoverOutEvent:s}=this.handleMouseEvents(t);for(let i=0;i<42;i++){if(i!==0&&i%7===0&&this.optionsStore.options.display.calendarWeeks){const r=document.createElement("div");r.classList.add(p.css.calendarWeeks,p.css.noHighlight),r.tabIndex=-1,t.appendChild(r)}const n=document.createElement("div");n.setAttribute("data-action",_.selectDay),n.role="gridcell",n.tabIndex=-1,t.appendChild(n),matchMedia("(hover: hover)").matches&&this.optionsStore.options.dateRange&&(n.addEventListener("mouseover",e),n.addEventListener("mouseout",s))}return t}_update(t,e){const s=t.getElementsByClassName(p.css.daysContainer)[0];this._updateCalendarView(s);const i=this.optionsStore.viewDate.clone.startOf(M.month).startOf("weekDay",this.optionsStore.options.localization.startOfTheWeek).manipulate(12,M.hours);this._handleCalendarWeeks(s,i.clone),s.querySelectorAll(`[data-action="${_.selectDay}"]`).forEach(n=>{const r=[];r.push(p.css.day),i.isBefore(this.optionsStore.viewDate,M.month)&&r.push(p.css.old),i.isAfter(this.optionsStore.viewDate,M.month)&&r.push(p.css.new),!this.optionsStore.unset&&!this.optionsStore.options.dateRange&&this.dates.isPicked(i,M.date)&&r.push(p.css.active),this.validation.isValid(i,M.date)||r.push(p.css.disabled),i.isSame(new ct,M.date)&&r.push(p.css.today),(i.weekDay===0||i.weekDay===6)&&r.push(p.css.weekend),this._handleDateRange(i,r),e(M.date,i,r,n),n.classList.remove(...n.classList),n.classList.add(...r),n.setAttribute("data-value",i.dateToDataValue()),n.setAttribute("data-day",`${i.date}`),n.innerText=i.parts(void 0,{day:"numeric"}).day,n.ariaLabel=i.format("MMMM dd, yyyy"),i.manipulate(1,M.date)})}_handleDateRange(t,e){const s=this.dates.picked[0],i=this.dates.picked[1];this.optionsStore.options.dateRange&&(t.isBetween(s,i,M.date)&&e.push(p.css.rangeIn),t.isSame(s,M.date)&&e.push(p.css.rangeStart),t.isSame(i,M.date)&&e.push(p.css.rangeEnd))}handleMouseEvents(t){return{rangeHoverEvent:i=>{const n=i?.currentTarget;if(this.dates.picked.length!==1||n.classList.contains(p.css.disabled))return;const r=[...t.querySelectorAll(".day")],o=n.getAttribute("data-value"),h=ct.fromString(o,{format:"yyyy-MM-dd"}),c=r.findIndex(g=>g.getAttribute("data-value")===o),d=this.dates.picked[0],l=this.dates.picked[1],u=d.dateToDataValue(),f=r.findIndex(g=>g.getAttribute("data-value")===u),m=r[f];h.isSame(d,M.date)||n.classList.remove(p.css.rangeStart),h.isSame(l,M.date)||n.classList.remove(p.css.rangeEnd);let v;h.isBefore(d)?(n.classList.add(p.css.rangeStart),m?.classList.remove(p.css.rangeStart),m?.classList.add(p.css.rangeEnd),v=(g,w)=>w>c&&w<f):(n.classList.add(p.css.rangeEnd),m?.classList.remove(p.css.rangeEnd),m?.classList.add(p.css.rangeStart),v=(g,w)=>w<c&&w>f),r.filter(v).forEach(g=>{g.classList.add(p.css.rangeIn)})},rangeHoverOutEvent:i=>{const n=[...t.querySelectorAll(".day")];if(this.dates.picked.length===1&&n.forEach(h=>h.classList.remove(p.css.rangeIn)),this.dates.picked.length!==1)return;const r=i?.currentTarget,o=new ct(r.getAttribute("data-value"));o.isSame(this.dates.picked[0],M.date)||r.classList.remove(p.css.rangeStart),o.isSame(this.dates.picked[1],M.date)||r.classList.remove(p.css.rangeEnd)}}}_updateCalendarView(t){if(this.optionsStore.currentView!=="calendar")return;const[e,s,i]=t.parentElement.getElementsByClassName(p.css.calendarHeader)[0].getElementsByTagName("div");s.setAttribute(p.css.daysContainer,this.optionsStore.viewDate.format(this.optionsStore.options.localization.dayViewHeaderFormat)),this.optionsStore.options.display.components.month?s.classList.remove(p.css.disabled):s.classList.add(p.css.disabled),this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(-1,M.month),M.month)?e.classList.remove(p.css.disabled):e.classList.add(p.css.disabled),this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(1,M.month),M.month)?i.classList.remove(p.css.disabled):i.classList.add(p.css.disabled)}_daysOfTheWeek(){const t=this.optionsStore.viewDate.clone.startOf("weekDay",this.optionsStore.options.localization.startOfTheWeek).startOf(M.date),e=[];if(document.createElement("div"),this.optionsStore.options.display.calendarWeeks){const s=document.createElement("div");s.classList.add(p.css.calendarWeeks,p.css.noHighlight),s.innerText="#",e.push(s)}for(let s=0;s<7;s++){const i=document.createElement("div");i.classList.add(p.css.dayOfTheWeek,p.css.noHighlight);let n=t.format({weekday:"short"});this.optionsStore.options.localization.maxWeekdayLength>0&&(n=n.substring(0,this.optionsStore.options.localization.maxWeekdayLength)),i.innerText=n,i.ariaLabel=t.format({weekday:"long"}),t.manipulate(1,M.date),e.push(i)}return e}_handleCalendarWeeks(t,e){[...t.querySelectorAll(`.${p.css.calendarWeeks}`)].filter(s=>s.innerText!=="#").forEach(s=>{s.innerText=`${e.week}`,e.manipulate(7,M.date)})}}class zf{constructor(){this.optionsStore=D.locate(mt),this.dates=D.locate(Rt),this.validation=D.locate(Ot)}getPicker(){const t=document.createElement("div");t.classList.add(p.css.monthsContainer);for(let e=0;e<12;e++){const s=document.createElement("div");s.tabIndex=-1,s.setAttribute("data-action",_.selectMonth),t.appendChild(s)}return t}_update(t,e){const s=t.getElementsByClassName(p.css.monthsContainer)[0];if(this.optionsStore.currentView==="months"){const[n,r,o]=s.parentElement.getElementsByClassName(p.css.calendarHeader)[0].getElementsByTagName("div");r.setAttribute(p.css.monthsContainer,this.optionsStore.viewDate.format({year:"numeric"})),this.optionsStore.options.display.components.year?r.classList.remove(p.css.disabled):r.classList.add(p.css.disabled),this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(-1,M.year),M.year)?n.classList.remove(p.css.disabled):n.classList.add(p.css.disabled),this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(1,M.year),M.year)?o.classList.remove(p.css.disabled):o.classList.add(p.css.disabled)}const i=this.optionsStore.viewDate.clone.startOf(M.year);s.querySelectorAll(`[data-action="${_.selectMonth}"]`).forEach((n,r)=>{const o=[];o.push(p.css.month),!this.optionsStore.unset&&this.dates.isPicked(i,M.month)&&o.push(p.css.active),this.validation.isValid(i,M.month)||o.push(p.css.disabled),e(M.month,i,o,n),n.classList.remove(...n.classList),n.classList.add(...o),n.setAttribute("data-value",`${r}`),n.innerText=`${i.format({month:"short"})}`,i.manipulate(1,M.month)})}}class Bf{constructor(){this.optionsStore=D.locate(mt),this.dates=D.locate(Rt),this.validation=D.locate(Ot)}getPicker(){const t=document.createElement("div");t.classList.add(p.css.yearsContainer);for(let e=0;e<12;e++){const s=document.createElement("div");s.tabIndex=-1,s.setAttribute("data-action",_.selectYear),t.appendChild(s)}return t}_update(t,e){this._startYear=this.optionsStore.viewDate.clone.manipulate(-1,M.year),this._endYear=this.optionsStore.viewDate.clone.manipulate(10,M.year);const s=t.getElementsByClassName(p.css.yearsContainer)[0];if(this.optionsStore.currentView==="years"){const[n,r,o]=s.parentElement.getElementsByClassName(p.css.calendarHeader)[0].getElementsByTagName("div");r.setAttribute(p.css.yearsContainer,`${this._startYear.format({year:"numeric"})}-${this._endYear.format({year:"numeric"})}`),this.optionsStore.options.display.components.decades?r.classList.remove(p.css.disabled):r.classList.add(p.css.disabled),this.validation.isValid(this._startYear,M.year)?n.classList.remove(p.css.disabled):n.classList.add(p.css.disabled),this.validation.isValid(this._endYear,M.year)?o.classList.remove(p.css.disabled):o.classList.add(p.css.disabled)}const i=this.optionsStore.viewDate.clone.startOf(M.year).manipulate(-1,M.year);s.querySelectorAll(`[data-action="${_.selectYear}"]`).forEach(n=>{const r=[];r.push(p.css.year),!this.optionsStore.unset&&this.dates.isPicked(i,M.year)&&r.push(p.css.active),this.validation.isValid(i,M.year)||r.push(p.css.disabled),e(M.year,i,r,n),n.classList.remove(...n.classList),n.classList.add(...r),n.setAttribute("data-value",`${i.year}`),n.innerText=i.format({year:"numeric"}),i.manipulate(1,M.year)})}}class Wf{constructor(){this.optionsStore=D.locate(mt),this.dates=D.locate(Rt),this.validation=D.locate(Ot)}getPicker(){const t=document.createElement("div");t.classList.add(p.css.decadesContainer);for(let e=0;e<12;e++){const s=document.createElement("div");s.tabIndex=-1,s.setAttribute("data-action",_.selectDecade),t.appendChild(s)}return t}_update(t,e){const[s,i]=Rt.getStartEndYear(100,this.optionsStore.viewDate.year);this._startDecade=this.optionsStore.viewDate.clone.startOf(M.year),this._startDecade.year=s,this._endDecade=this.optionsStore.viewDate.clone.startOf(M.year),this._endDecade.year=i;const n=t.getElementsByClassName(p.css.decadesContainer)[0],[r,o,h]=n.parentElement.getElementsByClassName(p.css.calendarHeader)[0].getElementsByTagName("div"),c=this.validation.isValid(this._startDecade,M.year);this.optionsStore.currentView==="decades"&&(o.setAttribute(p.css.decadesContainer,`${this._startDecade.format({year:"numeric"})}-${this._endDecade.format({year:"numeric"})}`),c?r.classList.remove(p.css.disabled):r.classList.add(p.css.disabled),this.validation.isValid(this._endDecade,M.year)?h.classList.remove(p.css.disabled):h.classList.add(p.css.disabled));const d=this.dates.picked.map(l=>l.year);n.querySelectorAll(`[data-action="${_.selectDecade}"]`).forEach((l,u)=>{if(u===0){l.classList.add(p.css.old),this._startDecade.year-10<0&&(l.textContent=" ",r.classList.add(p.css.disabled),l.classList.add(p.css.disabled),l.setAttribute("data-value",""));return}const f=[];f.push(p.css.decade);const m=this._startDecade.year,v=this._startDecade.year+9;!this.optionsStore.unset&&d.filter(g=>g>=m&&g<=v).length>0&&f.push(p.css.active),!c&&!this.validation.isValid(this._startDecade.clone.manipulate(10,M.year),M.year)&&f.push(p.css.disabled),e("decade",this._startDecade,f,l),l.classList.remove(...l.classList),l.classList.add(...f),l.setAttribute("data-value",`${this._startDecade.year}`),l.innerText=`${this._startDecade.format({year:"numeric"})}`,this._startDecade.manipulate(10,M.year)})}}class qf{constructor(){this._gridColumns="",this.optionsStore=D.locate(mt),this.dates=D.locate(Rt),this.validation=D.locate(Ot)}getPicker(t){const e=document.createElement("div");return e.classList.add(p.css.clockContainer),e.append(...this._grid(t)),e}_update(t){const e=t.getElementsByClassName(p.css.clockContainer)[0];let s=this.dates.lastPicked?.clone;if(!s&&this.optionsStore.options.useCurrent&&(s=this.optionsStore.viewDate.clone),e.querySelectorAll(".disabled").forEach(i=>i.classList.remove(p.css.disabled)),this.optionsStore.options.display.components.hours&&(this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(1,M.hours),M.hours)||e.querySelector(`[data-action=${_.incrementHours}]`).classList.add(p.css.disabled),this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(-1,M.hours),M.hours)||e.querySelector(`[data-action=${_.decrementHours}]`).classList.add(p.css.disabled),e.querySelector(`[data-time-component=${M.hours}]`).innerText=s?s.getHoursFormatted(this.optionsStore.options.localization.hourCycle):"--"),this.optionsStore.options.display.components.minutes&&(this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(1,M.minutes),M.minutes)||e.querySelector(`[data-action=${_.incrementMinutes}]`).classList.add(p.css.disabled),this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(-1,M.minutes),M.minutes)||e.querySelector(`[data-action=${_.decrementMinutes}]`).classList.add(p.css.disabled),e.querySelector(`[data-time-component=${M.minutes}]`).innerText=s?s.minutesFormatted:"--"),this.optionsStore.options.display.components.seconds&&(this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(1,M.seconds),M.seconds)||e.querySelector(`[data-action=${_.incrementSeconds}]`).classList.add(p.css.disabled),this.validation.isValid(this.optionsStore.viewDate.clone.manipulate(-1,M.seconds),M.seconds)||e.querySelector(`[data-action=${_.decrementSeconds}]`).classList.add(p.css.disabled),e.querySelector(`[data-time-component=${M.seconds}]`).innerText=s?s.secondsFormatted:"--"),this.optionsStore.isTwelveHour){const i=e.querySelector(`[data-action=${_.toggleMeridiem}]`),n=(s||this.optionsStore.viewDate).clone;i.innerText=n.meridiem(),this.validation.isValid(n.manipulate(n.hours>=12?-12:12,M.hours))?i.classList.remove(p.css.disabled):i.classList.add(p.css.disabled)}e.style.gridTemplateAreas=`"${this._gridColumns}"`}_grid(t){this._gridColumns="";const e=[],s=[],i=[],n=document.createElement("div"),r=t(this.optionsStore.options.display.icons.up),o=t(this.optionsStore.options.display.icons.down);n.classList.add(p.css.separator,p.css.noHighlight);const h=n.cloneNode(!0);h.innerHTML=":";const c=(d=!1)=>d?h.cloneNode(!0):n.cloneNode(!0);if(this.optionsStore.options.display.components.hours){let d=document.createElement("div");d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.incrementHour),d.setAttribute("data-action",_.incrementHours),d.appendChild(r.cloneNode(!0)),e.push(d),d=document.createElement("div"),d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.pickHour),d.setAttribute("data-action",_.showHours),d.setAttribute("data-time-component",M.hours),s.push(d),d=document.createElement("div"),d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.decrementHour),d.setAttribute("data-action",_.decrementHours),d.appendChild(o.cloneNode(!0)),i.push(d),this._gridColumns+="a"}if(this.optionsStore.options.display.components.minutes){this._gridColumns+=" a",this.optionsStore.options.display.components.hours&&(e.push(c()),s.push(c(!0)),i.push(c()),this._gridColumns+=" a");let d=document.createElement("div");d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.incrementMinute),d.setAttribute("data-action",_.incrementMinutes),d.appendChild(r.cloneNode(!0)),e.push(d),d=document.createElement("div"),d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.pickMinute),d.setAttribute("data-action",_.showMinutes),d.setAttribute("data-time-component",M.minutes),s.push(d),d=document.createElement("div"),d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.decrementMinute),d.setAttribute("data-action",_.decrementMinutes),d.appendChild(o.cloneNode(!0)),i.push(d)}if(this.optionsStore.options.display.components.seconds){this._gridColumns+=" a",this.optionsStore.options.display.components.minutes&&(e.push(c()),s.push(c(!0)),i.push(c()),this._gridColumns+=" a");let d=document.createElement("div");d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.incrementSecond),d.setAttribute("data-action",_.incrementSeconds),d.appendChild(r.cloneNode(!0)),e.push(d),d=document.createElement("div"),d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.pickSecond),d.setAttribute("data-action",_.showSeconds),d.setAttribute("data-time-component",M.seconds),s.push(d),d=document.createElement("div"),d.tabIndex=-1,d.setAttribute("title",this.optionsStore.options.localization.decrementSecond),d.setAttribute("data-action",_.decrementSeconds),d.appendChild(o.cloneNode(!0)),i.push(d)}if(this.optionsStore.isTwelveHour){this._gridColumns+=" a";let d=c();e.push(d);const l=document.createElement("button");l.tabIndex=-1,l.setAttribute("type","button"),l.setAttribute("title",this.optionsStore.options.localization.toggleMeridiem),l.setAttribute("data-action",_.toggleMeridiem),l.setAttribute("tabindex","-1"),p.css.toggleMeridiem.includes(",")?l.classList.add(...p.css.toggleMeridiem.split(",")):l.classList.add(p.css.toggleMeridiem),d=document.createElement("div"),d.classList.add(p.css.noHighlight),d.appendChild(l),s.push(d),d=c(),i.push(d)}return this._gridColumns=this._gridColumns.trim(),[...e,...s,...i]}}class Zf{constructor(){this.optionsStore=D.locate(mt),this.validation=D.locate(Ot),this.dates=D.locate(Rt)}getPicker(){const t=document.createElement("div");t.classList.add(p.css.hourContainer);for(let e=0;e<(this.optionsStore.isTwelveHour?12:24);e++){const s=document.createElement("div");s.tabIndex=-1,s.setAttribute("data-action",_.selectHour),t.appendChild(s)}return t}_update(t,e){const s=t.getElementsByClassName(p.css.hourContainer)[0],i=this.optionsStore.viewDate.clone.startOf(M.date);s.querySelectorAll(`[data-action="${_.selectHour}"]`).forEach(n=>{const r=[];r.push(p.css.hour),this.validation.isValid(i,M.hours)||r.push(p.css.disabled),e(M.hours,i,r,n),n.classList.remove(...n.classList),n.classList.add(...r),n.setAttribute("data-value",`${i.hours}`),n.innerText=i.getHoursFormatted(this.optionsStore.options.localization.hourCycle),i.manipulate(1,M.hours)})}}class Uf{constructor(){this.optionsStore=D.locate(mt),this.validation=D.locate(Ot)}getPicker(){const t=document.createElement("div");t.classList.add(p.css.minuteContainer);const e=this.optionsStore.options.stepping===1?5:this.optionsStore.options.stepping;for(let s=0;s<60/e;s++){const i=document.createElement("div");i.tabIndex=-1,i.setAttribute("data-action",_.selectMinute),t.appendChild(i)}return t}_update(t,e){const s=t.getElementsByClassName(p.css.minuteContainer)[0],i=this.optionsStore.viewDate.clone.startOf(M.hours),n=this.optionsStore.options.stepping===1?5:this.optionsStore.options.stepping;s.querySelectorAll(`[data-action="${_.selectMinute}"]`).forEach(r=>{const o=[];o.push(p.css.minute),this.validation.isValid(i,M.minutes)||o.push(p.css.disabled),e(M.minutes,i,o,r),r.classList.remove(...r.classList),r.classList.add(...o),r.setAttribute("data-value",`${i.minutes}`),r.innerText=i.minutesFormatted,i.manipulate(n,M.minutes)})}}class jf{constructor(){this.optionsStore=D.locate(mt),this.validation=D.locate(Ot)}getPicker(){const t=document.createElement("div");t.classList.add(p.css.secondContainer);for(let e=0;e<12;e++){const s=document.createElement("div");s.setAttribute("data-action",_.selectSecond),s.tabIndex=-1,t.appendChild(s)}return t}_update(t,e){const s=t.getElementsByClassName(p.css.secondContainer)[0],i=this.optionsStore.viewDate.clone.startOf(M.minutes);s.querySelectorAll(`[data-action="${_.selectSecond}"]`).forEach(n=>{const r=[];r.push(p.css.second),this.validation.isValid(i,M.seconds)||r.push(p.css.disabled),e(M.seconds,i,r,n),n.classList.remove(...n.classList),n.classList.add(...r),n.setAttribute("data-value",`${i.seconds}`),n.innerText=i.secondsFormatted,i.manipulate(5,M.seconds)})}}class Nt{static toggle(t){t.classList.contains(p.css.show)?this.hide(t):this.show(t)}static showImmediately(t){t.classList.remove(p.css.collapsing),t.classList.add(p.css.collapse,p.css.show),t.style.height=""}static show(t){if(t.classList.contains(p.css.collapsing)||t.classList.contains(p.css.show))return;const e=()=>{Nt.showImmediately(t)};t.style.height="0",t.classList.remove(p.css.collapse),t.classList.add(p.css.collapsing),setTimeout(e,this.getTransitionDurationFromElement(t)),t.style.height=`${t.scrollHeight}px`}static hideImmediately(t){t&&(t.classList.remove(p.css.collapsing,p.css.show),t.classList.add(p.css.collapse))}static hide(t){if(t.classList.contains(p.css.collapsing)||!t.classList.contains(p.css.show))return;const e=()=>{Nt.hideImmediately(t)};t.style.height=`${t.getBoundingClientRect().height}px`,(i=>i.offsetHeight)(t),t.classList.remove(p.css.collapse,p.css.show),t.classList.add(p.css.collapsing),t.style.height="",setTimeout(e,this.getTransitionDurationFromElement(t))}}Nt.getTransitionDurationFromElement=a=>{if(!a)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(a);const s=Number.parseFloat(t),i=Number.parseFloat(e);return!s&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*1e3)};class Sc{constructor(){this._isVisible=!1,this._keyboardEventBound=this._keyboardEvent.bind(this),this._documentClickEvent=t=>{this.optionsStore.options.debug||window.debug||this._isVisible&&!t.composedPath().includes(this.widget)&&!t.composedPath()?.includes(this.optionsStore.element)&&this.hide()},this._actionsClickEvent=t=>{this._eventEmitters.action.emit({e:t})},this.optionsStore=D.locate(mt),this.validation=D.locate(Ot),this.dates=D.locate(Rt),this.dateDisplay=D.locate(Rf),this.monthDisplay=D.locate(zf),this.yearDisplay=D.locate(Bf),this.decadeDisplay=D.locate(Wf),this.timeDisplay=D.locate(qf),this.hourDisplay=D.locate(Zf),this.minuteDisplay=D.locate(Uf),this.secondDisplay=D.locate(jf),this._eventEmitters=D.locate(D1),this._widget=void 0,this._eventEmitters.updateDisplay.subscribe(t=>{this._update(t)})}get widget(){return this._widget}get dateContainer(){return this.widget?.querySelector(`div.${p.css.dateContainer}`)}get timeContainer(){return this.widget?.querySelector(`div.${p.css.timeContainer}`)}get isVisible(){return this._isVisible}_update(t){if(this.widget)switch(t){case M.seconds:this.secondDisplay._update(this.widget,this.paint);break;case M.minutes:this.minuteDisplay._update(this.widget,this.paint);break;case M.hours:this.hourDisplay._update(this.widget,this.paint);break;case M.date:this.dateDisplay._update(this.widget,this.paint);break;case M.month:this.monthDisplay._update(this.widget,this.paint);break;case M.year:this.yearDisplay._update(this.widget,this.paint);break;case"decade":this.decadeDisplay._update(this.widget,this.paint);break;case"clock":if(!this._hasTime)break;this.timeDisplay._update(this.widget),this._update(M.hours),this._update(M.minutes),this._update(M.seconds);break;case"calendar":this._update(M.date),this._update(M.year),this._update(M.month),this.decadeDisplay._update(this.widget,this.paint),this._updateCalendarHeader();break;case"all":this._hasTime&&this._update("clock"),this._hasDate&&this._update("calendar")}}paint(t,e,s,i){}show(){if(this.widget==null){if(this._showSetDefaultIfNeeded(),this._buildWidget(),this._updateTheme(),this._showSetupViewMode(),this.optionsStore.options.display.inline)this.optionsStore.element.appendChild(this.widget);else{const t=this.optionsStore.options?.container||document.body,e=this.optionsStore.options?.display?.placement||"bottom";t.appendChild(this.widget);const s=this._handleFocus.bind(this);this.createPopup(this.optionsStore.element,this.widget,{modifiers:[{name:"eventListeners",enabled:!0},{name:"focusDate",enabled:!0,phase:"afterWrite",fn(){s()}}],placement:document.documentElement.dir==="rtl"?`${e}-end`:`${e}-start`}).then(()=>{this._handleFocus()})}this.optionsStore.options.display.viewMode=="clock"&&this._eventEmitters.action.emit({e:null,action:_.showClock}),this.widget.querySelectorAll("[data-action]").forEach(t=>t.addEventListener("click",this._actionsClickEvent)),this._hasTime&&this.optionsStore.options.display.sideBySide&&(this.timeDisplay._update(this.widget),this.widget.getElementsByClassName(p.css.clockContainer)[0].style.display="grid")}this.widget.classList.add(p.css.show),this.optionsStore.options.display.inline||(this.updatePopup(),document.addEventListener("click",this._documentClickEvent)),this._eventEmitters.triggerEvent.emit({type:p.events.show}),this._isVisible=!0,this.optionsStore.options.display.keyboardNavigation&&this.widget.addEventListener("keydown",this._keyboardEventBound)}_showSetupViewMode(){const t=this._hasTime&&!this._hasDate;t?(this.optionsStore.currentView="clock",this._eventEmitters.action.emit({e:null,action:_.showClock})):this.optionsStore.currentCalendarViewMode||(this.optionsStore.currentCalendarViewMode=this.optionsStore.minimumCalendarViewMode),!t&&this.optionsStore.options.display.viewMode!=="clock"&&(this._hasTime&&(this.optionsStore.options.display.sideBySide?Nt.show(this.timeContainer):Nt.hideImmediately(this.timeContainer)),Nt.show(this.dateContainer)),this._hasDate&&this._showMode()}_showSetDefaultIfNeeded(){if(this.dates.picked.length==0){if(this.optionsStore.options.useCurrent&&!this.optionsStore.options.defaultDate){const t=new ct().setLocalization(this.optionsStore.options.localization);if(!this.optionsStore.options.keepInvalid){let e=0,s=1;for(this.optionsStore.options.restrictions.maxDate?.isBefore(t)&&(s=-1);!this.validation.isValid(t)&&e>31;)t.manipulate(s,M.date),e++}this.dates.setValue(t)}this.optionsStore.options.defaultDate&&this.dates.setValue(this.optionsStore.options.defaultDate)}}async createPopup(t,e,s){let i;if(window?.Popper)i=window?.Popper?.createPopper;else{const{createPopper:n}=await Fe(async()=>{const{createPopper:r}=await Promise.resolve().then(()=>fi);return{createPopper:r}},void 0);i=n}i&&(this._popperInstance=i(t,e,s))}updatePopup(){this._popperInstance&&this._popperInstance.update()}_showMode(t){if(!this.widget)return;if(t){const i=Math.max(this.optionsStore.minimumCalendarViewMode,Math.min(3,this.optionsStore.currentCalendarViewMode+t));if(this.optionsStore.currentCalendarViewMode==i)return;this.optionsStore.currentCalendarViewMode=i}this.widget.querySelectorAll(`.${p.css.dateContainer} > div:not(.${p.css.calendarHeader}), .${p.css.timeContainer} > div:not(.${p.css.clockContainer})`).forEach(i=>i.style.display="none");const e=ea[this.optionsStore.currentCalendarViewMode],s=this.widget.querySelector(`.${e.className}`);switch(e.className){case p.css.decadesContainer:this.decadeDisplay._update(this.widget,this.paint);break;case p.css.yearsContainer:this.yearDisplay._update(this.widget,this.paint);break;case p.css.monthsContainer:this.monthDisplay._update(this.widget,this.paint);break;case p.css.daysContainer:this.dateDisplay._update(this.widget,this.paint);break}s.style.display="grid",this.optionsStore.options.display.sideBySide&&(this.widget.querySelectorAll(`.${p.css.clockContainer}`)[0].style.display="grid"),this._updateCalendarHeader(),this._eventEmitters.viewUpdate.emit(),this.findViewDateElement()?.focus()}_updateTheme(t){if(this.widget){if(t){if(this.optionsStore.options.display.theme===t)return;this.optionsStore.options.display.theme=t}this.widget.classList.remove("light","dark"),this.widget.classList.add(this._getThemeClass()),this.optionsStore.options.display.theme==="auto"?window.matchMedia(p.css.isDarkPreferredQuery).addEventListener("change",()=>this._updateTheme()):window.matchMedia(p.css.isDarkPreferredQuery).removeEventListener("change",()=>this._updateTheme())}}_getThemeClass(){const t=this.optionsStore.options.display.theme||"auto",e=window.matchMedia&&window.matchMedia(p.css.isDarkPreferredQuery).matches;switch(t){case"light":return p.css.lightTheme;case"dark":return p.css.darkTheme;case"auto":return e?p.css.darkTheme:p.css.lightTheme}}_updateCalendarHeader(){if(!this._hasDate)return;const t=[...this.widget.querySelector(`.${p.css.dateContainer} div[style*="display: grid"]`).classList].find(n=>n.startsWith(p.css.dateContainer)),[e,s,i]=this.widget.getElementsByClassName(p.css.calendarHeader)[0].getElementsByTagName("div");switch(t){case p.css.decadesContainer:e.setAttribute("title",this.optionsStore.options.localization.previousCentury),s.setAttribute("title",""),i.setAttribute("title",this.optionsStore.options.localization.nextCentury);break;case p.css.yearsContainer:e.setAttribute("title",this.optionsStore.options.localization.previousDecade),s.setAttribute("title",this.optionsStore.options.localization.selectDecade),i.setAttribute("title",this.optionsStore.options.localization.nextDecade);break;case p.css.monthsContainer:e.setAttribute("title",this.optionsStore.options.localization.previousYear),s.setAttribute("title",this.optionsStore.options.localization.selectYear),i.setAttribute("title",this.optionsStore.options.localization.nextYear);break;case p.css.daysContainer:e.setAttribute("title",this.optionsStore.options.localization.previousMonth),s.setAttribute("title",this.optionsStore.options.localization.selectMonth),i.setAttribute("title",this.optionsStore.options.localization.nextMonth),s.setAttribute(t,this.optionsStore.viewDate.format(this.optionsStore.options.localization.dayViewHeaderFormat));break}s.innerText=s.getAttribute(t)}hide(){!this.widget||!this._isVisible||(this.widget.classList.remove(p.css.show),this._isVisible&&(this._eventEmitters.triggerEvent.emit({type:p.events.hide,date:this.optionsStore.unset?null:this.dates.lastPicked?.clone}),this._isVisible=!1),document.removeEventListener("click",this._documentClickEvent),this.optionsStore.options.display.keyboardNavigation&&this.widget.removeEventListener("keydown",this._keyboardEventBound),this.optionsStore.toggle?this.optionsStore.toggle.focus():this.optionsStore.input&&this.optionsStore.input.focus())}toggle(){return this._isVisible?this.hide():this.show()}_dispose(){document.removeEventListener("click",this._documentClickEvent),this._popperInstance&&this._popperInstance.destroy(),this.widget&&(this.widget.querySelectorAll("[data-action]").forEach(t=>t.removeEventListener("click",this._actionsClickEvent)),this.widget.parentNode.removeChild(this.widget),this._widget=void 0)}_buildWidget(){const t=document.createElement("div");t.tabIndex=-1,t.classList.add(p.css.widget),t.setAttribute("role","widget");const e=document.createElement("div");e.tabIndex=-1,e.classList.add(p.css.dateContainer),e.append(this.getHeadTemplate(),this.decadeDisplay.getPicker(),this.yearDisplay.getPicker(),this.monthDisplay.getPicker(),this.dateDisplay.getPicker());const s=document.createElement("div");s.tabIndex=-1,s.classList.add(p.css.timeContainer),s.appendChild(this.timeDisplay.getPicker(this._iconTag.bind(this))),s.appendChild(this.hourDisplay.getPicker()),s.appendChild(this.minuteDisplay.getPicker()),s.appendChild(this.secondDisplay.getPicker());const i=document.createElement("div");if(i.tabIndex=-1,i.classList.add(p.css.toolbar),i.append(...this.getToolbarElements()),this.optionsStore.options.display.inline&&t.classList.add(p.css.inline),this.optionsStore.options.display.calendarWeeks&&t.classList.add("calendarWeeks"),this.optionsStore.options.display.sideBySide&&this._hasDateAndTime){this._buildWidgetSideBySide(t,e,s,i);return}this.optionsStore.options.display.toolbarPlacement==="top"&&t.appendChild(i);const n=(o,h,c,d)=>{o&&(h&&(c.classList.add(p.css.collapse),d&&c.classList.add(p.css.show)),t.appendChild(c))};n(this._hasDate,this._hasTime,e,this.optionsStore.options.display.viewMode!=="clock"),n(this._hasTime,this._hasDate,s,this.optionsStore.options.display.viewMode==="clock"),this.optionsStore.options.display.toolbarPlacement==="bottom"&&t.appendChild(i);const r=document.createElement("div");r.classList.add("arrow"),r.setAttribute("data-popper-arrow",""),t.appendChild(r),this._widget=t}_buildWidgetSideBySide(t,e,s,i){t.classList.add(p.css.sideBySide),this.optionsStore.options.display.toolbarPlacement==="top"&&t.appendChild(i);const n=document.createElement("div");n.classList.add("td-row"),e.classList.add("td-half"),s.classList.add("td-half"),n.appendChild(e),n.appendChild(s),t.appendChild(n),this.optionsStore.options.display.toolbarPlacement==="bottom"&&t.appendChild(i),this._widget=t}get _hasTime(){return this.optionsStore.options.display.components.clock&&(this.optionsStore.options.display.components.hours||this.optionsStore.options.display.components.minutes||this.optionsStore.options.display.components.seconds)}get _hasDate(){return this.optionsStore.options.display.components.calendar&&(this.optionsStore.options.display.components.year||this.optionsStore.options.display.components.month||this.optionsStore.options.display.components.date)}get _hasDateAndTime(){return this._hasDate&&this._hasTime}getToolbarElements(){const t=[];if(this.optionsStore.options.display.buttons.today){const e=document.createElement("div");e.tabIndex=-1,e.setAttribute("data-action",_.today),e.setAttribute("title",this.optionsStore.options.localization.today),e.appendChild(this._iconTag(this.optionsStore.options.display.icons.today)),t.push(e)}if(!this.optionsStore.options.display.sideBySide&&this._hasDate&&this._hasTime){let e,s;this.optionsStore.options.display.viewMode==="clock"?(e=this.optionsStore.options.localization.selectDate,s=this.optionsStore.options.display.icons.date):(e=this.optionsStore.options.localization.selectTime,s=this.optionsStore.options.display.icons.time);const i=document.createElement("div");i.tabIndex=-1,i.setAttribute("data-action",_.togglePicker),i.setAttribute("title",e),i.appendChild(this._iconTag(s)),t.push(i)}if(this.optionsStore.options.display.buttons.clear){const e=document.createElement("div");e.tabIndex=-1,e.setAttribute("data-action",_.clear),e.setAttribute("title",this.optionsStore.options.localization.clear),e.appendChild(this._iconTag(this.optionsStore.options.display.icons.clear)),t.push(e)}if(this.optionsStore.options.display.buttons.close){const e=document.createElement("div");e.tabIndex=-1,e.setAttribute("data-action",_.close),e.setAttribute("title",this.optionsStore.options.localization.close),e.appendChild(this._iconTag(this.optionsStore.options.display.icons.close)),t.push(e)}return t}getHeadTemplate(){const t=document.createElement("div");t.classList.add(p.css.calendarHeader);const e=document.createElement("div");e.classList.add(p.css.previous),e.setAttribute("data-action",_.previous),e.appendChild(this._iconTag(this.optionsStore.options.display.icons.previous)),e.tabIndex=-1;const s=document.createElement("div");s.classList.add(p.css.switch),s.setAttribute("data-action",_.changeCalendarView),s.tabIndex=-1;const i=document.createElement("div");return i.classList.add(p.css.next),i.setAttribute("data-action",_.next),i.appendChild(this._iconTag(this.optionsStore.options.display.icons.next)),i.tabIndex=-1,t.append(e,s,i),t}_iconTag(t){if(this.optionsStore.options.display.icons.type==="sprites"){const s=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","use");return i.setAttribute("xlink:href",t),i.setAttribute("href",t),s.appendChild(i),s}const e=document.createElement("i");return e.classList.add(...t.split(" ")),e}_rebuild(){const t=this._isVisible;this._dispose(),t&&this.show()}refreshCurrentView(){switch(this._isVisible||this._dispose(),this.optionsStore.currentView){case"clock":this._update("clock");break;case"calendar":this._update(M.date);break;case"months":this._update(M.month);break;case"years":this._update(M.year);break;case"decades":this._update("decade");break}}_keyboardEvent(t){if(this.optionsStore.currentView==="clock"){this._handleKeyDownClock(t);return}return this._handleKeyDownDate(t),!1}findViewDateElement(){let t="",e="";switch(this.optionsStore.currentView){case"clock":break;case"calendar":t=p.css.daysContainer,e=this.optionsStore.viewDate.dateToDataValue();break;case"months":t=p.css.monthsContainer,e=this.optionsStore.viewDate.month.toString();break;case"years":t=p.css.yearsContainer,e=this.optionsStore.viewDate.year.toString();break;case"decades":t=p.css.decadesContainer,e=(Math.floor(this.optionsStore.viewDate.year/10)*10).toString();break}return this.widget.querySelector(`.${t} > div[data-value="${e}"]`)}_handleKeyDownDate(t){let e=!1;const s=document.activeElement;let i=null,n=7,r=1,o=1;const h=this.optionsStore.currentView;switch(h){case"calendar":i=M.date;break;case"months":i=M.month,n=3,r=1;break;case"years":i=M.year,n=3,r=1;break;case"decades":i=M.year,n=30,r=10;break}switch(t.key){case"Esc":case"Escape":this._eventEmitters.action.emit({e:null,action:_.close});break;case" ":case"Enter":s.click(),t.stopPropagation(),t.preventDefault();return;case"Tab":this._handleTab(s,t);return;case"Right":case"ArrowRight":o=r,e=!0;break;case"Left":case"ArrowLeft":e=!0,o=-r;break;case"Down":case"ArrowDown":e=!0,o=n;break;case"Up":case"ArrowUp":e=!0,o=-n;break;case"PageDown":switch(h){case"calendar":i=t.shiftKey?M.year:M.month,o=1;break;case"months":i=M.year,o=t.shiftKey?10:1;break;case"years":case"decades":i=M.year,o=t.shiftKey?100:10;break}e=!0;break;case"PageUp":switch(h){case"calendar":i=t.shiftKey?M.year:M.month,o=-1;break;case"months":i=M.year,o=-(t.shiftKey?10:1);break;case"years":case"decades":i=M.year,o=-(t.shiftKey?100:10);break}e=!0;break;case"Home":this.optionsStore.viewDate=this.optionsStore.viewDate.clone.startOf("weekDay",this.optionsStore.options.localization.startOfTheWeek),e=!0,i=null;break;case"End":this.optionsStore.viewDate=this.optionsStore.viewDate.clone.endOf("weekDay",this.optionsStore.options.localization.startOfTheWeek),e=!0,i=null;break}if(!e)return;let c=this.optionsStore.viewDate;i&&(c=c.clone.manipulate(o,i)),this._eventEmitters.updateViewDate.emit(c);const d=this.findViewDateElement();d&&d.focus(),t.stopPropagation(),t.preventDefault()}_handleKeyDownClock(t){let e=!1;const s=document.activeElement,i=this.widget.querySelector(`.${p.css.timeContainer} > div[style*="display: grid"]`);let n=p.css.clockContainer;switch(i.classList.contains(p.css.hourContainer)&&(n=p.css.hourContainer),i.classList.contains(p.css.minuteContainer)&&(n=p.css.minuteContainer),i.classList.contains(p.css.secondContainer)&&(n=p.css.secondContainer),t.key){case"Esc":case"Escape":this._eventEmitters.action.emit({e:null,action:_.close});break;case" ":case"Enter":s.click(),t.stopPropagation(),t.preventDefault();return;case"Tab":this._handleTab(s,t);return}if(n===p.css.clockContainer)return;const r=[...i.querySelectorAll("div")],o=r.indexOf(document.activeElement),h=4;let c;switch(t.key){case"Right":case"ArrowRight":c=o<r.length-1?o+1:null,e=!0;break;case"Left":case"ArrowLeft":e=!0,c=o>0?o-1:null;break;case"Down":case"ArrowDown":c=o+h<r.length?o+h:null,e=!0;break;case"Up":case"ArrowUp":c=o-h>=0?o-h:null,e=!0;break}e&&(c!=null&&r[c].focus(),t.stopPropagation(),t.preventDefault())}_handleTab(t,e){const s=e.shiftKey,i=()=>{const h=this.widget.querySelectorAll(`.${p.css.calendarHeader} > div`);n.push(...h)},n=[];switch(console.log(this.optionsStore.currentView),this.optionsStore.currentView){case"clock":n.push(...this.widget.querySelectorAll(`.${p.css.timeContainer} > div[style*="display: grid"] > div[data-action]`)),this.widget.querySelectorAll(`.${p.css.clockContainer}`)[0]?.style.display==="grid"&&n.push(...this.widget.querySelectorAll(`.${p.css.toggleMeridiem}`));break;case"calendar":case"months":case"years":case"decades":i(),n.push(this.findViewDateElement());break}const r=this.widget.querySelectorAll(`.${p.css.toolbar} > div`);n.push(...r);const o=n.indexOf(t);o!==-1&&(s?o===0?n[n.length-1].focus():n[o-1].focus():o===n.length-1?n[0].focus():n[o+1].focus(),e.stopPropagation(),e.preventDefault())}_handleFocus(){this.optionsStore.currentView==="clock"?this._handleFocusClock():this.findViewDateElement().focus()}_handleFocusClock(){this.widget.querySelector(`.${p.css.timeContainer} > div[style*="display: grid"]`).children[0].focus()}}class Yf{constructor(){this.optionsStore=D.locate(mt),this.dates=D.locate(Rt),this.validation=D.locate(Ot),this.display=D.locate(Sc),this._eventEmitters=D.locate(D1),this._eventEmitters.action.subscribe(t=>{this.do(t.e,t.action)})}do(t,e){const s=t?.currentTarget;if(s?.classList?.contains(p.css.disabled))return;e=e||s?.dataset?.action;const i=(this.dates.lastPicked||this.optionsStore.viewDate).clone;switch(e){case _.next:case _.previous:this.handleNextPrevious(e);break;case _.changeCalendarView:this.display._showMode(1),this.display._updateCalendarHeader();break;case _.selectMonth:case _.selectYear:case _.selectDecade:this.handleSelectCalendarMode(e,s);break;case _.selectDay:this.handleSelectDay(s);break;case _.selectHour:{let n=+s.dataset.value;i.hours>=12&&this.optionsStore.isTwelveHour&&(n+=12),i.hours=n,this.dates.setValue(i,this.dates.lastPickedIndex),this.hideOrClock(t);break}case _.selectMinute:{i.minutes=+s.dataset.value,this.dates.setValue(i,this.dates.lastPickedIndex),this.hideOrClock(t);break}case _.selectSecond:{i.seconds=+s.dataset.value,this.dates.setValue(i,this.dates.lastPickedIndex),this.hideOrClock(t);break}case _.incrementHours:this.manipulateAndSet(i,M.hours);break;case _.incrementMinutes:this.manipulateAndSet(i,M.minutes,this.optionsStore.options.stepping);break;case _.incrementSeconds:this.manipulateAndSet(i,M.seconds);break;case _.decrementHours:this.manipulateAndSet(i,M.hours,-1);break;case _.decrementMinutes:this.manipulateAndSet(i,M.minutes,this.optionsStore.options.stepping*-1);break;case _.decrementSeconds:this.manipulateAndSet(i,M.seconds,-1);break;case _.toggleMeridiem:this.manipulateAndSet(i,M.hours,this.dates.lastPicked.hours>=12?-12:12);break;case _.togglePicker:this.handleToggle(s);break;case _.showClock:case _.showHours:case _.showMinutes:case _.showSeconds:!this.optionsStore.options.display.sideBySide&&this.optionsStore.currentView!=="clock"&&(Nt.hideImmediately(this.display.dateContainer),Nt.showImmediately(this.display.timeContainer)),this.handleShowClockContainers(e);break;case _.clear:this.dates.setValue(null),this.display._updateCalendarHeader();break;case _.close:this.display.hide();break;case _.today:{const n=new ct().setLocalization(this.optionsStore.options.localization);if(this._eventEmitters.updateViewDate.emit(n),!this.validation.isValid(n,M.date))break;this.optionsStore.options.dateRange?this.handleDateRange(n):this.optionsStore.options.multipleDates?this.handleMultiDate(n):this.dates.setValue(n,this.dates.lastPickedIndex);break}}}handleShowClockContainers(t){if(!this.display._hasTime){p.errorMessages.throwError("Cannot show clock containers when time is disabled.");return}this.optionsStore.currentView="clock",this.display.widget.querySelectorAll(`.${p.css.timeContainer} > div`).forEach(i=>i.style.display="none");let e="";switch(t){case _.showClock:e=p.css.clockContainer,this.display._update("clock");break;case _.showHours:e=p.css.hourContainer,this.display._update(M.hours);break;case _.showMinutes:e=p.css.minuteContainer,this.display._update(M.minutes);break;case _.showSeconds:e=p.css.secondContainer,this.display._update(M.seconds);break}const s=this.display.widget.getElementsByClassName(e)[0];s.style.display="grid",s.children[0]?.focus()}handleNextPrevious(t){const{unit:e,step:s}=ea[this.optionsStore.currentCalendarViewMode];t===_.next?this.optionsStore.viewDate.manipulate(s,e):this.optionsStore.viewDate.manipulate(s*-1,e),this._eventEmitters.viewUpdate.emit(),this.display._showMode()}hideOrClock(t){!this.optionsStore.isTwelveHour&&!this.optionsStore.options.display.components.minutes&&!this.optionsStore.options.display.keepOpen&&!this.optionsStore.options.display.inline?this.display.hide():this.do(t,_.showClock)}manipulateAndSet(t,e,s=1){const i=t.manipulate(s,e);this.validation.isValid(i,e)&&this.dates.setValue(i,this.dates.lastPickedIndex)}handleSelectCalendarMode(t,e){const s=+e.dataset.value;switch(t){case _.selectMonth:this.optionsStore.viewDate.month=s;break;case _.selectYear:case _.selectDecade:this.optionsStore.viewDate.year=s;break}this.optionsStore.currentCalendarViewMode===this.optionsStore.minimumCalendarViewMode?(this.dates.setValue(this.optionsStore.viewDate,this.dates.lastPickedIndex),this.optionsStore.options.display.inline||this.display.hide()):this.display._showMode(-1)}handleToggle(t){t.getAttribute("title")===this.optionsStore.options.localization.selectDate?(t.setAttribute("title",this.optionsStore.options.localization.selectTime),t.innerHTML=this.display._iconTag(this.optionsStore.options.display.icons.time).outerHTML,this.display._updateCalendarHeader(),this.optionsStore.refreshCurrentView()):(t.setAttribute("title",this.optionsStore.options.localization.selectDate),t.innerHTML=this.display._iconTag(this.optionsStore.options.display.icons.date).outerHTML,this.display._hasTime&&(this.handleShowClockContainers(_.showClock),this.display._update("clock"))),this.display.widget.querySelectorAll(`.${p.css.dateContainer}, .${p.css.timeContainer}`).forEach(s=>Nt.toggle(s)),this._eventEmitters.viewUpdate.emit(),this.display.widget.querySelector(`.${p.css.collapsing} > div[style*="display: grid"]`)?.focus()}handleSelectDay(t){const e=this.optionsStore.viewDate.clone;t.classList.contains(p.css.old)&&e.manipulate(-1,M.month),t.classList.contains(p.css.new)&&e.manipulate(1,M.month),e.date=+t.dataset.day,this.optionsStore.options.dateRange?this.handleDateRange(e):this.optionsStore.options.multipleDates?this.handleMultiDate(e):this.dates.setValue(e,this.dates.lastPickedIndex),!this.display._hasTime&&!this.optionsStore.options.display.keepOpen&&!this.optionsStore.options.display.inline&&!this.optionsStore.options.multipleDates&&!this.optionsStore.options.dateRange&&this.display.hide()}handleMultiDate(t){let e=this.dates.pickedIndex(t,M.date);e!==-1?this.dates.setValue(null,e):(e=this.dates.lastPickedIndex+1,this.dates.picked.length===0&&(e=0),this.dates.setValue(t,e))}handleDateRange(t){switch(this.dates.picked.length){case 2:{this.dates.clear();break}case 1:{const e=this.dates.picked[0];if(t.getTime()===e.getTime()){this.dates.clear();break}if(t.isBefore(e)){this.dates.setValue(t,0),this.dates.setValue(e,1);return}else{this.dates.setValue(t,1);return}}}this.dates.setValue(t,0)}}class bc{constructor(t,e={}){this._subscribers={},this._isDisabled=!1,this._inputChangeEvent=s=>{if(s?.detail)return;const n=()=>{this.dates.lastPicked&&(this.optionsStore.viewDate=this.dates.lastPicked.clone)},r=this.optionsStore.input.value;if(this.optionsStore.options.multipleDates||this.optionsStore.options.dateRange)try{const o=r.split(this.optionsStore.options.multipleDatesSeparator);for(let h=0;h<o.length;h++)this.dates.setFromInput(o[h],h);n()}catch{console.warn("TD: Something went wrong trying to set the multipleDates values from the input field.")}else this.dates.setFromInput(r,0),n()},this._toggleClickEvent=()=>{this.optionsStore.element?.disabled||this.optionsStore.input?.disabled||this.optionsStore.toggle.nodeName==="INPUT"&&this.optionsStore.toggle?.type==="text"&&this.optionsStore.options.allowInputToggle||this.toggle()},this._openClickEvent=()=>{this.optionsStore.element?.disabled||this.optionsStore.input?.disabled||this.display.isVisible||this.show()},Pf(),this._eventEmitters=D.locate(D1),this.optionsStore=D.locate(mt),this.display=D.locate(Sc),this.dates=D.locate(Rt),this.actions=D.locate(Yf),t||p.errorMessages.mustProvideElement(),this.optionsStore.element=t,this._initializeOptions(e,Ea,!0),this.optionsStore.viewDate.setLocalization(this.optionsStore.options.localization),this.optionsStore.unset=!0,this._initializeInput(),this._initializeToggle(),this.optionsStore.options.display.inline&&this.display.show(),this._eventEmitters.triggerEvent.subscribe(s=>{this._triggerEvent(s)}),this._eventEmitters.viewUpdate.subscribe(()=>{this._viewUpdate()}),this._eventEmitters.updateViewDate.subscribe(s=>{this.viewDate=s})}get viewDate(){return this.optionsStore.viewDate}set viewDate(t){this.optionsStore.viewDate=t,this.optionsStore.viewDate.setLocalization(this.optionsStore.options.localization),this.display._update(this.optionsStore.currentView==="clock"?"clock":"calendar")}updateOptions(t,e=!1){e?this._initializeOptions(t,Ea):this._initializeOptions(t,this.optionsStore.options),this.optionsStore.viewDate.setLocalization(this.optionsStore.options.localization),this.display.refreshCurrentView()}toggle(){this._isDisabled||this.display.toggle()}show(){this._isDisabled||this.display.show()}hide(){this.display.hide()}disable(){this._isDisabled=!0,this.optionsStore.input?.setAttribute("disabled","disabled"),this.display.hide()}enable(){this._isDisabled=!1,this.optionsStore.input?.removeAttribute("disabled")}clear(){this.optionsStore.input.value="",this.dates.clear()}subscribe(t,e){typeof t=="string"&&(t=[t]);let s;Array.isArray(e)?s=e:s=[e],t.length!==s.length&&p.errorMessages.subscribeMismatch();const i=[];for(let n=0;n<t.length;n++){const r=t[n];if(Array.isArray(this._subscribers[r])||(this._subscribers[r]=[]),this._subscribers[r].push(s[n]),i.push({unsubscribe:this._unsubscribe.bind(this,r,this._subscribers[r].length-1)}),t.length===1)return i[0]}return i}dispose(){this.display.hide(),this.display._dispose(),this._eventEmitters.destroy(),this.optionsStore.input?.removeEventListener("change",this._inputChangeEvent),this.optionsStore.options.allowInputToggle&&(this.optionsStore.input?.removeEventListener("click",this._openClickEvent),this.optionsStore.input?.removeEventListener("focus",this._openClickEvent)),this.optionsStore.toggle?.removeEventListener("click",this._toggleClickEvent),this.optionsStore.toggle?.removeEventListener("keydown",this._handleToggleKeydown),this._subscribers={}}locale(t){const e=Gf[t];e&&this.updateOptions({localization:e})}_triggerEvent(t){t.viewMode=this.optionsStore.currentView;const e=t.type===p.events.change;if(e){const{date:s,oldDate:i,isClear:n}=t;if(s&&i&&s.isSame(i)||!n&&!s&&!i)return;if(this._handleAfterChangeEvent(t),this.optionsStore.input?.dispatchEvent(new CustomEvent("change",{detail:t})),this.optionsStore.toggle){let r=this.optionsStore.options.localization.toggleAriaLabel;if(this.dates.picked.length>0){const o=this.dates.picked.map(h=>h.format()).join(", ");r=`${r}, ${o}`}this.optionsStore.toggle.ariaLabel=r}}if(this.optionsStore.element.dispatchEvent(new CustomEvent(t.type,{detail:t})),window.jQuery){const s=window.jQuery;e&&this.optionsStore.input?s(this.optionsStore.input).trigger(t):s(this.optionsStore.element).trigger(t)}this._publish(t)}_publish(t){Array.isArray(this._subscribers[t.type])&&this._subscribers[t.type].forEach(e=>{e(t)})}_viewUpdate(){this._triggerEvent({type:p.events.update,viewDate:this.optionsStore.viewDate.clone})}_unsubscribe(t,e){this._subscribers[t].splice(e,1)}_initializeOptions(t,e,s=!1){let i=X.deepCopy(t);i=X._mergeOptions(i,e),s&&(i=X._dataToOptions(this.optionsStore.element,i)),X._validateConflicts(i),i.viewDate=i.viewDate.setLocalization(i.localization),this.optionsStore.viewDate.isSame(i.viewDate)||(this.optionsStore.viewDate=i.viewDate),i.display.components.year&&(this.optionsStore.minimumCalendarViewMode=2),i.display.components.month&&(this.optionsStore.minimumCalendarViewMode=1),i.display.components.date&&(this.optionsStore.minimumCalendarViewMode=0),this.optionsStore.currentCalendarViewMode=Math.max(this.optionsStore.minimumCalendarViewMode,this.optionsStore.currentCalendarViewMode),ea[this.optionsStore.currentCalendarViewMode].name!==i.display.viewMode&&(this.optionsStore.currentCalendarViewMode=Math.max(ea.findIndex(n=>n.name===i.display.viewMode),this.optionsStore.minimumCalendarViewMode)),this.display?.isVisible&&this.display._update("all"),i.display.components.useTwentyfourHour&&i.localization.hourCycle===void 0?i.localization.hourCycle="h24":i.localization.hourCycle===void 0&&(i.localization.hourCycle=vc(i.localization.locale)),this.optionsStore.options=i,i.restrictions.maxDate&&this.viewDate.isAfter(i.restrictions.maxDate)&&(this.viewDate=i.restrictions.maxDate.clone),i.restrictions.minDate&&this.viewDate.isBefore(i.restrictions.minDate)&&(this.viewDate=i.restrictions.minDate.clone)}_initializeInput(){if(this.optionsStore.element.tagName=="INPUT")this.optionsStore.input=this.optionsStore.element;else{const t=this.optionsStore.element.dataset.tdTargetInput;t==null||t=="nearest"?this.optionsStore.input=this.optionsStore.element.querySelector("input"):this.optionsStore.input=this.optionsStore.element.querySelector(t)}this.optionsStore.input&&(!this.optionsStore.input.value&&this.optionsStore.options.defaultDate&&(this.optionsStore.input.value=this.dates.formatInput(this.optionsStore.options.defaultDate)),this.optionsStore.input.addEventListener("change",this._inputChangeEvent),this.optionsStore.options.allowInputToggle&&(this.optionsStore.input.addEventListener("click",this._openClickEvent),this.optionsStore.input.addEventListener("focus",this._openClickEvent)),this.optionsStore.input.value&&this._inputChangeEvent())}_initializeToggle(){if(this.optionsStore.options.display.inline)return;let t=this.optionsStore.element.dataset.tdTargetToggle;t=="nearest"&&(t='[data-td-toggle="datetimepicker"]'),this.optionsStore.toggle=t==null?this.optionsStore.element:this.optionsStore.element.querySelector(t),this.optionsStore.toggle!=null&&(this.optionsStore.toggle.addEventListener("click",this._toggleClickEvent),this.optionsStore.toggle!==this.optionsStore.element&&this.optionsStore.toggle.addEventListener("keydown",this._handleToggleKeydown.bind(this)))}_handleAfterChangeEvent(t){!this.optionsStore.options.promptTimeOnDateChange||this.optionsStore.options.multipleDates||this.optionsStore.options.display.inline||this.optionsStore.options.display.sideBySide||!this.display._hasTime||this.display.widget?.getElementsByClassName(p.css.show)[0].classList.contains(p.css.timeContainer)||!t.oldDate&&this.optionsStore.options.useCurrent||t.oldDate&&t.date?.isSame(t.oldDate)||(clearTimeout(this._currentPromptTimeTimeout),this._currentPromptTimeTimeout=setTimeout(()=>{this.display.widget&&this._eventEmitters.action.emit({e:{currentTarget:this.display.widget.querySelector('[data-action="togglePicker"]')},action:_.togglePicker})},this.optionsStore.options.promptTimeOnDateChangeTransitionDelay))}_handleToggleKeydown(t){t.key!==" "&&t.key!=="Enter"||(this.optionsStore.toggle.click(),t.stopPropagation(),t.preventDefault())}}const Gf={};class Le extends Error{}class Kf extends Le{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Xf extends Le{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Qf extends Le{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class qe extends Le{}class Ac extends Le{constructor(t){super(`Invalid unit ${t}`)}}class et extends Le{}class Qt extends Le{constructor(){super("Zone is an abstract class")}}const A="numeric",kt="short",lt="long",S1={year:A,month:A,day:A},Ec={year:A,month:kt,day:A},Jf={year:A,month:kt,day:A,weekday:kt},Cc={year:A,month:lt,day:A},Tc={year:A,month:lt,day:A,weekday:lt},Lc={hour:A,minute:A},Vc={hour:A,minute:A,second:A},kc={hour:A,minute:A,second:A,timeZoneName:kt},Hc={hour:A,minute:A,second:A,timeZoneName:lt},Oc={hour:A,minute:A,hourCycle:"h23"},Dc={hour:A,minute:A,second:A,hourCycle:"h23"},Ic={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:kt},Pc={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:lt},Nc={year:A,month:A,day:A,hour:A,minute:A},$c={year:A,month:A,day:A,hour:A,minute:A,second:A},Fc={year:A,month:kt,day:A,hour:A,minute:A},Rc={year:A,month:kt,day:A,hour:A,minute:A,second:A},t6={year:A,month:kt,day:A,weekday:kt,hour:A,minute:A},zc={year:A,month:lt,day:A,hour:A,minute:A,timeZoneName:kt},Bc={year:A,month:lt,day:A,hour:A,minute:A,second:A,timeZoneName:kt},Wc={year:A,month:lt,day:A,weekday:lt,hour:A,minute:A,timeZoneName:lt},qc={year:A,month:lt,day:A,weekday:lt,hour:A,minute:A,second:A,timeZoneName:lt};class oa{get type(){throw new Qt}get name(){throw new Qt}get ianaName(){return this.name}get isUniversal(){throw new Qt}offsetName(t,e){throw new Qt}formatOffset(t,e){throw new Qt}offset(t){throw new Qt}equals(t){throw new Qt}get isValid(){throw new Qt}}let ms=null;class Ra extends oa{static get instance(){return ms===null&&(ms=new Ra),ms}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return ad(t,e,s)}formatOffset(t,e){return Ca(this.offset(t),e)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Rs=new Map;function e6(a){let t=Rs.get(a);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:a,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Rs.set(a,t)),t}const a6={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function s6(a,t){const e=a.format(t).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),[,i,n,r,o,h,c,d]=s;return[r,i,n,o,h,c,d]}function i6(a,t){const e=a.formatToParts(t),s=[];for(let i=0;i<e.length;i++){const{type:n,value:r}=e[i],o=a6[n];n==="era"?s[o]=r:I(o)||(s[o]=parseInt(r,10))}return s}const Ms=new Map;class zt extends oa{static create(t){let e=Ms.get(t);return e===void 0&&Ms.set(t,e=new zt(t)),e}static resetCache(){Ms.clear(),Rs.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=zt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return ad(t,e,s,this.name)}formatOffset(t,e){return Ca(this.offset(t),e)}offset(t){if(!this.valid)return NaN;const e=new Date(t);if(isNaN(e))return NaN;const s=e6(this.name);let[i,n,r,o,h,c,d]=s.formatToParts?i6(s,e):s6(s,e);o==="BC"&&(i=-Math.abs(i)+1);const u=N1({year:i,month:n,day:r,hour:h===24?0:h,minute:c,second:d,millisecond:0});let f=+e;const m=f%1e3;return f-=m>=0?m:1e3+m,(u-f)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let q2={};function n6(a,t={}){const e=JSON.stringify([a,t]);let s=q2[e];return s||(s=new Intl.ListFormat(a,t),q2[e]=s),s}const zs=new Map;function Bs(a,t={}){const e=JSON.stringify([a,t]);let s=zs.get(e);return s===void 0&&(s=new Intl.DateTimeFormat(a,t),zs.set(e,s)),s}const Ws=new Map;function r6(a,t={}){const e=JSON.stringify([a,t]);let s=Ws.get(e);return s===void 0&&(s=new Intl.NumberFormat(a,t),Ws.set(e,s)),s}const qs=new Map;function o6(a,t={}){const{base:e,...s}=t,i=JSON.stringify([a,s]);let n=qs.get(i);return n===void 0&&(n=new Intl.RelativeTimeFormat(a,t),qs.set(i,n)),n}let wa=null;function h6(){return wa||(wa=new Intl.DateTimeFormat().resolvedOptions().locale,wa)}const Zs=new Map;function Zc(a){let t=Zs.get(a);return t===void 0&&(t=new Intl.DateTimeFormat(a).resolvedOptions(),Zs.set(a,t)),t}const Us=new Map;function c6(a){let t=Us.get(a);if(!t){const e=new Intl.Locale(a);t="getWeekInfo"in e?e.getWeekInfo():e.weekInfo,"minimalDays"in t||(t={...Uc,...t}),Us.set(a,t)}return t}function d6(a){const t=a.indexOf("-x-");t!==-1&&(a=a.substring(0,t));const e=a.indexOf("-u-");if(e===-1)return[a];{let s,i;try{s=Bs(a).resolvedOptions(),i=a}catch{const h=a.substring(0,e);s=Bs(h).resolvedOptions(),i=h}const{numberingSystem:n,calendar:r}=s;return[i,n,r]}}function l6(a,t,e){return(e||t)&&(a.includes("-u-")||(a+="-u"),e&&(a+=`-ca-${e}`),t&&(a+=`-nu-${t}`)),a}function p6(a){const t=[];for(let e=1;e<=12;e++){const s=N.utc(2009,e,1);t.push(a(s))}return t}function u6(a){const t=[];for(let e=1;e<=7;e++){const s=N.utc(2016,11,13+e);t.push(a(s))}return t}function i1(a,t,e,s){const i=a.listingMode();return i==="error"?null:i==="en"?e(t):s(t)}function f6(a){return a.numberingSystem&&a.numberingSystem!=="latn"?!1:a.numberingSystem==="latn"||!a.locale||a.locale.startsWith("en")||Zc(a.locale).numberingSystem==="latn"}class m6{constructor(t,e,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;const{padTo:i,floor:n,...r}=s;if(!e||Object.keys(r).length>0){const o={useGrouping:!1,...s};s.padTo>0&&(o.minimumIntegerDigits=s.padTo),this.inf=r6(t,o)}}format(t){if(this.inf){const e=this.floor?Math.floor(t):t;return this.inf.format(e)}else{const e=this.floor?Math.floor(t):Ai(t,3);return G(e,this.padTo)}}}class M6{constructor(t,e,s){this.opts=s,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const r=-1*(t.offset/60),o=r>=0?`Etc/GMT+${r}`:`Etc/GMT${r}`;t.offset!==0&&zt.create(o).valid?(i=o,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const n={...this.opts};n.timeZone=n.timeZone||i,this.dtf=Bs(e,n)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(e=>{if(e.type==="timeZoneName"){const s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:s}}else return e}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class v6{constructor(t,e,s){this.opts={style:"long",...s},!e&&td()&&(this.rtf=o6(t,s))}format(t,e){return this.rtf?this.rtf.format(t,e):$6(e,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]}}const Uc={firstDay:1,minimalDays:4,weekend:[6,7]};class B{static fromOpts(t){return B.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,e,s,i,n=!1){const r=t||U.defaultLocale,o=r||(n?"en-US":h6()),h=e||U.defaultNumberingSystem,c=s||U.defaultOutputCalendar,d=Ys(i)||U.defaultWeekSettings;return new B(o,h,c,d,r)}static resetCache(){wa=null,zs.clear(),Ws.clear(),qs.clear(),Zs.clear(),Us.clear()}static fromObject({locale:t,numberingSystem:e,outputCalendar:s,weekSettings:i}={}){return B.create(t,e,s,i)}constructor(t,e,s,i,n){const[r,o,h]=d6(t);this.locale=r,this.numberingSystem=e||o||null,this.outputCalendar=s||h||null,this.weekSettings=i,this.intl=l6(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=n,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=f6(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),e=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&e?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:B.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ys(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,e=!1){return i1(this,t,nd,()=>{const s=this.intl==="ja"||this.intl.startsWith("ja-");e&=!s;const i=e?{month:t,day:"numeric"}:{month:t},n=e?"format":"standalone";if(!this.monthsCache[n][t]){const r=s?o=>this.dtFormatter(o,i).format():o=>this.extract(o,i,"month");this.monthsCache[n][t]=p6(r)}return this.monthsCache[n][t]})}weekdays(t,e=!1){return i1(this,t,hd,()=>{const s=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=e?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=u6(n=>this.extract(n,s,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return i1(this,void 0,()=>cd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[N.utc(2016,11,13,9),N.utc(2016,11,13,19)].map(e=>this.extract(e,t,"dayperiod"))}return this.meridiemCache})}eras(t){return i1(this,t,dd,()=>{const e={era:t};return this.eraCache[t]||(this.eraCache[t]=[N.utc(-40,1,1),N.utc(2017,1,1)].map(s=>this.extract(s,e,"era"))),this.eraCache[t]})}extract(t,e,s){const i=this.dtFormatter(t,e),n=i.formatToParts(),r=n.find(o=>o.type.toLowerCase()===s);return r?r.value:null}numberFormatter(t={}){return new m6(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,e={}){return new M6(t,this.intl,e)}relFormatter(t={}){return new v6(this.intl,this.isEnglish(),t)}listFormatter(t={}){return n6(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Zc(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ed()?c6(this.locale):Uc}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let vs=null;class st extends oa{static get utcInstance(){return vs===null&&(vs=new st(0)),vs}static instance(t){return t===0?st.utcInstance:new st(t)}static parseSpecifier(t){if(t){const e=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new st($1(e[1],e[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Ca(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Ca(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,e){return Ca(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class jc extends oa{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ee(a,t){if(I(a)||a===null)return t;if(a instanceof oa)return a;if(S6(a)){const e=a.toLowerCase();return e==="default"?t:e==="local"||e==="system"?Ra.instance:e==="utc"||e==="gmt"?st.utcInstance:st.parseSpecifier(e)||zt.create(a)}else return ie(a)?st.instance(a):typeof a=="object"&&"offset"in a&&typeof a.offset=="function"?a:new jc(a)}const xi={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Z2={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},g6=xi.hanidec.replace(/[\[|\]]/g,"").split("");function y6(a){let t=parseInt(a,10);if(isNaN(t)){t="";for(let e=0;e<a.length;e++){const s=a.charCodeAt(e);if(a[e].search(xi.hanidec)!==-1)t+=g6.indexOf(a[e]);else for(const i in Z2){const[n,r]=Z2[i];s>=n&&s<=r&&(t+=s-n)}}return parseInt(t,10)}else return t}const js=new Map;function w6(){js.clear()}function Et({numberingSystem:a},t=""){const e=a||"latn";let s=js.get(e);s===void 0&&(s=new Map,js.set(e,s));let i=s.get(t);return i===void 0&&(i=new RegExp(`${xi[e]}${t}`),s.set(t,i)),i}let U2=()=>Date.now(),j2="system",Y2=null,G2=null,K2=null,X2=60,Q2,J2=null,U=class{static get now(){return U2}static set now(t){U2=t}static set defaultZone(t){j2=t}static get defaultZone(){return ee(j2,Ra.instance)}static get defaultLocale(){return Y2}static set defaultLocale(t){Y2=t}static get defaultNumberingSystem(){return G2}static set defaultNumberingSystem(t){G2=t}static get defaultOutputCalendar(){return K2}static set defaultOutputCalendar(t){K2=t}static get defaultWeekSettings(){return J2}static set defaultWeekSettings(t){J2=Ys(t)}static get twoDigitCutoffYear(){return X2}static set twoDigitCutoffYear(t){X2=t%100}static get throwOnInvalid(){return Q2}static set throwOnInvalid(t){Q2=t}static resetCaches(){B.resetCache(),zt.resetCache(),N.resetCache(),w6()}};class Lt{constructor(t,e){this.reason=t,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Yc=[0,31,59,90,120,151,181,212,243,273,304,334],Gc=[0,31,60,91,121,152,182,213,244,274,305,335];function yt(a,t){return new Lt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${a}, which is invalid`)}function _i(a,t,e){const s=new Date(Date.UTC(a,t-1,e));a<100&&a>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);const i=s.getUTCDay();return i===0?7:i}function Kc(a,t,e){return e+(za(a)?Gc:Yc)[t-1]}function Xc(a,t){const e=za(a)?Gc:Yc,s=e.findIndex(n=>n<t),i=t-e[s];return{month:s+1,day:i}}function Si(a,t){return(a-t+7)%7+1}function b1(a,t=4,e=1){const{year:s,month:i,day:n}=a,r=Kc(s,i,n),o=Si(_i(s,i,n),e);let h=Math.floor((r-o+14-t)/7),c;return h<1?(c=s-1,h=La(c,t,e)):h>La(s,t,e)?(c=s+1,h=1):c=s,{weekYear:c,weekNumber:h,weekday:o,...F1(a)}}function tn(a,t=4,e=1){const{weekYear:s,weekNumber:i,weekday:n}=a,r=Si(_i(s,1,t),e),o=Ue(s);let h=i*7+n-r-7+t,c;h<1?(c=s-1,h+=Ue(c)):h>o?(c=s+1,h-=Ue(s)):c=s;const{month:d,day:l}=Xc(c,h);return{year:c,month:d,day:l,...F1(a)}}function gs(a){const{year:t,month:e,day:s}=a,i=Kc(t,e,s);return{year:t,ordinal:i,...F1(a)}}function en(a){const{year:t,ordinal:e}=a,{month:s,day:i}=Xc(t,e);return{year:t,month:s,day:i,...F1(a)}}function an(a,t){if(!I(a.localWeekday)||!I(a.localWeekNumber)||!I(a.localWeekYear)){if(!I(a.weekday)||!I(a.weekNumber)||!I(a.weekYear))throw new qe("Cannot mix locale-based week fields with ISO-based week fields");return I(a.localWeekday)||(a.weekday=a.localWeekday),I(a.localWeekNumber)||(a.weekNumber=a.localWeekNumber),I(a.localWeekYear)||(a.weekYear=a.localWeekYear),delete a.localWeekday,delete a.localWeekNumber,delete a.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function x6(a,t=4,e=1){const s=P1(a.weekYear),i=wt(a.weekNumber,1,La(a.weekYear,t,e)),n=wt(a.weekday,1,7);return s?i?n?!1:yt("weekday",a.weekday):yt("week",a.weekNumber):yt("weekYear",a.weekYear)}function _6(a){const t=P1(a.year),e=wt(a.ordinal,1,Ue(a.year));return t?e?!1:yt("ordinal",a.ordinal):yt("year",a.year)}function Qc(a){const t=P1(a.year),e=wt(a.month,1,12),s=wt(a.day,1,A1(a.year,a.month));return t?e?s?!1:yt("day",a.day):yt("month",a.month):yt("year",a.year)}function Jc(a){const{hour:t,minute:e,second:s,millisecond:i}=a,n=wt(t,0,23)||t===24&&e===0&&s===0&&i===0,r=wt(e,0,59),o=wt(s,0,59),h=wt(i,0,999);return n?r?o?h?!1:yt("millisecond",i):yt("second",s):yt("minute",e):yt("hour",t)}function I(a){return typeof a>"u"}function ie(a){return typeof a=="number"}function P1(a){return typeof a=="number"&&a%1===0}function S6(a){return typeof a=="string"}function b6(a){return Object.prototype.toString.call(a)==="[object Date]"}function td(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function ed(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function A6(a){return Array.isArray(a)?a:[a]}function sn(a,t,e){if(a.length!==0)return a.reduce((s,i)=>{const n=[t(i),i];return s&&e(s[0],n[0])===s[0]?s:n},null)[1]}function E6(a,t){return t.reduce((e,s)=>(e[s]=a[s],e),{})}function aa(a,t){return Object.prototype.hasOwnProperty.call(a,t)}function Ys(a){if(a==null)return null;if(typeof a!="object")throw new et("Week settings must be an object");if(!wt(a.firstDay,1,7)||!wt(a.minimalDays,1,7)||!Array.isArray(a.weekend)||a.weekend.some(t=>!wt(t,1,7)))throw new et("Invalid week settings");return{firstDay:a.firstDay,minimalDays:a.minimalDays,weekend:Array.from(a.weekend)}}function wt(a,t,e){return P1(a)&&a>=t&&a<=e}function C6(a,t){return a-t*Math.floor(a/t)}function G(a,t=2){const e=a<0;let s;return e?s="-"+(""+-a).padStart(t,"0"):s=(""+a).padStart(t,"0"),s}function Jt(a){if(!(I(a)||a===null||a===""))return parseInt(a,10)}function fe(a){if(!(I(a)||a===null||a===""))return parseFloat(a)}function bi(a){if(!(I(a)||a===null||a==="")){const t=parseFloat("0."+a)*1e3;return Math.floor(t)}}function Ai(a,t,e="round"){const s=10**t;switch(e){case"expand":return a>0?Math.ceil(a*s)/s:Math.floor(a*s)/s;case"trunc":return Math.trunc(a*s)/s;case"round":return Math.round(a*s)/s;case"floor":return Math.floor(a*s)/s;case"ceil":return Math.ceil(a*s)/s;default:throw new RangeError(`Value rounding ${e} is out of range`)}}function za(a){return a%4===0&&(a%100!==0||a%400===0)}function Ue(a){return za(a)?366:365}function A1(a,t){const e=C6(t-1,12)+1,s=a+(t-e)/12;return e===2?za(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][e-1]}function N1(a){let t=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute,a.second,a.millisecond);return a.year<100&&a.year>=0&&(t=new Date(t),t.setUTCFullYear(a.year,a.month-1,a.day)),+t}function nn(a,t,e){return-Si(_i(a,1,t),e)+t-1}function La(a,t=4,e=1){const s=nn(a,t,e),i=nn(a+1,t,e);return(Ue(a)-s+i)/7}function Gs(a){return a>99?a:a>U.twoDigitCutoffYear?1900+a:2e3+a}function ad(a,t,e,s=null){const i=new Date(a),n={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(n.timeZone=s);const r={timeZoneName:t,...n},o=new Intl.DateTimeFormat(e,r).formatToParts(i).find(h=>h.type.toLowerCase()==="timezonename");return o?o.value:null}function $1(a,t){let e=parseInt(a,10);Number.isNaN(e)&&(e=0);const s=parseInt(t,10)||0,i=e<0||Object.is(e,-0)?-s:s;return e*60+i}function sd(a){const t=Number(a);if(typeof a=="boolean"||a===""||!Number.isFinite(t))throw new et(`Invalid unit value ${a}`);return t}function E1(a,t){const e={};for(const s in a)if(aa(a,s)){const i=a[s];if(i==null)continue;e[t(s)]=sd(i)}return e}function Ca(a,t){const e=Math.trunc(Math.abs(a/60)),s=Math.trunc(Math.abs(a%60)),i=a>=0?"+":"-";switch(t){case"short":return`${i}${G(e,2)}:${G(s,2)}`;case"narrow":return`${i}${e}${s>0?`:${s}`:""}`;case"techie":return`${i}${G(e,2)}${G(s,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function F1(a){return E6(a,["hour","minute","second","millisecond"])}const T6=["January","February","March","April","May","June","July","August","September","October","November","December"],id=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],L6=["J","F","M","A","M","J","J","A","S","O","N","D"];function nd(a){switch(a){case"narrow":return[...L6];case"short":return[...id];case"long":return[...T6];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const rd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],od=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],V6=["M","T","W","T","F","S","S"];function hd(a){switch(a){case"narrow":return[...V6];case"short":return[...od];case"long":return[...rd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const cd=["AM","PM"],k6=["Before Christ","Anno Domini"],H6=["BC","AD"],O6=["B","A"];function dd(a){switch(a){case"narrow":return[...O6];case"short":return[...H6];case"long":return[...k6];default:return null}}function D6(a){return cd[a.hour<12?0:1]}function I6(a,t){return hd(t)[a.weekday-1]}function P6(a,t){return nd(t)[a.month-1]}function N6(a,t){return dd(t)[a.year<0?0:1]}function $6(a,t,e="always",s=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},n=["hours","minutes","seconds"].indexOf(a)===-1;if(e==="auto"&&n){const l=a==="days";switch(t){case 1:return l?"tomorrow":`next ${i[a][0]}`;case-1:return l?"yesterday":`last ${i[a][0]}`;case 0:return l?"today":`this ${i[a][0]}`}}const r=Object.is(t,-0)||t<0,o=Math.abs(t),h=o===1,c=i[a],d=s?h?c[1]:c[2]||c[1]:h?i[a][0]:a;return r?`${o} ${d} ago`:`in ${o} ${d}`}function rn(a,t){let e="";for(const s of a)s.literal?e+=s.val:e+=t(s.val);return e}const F6={D:S1,DD:Ec,DDD:Cc,DDDD:Tc,t:Lc,tt:Vc,ttt:kc,tttt:Hc,T:Oc,TT:Dc,TTT:Ic,TTTT:Pc,f:Nc,ff:Fc,fff:zc,ffff:Wc,F:$c,FF:Rc,FFF:Bc,FFFF:qc};class at{static create(t,e={}){return new at(t,e)}static parseFormat(t){let e=null,s="",i=!1;const n=[];for(let r=0;r<t.length;r++){const o=t.charAt(r);o==="'"?((s.length>0||i)&&n.push({literal:i||/^\s+$/.test(s),val:s===""?"'":s}),e=null,s="",i=!i):i||o===e?s+=o:(s.length>0&&n.push({literal:/^\s+$/.test(s),val:s}),s=o,e=o)}return s.length>0&&n.push({literal:i||/^\s+$/.test(s),val:s}),n}static macroTokenToFormatOpts(t){return F6[t]}constructor(t,e){this.opts=e,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,e){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...e}).format()}dtFormatter(t,e={}){return this.loc.dtFormatter(t,{...this.opts,...e})}formatDateTime(t,e){return this.dtFormatter(t,e).format()}formatDateTimeParts(t,e){return this.dtFormatter(t,e).formatToParts()}formatInterval(t,e){return this.dtFormatter(t.start,e).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,e){return this.dtFormatter(t,e).resolvedOptions()}num(t,e=0,s=void 0){if(this.opts.forceSimple)return G(t,e);const i={...this.opts};return e>0&&(i.padTo=e),s&&(i.signDisplay=s),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,e){const s=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",n=(f,m)=>this.loc.extract(t,f,m),r=f=>t.isOffsetFixed&&t.offset===0&&f.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,f.format):"",o=()=>s?D6(t):n({hour:"numeric",hourCycle:"h12"},"dayperiod"),h=(f,m)=>s?P6(t,f):n(m?{month:f}:{month:f,day:"numeric"},"month"),c=(f,m)=>s?I6(t,f):n(m?{weekday:f}:{weekday:f,month:"long",day:"numeric"},"weekday"),d=f=>{const m=at.macroTokenToFormatOpts(f);return m?this.formatWithSystemDefault(t,m):f},l=f=>s?N6(t,f):n({era:f},"era"),u=f=>{switch(f){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return r({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return r({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return r({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return o();case"d":return i?n({day:"numeric"},"day"):this.num(t.day);case"dd":return i?n({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?n({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?n({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return h("short",!0);case"LLLL":return h("long",!0);case"LLLLL":return h("narrow",!0);case"M":return i?n({month:"numeric"},"month"):this.num(t.month);case"MM":return i?n({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return h("short",!1);case"MMMM":return h("long",!1);case"MMMMM":return h("narrow",!1);case"y":return i?n({year:"numeric"},"year"):this.num(t.year);case"yy":return i?n({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?n({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?n({year:"numeric"},"year"):this.num(t.year,6);case"G":return l("short");case"GG":return l("long");case"GGGGG":return l("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(f)}};return rn(at.parseFormat(e),u)}formatDurationFromString(t,e){const s=this.opts.signMode==="negativeLargestOnly"?-1:1,i=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},n=(d,l)=>u=>{const f=i(u);if(f){const m=l.isNegativeDuration&&f!==l.largestUnit?s:1;let v;return this.opts.signMode==="negativeLargestOnly"&&f!==l.largestUnit?v="never":this.opts.signMode==="all"?v="always":v="auto",this.num(d.get(f)*m,u.length,v)}else return u},r=at.parseFormat(e),o=r.reduce((d,{literal:l,val:u})=>l?d:d.concat(u),[]),h=t.shiftTo(...o.map(i).filter(d=>d)),c={isNegativeDuration:h<0,largestUnit:Object.keys(h.values)[0]};return rn(r,n(h,c))}}const ld=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function ha(...a){const t=a.reduce((e,s)=>e+s.source,"");return RegExp(`^${t}$`)}function ca(...a){return t=>a.reduce(([e,s,i],n)=>{const[r,o,h]=n(t,i);return[{...e,...r},o||s,h]},[{},null,1]).slice(0,2)}function da(a,...t){if(a==null)return[null,null];for(const[e,s]of t){const i=e.exec(a);if(i)return s(i)}return[null,null]}function pd(...a){return(t,e)=>{const s={};let i;for(i=0;i<a.length;i++)s[a[i]]=Jt(t[e+i]);return[s,null,e+i]}}const ud=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,R6=`(?:${ud.source}?(?:\\[(${ld.source})\\])?)?`,Ei=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,fd=RegExp(`${Ei.source}${R6}`),Ci=RegExp(`(?:[Tt]${fd.source})?`),z6=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,B6=/(\d{4})-?W(\d\d)(?:-?(\d))?/,W6=/(\d{4})-?(\d{3})/,q6=pd("weekYear","weekNumber","weekDay"),Z6=pd("year","ordinal"),U6=/(\d{4})-(\d\d)-(\d\d)/,md=RegExp(`${Ei.source} ?(?:${ud.source}|(${ld.source}))?`),j6=RegExp(`(?: ${md.source})?`);function je(a,t,e){const s=a[t];return I(s)?e:Jt(s)}function Y6(a,t){return[{year:je(a,t),month:je(a,t+1,1),day:je(a,t+2,1)},null,t+3]}function la(a,t){return[{hours:je(a,t,0),minutes:je(a,t+1,0),seconds:je(a,t+2,0),milliseconds:bi(a[t+3])},null,t+4]}function Ba(a,t){const e=!a[t]&&!a[t+1],s=$1(a[t+1],a[t+2]),i=e?null:st.instance(s);return[{},i,t+3]}function Wa(a,t){const e=a[t]?zt.create(a[t]):null;return[{},e,t+1]}const G6=RegExp(`^T?${Ei.source}$`),K6=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function X6(a){const[t,e,s,i,n,r,o,h,c]=a,d=t[0]==="-",l=h&&h[0]==="-",u=(f,m=!1)=>f!==void 0&&(m||f&&d)?-f:f;return[{years:u(fe(e)),months:u(fe(s)),weeks:u(fe(i)),days:u(fe(n)),hours:u(fe(r)),minutes:u(fe(o)),seconds:u(fe(h),h==="-0"),milliseconds:u(bi(c),l)}]}const Q6={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ti(a,t,e,s,i,n,r){const o={year:t.length===2?Gs(Jt(t)):Jt(t),month:id.indexOf(e)+1,day:Jt(s),hour:Jt(i),minute:Jt(n)};return r&&(o.second=Jt(r)),a&&(o.weekday=a.length>3?rd.indexOf(a)+1:od.indexOf(a)+1),o}const J6=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function t8(a){const[,t,e,s,i,n,r,o,h,c,d,l]=a,u=Ti(t,i,s,e,n,r,o);let f;return h?f=Q6[h]:c?f=0:f=$1(d,l),[u,new st(f)]}function e8(a){return a.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const a8=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,s8=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,i8=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function on(a){const[,t,e,s,i,n,r,o]=a;return[Ti(t,i,s,e,n,r,o),st.utcInstance]}function n8(a){const[,t,e,s,i,n,r,o]=a;return[Ti(t,o,e,s,i,n,r),st.utcInstance]}const r8=ha(z6,Ci),o8=ha(B6,Ci),h8=ha(W6,Ci),c8=ha(fd),Md=ca(Y6,la,Ba,Wa),d8=ca(q6,la,Ba,Wa),l8=ca(Z6,la,Ba,Wa),p8=ca(la,Ba,Wa);function u8(a){return da(a,[r8,Md],[o8,d8],[h8,l8],[c8,p8])}function f8(a){return da(e8(a),[J6,t8])}function m8(a){return da(a,[a8,on],[s8,on],[i8,n8])}function M8(a){return da(a,[K6,X6])}const v8=ca(la);function g8(a){return da(a,[G6,v8])}const y8=ha(U6,j6),w8=ha(md),x8=ca(la,Ba,Wa);function _8(a){return da(a,[y8,Md],[w8,x8])}const hn="Invalid Duration",vd={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},S8={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...vd},vt=146097/400,Ie=146097/4800,b8={years:{quarters:4,months:12,weeks:vt/7,days:vt,hours:vt*24,minutes:vt*24*60,seconds:vt*24*60*60,milliseconds:vt*24*60*60*1e3},quarters:{months:3,weeks:vt/28,days:vt/4,hours:vt*24/4,minutes:vt*24*60/4,seconds:vt*24*60*60/4,milliseconds:vt*24*60*60*1e3/4},months:{weeks:Ie/7,days:Ie,hours:Ie*24,minutes:Ie*24*60,seconds:Ie*24*60*60,milliseconds:Ie*24*60*60*1e3},...vd},ge=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],A8=ge.slice(0).reverse();function Bt(a,t,e=!1){const s={values:e?t.values:{...a.values,...t.values||{}},loc:a.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||a.conversionAccuracy,matrix:t.matrix||a.matrix};return new R(s)}function gd(a,t){let e=t.milliseconds??0;for(const s of A8.slice(1))t[s]&&(e+=t[s]*a[s].milliseconds);return e}function cn(a,t){const e=gd(a,t)<0?-1:1;ge.reduceRight((s,i)=>{if(I(t[i]))return s;if(s){const n=t[s]*e,r=a[i][s],o=Math.floor(n/r);t[i]+=o*e,t[s]-=o*r*e}return i},null),ge.reduce((s,i)=>{if(I(t[i]))return s;if(s){const n=t[s]%1;t[s]-=n,t[i]+=n*a[s][i]}return i},null)}function dn(a){const t={};for(const[e,s]of Object.entries(a))s!==0&&(t[e]=s);return t}class R{constructor(t){const e=t.conversionAccuracy==="longterm"||!1;let s=e?b8:S8;t.matrix&&(s=t.matrix),this.values=t.values,this.loc=t.loc||B.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(t,e){return R.fromObject({milliseconds:t},e)}static fromObject(t,e={}){if(t==null||typeof t!="object")throw new et(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new R({values:E1(t,R.normalizeUnit),loc:B.fromObject(e),conversionAccuracy:e.conversionAccuracy,matrix:e.matrix})}static fromDurationLike(t){if(ie(t))return R.fromMillis(t);if(R.isDuration(t))return t;if(typeof t=="object")return R.fromObject(t);throw new et(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,e){const[s]=M8(t);return s?R.fromObject(s,e):R.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,e){const[s]=g8(t);return s?R.fromObject(s,e):R.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,e=null){if(!t)throw new et("need to specify a reason the Duration is invalid");const s=t instanceof Lt?t:new Lt(t,e);if(U.throwOnInvalid)throw new Qf(s);return new R({invalid:s})}static normalizeUnit(t){const e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!e)throw new Ac(t);return e}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,e={}){const s={...e,floor:e.round!==!1&&e.floor!==!1};return this.isValid?at.create(this.loc,s).formatDurationFromString(this,t):hn}toHuman(t={}){if(!this.isValid)return hn;const e=t.showZeros!==!1,s=ge.map(i=>{const n=this.values[i];return I(n)||n===0&&!e?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(n)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(s)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ai(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const e=this.toMillis();return e<0||e>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},N.fromMillis(e,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?gd(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const e=R.fromDurationLike(t),s={};for(const i of ge)(aa(e.values,i)||aa(this.values,i))&&(s[i]=e.get(i)+this.get(i));return Bt(this,{values:s},!0)}minus(t){if(!this.isValid)return this;const e=R.fromDurationLike(t);return this.plus(e.negate())}mapUnits(t){if(!this.isValid)return this;const e={};for(const s of Object.keys(this.values))e[s]=sd(t(this.values[s],s));return Bt(this,{values:e},!0)}get(t){return this[R.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const e={...this.values,...E1(t,R.normalizeUnit)};return Bt(this,{values:e})}reconfigure({locale:t,numberingSystem:e,conversionAccuracy:s,matrix:i}={}){const r={loc:this.loc.clone({locale:t,numberingSystem:e}),matrix:i,conversionAccuracy:s};return Bt(this,r)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return cn(this.matrix,t),Bt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=dn(this.normalize().shiftToAll().toObject());return Bt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(r=>R.normalizeUnit(r));const e={},s={},i=this.toObject();let n;for(const r of ge)if(t.indexOf(r)>=0){n=r;let o=0;for(const c in s)o+=this.matrix[c][r]*s[c],s[c]=0;ie(i[r])&&(o+=i[r]);const h=Math.trunc(o);e[r]=h,s[r]=(o*1e3-h*1e3)/1e3}else ie(i[r])&&(s[r]=i[r]);for(const r in s)s[r]!==0&&(e[n]+=r===n?s[r]:s[r]/this.matrix[n][r]);return cn(this.matrix,e),Bt(this,{values:e},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const e of Object.keys(this.values))t[e]=this.values[e]===0?0:-this.values[e];return Bt(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=dn(this.values);return Bt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function e(s,i){return s===void 0||s===0?i===void 0||i===0:s===i}for(const s of ge)if(!e(this.values[s],t.values[s]))return!1;return!0}}const Pe="Invalid Interval";function E8(a,t){return!a||!a.isValid?Z.invalid("missing or invalid start"):!t||!t.isValid?Z.invalid("missing or invalid end"):t<a?Z.invalid("end before start",`The end of an interval must be after its start, but you had start=${a.toISO()} and end=${t.toISO()}`):null}class Z{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,e=null){if(!t)throw new et("need to specify a reason the Interval is invalid");const s=t instanceof Lt?t:new Lt(t,e);if(U.throwOnInvalid)throw new Xf(s);return new Z({invalid:s})}static fromDateTimes(t,e){const s=ga(t),i=ga(e),n=E8(s,i);return n??new Z({start:s,end:i})}static after(t,e){const s=R.fromDurationLike(e),i=ga(t);return Z.fromDateTimes(i,i.plus(s))}static before(t,e){const s=R.fromDurationLike(e),i=ga(t);return Z.fromDateTimes(i.minus(s),i)}static fromISO(t,e){const[s,i]=(t||"").split("/",2);if(s&&i){let n,r;try{n=N.fromISO(s,e),r=n.isValid}catch{r=!1}let o,h;try{o=N.fromISO(i,e),h=o.isValid}catch{h=!1}if(r&&h)return Z.fromDateTimes(n,o);if(r){const c=R.fromISO(i,e);if(c.isValid)return Z.after(n,c)}else if(h){const c=R.fromISO(s,e);if(c.isValid)return Z.before(o,c)}}return Z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",e){if(!this.isValid)return NaN;const s=this.start.startOf(t,e);let i;return e?.useLocaleWeeks?i=this.end.reconfigure({locale:s.locale}):i=this.end,i=i.startOf(t,e),Math.floor(i.diff(s,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:e}={}){return this.isValid?Z.fromDateTimes(t||this.s,e||this.e):this}splitAt(...t){if(!this.isValid)return[];const e=t.map(ga).filter(r=>this.contains(r)).sort((r,o)=>r.toMillis()-o.toMillis()),s=[];let{s:i}=this,n=0;for(;i<this.e;){const r=e[n]||this.e,o=+r>+this.e?this.e:r;s.push(Z.fromDateTimes(i,o)),i=o,n+=1}return s}splitBy(t){const e=R.fromDurationLike(t);if(!this.isValid||!e.isValid||e.as("milliseconds")===0)return[];let{s}=this,i=1,n;const r=[];for(;s<this.e;){const o=this.start.plus(e.mapUnits(h=>h*i));n=+o>+this.e?this.e:o,r.push(Z.fromDateTimes(s,n)),s=n,i+=1}return r}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const e=this.s>t.s?this.s:t.s,s=this.e<t.e?this.e:t.e;return e>=s?null:Z.fromDateTimes(e,s)}union(t){if(!this.isValid)return this;const e=this.s<t.s?this.s:t.s,s=this.e>t.e?this.e:t.e;return Z.fromDateTimes(e,s)}static merge(t){const[e,s]=t.sort((i,n)=>i.s-n.s).reduce(([i,n],r)=>n?n.overlaps(r)||n.abutsStart(r)?[i,n.union(r)]:[i.concat([n]),r]:[i,r],[[],null]);return s&&e.push(s),e}static xor(t){let e=null,s=0;const i=[],n=t.map(h=>[{time:h.s,type:"s"},{time:h.e,type:"e"}]),r=Array.prototype.concat(...n),o=r.sort((h,c)=>h.time-c.time);for(const h of o)s+=h.type==="s"?1:-1,s===1?e=h.time:(e&&+e!=+h.time&&i.push(Z.fromDateTimes(e,h.time)),e=null);return Z.merge(i)}difference(...t){return Z.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Pe}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=S1,e={}){return this.isValid?at.create(this.s.loc.clone(e),t).formatInterval(this):Pe}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Pe}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Pe}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Pe}toFormat(t,{separator:e=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`:Pe}toDuration(t,e){return this.isValid?this.e.diff(this.s,t,e):R.invalid(this.invalidReason)}mapEndpoints(t){return Z.fromDateTimes(t(this.s),t(this.e))}}let xa=class{static hasDST(t=U.defaultZone){const e=N.now().setZone(t).set({month:12});return!t.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(t){return zt.isValidZone(t)}static normalizeZone(t){return ee(t,U.defaultZone)}static getStartOfWeek({locale:t=null,locObj:e=null}={}){return(e||B.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:e=null}={}){return(e||B.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:e=null}={}){return(e||B.create(t)).getWeekendDays().slice()}static months(t="long",{locale:e=null,numberingSystem:s=null,locObj:i=null,outputCalendar:n="gregory"}={}){return(i||B.create(e,s,n)).months(t)}static monthsFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:i=null,outputCalendar:n="gregory"}={}){return(i||B.create(e,s,n)).months(t,!0)}static weekdays(t="long",{locale:e=null,numberingSystem:s=null,locObj:i=null}={}){return(i||B.create(e,s,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:i=null}={}){return(i||B.create(e,s,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return B.create(t).meridiems()}static eras(t="short",{locale:e=null}={}){return B.create(e,null,"gregory").eras(t)}static features(){return{relative:td(),localeWeek:ed()}}};function ln(a,t){const e=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=e(t)-e(a);return Math.floor(R.fromMillis(s).as("days"))}function C8(a,t,e){const s=[["years",(h,c)=>c.year-h.year],["quarters",(h,c)=>c.quarter-h.quarter+(c.year-h.year)*4],["months",(h,c)=>c.month-h.month+(c.year-h.year)*12],["weeks",(h,c)=>{const d=ln(h,c);return(d-d%7)/7}],["days",ln]],i={},n=a;let r,o;for(const[h,c]of s)e.indexOf(h)>=0&&(r=h,i[h]=c(a,t),o=n.plus(i),o>t?(i[h]--,a=n.plus(i),a>t&&(o=a,i[h]--,a=n.plus(i))):a=o);return[a,i,o,r]}function T8(a,t,e,s){let[i,n,r,o]=C8(a,t,e);const h=t-i,c=e.filter(l=>["hours","minutes","seconds","milliseconds"].indexOf(l)>=0);c.length===0&&(r<t&&(r=i.plus({[o]:1})),r!==i&&(n[o]=(n[o]||0)+h/(r-i)));const d=R.fromObject(n,s);return c.length>0?R.fromMillis(h,s).shiftTo(...c).plus(d):d}const L8="missing Intl.DateTimeFormat.formatToParts support";function z(a,t=e=>e){return{regex:a,deser:([e])=>t(y6(e))}}const V8=" ",yd=`[ ${V8}]`,wd=new RegExp(yd,"g");function k8(a){return a.replace(/\./g,"\\.?").replace(wd,yd)}function pn(a){return a.replace(/\./g,"").replace(wd," ").toLowerCase()}function Ct(a,t){return a===null?null:{regex:RegExp(a.map(k8).join("|")),deser:([e])=>a.findIndex(s=>pn(e)===pn(s))+t}}function un(a,t){return{regex:a,deser:([,e,s])=>$1(e,s),groups:t}}function n1(a){return{regex:a,deser:([t])=>t}}function H8(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function O8(a,t){const e=Et(t),s=Et(t,"{2}"),i=Et(t,"{3}"),n=Et(t,"{4}"),r=Et(t,"{6}"),o=Et(t,"{1,2}"),h=Et(t,"{1,3}"),c=Et(t,"{1,6}"),d=Et(t,"{1,9}"),l=Et(t,"{2,4}"),u=Et(t,"{4,6}"),f=g=>({regex:RegExp(H8(g.val)),deser:([w])=>w,literal:!0}),v=(g=>{if(a.literal)return f(g);switch(g.val){case"G":return Ct(t.eras("short"),0);case"GG":return Ct(t.eras("long"),0);case"y":return z(c);case"yy":return z(l,Gs);case"yyyy":return z(n);case"yyyyy":return z(u);case"yyyyyy":return z(r);case"M":return z(o);case"MM":return z(s);case"MMM":return Ct(t.months("short",!0),1);case"MMMM":return Ct(t.months("long",!0),1);case"L":return z(o);case"LL":return z(s);case"LLL":return Ct(t.months("short",!1),1);case"LLLL":return Ct(t.months("long",!1),1);case"d":return z(o);case"dd":return z(s);case"o":return z(h);case"ooo":return z(i);case"HH":return z(s);case"H":return z(o);case"hh":return z(s);case"h":return z(o);case"mm":return z(s);case"m":return z(o);case"q":return z(o);case"qq":return z(s);case"s":return z(o);case"ss":return z(s);case"S":return z(h);case"SSS":return z(i);case"u":return n1(d);case"uu":return n1(o);case"uuu":return z(e);case"a":return Ct(t.meridiems(),0);case"kkkk":return z(n);case"kk":return z(l,Gs);case"W":return z(o);case"WW":return z(s);case"E":case"c":return z(e);case"EEE":return Ct(t.weekdays("short",!1),1);case"EEEE":return Ct(t.weekdays("long",!1),1);case"ccc":return Ct(t.weekdays("short",!0),1);case"cccc":return Ct(t.weekdays("long",!0),1);case"Z":case"ZZ":return un(new RegExp(`([+-]${o.source})(?::(${s.source}))?`),2);case"ZZZ":return un(new RegExp(`([+-]${o.source})(${s.source})?`),2);case"z":return n1(/[a-z_+-/]{1,256}?/i);case" ":return n1(/[^\S\n\r]/);default:return f(g)}})(a)||{invalidReason:L8};return v.token=a,v}const D8={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function I8(a,t,e){const{type:s,value:i}=a;if(s==="literal"){const h=/^\s+$/.test(i);return{literal:!h,val:h?" ":i}}const n=t[s];let r=s;s==="hour"&&(t.hour12!=null?r=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?r="hour12":r="hour24":r=e.hour12?"hour12":"hour24");let o=D8[r];if(typeof o=="object"&&(o=o[n]),o)return{literal:!1,val:o}}function P8(a){return[`^${a.map(e=>e.regex).reduce((e,s)=>`${e}(${s.source})`,"")}$`,a]}function N8(a,t,e){const s=a.match(t);if(s){const i={};let n=1;for(const r in e)if(aa(e,r)){const o=e[r],h=o.groups?o.groups+1:1;!o.literal&&o.token&&(i[o.token.val[0]]=o.deser(s.slice(n,n+h))),n+=h}return[s,i]}else return[s,{}]}function $8(a){const t=n=>{switch(n){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let e=null,s;return I(a.z)||(e=zt.create(a.z)),I(a.Z)||(e||(e=new st(a.Z)),s=a.Z),I(a.q)||(a.M=(a.q-1)*3+1),I(a.h)||(a.h<12&&a.a===1?a.h+=12:a.h===12&&a.a===0&&(a.h=0)),a.G===0&&a.y&&(a.y=-a.y),I(a.u)||(a.S=bi(a.u)),[Object.keys(a).reduce((n,r)=>{const o=t(r);return o&&(n[o]=a[r]),n},{}),e,s]}let ys=null;function F8(){return ys||(ys=N.fromMillis(1555555555555)),ys}function R8(a,t){if(a.literal)return a;const e=at.macroTokenToFormatOpts(a.val),s=bd(e,t);return s==null||s.includes(void 0)?a:s}function xd(a,t){return Array.prototype.concat(...a.map(e=>R8(e,t)))}class _d{constructor(t,e){if(this.locale=t,this.format=e,this.tokens=xd(at.parseFormat(e),t),this.units=this.tokens.map(s=>O8(s,t)),this.disqualifyingUnit=this.units.find(s=>s.invalidReason),!this.disqualifyingUnit){const[s,i]=P8(this.units);this.regex=RegExp(s,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[e,s]=N8(t,this.regex,this.handlers),[i,n,r]=s?$8(s):[null,null,void 0];if(aa(s,"a")&&aa(s,"H"))throw new qe("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:e,matches:s,result:i,zone:n,specificOffset:r}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Sd(a,t,e){return new _d(a,e).explainFromTokens(t)}function z8(a,t,e){const{result:s,zone:i,specificOffset:n,invalidReason:r}=Sd(a,t,e);return[s,i,n,r]}function bd(a,t){if(!a)return null;const s=at.create(t,a).dtFormatter(F8()),i=s.formatToParts(),n=s.resolvedOptions();return i.map(r=>I8(r,a,n))}const ws="Invalid DateTime",fn=864e13;function _a(a){return new Lt("unsupported zone",`the zone "${a.name}" is not supported`)}function xs(a){return a.weekData===null&&(a.weekData=b1(a.c)),a.weekData}function _s(a){return a.localWeekData===null&&(a.localWeekData=b1(a.c,a.loc.getMinDaysInFirstWeek(),a.loc.getStartOfWeek())),a.localWeekData}function me(a,t){const e={ts:a.ts,zone:a.zone,c:a.c,o:a.o,loc:a.loc,invalid:a.invalid};return new N({...e,...t,old:e})}function Ad(a,t,e){let s=a-t*60*1e3;const i=e.offset(s);if(t===i)return[s,t];s-=(i-t)*60*1e3;const n=e.offset(s);return i===n?[s,i]:[a-Math.min(i,n)*60*1e3,Math.max(i,n)]}function r1(a,t){a+=t*60*1e3;const e=new Date(a);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate(),hour:e.getUTCHours(),minute:e.getUTCMinutes(),second:e.getUTCSeconds(),millisecond:e.getUTCMilliseconds()}}function u1(a,t,e){return Ad(N1(a),t,e)}function mn(a,t){const e=a.o,s=a.c.year+Math.trunc(t.years),i=a.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,n={...a.c,year:s,month:i,day:Math.min(a.c.day,A1(s,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},r=R.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),o=N1(n);let[h,c]=Ad(o,e,a.zone);return r!==0&&(h+=r,c=a.zone.offset(h)),{ts:h,o:c}}function Ne(a,t,e,s,i,n){const{setZone:r,zone:o}=e;if(a&&Object.keys(a).length!==0||t){const h=t||o,c=N.fromObject(a,{...e,zone:h,specificOffset:n});return r?c:c.setZone(o)}else return N.invalid(new Lt("unparsable",`the input "${i}" can't be parsed as ${s}`))}function o1(a,t,e=!0){return a.isValid?at.create(B.create("en-US"),{allowZ:e,forceSimple:!0}).formatDateTimeFromString(a,t):null}function Ss(a,t,e){const s=a.c.year>9999||a.c.year<0;let i="";if(s&&a.c.year>=0&&(i+="+"),i+=G(a.c.year,s?6:4),e==="year")return i;if(t){if(i+="-",i+=G(a.c.month),e==="month")return i;i+="-"}else if(i+=G(a.c.month),e==="month")return i;return i+=G(a.c.day),i}function Mn(a,t,e,s,i,n,r){let o=!e||a.c.millisecond!==0||a.c.second!==0,h="";switch(r){case"day":case"month":case"year":break;default:if(h+=G(a.c.hour),r==="hour")break;if(t){if(h+=":",h+=G(a.c.minute),r==="minute")break;o&&(h+=":",h+=G(a.c.second))}else{if(h+=G(a.c.minute),r==="minute")break;o&&(h+=G(a.c.second))}if(r==="second")break;o&&(!s||a.c.millisecond!==0)&&(h+=".",h+=G(a.c.millisecond,3))}return i&&(a.isOffsetFixed&&a.offset===0&&!n?h+="Z":a.o<0?(h+="-",h+=G(Math.trunc(-a.o/60)),h+=":",h+=G(Math.trunc(-a.o%60))):(h+="+",h+=G(Math.trunc(a.o/60)),h+=":",h+=G(Math.trunc(a.o%60)))),n&&(h+="["+a.zone.ianaName+"]"),h}const Ed={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},B8={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},W8={ordinal:1,hour:0,minute:0,second:0,millisecond:0},f1=["year","month","day","hour","minute","second","millisecond"],q8=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Z8=["year","ordinal","hour","minute","second","millisecond"];function m1(a){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[a.toLowerCase()];if(!t)throw new Ac(a);return t}function vn(a){switch(a.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return m1(a)}}function U8(a){if(Sa===void 0&&(Sa=U.now()),a.type!=="iana")return a.offset(Sa);const t=a.name;let e=Ks.get(t);return e===void 0&&(e=a.offset(Sa),Ks.set(t,e)),e}function gn(a,t){const e=ee(t.zone,U.defaultZone);if(!e.isValid)return N.invalid(_a(e));const s=B.fromObject(t);let i,n;if(I(a.year))i=U.now();else{for(const h of f1)I(a[h])&&(a[h]=Ed[h]);const r=Qc(a)||Jc(a);if(r)return N.invalid(r);const o=U8(e);[i,n]=u1(a,o,e)}return new N({ts:i,zone:e,loc:s,o:n})}function yn(a,t,e){const s=I(e.round)?!0:e.round,i=I(e.rounding)?"trunc":e.rounding,n=(o,h)=>(o=Ai(o,s||e.calendary?0:2,e.calendary?"round":i),t.loc.clone(e).relFormatter(e).format(o,h)),r=o=>e.calendary?t.hasSame(a,o)?0:t.startOf(o).diff(a.startOf(o),o).get(o):t.diff(a,o).get(o);if(e.unit)return n(r(e.unit),e.unit);for(const o of e.units){const h=r(o);if(Math.abs(h)>=1)return n(h,o)}return n(a>t?-0:0,e.units[e.units.length-1])}function wn(a){let t={},e;return a.length>0&&typeof a[a.length-1]=="object"?(t=a[a.length-1],e=Array.from(a).slice(0,a.length-1)):e=Array.from(a),[t,e]}let Sa;const Ks=new Map;class N{constructor(t){const e=t.zone||U.defaultZone;let s=t.invalid||(Number.isNaN(t.ts)?new Lt("invalid input"):null)||(e.isValid?null:_a(e));this.ts=I(t.ts)?U.now():t.ts;let i=null,n=null;if(!s)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e))[i,n]=[t.old.c,t.old.o];else{const o=ie(t.o)&&!t.old?t.o:e.offset(this.ts);i=r1(this.ts,o),s=Number.isNaN(i.year)?new Lt("invalid input"):null,i=s?null:i,n=s?null:o}this._zone=e,this.loc=t.loc||B.create(),this.invalid=s,this.weekData=null,this.localWeekData=null,this.c=i,this.o=n,this.isLuxonDateTime=!0}static now(){return new N({})}static local(){const[t,e]=wn(arguments),[s,i,n,r,o,h,c]=e;return gn({year:s,month:i,day:n,hour:r,minute:o,second:h,millisecond:c},t)}static utc(){const[t,e]=wn(arguments),[s,i,n,r,o,h,c]=e;return t.zone=st.utcInstance,gn({year:s,month:i,day:n,hour:r,minute:o,second:h,millisecond:c},t)}static fromJSDate(t,e={}){const s=b6(t)?t.valueOf():NaN;if(Number.isNaN(s))return N.invalid("invalid input");const i=ee(e.zone,U.defaultZone);return i.isValid?new N({ts:s,zone:i,loc:B.fromObject(e)}):N.invalid(_a(i))}static fromMillis(t,e={}){if(ie(t))return t<-fn||t>fn?N.invalid("Timestamp out of range"):new N({ts:t,zone:ee(e.zone,U.defaultZone),loc:B.fromObject(e)});throw new et(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,e={}){if(ie(t))return new N({ts:t*1e3,zone:ee(e.zone,U.defaultZone),loc:B.fromObject(e)});throw new et("fromSeconds requires a numerical input")}static fromObject(t,e={}){t=t||{};const s=ee(e.zone,U.defaultZone);if(!s.isValid)return N.invalid(_a(s));const i=B.fromObject(e),n=E1(t,vn),{minDaysInFirstWeek:r,startOfWeek:o}=an(n,i),h=U.now(),c=I(e.specificOffset)?s.offset(h):e.specificOffset,d=!I(n.ordinal),l=!I(n.year),u=!I(n.month)||!I(n.day),f=l||u,m=n.weekYear||n.weekNumber;if((f||d)&&m)throw new qe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&d)throw new qe("Can't mix ordinal dates with month/day");const v=m||n.weekday&&!f;let g,w,x=r1(h,c);v?(g=q8,w=B8,x=b1(x,r,o)):d?(g=Z8,w=W8,x=gs(x)):(g=f1,w=Ed);let C=!1;for(const E of g){const V=n[E];I(V)?C?n[E]=w[E]:n[E]=x[E]:C=!0}const T=v?x6(n,r,o):d?_6(n):Qc(n),P=T||Jc(n);if(P)return N.invalid(P);const O=v?tn(n,r,o):d?en(n):n,[S,L]=u1(O,c,s),b=new N({ts:S,zone:s,o:L,loc:i});return n.weekday&&f&&t.weekday!==b.weekday?N.invalid("mismatched weekday",`you can't specify both a weekday of ${n.weekday} and a date of ${b.toISO()}`):b.isValid?b:N.invalid(b.invalid)}static fromISO(t,e={}){const[s,i]=u8(t);return Ne(s,i,e,"ISO 8601",t)}static fromRFC2822(t,e={}){const[s,i]=f8(t);return Ne(s,i,e,"RFC 2822",t)}static fromHTTP(t,e={}){const[s,i]=m8(t);return Ne(s,i,e,"HTTP",e)}static fromFormat(t,e,s={}){if(I(t)||I(e))throw new et("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:n=null}=s,r=B.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0}),[o,h,c,d]=z8(r,t,e);return d?N.invalid(d):Ne(o,h,s,`format ${e}`,t,c)}static fromString(t,e,s={}){return N.fromFormat(t,e,s)}static fromSQL(t,e={}){const[s,i]=_8(t);return Ne(s,i,e,"SQL",t)}static invalid(t,e=null){if(!t)throw new et("need to specify a reason the DateTime is invalid");const s=t instanceof Lt?t:new Lt(t,e);if(U.throwOnInvalid)throw new Kf(s);return new N({invalid:s})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,e={}){const s=bd(t,B.fromObject(e));return s?s.map(i=>i?i.val:null).join(""):null}static expandFormat(t,e={}){return xd(at.parseFormat(t),B.fromObject(e)).map(i=>i.val).join("")}static resetCache(){Sa=void 0,Ks.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?xs(this).weekYear:NaN}get weekNumber(){return this.isValid?xs(this).weekNumber:NaN}get weekday(){return this.isValid?xs(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?_s(this).weekday:NaN}get localWeekNumber(){return this.isValid?_s(this).weekNumber:NaN}get localWeekYear(){return this.isValid?_s(this).weekYear:NaN}get ordinal(){return this.isValid?gs(this.c).ordinal:NaN}get monthShort(){return this.isValid?xa.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?xa.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?xa.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?xa.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,e=6e4,s=N1(this.c),i=this.zone.offset(s-t),n=this.zone.offset(s+t),r=this.zone.offset(s-i*e),o=this.zone.offset(s-n*e);if(r===o)return[this];const h=s-r*e,c=s-o*e,d=r1(h,r),l=r1(c,o);return d.hour===l.hour&&d.minute===l.minute&&d.second===l.second&&d.millisecond===l.millisecond?[me(this,{ts:h}),me(this,{ts:c})]:[this]}get isInLeapYear(){return za(this.year)}get daysInMonth(){return A1(this.year,this.month)}get daysInYear(){return this.isValid?Ue(this.year):NaN}get weeksInWeekYear(){return this.isValid?La(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?La(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:e,numberingSystem:s,calendar:i}=at.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e,numberingSystem:s,outputCalendar:i}}toUTC(t=0,e={}){return this.setZone(st.instance(t),e)}toLocal(){return this.setZone(U.defaultZone)}setZone(t,{keepLocalTime:e=!1,keepCalendarTime:s=!1}={}){if(t=ee(t,U.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(e||s){const n=t.offset(this.ts),r=this.toObject();[i]=u1(r,n,t)}return me(this,{ts:i,zone:t})}else return N.invalid(_a(t))}reconfigure({locale:t,numberingSystem:e,outputCalendar:s}={}){const i=this.loc.clone({locale:t,numberingSystem:e,outputCalendar:s});return me(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const e=E1(t,vn),{minDaysInFirstWeek:s,startOfWeek:i}=an(e,this.loc),n=!I(e.weekYear)||!I(e.weekNumber)||!I(e.weekday),r=!I(e.ordinal),o=!I(e.year),h=!I(e.month)||!I(e.day),c=o||h,d=e.weekYear||e.weekNumber;if((c||r)&&d)throw new qe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&r)throw new qe("Can't mix ordinal dates with month/day");let l;n?l=tn({...b1(this.c,s,i),...e},s,i):I(e.ordinal)?(l={...this.toObject(),...e},I(e.day)&&(l.day=Math.min(A1(l.year,l.month),l.day))):l=en({...gs(this.c),...e});const[u,f]=u1(l,this.o,this.zone);return me(this,{ts:u,o:f})}plus(t){if(!this.isValid)return this;const e=R.fromDurationLike(t);return me(this,mn(this,e))}minus(t){if(!this.isValid)return this;const e=R.fromDurationLike(t).negate();return me(this,mn(this,e))}startOf(t,{useLocaleWeeks:e=!1}={}){if(!this.isValid)return this;const s={},i=R.normalizeUnit(t);switch(i){case"years":s.month=1;case"quarters":case"months":s.day=1;case"weeks":case"days":s.hour=0;case"hours":s.minute=0;case"minutes":s.second=0;case"seconds":s.millisecond=0;break}if(i==="weeks")if(e){const n=this.loc.getStartOfWeek(),{weekday:r}=this;r<n&&(s.weekNumber=this.weekNumber-1),s.weekday=n}else s.weekday=1;if(i==="quarters"){const n=Math.ceil(this.month/3);s.month=(n-1)*3+1}return this.set(s)}endOf(t,e){return this.isValid?this.plus({[t]:1}).startOf(t,e).minus(1):this}toFormat(t,e={}){return this.isValid?at.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):ws}toLocaleString(t=S1,e={}){return this.isValid?at.create(this.loc.clone(e),t).formatDateTime(this):ws}toLocaleParts(t={}){return this.isValid?at.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:e=!1,suppressMilliseconds:s=!1,includeOffset:i=!0,extendedZone:n=!1,precision:r="milliseconds"}={}){if(!this.isValid)return null;r=m1(r);const o=t==="extended";let h=Ss(this,o,r);return f1.indexOf(r)>=3&&(h+="T"),h+=Mn(this,o,e,s,i,n,r),h}toISODate({format:t="extended",precision:e="day"}={}){return this.isValid?Ss(this,t==="extended",m1(e)):null}toISOWeekDate(){return o1(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:e=!1,includeOffset:s=!0,includePrefix:i=!1,extendedZone:n=!1,format:r="extended",precision:o="milliseconds"}={}){return this.isValid?(o=m1(o),(i&&f1.indexOf(o)>=3?"T":"")+Mn(this,r==="extended",e,t,s,n,o)):null}toRFC2822(){return o1(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return o1(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ss(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:e=!1,includeOffsetSpace:s=!0}={}){let i="HH:mm:ss.SSS";return(e||t)&&(s&&(i+=" "),e?i+="z":t&&(i+="ZZ")),o1(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():ws}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const e={...this.c};return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,e="milliseconds",s={}){if(!this.isValid||!t.isValid)return R.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...s},n=A6(e).map(R.normalizeUnit),r=t.valueOf()>this.valueOf(),o=r?this:t,h=r?t:this,c=T8(o,h,n,i);return r?c.negate():c}diffNow(t="milliseconds",e={}){return this.diff(N.now(),t,e)}until(t){return this.isValid?Z.fromDateTimes(this,t):this}hasSame(t,e,s){if(!this.isValid)return!1;const i=t.valueOf(),n=this.setZone(t.zone,{keepLocalTime:!0});return n.startOf(e,s)<=i&&i<=n.endOf(e,s)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const e=t.base||N.fromObject({},{zone:this.zone}),s=t.padding?this<e?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],n=t.unit;return Array.isArray(t.unit)&&(i=t.unit,n=void 0),yn(e,this.plus(s),{...t,numeric:"always",units:i,unit:n})}toRelativeCalendar(t={}){return this.isValid?yn(t.base||N.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(N.isDateTime))throw new et("min requires all arguments be DateTimes");return sn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(N.isDateTime))throw new et("max requires all arguments be DateTimes");return sn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(t,e,s={}){const{locale:i=null,numberingSystem:n=null}=s,r=B.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0});return Sd(r,t,e)}static fromStringExplain(t,e,s={}){return N.fromFormatExplain(t,e,s)}static buildFormatParser(t,e={}){const{locale:s=null,numberingSystem:i=null}=e,n=B.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return new _d(n,t)}static fromFormatParser(t,e,s={}){if(I(t)||I(e))throw new et("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:n=null}=s,r=B.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0});if(!r.equals(e.locale))throw new et(`fromFormatParser called with a locale of ${r}, but the format parser was created for ${e.locale}`);const{result:o,zone:h,specificOffset:c,invalidReason:d}=e.explainFromTokens(t);return d?N.invalid(d):Ne(o,h,s,`format ${e.format}`,t,c)}static get DATE_SHORT(){return S1}static get DATE_MED(){return Ec}static get DATE_MED_WITH_WEEKDAY(){return Jf}static get DATE_FULL(){return Cc}static get DATE_HUGE(){return Tc}static get TIME_SIMPLE(){return Lc}static get TIME_WITH_SECONDS(){return Vc}static get TIME_WITH_SHORT_OFFSET(){return kc}static get TIME_WITH_LONG_OFFSET(){return Hc}static get TIME_24_SIMPLE(){return Oc}static get TIME_24_WITH_SECONDS(){return Dc}static get TIME_24_WITH_SHORT_OFFSET(){return Ic}static get TIME_24_WITH_LONG_OFFSET(){return Pc}static get DATETIME_SHORT(){return Nc}static get DATETIME_SHORT_WITH_SECONDS(){return $c}static get DATETIME_MED(){return Fc}static get DATETIME_MED_WITH_SECONDS(){return Rc}static get DATETIME_MED_WITH_WEEKDAY(){return t6}static get DATETIME_FULL(){return zc}static get DATETIME_FULL_WITH_SECONDS(){return Bc}static get DATETIME_HUGE(){return Wc}static get DATETIME_HUGE_WITH_SECONDS(){return qc}}function ga(a){if(N.isDateTime(a))return a;if(a&&a.valueOf&&ie(a.valueOf()))return N.fromJSDate(a);if(a&&typeof a=="object")return N.fromObject(a);throw new et(`Unknown datetime argument: ${a}, of type ${typeof a}`)}const j8="3.7.1",Y8=Object.freeze(Object.defineProperty({__proto__:null,DateTime:N,Duration:R,FixedOffsetZone:st,IANAZone:zt,Info:xa,Interval:Z,InvalidZone:jc,Settings:U,SystemZone:Ra,VERSION:j8,Zone:oa},Symbol.toStringTag,{value:"Module"}));function G8(a,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,typeof(i=function(n,r){if(typeof n!="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var h=o.call(n,"string");if(typeof h!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(s.key))=="symbol"?i:String(i),s)}var i}function Li(a,t,e){return t&&G8(a.prototype,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function It(){return It=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(a[s]=e[s])}return a},It.apply(this,arguments)}function R1(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,Va(a,t)}function Xs(a){return Xs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xs(a)}function Va(a,t){return Va=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,s){return e.__proto__=s,e},Va(a,t)}function K8(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qs(a,t,e){return Qs=K8()?Reflect.construct.bind():function(s,i,n){var r=[null];r.push.apply(r,i);var o=new(Function.bind.apply(s,r));return n&&Va(o,n.prototype),o},Qs.apply(null,arguments)}function Js(a){var t=typeof Map=="function"?new Map:void 0;return Js=function(e){if(e===null||Function.toString.call(e).indexOf("[native code]")===-1)return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,s)}function s(){return Qs(e,arguments,Xs(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),Va(s,e)},Js(a)}function X8(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var ae,Q8=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(a){a[a.off=0]="off",a[a.error=1]="error",a[a.warning=2]="warning",a[a.info=3]="info",a[a.debug=4]="debug"})(ae||(ae={}));var xn=ae.off,ye=function(){function a(e){this.t=void 0,this.t=e}a.getLevel=function(){return xn},a.setLevel=function(e){return xn=ae[e]};var t=a.prototype;return t.error=function(){this.i(console.error,ae.error,[].slice.call(arguments))},t.warn=function(){this.i(console.warn,ae.warning,[].slice.call(arguments))},t.info=function(){this.i(console.info,ae.info,[].slice.call(arguments))},t.debug=function(){this.i(console.log,ae.debug,[].slice.call(arguments))},t.i=function(e,s,i){s<=a.getLevel()&&e.apply(console,["["+this.t+"] "].concat(i))},a}();function $e(a){return a.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _n(a){return a&&a.sensitive?"":"i"}var $t={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},we=new(function(){function a(){this.o=$t,this.u=void 0,this.h={after:null,before:null,parent:null}}var t=a.prototype;return t.toString=function(e){return e.outerHTML},t.toDocument=function(e){return this.u||(this.u=new DOMParser),this.u.parseFromString(e,"text/html")},t.toElement=function(e){var s=document.createElement("div");return s.innerHTML=e,s},t.getHtml=function(e){return e===void 0&&(e=document),this.toString(e.documentElement)},t.getWrapper=function(e){return e===void 0&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},t.getContainer=function(e){return e===void 0&&(e=document),e.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},t.removeContainer=function(e){document.body.contains(e)&&(this.v(e),e.parentNode.removeChild(e))},t.addContainer=function(e,s){var i=this.getContainer()||this.h.before;i?this.l(e,i):this.h.after?this.h.after.parentNode.insertBefore(e,this.h.after):this.h.parent?this.h.parent.appendChild(e):s.appendChild(e)},t.getSibling=function(){return this.h},t.getNamespace=function(e){e===void 0&&(e=document);var s=e.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return s?s.getAttribute(this.o.prefix+"-"+this.o.namespace):null},t.getHref=function(e){if(e.tagName&&e.tagName.toLowerCase()==="a"){if(typeof e.href=="string")return e.href;var s=e.getAttribute("href")||e.getAttribute("xlink:href");if(s)return this.resolveUrl(s.baseVal||s)}return null},t.resolveUrl=function(){var e=[].slice.call(arguments).length;if(e===0)throw new Error("resolveUrl requires at least one argument; got none.");var s=document.createElement("base");if(s.href=arguments[0],e===1)return s.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(s,i.firstChild);for(var n,r=document.createElement("a"),o=1;o<e;o++)r.href=arguments[o],s.href=n=r.href;return i.removeChild(s),n},t.l=function(e,s){s.parentNode.insertBefore(e,s.nextSibling)},t.v=function(e){return this.h={after:e.nextElementSibling,before:e.previousElementSibling,parent:e.parentElement},this.h},a}()),J8=function(){function a(){this.p=void 0,this.m=[],this.P=-1}var t=a.prototype;return t.init=function(e,s){this.p="barba";var i={data:{},ns:s,scroll:{x:window.scrollX,y:window.scrollY},url:e};this.P=0,this.m.push(i);var n={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(n,"",e)},t.change=function(e,s,i){if(i&&i.state){var n=i.state,r=n.index;s=this.g(this.P-r),this.replace(n.states),this.P=r}else this.add(e,s);return s},t.add=function(e,s,i,n){var r=i??this.R(s),o={data:n??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:e};switch(r){case"push":this.P=this.size,this.m.push(o);break;case"replace":this.set(this.P,o)}var h={from:this.p,index:this.P,states:[].concat(this.m)};switch(r){case"push":window.history&&window.history.pushState(h,"",e);break;case"replace":window.history&&window.history.replaceState(h,"",e)}},t.store=function(e,s){var i=s||this.P,n=this.get(i);n.data=It({},n.data,e),this.set(i,n);var r={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(r,"")},t.update=function(e,s){var i=s||this.P,n=It({},this.get(i),e);this.set(i,n)},t.remove=function(e){e?this.m.splice(e,1):this.m.pop(),this.P--},t.clear=function(){this.m=[],this.P=-1},t.replace=function(e){this.m=e},t.get=function(e){return this.m[e]},t.set=function(e,s){return this.m[e]=s},t.R=function(e){var s="push",i=e,n=$t.prefix+"-"+$t.history;return i.hasAttribute&&i.hasAttribute(n)&&(s=i.getAttribute(n)),s},t.g=function(e){return Math.abs(e)>1?e>0?"forward":"back":e===0?"popstate":e>0?"back":"forward"},Li(a,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),a}(),Cd=new J8,C1=function(a,t){try{var e=function(){if(!t.next.html)return Promise.resolve(a).then(function(s){var i=t.next;if(s){var n=we.toElement(s.html);i.namespace=we.getNamespace(n),i.container=we.getContainer(n),i.url=s.url,i.html=s.html,Cd.update({ns:i.namespace});var r=we.toDocument(s.html);document.title=r.title}})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(s){return Promise.reject(s)}},Td=function a(t,e,s){return t instanceof RegExp?function(i,n){if(!n)return i;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,h=r.exec(i.source);h;)n.push({name:h[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),h=r.exec(i.source);return i}(t,e):Array.isArray(t)?function(i,n,r){var o=i.map(function(h){return a(h,n,r).source});return new RegExp("(?:".concat(o.join("|"),")"),_n(r))}(t,e,s):function(i,n,r){return function(o,h,c){c===void 0&&(c={});for(var d=c.strict,l=d!==void 0&&d,u=c.start,f=u===void 0||u,m=c.end,v=m===void 0||m,g=c.encode,w=g===void 0?function(K){return K}:g,x=c.delimiter,C=x===void 0?"/#?":x,T=c.endsWith,P="[".concat($e(T===void 0?"":T),"]|$"),O="[".concat($e(C),"]"),S=f?"^":"",L=0,b=o;L<b.length;L++){var E=b[L];if(typeof E=="string")S+=$e(w(E));else{var V=$e(w(E.prefix)),H=$e(w(E.suffix));if(E.pattern)if(h&&h.push(E),V||H)if(E.modifier==="+"||E.modifier==="*"){var F=E.modifier==="*"?"?":"";S+="(?:".concat(V,"((?:").concat(E.pattern,")(?:").concat(H).concat(V,"(?:").concat(E.pattern,"))*)").concat(H,")").concat(F)}else S+="(?:".concat(V,"(").concat(E.pattern,")").concat(H,")").concat(E.modifier);else S+=E.modifier==="+"||E.modifier==="*"?"((?:".concat(E.pattern,")").concat(E.modifier,")"):"(".concat(E.pattern,")").concat(E.modifier);else S+="(?:".concat(V).concat(H,")").concat(E.modifier)}}if(v)l||(S+="".concat(O,"?")),S+=c.endsWith?"(?=".concat(P,")"):"$";else{var $=o[o.length-1],j=typeof $=="string"?O.indexOf($[$.length-1])>-1:$===void 0;l||(S+="(?:".concat(O,"(?=").concat(P,"))?")),j||(S+="(?=".concat(O,"|").concat(P,")"))}return new RegExp(S,_n(c))}(function(o,h){h===void 0&&(h={});for(var c=function(H){for(var F=[],$=0;$<H.length;){var j=H[$];if(j!=="*"&&j!=="+"&&j!=="?")if(j!=="\\")if(j!=="{")if(j!=="}")if(j!==":")if(j!=="(")F.push({type:"CHAR",index:$,value:H[$++]});else{var K=1,tt="";if(H[W=$+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(W));for(;W<H.length;)if(H[W]!=="\\"){if(H[W]===")"){if(--K==0){W++;break}}else if(H[W]==="("&&(K++,H[W+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(W));tt+=H[W++]}else tt+=H[W++]+H[W++];if(K)throw new TypeError("Unbalanced pattern at ".concat($));if(!tt)throw new TypeError("Missing pattern at ".concat($));F.push({type:"PATTERN",index:$,value:tt}),$=W}else{for(var Yt="",W=$+1;W<H.length;){var Mt=H.charCodeAt(W);if(!(Mt>=48&&Mt<=57||Mt>=65&&Mt<=90||Mt>=97&&Mt<=122||Mt===95))break;Yt+=H[W++]}if(!Yt)throw new TypeError("Missing parameter name at ".concat($));F.push({type:"NAME",index:$,value:Yt}),$=W}else F.push({type:"CLOSE",index:$,value:H[$++]});else F.push({type:"OPEN",index:$,value:H[$++]});else F.push({type:"ESCAPED_CHAR",index:$++,value:H[$++]});else F.push({type:"MODIFIER",index:$,value:H[$++]})}return F.push({type:"END",index:$,value:""}),F}(o),d=h.prefixes,l=d===void 0?"./":d,u="[^".concat($e(h.delimiter||"/#?"),"]+?"),f=[],m=0,v=0,g="",w=function(H){if(v<c.length&&c[v].type===H)return c[v++].value},x=function(H){var F=w(H);if(F!==void 0)return F;var $=c[v],j=$.index;throw new TypeError("Unexpected ".concat($.type," at ").concat(j,", expected ").concat(H))},C=function(){for(var H,F="";H=w("CHAR")||w("ESCAPED_CHAR");)F+=H;return F};v<c.length;){var T=w("CHAR"),P=w("NAME"),O=w("PATTERN");if(P||O)l.indexOf(L=T||"")===-1&&(g+=L,L=""),g&&(f.push(g),g=""),f.push({name:P||m++,prefix:L,suffix:"",pattern:O||u,modifier:w("MODIFIER")||""});else{var S=T||w("ESCAPED_CHAR");if(S)g+=S;else if(g&&(f.push(g),g=""),w("OPEN")){var L=C(),b=w("NAME")||"",E=w("PATTERN")||"",V=C();x("CLOSE"),f.push({name:b||(E?m++:""),pattern:b&&!E?u:E,prefix:L,suffix:V,modifier:w("MODIFIER")||""})}else x("END")}}return f}(i,r),n,r)}(t,e,s)},tm={__proto__:null,update:C1,nextTick:function(){return new Promise(function(a){window.requestAnimationFrame(a)})},pathToRegexp:Td},Ld=function(){return window.location.origin},ka=function(a){return a===void 0&&(a=window.location.href),se(a).port},se=function(a){var t,e=a.match(/:\d+/);if(e===null)/^http/.test(a)&&(t=80),/^https/.test(a)&&(t=443);else{var s=e[0].substring(1);t=parseInt(s,10)}var i,n=a.replace(Ld(),""),r={},o=n.indexOf("#");o>=0&&(i=n.slice(o+1),n=n.slice(0,o));var h=n.indexOf("?");return h>=0&&(r=Vd(n.slice(h+1)),n=n.slice(0,h)),{hash:i,path:n,port:t,query:r}},Vd=function(a){return a.split("&").reduce(function(t,e){var s=e.split("=");return t[s[0]]=s[1],t},{})},ti=function(a){return a===void 0&&(a=window.location.href),a.replace(/(\/#.*|\/|#.*)$/,"")},em={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(a,t){return t===void 0&&(t=document.baseURI),new URL(a,t).href},getOrigin:Ld,getPort:ka,getPath:function(a){return a===void 0&&(a=window.location.href),se(a).path},getQuery:function(a,t){return t===void 0&&(t=!1),t?JSON.stringify(se(a).query):se(a).query},getHash:function(a){return se(a).hash},parse:se,parseQuery:Vd,clean:ti};function am(a,t,e,s,i){return t===void 0&&(t=2e3),new Promise(function(n,r){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE){if(o.status===200){var h=o.responseURL!==""&&o.responseURL!==a?o.responseURL:a;n({html:o.responseText,url:It({href:h},se(h))}),s.update(a,{status:"fulfilled",target:h})}else if(o.status){var c={status:o.status,statusText:o.statusText};e(a,c),r(c),s.update(a,{status:"rejected"})}}},o.ontimeout=function(){var h=new Error("Timeout error ["+t+"]");e(a,h),r(h),s.update(a,{status:"rejected"})},o.onerror=function(){var h=new Error("Fetch error");e(a,h),r(h),s.update(a,{status:"rejected"})},o.open("GET",a),o.timeout=t,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),i.all().forEach(function(h,c){o.setRequestHeader(c,h)}),o.send()})}function sm(a){return!!a&&(typeof a=="object"||typeof a=="function")&&typeof a.then=="function"}function Ze(a,t){return t===void 0&&(t={}),function(){var e=arguments,s=!1,i=new Promise(function(n,r){t.async=function(){return s=!0,function(h,c){h?r(h):n(c)}};var o=a.apply(t,[].slice.call(e));s||(sm(o)?o.then(n,r):n(o))});return i}}var te=new(function(a){function t(){var s;return(s=a.call(this)||this).logger=new ye("@barba/core"),s.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],s.registered=new Map,s.init(),s}R1(t,a);var e=t.prototype;return e.init=function(){var s=this;this.registered.clear(),this.all.forEach(function(i){s[i]||(s[i]=function(n,r){s.registered.has(i)||s.registered.set(i,new Set),s.registered.get(i).add({ctx:r||{},fn:n})})})},e.do=function(s){var i=arguments,n=this;if(this.registered.has(s)){var r=Promise.resolve();return this.registered.get(s).forEach(function(o){r=r.then(function(){return Ze(o.fn,o.ctx).apply(void 0,[].slice.call(i,1))})}),r.catch(function(o){n.logger.debug("Hook error ["+s+"]"),n.logger.error(o)})}return Promise.resolve()},e.clear=function(){var s=this;this.all.forEach(function(i){delete s[i]}),this.init()},e.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var s=[];this.registered.forEach(function(i,n){return s.push(n)}),this.logger.info("Registered hooks: "+s.join(","))},t}(Q8)),kd=function(){function a(t){if(this.k=void 0,this.O=[],typeof t=="boolean")this.k=t;else{var e=Array.isArray(t)?t:[t];this.O=e.map(function(s){return Td(s)})}}return a.prototype.checkHref=function(t){if(typeof this.k=="boolean")return this.k;var e=se(t).path;return this.O.some(function(s){return s.exec(e)!==null})},a}(),im=function(a){function t(s){var i;return(i=a.call(this,s)||this).T=new Map,i}R1(t,a);var e=t.prototype;return e.set=function(s,i,n,r,o){return this.T.set(s,{action:n,request:i,status:r,target:o??s}),{action:n,request:i,status:r,target:o}},e.get=function(s){return this.T.get(s)},e.getRequest=function(s){return this.T.get(s).request},e.getAction=function(s){return this.T.get(s).action},e.getStatus=function(s){return this.T.get(s).status},e.getTarget=function(s){return this.T.get(s).target},e.has=function(s){return!this.checkHref(s)&&this.T.has(s)},e.delete=function(s){return this.T.delete(s)},e.update=function(s,i){var n=It({},this.T.get(s),i);return this.T.set(s,n),n},t}(kd),nm=function(){function a(){this.A=new Map}var t=a.prototype;return t.set=function(e,s){return this.A.set(e,s),{name:s}},t.get=function(e){return this.A.get(e)},t.all=function(){return this.A},t.has=function(e){return this.A.has(e)},t.delete=function(e){return this.A.delete(e)},t.clear=function(){return this.A.clear()},a}(),rm=function(){return!window.history.pushState},om=function(a){return!a.el||!a.href},hm=function(a){var t=a.event;return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey},cm=function(a){var t=a.el;return t.hasAttribute("target")&&t.target==="_blank"},dm=function(a){var t=a.el;return t.protocol!==void 0&&window.location.protocol!==t.protocol||t.hostname!==void 0&&window.location.hostname!==t.hostname},lm=function(a){var t=a.el;return t.port!==void 0&&ka()!==ka(t.href)},pm=function(a){var t=a.el;return t.getAttribute&&typeof t.getAttribute("download")=="string"},um=function(a){return a.el.hasAttribute($t.prefix+"-"+$t.prevent)},fm=function(a){return!!a.el.closest("["+$t.prefix+"-"+$t.prevent+'="all"]')},mm=function(a){var t=a.href;return ti(t)===ti()&&ka(t)===ka()},Mm=function(a){function t(s){var i;return(i=a.call(this,s)||this).suite=[],i.tests=new Map,i.init(),i}R1(t,a);var e=t.prototype;return e.init=function(){this.add("pushState",rm),this.add("exists",om),this.add("newTab",hm),this.add("blank",cm),this.add("corsDomain",dm),this.add("corsPort",lm),this.add("download",pm),this.add("preventSelf",um),this.add("preventAll",fm),this.add("sameUrl",mm,!1)},e.add=function(s,i,n){n===void 0&&(n=!0),this.tests.set(s,i),n&&this.suite.push(s)},e.run=function(s,i,n,r){return this.tests.get(s)({el:i,event:n,href:r})},e.checkLink=function(s,i,n){var r=this;return this.suite.some(function(o){return r.run(o,s,i,n)})},t}(kd),bs=function(a){function t(e,s){var i;return s===void 0&&(s="Barba error"),(i=a.call.apply(a,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=e,i.label=s,Error.captureStackTrace&&Error.captureStackTrace(X8(i),t),i.name="BarbaError",i}return R1(t,a),t}(Js(Error)),vm=function(){function a(e){e===void 0&&(e=[]),this.logger=new ye("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],e&&(this.all=this.all.concat(e)),this.update()}var t=a.prototype;return t.add=function(e,s){e==="rule"?this.j.splice(s.position||0,0,s.value):this.all.push(s),this.update()},t.resolve=function(e,s){var i=this;s===void 0&&(s={});var n=s.once?this.once:this.page;n=n.filter(s.self?function(u){return u.name&&u.name==="self"}:function(u){return!u.name||u.name!=="self"});var r=new Map,o=n.find(function(u){var f=!0,m={};return s.self&&u.name==="self"?(r.set(u,m),!0):(i.j.reverse().forEach(function(v){f&&(f=i.M(u,v,e,m),u.from&&u.to&&(f=i.M(u,v,e,m,"from")&&i.M(u,v,e,m,"to")),u.from&&!u.to&&(f=i.M(u,v,e,m,"from")),!u.from&&u.to&&(f=i.M(u,v,e,m,"to")))}),r.set(u,m),f)}),h=r.get(o),c=[];if(c.push(s.once?"once":"page"),s.self&&c.push("self"),h){var d,l=[o];Object.keys(h).length>0&&l.push(h),(d=this.logger).info.apply(d,["Transition found ["+c.join(",")+"]"].concat(l))}else this.logger.info("No transition found ["+c.join(",")+"]");return o},t.update=function(){var e=this;this.all=this.all.map(function(s){return e.N(s)}).sort(function(s,i){return s.priority-i.priority}).reverse().map(function(s){return delete s.priority,s}),this.page=this.all.filter(function(s){return s.leave!==void 0||s.enter!==void 0}),this.once=this.all.filter(function(s){return s.once!==void 0})},t.M=function(e,s,i,n,r){var o=!0,h=!1,c=e,d=s.name,l=d,u=d,f=d,m=r?c[r]:c,v=r==="to"?i.next:i.current;if(r?m&&m[d]:m[d]){switch(s.type){case"strings":default:var g=Array.isArray(m[l])?m[l]:[m[l]];v[l]&&g.indexOf(v[l])!==-1&&(h=!0),g.indexOf(v[l])===-1&&(o=!1);break;case"object":var w=Array.isArray(m[u])?m[u]:[m[u]];v[u]?(v[u].name&&w.indexOf(v[u].name)!==-1&&(h=!0),w.indexOf(v[u].name)===-1&&(o=!1)):o=!1;break;case"function":m[f](i)?h=!0:o=!1}h&&(r?(n[r]=n[r]||{},n[r][d]=c[r][d]):n[d]=c[d])}return o},t.S=function(e,s,i){var n=0;return(e[s]||e.from&&e.from[s]||e.to&&e.to[s])&&(n+=Math.pow(10,i),e.from&&e.from[s]&&(n+=1),e.to&&e.to[s]&&(n+=2)),n},t.N=function(e){var s=this;e.priority=0;var i=0;return this.j.forEach(function(n,r){i+=s.S(e,n.name,r+1)}),e.priority=i,e},a}();function ya(a,t){try{var e=a()}catch(s){return t(s)}return e&&e.then?e.then(void 0,t):e}var gm=function(){function a(e){e===void 0&&(e=[]),this.logger=new ye("@barba/core"),this.store=void 0,this.C=!1,this.store=new vm(e)}var t=a.prototype;return t.get=function(e,s){return this.store.resolve(e,s)},t.doOnce=function(e){var s=e.data,i=e.transition;try{var n=function(){r.C=!1},r=this,o=i||{};r.C=!0;var h=ya(function(){return Promise.resolve(r.L("beforeOnce",s,o)).then(function(){return Promise.resolve(r.once(s,o)).then(function(){return Promise.resolve(r.L("afterOnce",s,o)).then(function(){})})})},function(c){r.C=!1,r.logger.debug("Transition error [before/after/once]"),r.logger.error(c)});return Promise.resolve(h&&h.then?h.then(n):n())}catch(c){return Promise.reject(c)}},t.doPage=function(e){var s=e.data,i=e.transition,n=e.page,r=e.wrapper;try{var o=function(u){h.C=!1},h=this,c=i||{},d=c.sync===!0||!1;h.C=!0;var l=ya(function(){function u(){return Promise.resolve(h.L("before",s,c)).then(function(){function m(g){return Promise.resolve(h.remove(s)).then(function(){return Promise.resolve(h.L("after",s,c)).then(function(){})})}var v=function(){if(d)return ya(function(){return Promise.resolve(h.add(s,r)).then(function(){return Promise.resolve(h.L("beforeLeave",s,c)).then(function(){return Promise.resolve(h.L("beforeEnter",s,c)).then(function(){return Promise.resolve(Promise.all([h.leave(s,c),h.enter(s,c)])).then(function(){return Promise.resolve(h.L("afterLeave",s,c)).then(function(){return Promise.resolve(h.L("afterEnter",s,c)).then(function(){})})})})})})},function(C){if(h.H(C))throw new bs(C,"Transition error [sync]")});var g=function(C){return ya(function(){var T=function(){if(w!==!1)return Promise.resolve(h.add(s,r)).then(function(){return Promise.resolve(h.L("beforeEnter",s,c)).then(function(){return Promise.resolve(h.enter(s,c,w)).then(function(){return Promise.resolve(h.L("afterEnter",s,c)).then(function(){})})})})}();if(T&&T.then)return T.then(function(){})},function(T){if(h.H(T))throw new bs(T,"Transition error [before/after/enter]")})},w=!1,x=ya(function(){return Promise.resolve(h.L("beforeLeave",s,c)).then(function(){return Promise.resolve(Promise.all([h.leave(s,c),C1(n,s)]).then(function(C){return C[0]})).then(function(C){return w=C,Promise.resolve(h.L("afterLeave",s,c)).then(function(){})})})},function(C){if(h.H(C))throw new bs(C,"Transition error [before/after/leave]")});return x&&x.then?x.then(g):g()}();return v&&v.then?v.then(m):m()})}var f=function(){if(d)return Promise.resolve(C1(n,s)).then(function(){})}();return f&&f.then?f.then(u):u()},function(u){throw h.C=!1,u.name&&u.name==="BarbaError"?(h.logger.debug(u.label),h.logger.error(u.error),u):(h.logger.debug("Transition error [page]"),h.logger.error(u),u)});return Promise.resolve(l&&l.then?l.then(o):o())}catch(u){return Promise.reject(u)}},t.once=function(e,s){try{return Promise.resolve(te.do("once",e,s)).then(function(){return s.once?Ze(s.once,s)(e):Promise.resolve()})}catch(i){return Promise.reject(i)}},t.leave=function(e,s){try{return Promise.resolve(te.do("leave",e,s)).then(function(){return s.leave?Ze(s.leave,s)(e):Promise.resolve()})}catch(i){return Promise.reject(i)}},t.enter=function(e,s,i){try{return Promise.resolve(te.do("enter",e,s)).then(function(){return s.enter?Ze(s.enter,s)(e,i):Promise.resolve()})}catch(n){return Promise.reject(n)}},t.add=function(e,s){try{return we.addContainer(e.next.container,s),te.do("nextAdded",e),Promise.resolve()}catch(i){return Promise.reject(i)}},t.remove=function(e){try{return we.removeContainer(e.current.container),te.do("currentRemoved",e),Promise.resolve()}catch(s){return Promise.reject(s)}},t.H=function(e){return e.message?!/Timeout error|Fetch error/.test(e.message):!e.status},t.L=function(e,s,i){try{return Promise.resolve(te.do(e,s,i)).then(function(){return i[e]?Ze(i[e],i)(s):Promise.resolve()})}catch(n){return Promise.reject(n)}},Li(a,[{key:"isRunning",get:function(){return this.C},set:function(e){this.C=e}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(e){return e.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(e){return e.to&&!e.to.route||e.sync})}}]),a}(),ym=function(){function a(t){var e=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,t.length!==0&&(t.forEach(function(s){e.byNamespace.set(s.namespace,s)}),this.names.forEach(function(s){te[s](e._(s))}))}return a.prototype._=function(t){var e=this;return function(s){var i=t.match(/enter/i)?s.next:s.current,n=e.byNamespace.get(i.namespace);return n&&n[t]?Ze(n[t],n)(s):Promise.resolve()}},a}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var t=this;do{if(t.matches(a))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null});var wm={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},z1=new(function(){function a(){this.version="2.10.3",this.schemaPage=wm,this.Logger=ye,this.logger=new ye("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=te,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=we,this.helpers=tm,this.history=Cd,this.request=am,this.url=em,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var t=a.prototype;return t.use=function(e,s){var i=this.plugins;i.indexOf(e)>-1?this.logger.warn("Plugin ["+e.name+"] already installed."):typeof e.install=="function"?(e.install(this,s),i.push(e)):this.logger.warn("Plugin ["+e.name+'] has no "install" method.')},t.init=function(e){var s=e===void 0?{}:e,i=s.transitions,n=i===void 0?[]:i,r=s.views,o=r===void 0?[]:r,h=s.schema,c=h===void 0?$t:h,d=s.requestError,l=s.timeout,u=l===void 0?2e3:l,f=s.cacheIgnore,m=f!==void 0&&f,v=s.cacheFirstPage,g=v!==void 0&&v,w=s.prefetchIgnore,x=w!==void 0&&w,C=s.preventRunning,T=C!==void 0&&C,P=s.prevent,O=P===void 0?null:P,S=s.debug,L=s.logLevel;if(ye.setLevel((S!==void 0&&S)===!0?"debug":L===void 0?"off":L),this.logger.info(this.version),Object.keys(c).forEach(function(V){$t[V]&&($t[V]=c[V])}),this.B=d,this.timeout=u,this.cacheIgnore=m,this.cacheFirstPage=g,this.prefetchIgnore=x,this.preventRunning=T,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var b=this.data.current;if(!b.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new im(m),this.headers=new nm,this.prevent=new Mm(x),this.transitions=new gm(n),this.views=new ym(o),O!==null){if(typeof O!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",O)}this.history.init(b.url.href,b.namespace),g&&this.cache.set(b.url.href,Promise.resolve({html:b.html,url:b.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(V){return V.init()});var E=this.data;E.trigger="barba",E.next=E.current,E.current=It({},this.schemaPage),this.hooks.do("ready",E),this.once(E),this.I()},t.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},t.force=function(e){window.location.assign(e)},t.go=function(e,s,i){var n;if(s===void 0&&(s="barba"),this.F=null,this.transitions.isRunning)this.force(e);else if(!(n=s==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(e)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(e,!0):this.prevent.run("sameUrl",null,null,e))||this.transitions.hasSelf)return s=this.history.change(this.cache.has(e)?this.cache.get(e).target:e,s,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(e,s,i??void 0,n)},t.once=function(e){try{var s=this;return Promise.resolve(s.hooks.do("beforeEnter",e)).then(function(){function i(){return Promise.resolve(s.hooks.do("afterEnter",e)).then(function(){})}var n=function(){if(s.transitions.hasOnce){var r=s.transitions.get(e,{once:!0});return Promise.resolve(s.transitions.doOnce({transition:r,data:e})).then(function(){})}}();return n&&n.then?n.then(i):i()})}catch(i){return Promise.reject(i)}},t.page=function(e,s,i,n){try{var r,o=function(){var l=h.data;return Promise.resolve(h.hooks.do("page",l)).then(function(){var u=function(f,m){try{var v=(g=h.transitions.get(l,{once:!1,self:n}),Promise.resolve(h.transitions.doPage({data:l,page:r,transition:g,wrapper:h.q})).then(function(){h.I()}))}catch{return m()}var g;return v&&v.then?v.then(void 0,m):v}(0,function(){ye.getLevel()===0&&h.force(l.next.url.href)});if(u&&u.then)return u.then(function(){})})},h=this;if(h.data.next.url=It({href:e},h.url.parse(e)),h.data.trigger=s,h.data.event=i,h.cache.has(e))r=h.cache.update(e,{action:"click"}).request;else{var c=h.request(e,h.timeout,h.onRequestError.bind(h,s),h.cache,h.headers);c.then(function(l){l.url.href!==e&&h.history.add(l.url.href,s,"replace")}),r=h.cache.set(e,c,"click","pending").request}var d=function(){if(h.transitions.shouldWait)return Promise.resolve(C1(r,h.data)).then(function(){})}();return Promise.resolve(d&&d.then?d.then(o):o())}catch(l){return Promise.reject(l)}},t.onRequestError=function(e){this.transitions.isRunning=!1;var s=[].slice.call(arguments,1),i=s[0],n=s[1],r=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(e,r,i,n)===!1||r==="click"&&this.force(i),!1},t.prefetch=function(e){var s=this;e=this.url.getAbsoluteHref(e),this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){s.logger.error(i)}),"prefetch","pending")},t.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},t.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},t.U=function(e){var s=this,i=this.W(e);if(i){var n=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(n)||this.cache.has(n)||this.cache.set(n,this.request(n,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(r){s.logger.error(r)}),"enter","pending")}},t.$=function(e){var s=this.W(e);if(s){if(this.transitions.isRunning&&this.preventRunning)return e.preventDefault(),void e.stopPropagation();this.F=e,this.go(this.dom.getHref(s),s,e)}},t.X=function(e){this.go(this.url.getHref(),"popstate",e)},t.W=function(e){for(var s=e.target;s&&!this.dom.getHref(s);)s=s.parentNode;if(s&&!this.prevent.checkLink(s,e,this.dom.getHref(s)))return s},t.I=function(){var e=this.url.getHref(),s={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:It({href:e},this.url.parse(e))};this.D={current:s,event:void 0,next:It({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},Li(a,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),a}());/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=([a,t,e])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",a);return Object.keys(t).forEach(i=>{s.setAttribute(i,String(t[i]))}),e?.length&&e.forEach(i=>{const n=Od(i);s.appendChild(n)}),s},xm=(a,t={})=>{const s={...Hd,...t};return Od(["svg",s,a])};/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=a=>Array.from(a.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Sm=a=>typeof a=="string"?a:!a||!a.class?"":a.class&&typeof a.class=="string"?a.class.split(" "):a.class&&Array.isArray(a.class)?a.class:"",bm=a=>a.flatMap(Sm).map(e=>e.trim()).filter(Boolean).filter((e,s,i)=>i.indexOf(e)===s).join(" "),Am=a=>a.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,s)=>e.toUpperCase()+s.toLowerCase()),Sn=(a,{nameAttr:t,icons:e,attrs:s})=>{const i=a.getAttribute(t);if(i==null)return;const n=Am(i),r=e[n];if(!r)return console.warn(`${a.outerHTML} icon name was not found in the provided icons object.`);const o=_m(a),h={...Hd,"data-lucide":i,...s,...o},c=bm(["lucide",`lucide-${i}`,o,s]);c&&Object.assign(h,{class:c});const d=xm(r,h);return a.parentNode?.replaceChild(d,a)};/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["path",{d:"M18 17.5a2.5 2.5 0 1 1-4 2.03V12"}],["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M6.6 15.572A2 2 0 1 0 10 17v-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M17 12H7"}],["path",{d:"M19 18H5"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M3 12h18"}],["path",{d:"M3 18h18"}],["path",{d:"M3 6h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M15 12H3"}],["path",{d:"M17 18H3"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"M21 12H9"}],["path",{d:"M21 18H7"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=[["path",{d:"M13.5 10.5 15 9"}],["path",{d:"M4 4v15a1 1 0 0 0 1 1h15"}],["path",{d:"M4.293 19.707 6 18"}],["path",{d:"m9 15 1.5-1.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M15 12h.01"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}],["path",{d:"M9 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m16 19 3 3 3-3"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 16v6"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 22v-6"}],["path",{d:"m22 19-3-3-3 3"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=[["path",{d:"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m17 17 5 5"}],["path",{d:"M18 12h.01"}],["path",{d:"m22 17-5 5"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=[["path",{d:"M10 3a41 41 0 0 0 0 18"}],["path",{d:"M14 3a41 41 0 0 1 0 18"}],["path",{d:"M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z"}],["path",{d:"M3.84 17h16.32"}],["path",{d:"M3.84 7h16.32"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=[["path",{d:"m11 7-3 5h4l-3 5"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"}],["path",{d:"M22 14v-4"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=[["path",{d:"M10 10v4"}],["path",{d:"M14 10v4"}],["path",{d:"M22 14v-4"}],["path",{d:"M6 10v4"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=[["path",{d:"M22 14v-4"}],["path",{d:"M6 14v-4"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=[["path",{d:"M10 14v-4"}],["path",{d:"M22 14v-4"}],["path",{d:"M6 14v-4"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=[["path",{d:"M10 9v6"}],["path",{d:"M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605"}],["path",{d:"M22 14v-4"}],["path",{d:"M7 12h6"}],["path",{d:"M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 14v-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=[["path",{d:"M 22 14 L 22 10"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"}],["circle",{cx:"18",cy:"8",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M18.518 17.347A7 7 0 0 1 14 19"}],["path",{d:"M18.8 4A11 11 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"20",cy:"16",r:"2"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{x:"4",y:"16",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M12 13h.01"}],["path",{d:"M12 6v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=[["path",{d:"M12 17h1.5"}],["path",{d:"M12 22h1.5"}],["path",{d:"M12 2h1.5"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{d:"M20 14v3h-2.5"}],["path",{d:"M20 8.5V10"}],["path",{d:"M4 10V8.5"}],["path",{d:"M4 19.5V14"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844"}],["circle",{cx:"14",cy:"8",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M12 21V7"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z"}],["path",{d:"M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"M17 3h4v4"}],["path",{d:"M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17"}],["path",{d:"M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05"}],["path",{d:"M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"}],["path",{d:"M9.707 14.293 21 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"}],["path",{d:"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["path",{d:"m10.852 14.772-.383.923"}],["path",{d:"m10.852 9.228-.383-.923"}],["path",{d:"m13.148 14.772.382.924"}],["path",{d:"m13.531 8.305-.383.923"}],["path",{d:"m14.772 10.852.923-.383"}],["path",{d:"m14.772 13.148.923.383"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"}],["path",{d:"M17.998 5.125a4 4 0 0 1 2.525 5.771"}],["path",{d:"M19.505 10.294a4 4 0 0 1-1.5 7.706"}],["path",{d:"M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"}],["path",{d:"M4.5 10.291A4 4 0 0 0 6 18"}],["path",{d:"M6.002 5.125a3 3 0 0 0 .4 1.375"}],["path",{d:"m9.228 10.852-.923-.383"}],["path",{d:"m9.228 13.148-.923.383"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=[["path",{d:"M16 3v2.107"}],["path",{d:"M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"}],["path",{d:"M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938"}],["path",{d:"M3 15h5.253"}],["path",{d:"M3 9h8.228"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=[["path",{d:"m16 22-1-4"}],["path",{d:"M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1"}],["path",{d:"M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z"}],["path",{d:"m8 22 1-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=[["path",{d:"m11 10 3 3"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["path",{d:"M7.2 14.8a2 2 0 0 1 2 2"}],["circle",{cx:"18.5",cy:"8.5",r:"3.5"}],["circle",{cx:"7.5",cy:"16.5",r:"5.5"}],["circle",{cx:"7.5",cy:"4.5",r:"2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=[["path",{d:"M11 14h1v4"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=[["path",{d:"M16 14v2.2l1.6 1"}],["path",{d:"M16 2v4"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M3 10h5"}],["path",{d:"M8 2v4"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=[["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m15.228 19.148-.923.383"}],["path",{d:"M16 2v4"}],["path",{d:"m16.47 14.305.382.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["path",{d:"M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M19 16v6"}],["path",{d:"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M11 10v4h4"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M16 2v4"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{d:"M21 22v-4h-4"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}],["path",{d:"M3 10h4"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M10 10v7.9"}],["path",{d:"M11.802 6.145a5 5 0 0 1 6.053 6.053"}],["path",{d:"M14 6.1v2.243"}],["path",{d:"m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M10 7v10.9"}],["path",{d:"M14 6.1V17"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M12 14v4"}],["path",{d:"M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"}],["path",{d:"M8 14h8"}],["rect",{x:"8",y:"10",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M20 4L9 15"}],["path",{d:"M21 19L3 19"}],["path",{d:"M9 15L4 10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m15 18-6-6 6-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"m18 15-6-6-6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"m17 7 5 5-5 5"}],["path",{d:"m7 7-5 5 5 5"}],["path",{d:"M8 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M10 16V9.5a1 1 0 0 1 5 0"}],["path",{d:"M8 12h4"}],["path",{d:"M8 16h7"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=[["path",{d:"M22 2 2 22"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["circle",{cx:"12",cy:"12",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M11 14h10"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344"}],["path",{d:"m17 18 4-4-4-4"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M12 6v6l2-4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M12 6v6l-4-2"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M12 6v6l-2-4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M12 6v6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M12 6v6l4-2"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M12 6v6h4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M12 6v6l2 4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M12 6v10"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M12 6v6l-2 4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12 6v6H8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M12 6v6l-4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M12 6v6l4 2"}],["path",{d:"M20 12v5"}],["path",{d:"M20 21h.01"}],["path",{d:"M21.25 8.2A10 10 0 1 0 16 21.16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M12 6v6l2 1"}],["path",{d:"M12.337 21.994a10 10 0 1 1 9.588-8.767"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M12 6v6l1.56.78"}],["path",{d:"M13.227 21.925a10 10 0 1 1 8.767-9.588"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 6v6l4 2"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M12 6v6l3.644 1.822"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}],["path",{d:"M21.92 13.267a10 10 0 1 0-8.653 8.653"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M12 12v4"}],["path",{d:"M12 20h.01"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"m17 15-5.5 5.5L9 18"}],["path",{d:"M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m10.852 19.772-.383.924"}],["path",{d:"m13.148 14.228.383-.923"}],["path",{d:"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"}],["path",{d:"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"}],["path",{d:"m14.772 15.852.923-.383"}],["path",{d:"m14.772 18.148.923.383"}],["path",{d:"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m9.228 15.852-.923-.383"}],["path",{d:"m9.228 18.148-.923.383"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=[["path",{d:"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"M15 3v7.5"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m20.7 16.8 1-.4"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"M9 3v18"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"m15 10 5 5-5 5"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"m14 15-5 5-5-5"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"m10 15 5 5 5-5"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"m10 9 5-5 5 5"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}],["path",{d:"M9 14 4 9l5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"m13 21-3-3 3-3"}],["path",{d:"M20 18H10"}],["path",{d:"M3 11h.01"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M10 18h10"}],["path",{d:"m17 21 3-3-3-3"}],["path",{d:"M3 11h.01"}],["rect",{x:"15",y:"3",width:"5",height:"8",rx:"2.5"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"}],["path",{d:"M20.804 14.869a9 9 0 0 1-17.608 0"}],["circle",{cx:"12",cy:"4",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M10 12h.01"}],["path",{d:"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h8"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}],["rect",{x:"14",y:"17",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M10 12h.01"}],["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M11 20H2"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14"}],["path",{d:"M14 12h.01"}],["path",{d:"M22 20h-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["circle",{cx:"12.1",cy:"12.1",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"M18 6h4"}],["path",{d:"m5 10-2 8"}],["path",{d:"m7 18 2-8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M10 10 7 7"}],["path",{d:"m10 14-3 3"}],["path",{d:"m14 10 3-3"}],["path",{d:"m14 14 3 3"}],["path",{d:"M14.205 4.139a4 4 0 1 1 5.439 5.863"}],["path",{d:"M19.637 14a4 4 0 1 1-5.432 5.868"}],["path",{d:"M4.367 10a4 4 0 1 1 5.438-5.862"}],["path",{d:"M9.795 19.862a4 4 0 1 1-5.429-5.873"}],["rect",{x:"10",y:"8",width:"4",height:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}],["path",{d:"m2.5 21.5 1.4-1.4"}],["path",{d:"m20.1 3.9 1.4-1.4"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}],["path",{d:"m9.6 14.4 4.8-4.8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"m2 2 20 20"}],["path",{d:"M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19"}],["path",{d:"M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"}],["path",{d:"m5.082 11.09 8.828 8.828"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"m15 15 6 6"}],["path",{d:"m15 9 6-6"}],["path",{d:"M21 16v5h-5"}],["path",{d:"M21 8V3h-5"}],["path",{d:"M3 16v5h5"}],["path",{d:"m3 21 6-6"}],["path",{d:"M3 8V3h5"}],["path",{d:"M9 9 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"m15 18-.722-3.25"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{d:"m20 15-1.726-2.05"}],["path",{d:"m4 15 1.726-2.05"}],["path",{d:"m9 18 .722-3.25"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M12 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"}],["circle",{cx:"5",cy:"14",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M8 14v2.2l1.6 1"}],["circle",{cx:"8",cy:"16",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m2.305 15.53.923-.382"}],["path",{d:"m3.228 12.852-.924-.383"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.852 11.228-.383-.923"}],["path",{d:"m4.852 16.772-.383.924"}],["path",{d:"m7.148 11.228.383-.923"}],["path",{d:"m7.53 17.696-.382-.924"}],["path",{d:"m8.772 12.852.923-.383"}],["path",{d:"m8.772 15.148.923.383"}],["circle",{cx:"6",cy:"14",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}],["path",{d:"M8 18v-7.7L16 9v7"}],["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 18a3 3 0 1 0-6 0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 22V4"}],["path",{d:"M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M17 22V2L7 7l10 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M7 22V2l10 5-10 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{d:"M6.453 15H15"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{d:"M5 15h14"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M16 14v2.2l1.6 1"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=[["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"}],["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"m15 17 5-5-5-5"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"}],["path",{d:"M16 6h6"}],["path",{d:"M19 3v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M11.5 21a7.5 7.5 0 1 1 7.35-9"}],["path",{d:"M13 12V3"}],["path",{d:"M4 21h16"}],["path",{d:"M9 12V3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M2 21V3"}],["path",{d:"M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"}],["path",{d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"}],["circle",{cx:"16",cy:"11",r:"2"}],["circle",{cx:"8",cy:"11",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M15 3v18"}],["path",{d:"M3 12h18"}],["path",{d:"M9 3v18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"}],["path",{d:"M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"}],["path",{d:"M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"}],["path",{d:"m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M12 3V2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2"}],["path",{d:"M4 10h16"}],["path",{d:"M5 10a7 7 0 0 1 14 0"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M12 18V6"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{d:"M21 10v8"}],["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"}],["path",{d:"M15 15h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"}],["path",{d:"M15 15h6"}],["path",{d:"M18 12v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475"}],["path",{d:"M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 18h6"}],["path",{d:"M18 15v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01"}],["path",{d:"M12 17h.01"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M13.5 8h-3"}],["path",{d:"m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"}],["path",{d:"M16.899 22A5 5 0 0 0 7.1 22"}],["path",{d:"m9 2 3 6"}],["circle",{cx:"12",cy:"15",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M16 3h5v5"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2"}],["path",{d:"M21 12v3"}],["path",{d:"m21 3-5 5"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}],["path",{d:"M9 3h3"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m7 8-4 4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m3 8 4 4-4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"m16 14 4 4-4 4"}],["path",{d:"M20 10a8 8 0 1 0-8 8h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M4 10a8 8 0 1 1 8 8H4"}],["path",{d:"m8 22-4-4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M12 2v5"}],["path",{d:"M14.829 15.998a3 3 0 1 1-5.658 0"}],["path",{d:"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"}],["path",{d:"m14.207 4.793-3.414 3.414"}],["path",{d:"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"}],["path",{d:"m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M12 10v12"}],["path",{d:"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"}],["path",{d:"M9 22h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"}],["path",{d:"M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}],["path",{d:"M8 6h4a2 2 0 0 1 2 2v5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z"}],["path",{d:"M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"}],["path",{d:"M8 18h4a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M12 12v6"}],["path",{d:"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"}],["path",{d:"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M2 20h20"}],["path",{d:"m9 10 2 2 4-4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"}],["path",{d:"M20.054 15.987H3.946"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"}],["path",{d:"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M3.92 11h6.16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M14 12h2v8"}],["path",{d:"M14 20h4"}],["path",{d:"M6 12h4"}],["path",{d:"M6 20h4"}],["path",{d:"M8 20V8a4 4 0 0 1 7.464-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}],["path",{d:"M10 6h11"}],["path",{d:"m3 10 3-3-3-3"}],["path",{d:"m3 20 3-3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M10 18h4"}],["path",{d:"M11 6H3"}],["path",{d:"M15 6h6"}],["path",{d:"M18 9V3"}],["path",{d:"M7 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}],["path",{d:"M10 6h11"}],["path",{d:"M4 10h2"}],["path",{d:"M4 6h1v4"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["path",{d:"M12 19v3"}],["path",{d:"M12 2v3"}],["path",{d:"M18.89 13.24a7 7 0 0 0-8.13-8.13"}],["path",{d:"M19 12h3"}],["path",{d:"M2 12h3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.05 7.05a7 7 0 0 0 9.9 9.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"}],["path",{d:"M15 5.764V12"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"m14 6 4 4"}],["path",{d:"M17 3h4v4"}],["path",{d:"m21 3-7.75 7.75"}],["circle",{cx:"9",cy:"15",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M16 3h5v5"}],["path",{d:"m21 3-6.75 6.75"}],["circle",{cx:"10",cy:"14",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M15 3h6v6"}],["path",{d:"m21 3-7 7"}],["path",{d:"m3 21 7-7"}],["path",{d:"M9 21H3v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344"}],["path",{d:"M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"}],["path",{d:"M8 8v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"}],["path",{d:"M8 6v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M4 12h16"}],["path",{d:"M4 18h16"}],["path",{d:"M4 6h16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ML=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gL=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yL=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wL=[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xL=[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SL=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bL=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AL=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EL=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TL=[["path",{d:"M5 12h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LL=[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=[["path",{d:"M12 17v4"}],["path",{d:"m14.305 7.53.923-.382"}],["path",{d:"m15.228 4.852-.923-.383"}],["path",{d:"m16.852 3.228-.383-.924"}],["path",{d:"m16.852 8.772-.383.923"}],["path",{d:"m19.148 3.228.383-.924"}],["path",{d:"m19.53 9.696-.382-.924"}],["path",{d:"m20.772 4.852.924-.383"}],["path",{d:"m20.772 7.148.924.383"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kL=[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DL=[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NL=[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RL=[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BL=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WL=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qL=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZL=[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UL=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YL=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KL=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=[["path",{d:"M19 13v6h-6"}],["path",{d:"M5 11V5h6"}],["path",{d:"m5 5 14 14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JL=[["path",{d:"M11 19H5v-6"}],["path",{d:"M13 5h6v6"}],["path",{d:"M19 5 5 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M12 2v20"}],["path",{d:"m8 18 4 4 4-4"}],["path",{d:"m8 6 4-4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M15 18h-5"}],["path",{d:"M18 14h-8"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M12 2v10"}],["path",{d:"m8.5 4 7 4"}],["path",{d:"m8.5 8 7-4"}],["circle",{cx:"12",cy:"17",r:"5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152"}],["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M12 3v6"}],["path",{d:"M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"}],["path",{d:"M3.054 9.013h17.893"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M11.25 17.25h1.5L12 18z"}],["path",{d:"m15 12 2 2"}],["path",{d:"M18 6.5a.5.5 0 0 0-.5-.5"}],["path",{d:"M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"}],["path",{d:"M6 6.5a.495.495 0 0 1 .5-.5"}],["path",{d:"m9 12-2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"M11 15h2"}],["path",{d:"M12 12v3"}],["path",{d:"M12 19v3"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{d:"M9 9a3 3 0 1 1 6 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M13 2a9 9 0 0 1 9 9"}],["path",{d:"M13 6a5 5 0 0 1 5 5"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M14 6h8"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M16 2v6h6"}],["path",{d:"m22 2-6 6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"m16 2 6 6"}],["path",{d:"m22 2-6 6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"}],["path",{d:"M22 2 2 22"}],["path",{d:"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"m16 8 6-6"}],["path",{d:"M22 8V2h-6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M2 10h6V4"}],["path",{d:"m2 4 6 6"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"}],["path",{d:"M16 10h.01"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"m12 14-1 1"}],["path",{d:"m13.75 18.25-1.25 1.42"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z"}],["path",{d:"m8 10 4 4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["path",{d:"M12 12h.01"}],["path",{d:"M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z"}],["path",{d:"M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z"}],["path",{d:"M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5"}],["path",{d:"M16 9h.01"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"}],["circle",{cx:"14",cy:"12",r:"8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["path",{d:"M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"m12 17-5-5 5-5"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}],["path",{d:"m7 17-5-5 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}],["path",{d:"m9 17-5-5 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"m14.5 9.5 1 1"}],["path",{d:"m15.5 8.5-4 4"}],["path",{d:"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["circle",{cx:"10",cy:"14",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M12 15v-3.014"}],["path",{d:"M16 15v-3.014"}],["path",{d:"M20 6H4"}],["path",{d:"M20 8V4"}],["path",{d:"M4 8V4"}],["path",{d:"M8 15v-3.014"}],["rect",{x:"3",y:"12",width:"18",height:"7",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"}],["path",{d:"M16.5 7.5 19 5"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["path",{d:"m20 19.5-5.5 1.2"}],["path",{d:"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"}],["path",{d:"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"}],["path",{d:"M20 10 4 13.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{d:"M5.293 18.707 11 13"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YO=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["path",{d:"m16 16-4 4-4-4"}],["path",{d:"M3 12h18"}],["path",{d:"m8 8 4-4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["path",{d:"M12 3v18"}],["path",{d:"m16 16 4-4-4-4"}],["path",{d:"m8 8-4 4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["path",{d:"m10.852 14.772-.383.923"}],["path",{d:"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"}],["path",{d:"m13.148 9.228.383-.923"}],["path",{d:"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"}],["path",{d:"m14.772 10.852.923-.383"}],["path",{d:"m14.772 13.148.923.383"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 18h.01"}],["path",{d:"M6 6h.01"}],["path",{d:"m9.228 10.852-.923-.383"}],["path",{d:"m9.228 13.148-.923.383"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=[["path",{d:"M12 2v13"}],["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M6.376 18.91a6 6 0 0 1 11.249.003"}],["circle",{cx:"12",cy:"11",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["path",{d:"M12 10.189V14"}],["path",{d:"M12 2v3"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=[["path",{d:"M16 10a4 4 0 0 1-8 0"}],["path",{d:"M3.103 6.034h17.794"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=[["path",{d:"M10 22v-5"}],["path",{d:"M14 19v-2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M18 20v-3"}],["path",{d:"M2 13h20"}],["path",{d:"M20 13V7l-5-5H6a2 2 0 0 0-2 2v9"}],["path",{d:"M6 20v-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=[["path",{d:"M11 12h.01"}],["path",{d:"M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1"}],["path",{d:"M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"}],["path",{d:"M14 8a8.5 8.5 0 0 1 0 8"}],["path",{d:"M16 16c2 0 4.5-4 4-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=[["path",{d:"M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5"}],["path",{d:"M14.5 14.5 12 17"}],["path",{d:"M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=[["path",{d:"M2 20h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=[["path",{d:"M22 2 2 22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=[["path",{d:"M10.5 2v4"}],["path",{d:"M14 2H7a2 2 0 0 0-2 2"}],["path",{d:"M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19"}],["path",{d:"M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=[["path",{d:"M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66"}],["path",{d:"m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"m10 9-3 3 3 3"}],["path",{d:"m14 15 3-3-3-3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=[["path",{d:"M14 21h1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 9v1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 21h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=[["path",{d:"M21 11a8 8 0 0 0-8-8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=[["path",{d:"M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"}],["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=[["path",{d:"M10 22a2 2 0 0 1-2-2"}],["path",{d:"M14 2a2 2 0 0 1 2 2"}],["path",{d:"M16 22h-2"}],["path",{d:"M2 10V8"}],["path",{d:"M2 4a2 2 0 0 1 2-2"}],["path",{d:"M20 8a2 2 0 0 1 2 2"}],["path",{d:"M22 14v2"}],["path",{d:"M22 20a2 2 0 0 1-2 2"}],["path",{d:"M4 16a2 2 0 0 1-2-2"}],["path",{d:"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"}],["path",{d:"M8 2h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=[["path",{d:"M10 22a2 2 0 0 1-2-2"}],["path",{d:"M16 22h-2"}],["path",{d:"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"}],["path",{d:"M20 8a2 2 0 0 1 2 2"}],["path",{d:"M22 14v2"}],["path",{d:"M22 20a2 2 0 0 1-2 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=[["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=[["path",{d:"M13.77 3.043a34 34 0 0 0-3.54 0"}],["path",{d:"M13.771 20.956a33 33 0 0 1-3.541.001"}],["path",{d:"M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44"}],["path",{d:"M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438"}],["path",{d:"M20.957 10.23a33 33 0 0 1 0 3.54"}],["path",{d:"M3.043 10.23a34 34 0 0 0 .001 3.541"}],["path",{d:"M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438"}],["path",{d:"M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=[["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"}],["path",{d:"M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"}],["path",{d:"M5 22h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["path",{d:"M12 2v2"}],["path",{d:"M13 8.129A4 4 0 0 1 15.873 11"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}],["path",{d:"M9 8a5 5 0 1 0 7 7 7 7 0 1 1-7-7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["path",{d:"M10 21v-1"}],["path",{d:"M10 4V3"}],["path",{d:"M10 9a3 3 0 0 0 0 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6 1.5-3H22"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h1"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"}],["path",{d:"M9 6v12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M14 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}],["path",{d:"M7 8h8"}],["path",{d:"M9 21h1"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M15 18H3"}],["path",{d:"M17 6H3"}],["path",{d:"M21 12H3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"M10.585 15H10"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M10 15h4"}],["path",{d:"m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"}],["path",{d:"m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"}],["path",{d:"M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M12 20v-6"}],["path",{d:"M19.656 14H22"}],["path",{d:"M2 14h12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M9.656 4H20a2 2 0 0 1 2 2v10.344"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M16.05 10.966a5 2.5 0 0 1-8.1 0"}],["path",{d:"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"}],["path",{d:"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z"}],["path",{d:"M9.194 6.57a5 2.5 0 0 0 5.61 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M12 16v6"}],["path",{d:"M14 20h-4"}],["path",{d:"M18 2h4v4"}],["path",{d:"m2 2 7.17 7.17"}],["path",{d:"M2 5.355V2h3.357"}],["path",{d:"m22 2-7.17 7.17"}],["path",{d:"M8 5 5 8"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=[["path",{d:"M16 17h6v-6"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013"}],["path",{d:"M14 21h2"}],["path",{d:"m15.874 7.743 1 1.732"}],["path",{d:"m18.849 12.952 1 1.732"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839"}],["path",{d:"m5.136 12.952-1 1.732"}],["path",{d:"M8 21h2"}],["path",{d:"m8.102 7.743-1 1.732"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=[["path",{d:"M14 19V7a2 2 0 0 0-2-2H9"}],["path",{d:"M15 19H9"}],["path",{d:"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"}],["path",{d:"M2 13v5a1 1 0 0 0 1 1h2"}],["path",{d:"M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"}],["circle",{cx:"17",cy:"19",r:"2"}],["circle",{cx:"7",cy:"19",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["path",{d:"m17 2-5 5-5-5"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["path",{d:"M12 4v16"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}],["path",{d:"M9 20h6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t$=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{d:"M3 7v6h6"}],["circle",{cx:"12",cy:"17",r:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e$=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a$=[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s$=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i$=[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 16h.01"}],["path",{d:"M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"}],["path",{d:"M6 12h.01"}],["path",{d:"M6 16h.01"}],["circle",{cx:"12",cy:"10",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n$=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r$=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o$=[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h$=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c$=[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d$=[["path",{d:"m16 11 2 2 4-4"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l$=[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M15 15.5V14a2 2 0 0 1 4 0v1.5"}],["rect",{width:"8",height:"5",x:"13",y:"16",rx:".899"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p$=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m14.305 16.53.923-.382"}],["path",{d:"m15.228 13.852-.923-.383"}],["path",{d:"m16.852 12.228-.383-.923"}],["path",{d:"m16.852 17.772-.383.924"}],["path",{d:"m19.148 12.228.383-.923"}],["path",{d:"m19.53 18.696-.382-.924"}],["path",{d:"m20.772 13.852.924-.383"}],["path",{d:"m20.772 16.148.924.383"}],["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u$=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f$=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m$=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M$=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v$=[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g$=[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y$=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w$=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x$=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _$=[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S$=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b$=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A$=[["path",{d:"M19.5 7a24 24 0 0 1 0 10"}],["path",{d:"M4.5 7a24 24 0 0 0 0 10"}],["path",{d:"M7 19.5a24 24 0 0 0 10 0"}],["path",{d:"M7 4.5a24 24 0 0 1 10 0"}],["rect",{x:"17",y:"17",width:"5",height:"5",rx:"1"}],["rect",{x:"17",y:"2",width:"5",height:"5",rx:"1"}],["rect",{x:"2",y:"17",width:"5",height:"5",rx:"1"}],["rect",{x:"2",y:"2",width:"5",height:"5",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E$=[["path",{d:"M16 8q6 0 6-6-6 0-6 6"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C$=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T$=[["path",{d:"M10 20h4"}],["path",{d:"M12 16v6"}],["path",{d:"M17 2h4v4"}],["path",{d:"m21 2-5.46 5.46"}],["circle",{cx:"12",cy:"11",r:"5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L$=[["path",{d:"M12 15v7"}],["path",{d:"M9 19h6"}],["circle",{cx:"12",cy:"9",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V$=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k$=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H$=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O$=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D$=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I$=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P$=[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N$=[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $$=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F$=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R$=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z$=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B$=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W$=[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q$=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z$=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U$=[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j$=[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y$=[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"}],["path",{d:"M6 13h12"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G$=[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K$=[["path",{d:"M12 10v2.2l1.6 1"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}],["circle",{cx:"12",cy:"12",r:"6"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X$=[["path",{d:"M19 5a2 2 0 0 0-2 2v11"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7 13h10"}],["path",{d:"M7 9h10"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q$=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J$=[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tF=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eF=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sF=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iF=[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nF=[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rF=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oF=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"M2 7.82a15 15 0 0 1 20 0"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["path",{d:"M5 11.858a10 10 0 0 1 11.5-1.785"}],["path",{d:"M8.5 15.429a5 5 0 0 1 2.413-1.31"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hF=[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cF=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dF=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lF=[["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M5 12.859a10 10 0 0 1 10.5-2.222"}],["path",{d:"M8.5 16.429a5 5 0 0 1 3-1.406"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pF=[["path",{d:"M12 20h.01"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uF=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fF=[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 4 4-4"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mF=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MF=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vF=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gF=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yF=[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wF=[["path",{d:"m16 16-2 2 2 2"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["path",{d:"M3 18h7"}],["path",{d:"M3 6h18"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xF=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _F=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SF=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bF=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AF=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EF=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CF=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Em,AArrowUp:Tm,ALargeSmall:Cm,Accessibility:Lm,Activity:Vm,ActivitySquare:jo,AirVent:km,Airplay:Hm,AlarmCheck:bn,AlarmClock:Dm,AlarmClockCheck:bn,AlarmClockMinus:An,AlarmClockOff:Om,AlarmClockPlus:En,AlarmMinus:An,AlarmPlus:En,AlarmSmoke:Im,Album:Pm,AlertCircle:er,AlertOctagon:_o,AlertTriangle:G0,AlignCenter:Fm,AlignCenterHorizontal:Nm,AlignCenterVertical:$m,AlignEndHorizontal:Rm,AlignEndVertical:zm,AlignHorizontalDistributeCenter:Bm,AlignHorizontalDistributeEnd:qm,AlignHorizontalDistributeStart:Wm,AlignHorizontalJustifyCenter:Zm,AlignHorizontalJustifyEnd:jm,AlignHorizontalJustifyStart:Um,AlignHorizontalSpaceAround:Ym,AlignHorizontalSpaceBetween:Gm,AlignJustify:Km,AlignLeft:Xm,AlignRight:Qm,AlignStartHorizontal:Jm,AlignStartVertical:tM,AlignVerticalDistributeCenter:eM,AlignVerticalDistributeEnd:aM,AlignVerticalDistributeStart:sM,AlignVerticalJustifyCenter:iM,AlignVerticalJustifyEnd:nM,AlignVerticalJustifyStart:rM,AlignVerticalSpaceAround:oM,AlignVerticalSpaceBetween:hM,Ambulance:cM,Ampersand:dM,Ampersands:lM,Amphora:pM,Anchor:uM,Angry:fM,Annoyed:mM,Antenna:MM,Anvil:vM,Aperture:gM,AppWindow:wM,AppWindowMac:yM,Apple:xM,Archive:SM,ArchiveRestore:_M,ArchiveX:AM,AreaChart:zn,Armchair:bM,ArrowBigDown:CM,ArrowBigDownDash:EM,ArrowBigLeft:LM,ArrowBigLeftDash:TM,ArrowBigRight:HM,ArrowBigRightDash:VM,ArrowBigUp:OM,ArrowBigUpDash:kM,ArrowDown:WM,ArrowDown01:DM,ArrowDown10:IM,ArrowDownAZ:Cn,ArrowDownAz:Cn,ArrowDownCircle:tr,ArrowDownFromLine:PM,ArrowDownLeft:NM,ArrowDownLeftFromCircle:sr,ArrowDownLeftFromSquare:Qo,ArrowDownLeftSquare:Yo,ArrowDownNarrowWide:$M,ArrowDownRight:FM,ArrowDownRightFromCircle:or,ArrowDownRightFromSquare:t0,ArrowDownRightSquare:Go,ArrowDownSquare:Xo,ArrowDownToDot:RM,ArrowDownToLine:zM,ArrowDownUp:BM,ArrowDownWideNarrow:Tn,ArrowDownZA:Ln,ArrowDownZa:Ln,ArrowLeft:jM,ArrowLeftCircle:ar,ArrowLeftFromLine:qM,ArrowLeftRight:ZM,ArrowLeftSquare:Ko,ArrowLeftToLine:UM,ArrowRight:XM,ArrowRightCircle:rr,ArrowRightFromLine:YM,ArrowRightLeft:GM,ArrowRightSquare:a0,ArrowRightToLine:KM,ArrowUp:o7,ArrowUp01:QM,ArrowUp10:JM,ArrowUpAZ:Vn,ArrowUpAz:Vn,ArrowUpCircle:hr,ArrowUpDown:t7,ArrowUpFromDot:e7,ArrowUpFromLine:a7,ArrowUpLeft:s7,ArrowUpLeftFromCircle:ir,ArrowUpLeftFromSquare:Jo,ArrowUpLeftSquare:s0,ArrowUpNarrowWide:kn,ArrowUpRight:i7,ArrowUpRightFromCircle:nr,ArrowUpRightFromSquare:e0,ArrowUpRightSquare:i0,ArrowUpSquare:n0,ArrowUpToLine:r7,ArrowUpWideNarrow:n7,ArrowUpZA:Hn,ArrowUpZa:Hn,ArrowsUpFromLine:c7,Asterisk:h7,AsteriskSquare:r0,AtSign:d7,Atom:l7,AudioLines:p7,AudioWaveform:u7,Award:f7,Axe:m7,Axis3D:On,Axis3d:On,Baby:M7,Backpack:v7,Badge:H7,BadgeAlert:g7,BadgeCent:y7,BadgeCheck:Dn,BadgeDollarSign:w7,BadgeEuro:x7,BadgeHelp:In,BadgeIndianRupee:_7,BadgeInfo:S7,BadgeJapaneseYen:b7,BadgeMinus:A7,BadgePercent:E7,BadgePlus:T7,BadgePoundSterling:C7,BadgeQuestionMark:In,BadgeRussianRuble:L7,BadgeSwissFranc:V7,BadgeX:k7,BaggageClaim:O7,Ban:D7,Banana:I7,Bandage:$7,Banknote:R7,BanknoteArrowDown:P7,BanknoteArrowUp:N7,BanknoteX:F7,BarChart:Gn,BarChart2:Kn,BarChart3:jn,BarChart4:Un,BarChartBig:Zn,BarChartHorizontal:Wn,BarChartHorizontalBig:Bn,Barcode:z7,Barrel:B7,Baseline:W7,Bath:q7,Battery:X7,BatteryCharging:Z7,BatteryFull:U7,BatteryLow:j7,BatteryMedium:Y7,BatteryPlus:G7,BatteryWarning:K7,Beaker:Q7,Bean:tv,BeanOff:J7,Bed:sv,BedDouble:ev,BedSingle:av,Beef:iv,Beer:rv,BeerOff:nv,Bell:uv,BellDot:ov,BellElectric:hv,BellMinus:cv,BellOff:dv,BellPlus:lv,BellRing:pv,BetweenHorizonalEnd:Pn,BetweenHorizonalStart:Nn,BetweenHorizontalEnd:Pn,BetweenHorizontalStart:Nn,BetweenVerticalEnd:fv,BetweenVerticalStart:mv,BicepsFlexed:Mv,Bike:gv,Binary:vv,Binoculars:yv,Biohazard:wv,Bird:xv,Bitcoin:Sv,Blend:_v,Blinds:bv,Blocks:Av,Bluetooth:Vv,BluetoothConnected:Ev,BluetoothOff:Cv,BluetoothSearching:Tv,Bold:Lv,Bolt:kv,Bomb:Hv,Bone:Ov,Book:s9,BookA:Dv,BookAlert:Iv,BookAudio:Pv,BookCheck:Nv,BookCopy:$v,BookDashed:$n,BookDown:Fv,BookHeadphones:Rv,BookHeart:zv,BookImage:Bv,BookKey:Wv,BookLock:qv,BookMarked:Zv,BookMinus:Uv,BookOpen:Gv,BookOpenCheck:Yv,BookOpenText:jv,BookPlus:Kv,BookTemplate:$n,BookText:Xv,BookType:Qv,BookUp:e9,BookUp2:Jv,BookUser:t9,BookX:a9,Bookmark:h9,BookmarkCheck:i9,BookmarkMinus:n9,BookmarkPlus:r9,BookmarkX:o9,BoomBox:c9,Bot:l9,BotMessageSquare:p9,BotOff:d9,BottleWine:u9,BowArrow:f9,Box:m9,BoxSelect:v0,Boxes:M9,Braces:Fn,Brackets:v9,Brain:w9,BrainCircuit:g9,BrainCog:y9,BrickWall:_9,BrickWallFire:x9,Briefcase:E9,BriefcaseBusiness:S9,BriefcaseConveyorBelt:b9,BriefcaseMedical:A9,BringToFront:C9,Brush:L9,BrushCleaning:T9,Bubbles:V9,Bug:O9,BugOff:k9,BugPlay:H9,Building:I9,Building2:D9,Bus:N9,BusFront:P9,Cable:F9,CableCar:$9,Cake:z9,CakeSlice:R9,Calculator:B9,Calendar:cg,Calendar1:W9,CalendarArrowDown:q9,CalendarArrowUp:Z9,CalendarCheck:j9,CalendarCheck2:U9,CalendarClock:Y9,CalendarCog:G9,CalendarDays:K9,CalendarFold:Q9,CalendarHeart:J9,CalendarMinus:tg,CalendarMinus2:X9,CalendarOff:eg,CalendarPlus:sg,CalendarPlus2:ag,CalendarRange:ig,CalendarSearch:ng,CalendarSync:rg,CalendarX:hg,CalendarX2:og,Camera:lg,CameraOff:dg,CandlestickChart:qn,Candy:fg,CandyCane:pg,CandyOff:ug,Cannabis:mg,Captions:Rn,CaptionsOff:Mg,Car:yg,CarFront:vg,CarTaxiFront:gg,Caravan:wg,CardSim:xg,Carrot:_g,CaseLower:Sg,CaseSensitive:bg,CaseUpper:Ag,CassetteTape:Eg,Cast:Cg,Castle:Tg,Cat:Lg,Cctv:Vg,ChartArea:zn,ChartBar:Wn,ChartBarBig:Bn,ChartBarDecreasing:kg,ChartBarIncreasing:Hg,ChartBarStacked:Og,ChartCandlestick:qn,ChartColumn:jn,ChartColumnBig:Zn,ChartColumnDecreasing:Dg,ChartColumnIncreasing:Un,ChartColumnStacked:Ig,ChartGantt:Pg,ChartLine:Yn,ChartNetwork:$g,ChartNoAxesColumn:Kn,ChartNoAxesColumnDecreasing:Ng,ChartNoAxesColumnIncreasing:Gn,ChartNoAxesCombined:Fg,ChartNoAxesGantt:Xn,ChartPie:Qn,ChartScatter:Jn,ChartSpline:Rg,Check:Wg,CheckCheck:zg,CheckCircle:cr,CheckCircle2:dr,CheckLine:Bg,CheckSquare:h0,CheckSquare2:c0,ChefHat:Zg,Cherry:qg,ChevronDown:Ug,ChevronDownCircle:lr,ChevronDownSquare:d0,ChevronFirst:jg,ChevronLast:Gg,ChevronLeft:Yg,ChevronLeftCircle:pr,ChevronLeftSquare:l0,ChevronRight:Kg,ChevronRightCircle:ur,ChevronRightSquare:p0,ChevronUp:Xg,ChevronUpCircle:fr,ChevronUpSquare:u0,ChevronsDown:Jg,ChevronsDownUp:Qg,ChevronsLeft:ay,ChevronsLeftRight:ey,ChevronsLeftRightEllipsis:ty,ChevronsRight:iy,ChevronsRightLeft:sy,ChevronsUp:ry,ChevronsUpDown:ny,Chrome:oy,Church:hy,Cigarette:dy,CigaretteOff:cy,Circle:Sy,CircleAlert:er,CircleArrowDown:tr,CircleArrowLeft:ar,CircleArrowOutDownLeft:sr,CircleArrowOutDownRight:or,CircleArrowOutUpLeft:ir,CircleArrowOutUpRight:nr,CircleArrowRight:rr,CircleArrowUp:hr,CircleCheck:dr,CircleCheckBig:cr,CircleChevronDown:lr,CircleChevronLeft:pr,CircleChevronRight:ur,CircleChevronUp:fr,CircleDashed:ly,CircleDivide:mr,CircleDollarSign:py,CircleDot:fy,CircleDotDashed:uy,CircleEllipsis:my,CircleEqual:My,CircleFadingArrowUp:vy,CircleFadingPlus:gy,CircleGauge:Mr,CircleHelp:As,CircleMinus:vr,CircleOff:yy,CircleParking:yr,CircleParkingOff:gr,CirclePause:xr,CirclePercent:wr,CirclePlay:_r,CirclePlus:Sr,CirclePoundSterling:wy,CirclePower:br,CircleQuestionMark:As,CircleSlash:xy,CircleSlash2:Ar,CircleSlashed:Ar,CircleSmall:_y,CircleStop:Er,CircleUser:Tr,CircleUserRound:Cr,CircleX:Lr,CircuitBoard:by,Citrus:Ay,Clapperboard:Ey,Clipboard:Iy,ClipboardCheck:Ty,ClipboardCopy:Cy,ClipboardEdit:kr,ClipboardList:Ly,ClipboardMinus:Vy,ClipboardPaste:ky,ClipboardPen:kr,ClipboardPenLine:Vr,ClipboardPlus:Hy,ClipboardSignature:Vr,ClipboardType:Oy,ClipboardX:Dy,Clock:Jy,Clock1:Py,Clock10:Ny,Clock11:$y,Clock12:Fy,Clock2:Ry,Clock3:By,Clock4:zy,Clock5:Wy,Clock6:qy,Clock7:Zy,Clock8:jy,Clock9:Uy,ClockAlert:Yy,ClockArrowDown:Gy,ClockArrowUp:Ky,ClockFading:Xy,ClockPlus:Qy,Cloud:mw,CloudAlert:tw,CloudCheck:ew,CloudCog:aw,CloudDownload:Hr,CloudDrizzle:sw,CloudFog:iw,CloudHail:nw,CloudLightning:rw,CloudMoon:cw,CloudMoonRain:ow,CloudOff:hw,CloudRain:lw,CloudRainWind:dw,CloudSnow:pw,CloudSun:fw,CloudSunRain:uw,CloudUpload:Or,Cloudy:Mw,Clover:vw,Club:gw,Code:yw,Code2:Dr,CodeSquare:f0,CodeXml:Dr,Codepen:ww,Codesandbox:xw,Coffee:_w,Cog:Sw,Coins:bw,Columns:Ir,Columns2:Ir,Columns3:Pr,Columns3Cog:Es,Columns4:Aw,ColumnsSettings:Es,Combine:Ew,Command:Cw,Compass:Tw,Component:Lw,Computer:Vw,ConciergeBell:kw,Cone:Hw,Construction:Ow,Contact:Dw,Contact2:Nr,ContactRound:Nr,Container:Iw,Contrast:Pw,Cookie:Nw,CookingPot:$w,Copy:qw,CopyCheck:Fw,CopyMinus:zw,CopyPlus:Rw,CopySlash:Bw,CopyX:Ww,Copyleft:Zw,Copyright:Uw,CornerDownLeft:jw,CornerDownRight:Yw,CornerLeftDown:Gw,CornerLeftUp:Kw,CornerRightDown:Xw,CornerRightUp:Qw,CornerUpLeft:Jw,CornerUpRight:tx,Cpu:ex,CreativeCommons:ax,CreditCard:sx,Croissant:ix,Crop:nx,Cross:rx,Crosshair:ox,Crown:hx,Cuboid:cx,CupSoda:dx,CurlyBraces:Fn,Currency:lx,Cylinder:px,Dam:ux,Database:gx,DatabaseBackup:fx,DatabaseZap:mx,DecimalsArrowLeft:Mx,DecimalsArrowRight:vx,Delete:yx,Dessert:wx,Diameter:xx,Diamond:bx,DiamondMinus:Sx,DiamondPercent:$r,DiamondPlus:_x,Dice1:Ax,Dice2:Ex,Dice3:Cx,Dice4:Lx,Dice5:Tx,Dice6:Vx,Dices:kx,Diff:Ox,Disc:Px,Disc2:Hx,Disc3:Dx,DiscAlbum:Ix,Divide:Nx,DivideCircle:mr,DivideSquare:g0,Dna:Fx,DnaOff:$x,Dock:Rx,Dog:zx,DollarSign:Bx,Donut:Wx,DoorClosed:Zx,DoorClosedLocked:qx,DoorOpen:Ux,Dot:jx,DotSquare:y0,Download:Yx,DownloadCloud:Hr,DraftingCompass:Gx,Drama:Kx,Dribbble:Xx,Drill:Qx,Drone:Jx,Droplet:e_,DropletOff:t_,Droplets:s_,Drum:a_,Drumstick:i_,Dumbbell:n_,Ear:r_,EarOff:o_,Earth:Fr,EarthLock:h_,Eclipse:c_,Edit:h1,Edit2:Io,Edit3:Do,Egg:p_,EggFried:d_,EggOff:l_,Ellipsis:zr,EllipsisVertical:Rr,Equal:m_,EqualApproximately:u_,EqualNot:f_,EqualSquare:w0,Eraser:M_,EthernetPort:v_,Euro:g_,Expand:y_,ExternalLink:w_,Eye:S_,EyeClosed:x_,EyeOff:__,Facebook:b_,Factory:A_,Fan:E_,FastForward:C_,Feather:T_,Fence:L_,FerrisWheel:V_,Figma:k_,File:CS,FileArchive:H_,FileAudio:D_,FileAudio2:O_,FileAxis3D:Br,FileAxis3d:Br,FileBadge:P_,FileBadge2:I_,FileBarChart:qr,FileBarChart2:Wr,FileBox:N_,FileChartColumn:Wr,FileChartColumnIncreasing:qr,FileChartLine:Ur,FileChartPie:Zr,FileCheck:F_,FileCheck2:$_,FileClock:R_,FileCode:B_,FileCode2:z_,FileCog:jr,FileCog2:jr,FileDiff:W_,FileDigit:q_,FileDown:Z_,FileEdit:Gr,FileHeart:U_,FileImage:j_,FileInput:Y_,FileJson:K_,FileJson2:G_,FileKey:Q_,FileKey2:X_,FileLineChart:Ur,FileLock:tS,FileLock2:J_,FileMinus:aS,FileMinus2:eS,FileMusic:sS,FileOutput:iS,FilePen:Gr,FilePenLine:Yr,FilePieChart:Zr,FilePlus:rS,FilePlus2:nS,FileQuestion:Kr,FileQuestionMark:Kr,FileScan:oS,FileSearch:cS,FileSearch2:hS,FileSignature:Yr,FileSliders:dS,FileSpreadsheet:lS,FileStack:pS,FileSymlink:uS,FileTerminal:fS,FileText:mS,FileType:vS,FileType2:MS,FileUp:gS,FileUser:wS,FileVideo:xS,FileVideo2:yS,FileVolume:SS,FileVolume2:_S,FileWarning:bS,FileX:ES,FileX2:AS,Files:TS,Film:LS,Filter:to,FilterX:Jr,Fingerprint:VS,FireExtinguisher:kS,Fish:DS,FishOff:HS,FishSymbol:OS,Flag:$S,FlagOff:IS,FlagTriangleLeft:PS,FlagTriangleRight:NS,Flame:RS,FlameKindling:FS,Flashlight:BS,FlashlightOff:zS,FlaskConical:WS,FlaskConicalOff:qS,FlaskRound:ZS,FlipHorizontal:YS,FlipHorizontal2:US,FlipVertical:GS,FlipVertical2:jS,Flower:XS,Flower2:KS,Focus:QS,FoldHorizontal:JS,FoldVertical:tb,Folder:Lb,FolderArchive:eb,FolderCheck:ab,FolderClock:sb,FolderClosed:ib,FolderCode:nb,FolderCog:Xr,FolderCog2:Xr,FolderDot:rb,FolderDown:ob,FolderEdit:Qr,FolderGit:cb,FolderGit2:hb,FolderHeart:db,FolderInput:lb,FolderKanban:pb,FolderKey:ub,FolderLock:fb,FolderMinus:mb,FolderOpen:Mb,FolderOpenDot:vb,FolderOutput:gb,FolderPen:Qr,FolderPlus:yb,FolderRoot:wb,FolderSearch:_b,FolderSearch2:xb,FolderSymlink:Sb,FolderSync:bb,FolderTree:Ab,FolderUp:Eb,FolderX:Cb,Folders:Tb,Footprints:Vb,ForkKnife:rh,ForkKnifeCrossed:nh,Forklift:kb,FormInput:No,Forward:Hb,Frame:Ob,Framer:Db,Frown:Pb,Fuel:Ib,Fullscreen:Nb,FunctionSquare:x0,Funnel:to,FunnelPlus:$b,FunnelX:Jr,GalleryHorizontal:Rb,GalleryHorizontalEnd:Fb,GalleryThumbnails:zb,GalleryVertical:Wb,GalleryVerticalEnd:Bb,Gamepad:Zb,Gamepad2:qb,GanttChart:Xn,GanttChartSquare:Ts,Gauge:Ub,GaugeCircle:Mr,Gavel:jb,Gem:Yb,GeorgianLari:Gb,Ghost:Kb,Gift:Xb,GitBranch:Jb,GitBranchPlus:Qb,GitCommit:eo,GitCommitHorizontal:eo,GitCommitVertical:tA,GitCompare:aA,GitCompareArrows:eA,GitFork:sA,GitGraph:iA,GitMerge:nA,GitPullRequest:lA,GitPullRequestArrow:rA,GitPullRequestClosed:oA,GitPullRequestCreate:cA,GitPullRequestCreateArrow:hA,GitPullRequestDraft:dA,Github:pA,Gitlab:uA,GlassWater:fA,Glasses:mA,Globe:vA,Globe2:Fr,GlobeLock:MA,Goal:gA,Gpu:xA,Grab:yA,GraduationCap:wA,Grape:_A,Grid:Cs,Grid2X2:no,Grid2X2Check:ao,Grid2X2Plus:io,Grid2X2X:so,Grid2x2:no,Grid2x2Check:ao,Grid2x2Plus:io,Grid2x2X:so,Grid3X3:Cs,Grid3x2:SA,Grid3x3:Cs,Grip:AA,GripHorizontal:bA,GripVertical:EA,Group:CA,Guitar:TA,Ham:LA,Hamburger:VA,Hammer:kA,Hand:PA,HandCoins:HA,HandHeart:OA,HandHelping:ro,HandMetal:DA,HandPlatter:IA,Handshake:NA,HardDrive:RA,HardDriveDownload:$A,HardDriveUpload:FA,HardHat:zA,Hash:BA,Haze:WA,HdmiPort:qA,Heading:XA,Heading1:ZA,Heading2:UA,Heading3:YA,Heading4:jA,Heading5:GA,Heading6:KA,HeadphoneOff:QA,Headphones:JA,Headset:tE,Heart:oE,HeartCrack:eE,HeartHandshake:aE,HeartMinus:sE,HeartOff:iE,HeartPlus:nE,HeartPulse:rE,Heater:hE,HelpCircle:As,HelpingHand:ro,Hexagon:cE,Highlighter:dE,History:lE,Home:oo,Hop:uE,HopOff:pE,Hospital:fE,Hotel:mE,Hourglass:ME,House:oo,HousePlug:vE,HousePlus:gE,HouseWifi:yE,IceCream:co,IceCream2:ho,IceCreamBowl:ho,IceCreamCone:co,IdCard:xE,IdCardLanyard:wE,Image:LE,ImageDown:_E,ImageMinus:SE,ImageOff:bE,ImagePlay:AE,ImagePlus:EE,ImageUp:CE,ImageUpscale:TE,Images:VE,Import:kE,Inbox:HE,Indent:po,IndentDecrease:lo,IndentIncrease:po,IndianRupee:OE,Infinity:DE,Info:IE,Inspect:E0,InspectionPanel:PE,Instagram:NE,Italic:$E,IterationCcw:FE,IterationCw:RE,JapaneseYen:zE,Joystick:WE,Kanban:BE,KanbanSquare:S0,KanbanSquareDashed:m0,Key:UE,KeyRound:qE,KeySquare:ZE,Keyboard:GE,KeyboardMusic:jE,KeyboardOff:YE,Lamp:eC,LampCeiling:KE,LampDesk:XE,LampFloor:QE,LampWallDown:JE,LampWallUp:tC,LandPlot:aC,Landmark:sC,Languages:iC,Laptop:rC,Laptop2:uo,LaptopMinimal:uo,LaptopMinimalCheck:nC,Lasso:hC,LassoSelect:oC,Laugh:cC,Layers:fo,Layers2:dC,Layers3:fo,Layout:Oo,LayoutDashboard:lC,LayoutGrid:pC,LayoutList:uC,LayoutPanelLeft:fC,LayoutPanelTop:MC,LayoutTemplate:mC,Leaf:vC,LeafyGreen:gC,Lectern:yC,LetterText:wC,Library:_C,LibraryBig:xC,LibrarySquare:_0,LifeBuoy:SC,Ligature:bC,Lightbulb:EC,LightbulbOff:AC,LineChart:Yn,LineSquiggle:CC,Link:VC,Link2:LC,Link2Off:TC,Linkedin:kC,List:YC,ListCheck:HC,ListChecks:OC,ListCollapse:DC,ListEnd:IC,ListFilter:NC,ListFilterPlus:PC,ListMinus:FC,ListMusic:$C,ListOrdered:RC,ListPlus:zC,ListRestart:BC,ListStart:WC,ListTodo:ZC,ListTree:jC,ListVideo:qC,ListX:UC,Loader:KC,Loader2:mo,LoaderCircle:mo,LoaderPinwheel:GC,Locate:tT,LocateFixed:XC,LocateOff:QC,LocationEdit:JC,Lock:aT,LockKeyhole:eT,LockKeyholeOpen:Mo,LockOpen:vo,LogIn:sT,LogOut:iT,Logs:nT,Lollipop:rT,Luggage:oT,MSquare:b0,Magnet:hT,Mail:MT,MailCheck:cT,MailMinus:dT,MailOpen:lT,MailPlus:pT,MailQuestion:go,MailQuestionMark:go,MailSearch:uT,MailWarning:fT,MailX:mT,Mailbox:vT,Mails:gT,Map:HT,MapPin:LT,MapPinCheck:wT,MapPinCheckInside:yT,MapPinHouse:xT,MapPinMinus:ST,MapPinMinusInside:_T,MapPinOff:bT,MapPinPlus:ET,MapPinPlusInside:AT,MapPinX:TT,MapPinXInside:CT,MapPinned:VT,MapPlus:kT,Mars:DT,MarsStroke:OT,Martini:IT,Maximize:NT,Maximize2:PT,Medal:$T,Megaphone:RT,MegaphoneOff:FT,Meh:zT,MemoryStick:BT,Menu:WT,MenuSquare:A0,Merge:qT,MessageCircle:tL,MessageCircleCode:ZT,MessageCircleDashed:UT,MessageCircleHeart:jT,MessageCircleMore:YT,MessageCircleOff:KT,MessageCirclePlus:GT,MessageCircleQuestion:yo,MessageCircleQuestionMark:yo,MessageCircleReply:XT,MessageCircleWarning:JT,MessageCircleX:QT,MessageSquare:ML,MessageSquareCode:eL,MessageSquareDashed:aL,MessageSquareDiff:sL,MessageSquareDot:iL,MessageSquareHeart:nL,MessageSquareLock:rL,MessageSquareMore:oL,MessageSquareOff:hL,MessageSquarePlus:cL,MessageSquareQuote:dL,MessageSquareReply:lL,MessageSquareShare:pL,MessageSquareText:uL,MessageSquareWarning:fL,MessageSquareX:mL,MessagesSquare:vL,Mic:yL,Mic2:wo,MicOff:gL,MicVocal:wo,Microchip:wL,Microscope:xL,Microwave:_L,Milestone:SL,Milk:AL,MilkOff:bL,Minimize:CL,Minimize2:EL,Minus:TL,MinusCircle:vr,MinusSquare:C0,Monitor:zL,MonitorCheck:LL,MonitorCog:VL,MonitorDot:kL,MonitorDown:HL,MonitorOff:OL,MonitorPause:DL,MonitorPlay:IL,MonitorSmartphone:PL,MonitorSpeaker:FL,MonitorStop:NL,MonitorUp:$L,MonitorX:RL,Moon:WL,MoonStar:BL,MoreHorizontal:zr,MoreVertical:Rr,Mountain:UL,MountainSnow:qL,Mouse:KL,MouseOff:ZL,MousePointer:XL,MousePointer2:jL,MousePointerBan:YL,MousePointerClick:GL,MousePointerSquareDashed:M0,Move:dV,Move3D:xo,Move3d:xo,MoveDiagonal:JL,MoveDiagonal2:QL,MoveDown:aV,MoveDownLeft:tV,MoveDownRight:eV,MoveHorizontal:sV,MoveLeft:iV,MoveRight:nV,MoveUp:hV,MoveUpLeft:rV,MoveUpRight:oV,MoveVertical:cV,Music:fV,Music2:lV,Music3:pV,Music4:uV,Navigation:gV,Navigation2:MV,Navigation2Off:mV,NavigationOff:vV,Network:yV,Newspaper:wV,Nfc:xV,NonBinary:_V,Notebook:EV,NotebookPen:SV,NotebookTabs:AV,NotebookText:bV,NotepadText:TV,NotepadTextDashed:CV,Nut:VV,NutOff:LV,Octagon:HV,OctagonAlert:_o,OctagonMinus:kV,OctagonPause:So,OctagonX:bo,Omega:OV,Option:DV,Orbit:IV,Origami:PV,Outdent:lo,Package:qV,Package2:NV,PackageCheck:$V,PackageMinus:FV,PackageOpen:RV,PackagePlus:zV,PackageSearch:BV,PackageX:WV,PaintBucket:ZV,PaintRoller:UV,Paintbrush:jV,Paintbrush2:Ao,PaintbrushVertical:Ao,Palette:GV,Palmtree:Y0,Panda:YV,PanelBottom:QV,PanelBottomClose:KV,PanelBottomDashed:Eo,PanelBottomInactive:Eo,PanelBottomOpen:XV,PanelLeft:Vo,PanelLeftClose:Co,PanelLeftDashed:To,PanelLeftInactive:To,PanelLeftOpen:Lo,PanelRight:ek,PanelRightClose:JV,PanelRightDashed:ko,PanelRightInactive:ko,PanelRightOpen:tk,PanelTop:ik,PanelTopClose:ak,PanelTopDashed:Ho,PanelTopInactive:Ho,PanelTopOpen:sk,PanelsLeftBottom:nk,PanelsLeftRight:Pr,PanelsRightBottom:rk,PanelsTopBottom:Ro,PanelsTopLeft:Oo,Paperclip:ok,Parentheses:hk,ParkingCircle:yr,ParkingCircleOff:gr,ParkingMeter:ck,ParkingSquare:L0,ParkingSquareOff:T0,PartyPopper:dk,Pause:lk,PauseCircle:xr,PauseOctagon:So,PawPrint:pk,PcCase:uk,Pen:Io,PenBox:h1,PenLine:Do,PenOff:fk,PenSquare:h1,PenTool:mk,Pencil:yk,PencilLine:Mk,PencilOff:vk,PencilRuler:gk,Pentagon:wk,Percent:xk,PercentCircle:wr,PercentDiamond:$r,PercentSquare:V0,PersonStanding:_k,PhilippinePeso:Sk,Phone:Vk,PhoneCall:bk,PhoneForwarded:Ak,PhoneIncoming:Ek,PhoneMissed:Ck,PhoneOff:Tk,PhoneOutgoing:Lk,Pi:kk,PiSquare:k0,Piano:Hk,Pickaxe:Ok,PictureInPicture:Ik,PictureInPicture2:Dk,PieChart:Qn,PiggyBank:Pk,Pilcrow:Fk,PilcrowLeft:Nk,PilcrowRight:$k,PilcrowSquare:H0,Pill:zk,PillBottle:Rk,Pin:Wk,PinOff:Bk,Pipette:qk,Pizza:Zk,Plane:Yk,PlaneLanding:Uk,PlaneTakeoff:jk,Play:Gk,PlayCircle:_r,PlaySquare:D0,Plug:Xk,Plug2:Kk,PlugZap:Po,PlugZap2:Po,Plus:Qk,PlusCircle:Sr,PlusSquare:O0,Pocket:Jk,PocketKnife:tH,Podcast:eH,Pointer:iH,PointerOff:aH,Popcorn:sH,Popsicle:nH,PoundSterling:rH,Power:hH,PowerCircle:br,PowerOff:oH,PowerSquare:I0,Presentation:cH,Printer:lH,PrinterCheck:dH,Projector:pH,Proportions:uH,Puzzle:fH,Pyramid:mH,QrCode:MH,Quote:vH,Rabbit:gH,Radar:yH,Radiation:wH,Radical:xH,Radio:SH,RadioReceiver:_H,RadioTower:bH,Radius:AH,RailSymbol:EH,Rainbow:CH,Rat:TH,Ratio:LH,Receipt:$H,ReceiptCent:VH,ReceiptEuro:kH,ReceiptIndianRupee:HH,ReceiptJapaneseYen:OH,ReceiptPoundSterling:DH,ReceiptRussianRuble:IH,ReceiptSwissFranc:PH,ReceiptText:NH,RectangleCircle:FH,RectangleEllipsis:No,RectangleGoggles:RH,RectangleHorizontal:zH,RectangleVertical:BH,Recycle:WH,Redo:ZH,Redo2:qH,RedoDot:UH,RefreshCcw:YH,RefreshCcwDot:jH,RefreshCw:KH,RefreshCwOff:GH,Refrigerator:XH,Regex:QH,RemoveFormatting:JH,Repeat:aO,Repeat1:tO,Repeat2:eO,Replace:iO,ReplaceAll:sO,Reply:rO,ReplyAll:nO,Rewind:oO,Ribbon:hO,Rocket:cO,RockingChair:dO,RollerCoaster:lO,Rotate3D:$o,Rotate3d:$o,RotateCcw:fO,RotateCcwKey:uO,RotateCcwSquare:pO,RotateCw:MO,RotateCwSquare:mO,Route:gO,RouteOff:vO,Router:yO,Rows:Fo,Rows2:Fo,Rows3:Ro,Rows4:wO,Rss:xO,Ruler:SO,RulerDimensionLine:_O,RussianRuble:bO,Sailboat:AO,Salad:EO,Sandwich:CO,Satellite:LO,SatelliteDish:TO,SaudiRiyal:VO,Save:OO,SaveAll:kO,SaveOff:HO,Scale:DO,Scale3D:zo,Scale3d:zo,Scaling:IO,Scan:BO,ScanBarcode:PO,ScanEye:$O,ScanFace:NO,ScanHeart:FO,ScanLine:RO,ScanQrCode:zO,ScanSearch:WO,ScanText:qO,ScatterChart:Jn,School:ZO,School2:X0,Scissors:UO,ScissorsLineDashed:jO,ScissorsSquare:P0,ScissorsSquareDashedBottom:o0,ScreenShare:KO,ScreenShareOff:YO,Scroll:XO,ScrollText:GO,Search:sD,SearchCheck:QO,SearchCode:JO,SearchSlash:tD,SearchX:eD,Section:aD,Send:nD,SendHorizonal:Bo,SendHorizontal:Bo,SendToBack:iD,SeparatorHorizontal:rD,SeparatorVertical:oD,Server:lD,ServerCog:hD,ServerCrash:cD,ServerOff:dD,Settings:fD,Settings2:pD,Shapes:uD,Share:MD,Share2:mD,Sheet:gD,Shell:vD,Shield:TD,ShieldAlert:yD,ShieldBan:wD,ShieldCheck:xD,ShieldClose:qo,ShieldEllipsis:_D,ShieldHalf:SD,ShieldMinus:bD,ShieldOff:AD,ShieldPlus:ED,ShieldQuestion:Wo,ShieldQuestionMark:Wo,ShieldUser:CD,ShieldX:qo,Ship:VD,ShipWheel:LD,Shirt:kD,ShoppingBag:HD,ShoppingBasket:OD,ShoppingCart:DD,Shovel:ID,ShowerHead:PD,Shredder:ND,Shrimp:$D,Shrink:FD,Shrub:RD,Shuffle:zD,Sidebar:Vo,SidebarClose:Co,SidebarOpen:Lo,Sigma:BD,SigmaSquare:N0,Signal:jD,SignalHigh:WD,SignalLow:qD,SignalMedium:ZD,SignalZero:UD,Signature:YD,Signpost:GD,SignpostBig:KD,Siren:XD,SkipBack:QD,SkipForward:JD,Skull:tI,Slack:eI,Slash:aI,SlashSquare:$0,Slice:sI,Sliders:Zo,SlidersHorizontal:iI,SlidersVertical:Zo,Smartphone:oI,SmartphoneCharging:nI,SmartphoneNfc:rI,Smile:cI,SmilePlus:hI,Snail:dI,Snowflake:lI,SoapDispenserDroplet:pI,Sofa:uI,SortAsc:kn,SortDesc:Tn,Soup:fI,Space:mI,Spade:MI,Sparkle:vI,Sparkles:Uo,Speaker:gI,Speech:yI,SpellCheck:xI,SpellCheck2:wI,Spline:SI,SplinePointer:_I,Split:bI,SplitSquareHorizontal:F0,SplitSquareVertical:R0,Spool:AI,SprayCan:EI,Sprout:CI,Square:II,SquareActivity:jo,SquareArrowDown:Xo,SquareArrowDownLeft:Yo,SquareArrowDownRight:Go,SquareArrowLeft:Ko,SquareArrowOutDownLeft:Qo,SquareArrowOutDownRight:t0,SquareArrowOutUpLeft:Jo,SquareArrowOutUpRight:e0,SquareArrowRight:a0,SquareArrowUp:n0,SquareArrowUpLeft:s0,SquareArrowUpRight:i0,SquareAsterisk:r0,SquareBottomDashedScissors:o0,SquareChartGantt:Ts,SquareCheck:c0,SquareCheckBig:h0,SquareChevronDown:d0,SquareChevronLeft:l0,SquareChevronRight:p0,SquareChevronUp:u0,SquareCode:f0,SquareDashed:v0,SquareDashedBottom:LI,SquareDashedBottomCode:TI,SquareDashedKanban:m0,SquareDashedMousePointer:M0,SquareDashedTopSolid:VI,SquareDivide:g0,SquareDot:y0,SquareEqual:w0,SquareFunction:x0,SquareGanttChart:Ts,SquareKanban:S0,SquareLibrary:_0,SquareM:b0,SquareMenu:A0,SquareMinus:C0,SquareMousePointer:E0,SquareParking:L0,SquareParkingOff:T0,SquarePen:h1,SquarePercent:V0,SquarePi:k0,SquarePilcrow:H0,SquarePlay:D0,SquarePlus:O0,SquarePower:I0,SquareRadical:kI,SquareRoundCorner:HI,SquareScissors:P0,SquareSigma:N0,SquareSlash:$0,SquareSplitHorizontal:F0,SquareSplitVertical:R0,SquareSquare:OI,SquareStack:DI,SquareTerminal:z0,SquareUser:W0,SquareUserRound:B0,SquareX:q0,SquaresExclude:PI,SquaresIntersect:NI,SquaresSubtract:$I,SquaresUnite:FI,Squircle:zI,SquircleDashed:RI,Squirrel:BI,Stamp:WI,Star:UI,StarHalf:qI,StarOff:ZI,Stars:Uo,StepBack:jI,StepForward:YI,Stethoscope:KI,Sticker:GI,StickyNote:XI,StopCircle:Er,Store:QI,StretchHorizontal:JI,StretchVertical:tP,Strikethrough:eP,Subscript:aP,Subtitles:Rn,Sun:oP,SunDim:sP,SunMedium:iP,SunMoon:nP,SunSnow:rP,Sunrise:hP,Sunset:cP,Superscript:dP,SwatchBook:lP,SwissFranc:pP,SwitchCamera:uP,Sword:fP,Swords:mP,Syringe:MP,Table:bP,Table2:vP,TableCellsMerge:gP,TableCellsSplit:yP,TableColumnsSplit:wP,TableConfig:Es,TableOfContents:xP,TableProperties:_P,TableRowsSplit:SP,Tablet:EP,TabletSmartphone:AP,Tablets:CP,Tag:TP,Tags:LP,Tally1:VP,Tally2:kP,Tally3:HP,Tally4:OP,Tally5:DP,Tangent:IP,Target:PP,Telescope:NP,Tent:FP,TentTree:$P,Terminal:RP,TerminalSquare:z0,TestTube:zP,TestTube2:Z0,TestTubeDiagonal:Z0,TestTubes:BP,Text:jP,TextCursor:qP,TextCursorInput:WP,TextQuote:ZP,TextSearch:UP,TextSelect:U0,TextSelection:U0,Theater:KP,Thermometer:XP,ThermometerSnowflake:YP,ThermometerSun:GP,ThumbsDown:QP,ThumbsUp:JP,Ticket:rN,TicketCheck:tN,TicketMinus:eN,TicketPercent:aN,TicketPlus:sN,TicketSlash:iN,TicketX:nN,Tickets:hN,TicketsPlane:oN,Timer:lN,TimerOff:cN,TimerReset:dN,ToggleLeft:pN,ToggleRight:uN,Toilet:fN,ToolCase:MN,Tornado:mN,Torus:vN,Touchpad:yN,TouchpadOff:gN,TowerControl:wN,ToyBrick:xN,Tractor:_N,TrafficCone:SN,Train:j0,TrainFront:AN,TrainFrontTunnel:bN,TrainTrack:EN,TramFront:j0,Transgender:CN,Trash:LN,Trash2:TN,TreeDeciduous:VN,TreePalm:Y0,TreePine:kN,Trees:HN,Trello:ON,TrendingDown:DN,TrendingUp:PN,TrendingUpDown:IN,Triangle:FN,TriangleAlert:G0,TriangleDashed:NN,TriangleRight:$N,Trophy:RN,Truck:zN,TruckElectric:BN,Turtle:WN,Tv:ZN,Tv2:K0,TvMinimal:K0,TvMinimalPlay:qN,Twitch:UN,Twitter:jN,Type:YN,TypeOutline:GN,Umbrella:XN,UmbrellaOff:KN,Underline:QN,Undo:e$,Undo2:JN,UndoDot:t$,UnfoldHorizontal:a$,UnfoldVertical:s$,Ungroup:i$,University:X0,Unlink:r$,Unlink2:n$,Unlock:vo,UnlockKeyhole:Mo,Unplug:o$,Upload:h$,UploadCloud:Or,Usb:c$,User:w$,User2:sh,UserCheck:d$,UserCheck2:Q0,UserCircle:Tr,UserCircle2:Cr,UserCog:p$,UserCog2:J0,UserLock:l$,UserMinus:u$,UserMinus2:th,UserPen:f$,UserPlus:m$,UserPlus2:eh,UserRound:sh,UserRoundCheck:Q0,UserRoundCog:J0,UserRoundMinus:th,UserRoundPen:M$,UserRoundPlus:eh,UserRoundSearch:v$,UserRoundX:ah,UserSearch:g$,UserSquare:W0,UserSquare2:B0,UserX:y$,UserX2:ah,Users:x$,Users2:ih,UsersRound:ih,Utensils:rh,UtensilsCrossed:nh,UtilityPole:_$,Variable:b$,Vault:S$,VectorSquare:A$,Vegan:E$,VenetianMask:C$,Venus:L$,VenusAndMars:T$,Verified:Dn,Vibrate:k$,VibrateOff:V$,Video:O$,VideoOff:H$,Videotape:D$,View:I$,Voicemail:P$,Volleyball:N$,Volume:B$,Volume1:$$,Volume2:F$,VolumeOff:R$,VolumeX:z$,Vote:W$,Wallet:Z$,Wallet2:oh,WalletCards:q$,WalletMinimal:oh,Wallpaper:U$,Wand:j$,Wand2:hh,WandSparkles:hh,Warehouse:Y$,WashingMachine:G$,Watch:K$,Waves:Q$,WavesLadder:X$,Waypoints:J$,Webcam:tF,Webhook:aF,WebhookOff:eF,Weight:sF,Wheat:nF,WheatOff:iF,WholeWord:rF,Wifi:uF,WifiCog:oF,WifiHigh:hF,WifiLow:cF,WifiOff:dF,WifiPen:lF,WifiZero:pF,Wind:mF,WindArrowDown:fF,Wine:vF,WineOff:MF,Workflow:gF,Worm:yF,WrapText:wF,Wrench:xF,X:_F,XCircle:Lr,XOctagon:bo,XSquare:q0,Youtube:SF,Zap:bF,ZapOff:AF,ZoomIn:EF,ZoomOut:CF},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=({icons:a={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(a).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${t}]`);if(Array.from(s).forEach(i=>Sn(i,{nameAttr:t,icons:a,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(n=>Sn(n,{nameAttr:"icon-name",icons:a,attrs:e})))}};window.bootstrap=q5;window.TomSelect=J;window.TempusDominus=bc;window.luxon=Y8;window.barba=z1;Ge({icons:Ye});function Dd(){const a=document.getElementById("toggleSidebar"),t=document.getElementById("sidebar"),e=document.getElementById("mainContent"),s=document.getElementById("close-sidebar");a&&t&&e&&a.addEventListener("click",function(){console.log("clicked"),t.classList.contains("show")?(t.classList.remove("show"),e.classList.add("full")):(t.classList.add("show"),e.classList.remove("full"))}),s&&t&&e&&s.addEventListener("click",function(){t.classList.contains("show")?(t.classList.remove("show"),e.classList.add("full")):(t.classList.add("show"),e.classList.remove("full"))}),document.querySelectorAll(".btn-loading").forEach(n=>{n.addEventListener("click",function(){const r=n.getAttribute("data-label")||"Loading...";n.type==="submit"?requestAnimationFrame(()=>{n.innerHTML='<i data-lucide="loader" class="lucide-sm me-1 spin"></i> Loading...',n.disabled=!0,Ge({icons:Ye})}):(n.innerHTML='<i data-lucide="loader" class="lucide-sm me-1 spin"></i> Loading...',n.disabled=!0,Ge({icons:Ye}),setTimeout(()=>{n.innerHTML=`<i data-lucide="send" class="lucide-sm me-1"></i> ${r}`,n.disabled=!1,Ge({icons:Ye})},2e3))})}),document.querySelectorAll("#sidebar .nav-link.active").forEach(n=>{n.classList.remove("active")});const i=window.location.pathname;document.querySelectorAll("#sidebar .collapse").forEach(n=>{n.classList.remove("show")}),document.querySelectorAll("#sidebar .nav-link.active").forEach(n=>{n.classList.remove("active"),n.classList.contains("collapsed")&&n.classList.add("collapsed")}),document.querySelectorAll("#sidebar .nav-link[href]").forEach(n=>{const r=n.getAttribute("href");if(!r||r.startsWith("#")||r.startsWith("javascript"))return;const o=new URL(r,window.location.origin).pathname;if(i===o||i.startsWith(o+"/")){n.classList.add("active");const h=n.closest(".collapse");if(h){h.classList.add("show");const c=document.querySelector(`[href="#${h.id}"]`);c&&(c.classList.remove("collapsed"),c.classList.add("active"))}}}),document.querySelectorAll(".tom-select-ajax").forEach(function(n){const r=new J(n,{valueField:"id",labelField:"text",searchField:"text",loadThrottle:300,load:function(o,h){const c=window.location.origin,d=n.dataset.url;fetch(`${c}/${d}?q=${encodeURIComponent(o)}`).then(l=>l.json()).then(l=>h(l.items)).catch(()=>h())},render:{no_results:function(o,h){return'<div class="no-results text-muted">Hasil tidak ditemukan</div>'}}});r.load(""),r.on("dropdown_open",function(){this.options.length===0&&this.load("")})}),document.querySelectorAll(".tom-select").forEach(function(n){new J(n,{valueField:"id",labelField:"text",searchField:"text"})}),document.querySelectorAll(".datepicker").forEach(n=>{new bc(n,{display:{icons:{time:"bi bi-clock",date:"bi bi-calendar",up:"bi bi-chevron-up",down:"bi bi-chevron-down",previous:"bi bi-chevron-left",next:"bi bi-chevron-right",today:"bi bi-calendar-check",clear:"bi bi-trash",close:"bi bi-x-lg"},buttons:{today:!0,clear:!0,close:!0},components:{calendar:!0,date:!0,month:!0,year:!0,decades:!0,clock:!1,hours:!1,minutes:!1,seconds:!1}},localization:{locale:"id",startOfTheWeek:1,format:"dd/MM/yyyy",today:"Hari ini",clear:"Bersihkan",close:"Tutup",selectDate:"Pilih tanggal",selectMonth:"Pilih bulan",selectYear:"Pilih tahun",nextMonth:"Bulan berikutnya",previousMonth:"Bulan sebelumnya"}})})}function Id(a){if(!a)return;const t=Object.assign({"./pages/crud.js":()=>Fe(()=>import("../assets/crud-Br-OAAYy.js"),[]),"./pages/izin-akses.js":()=>Fe(()=>import("../assets/izin-akses-BBbkJyVC.js"),[]),"./pages/login.js":()=>Fe(()=>import("../assets/login-Djt498TG.js"),[]),"./pages/profile.js":()=>Fe(()=>import("../assets/profile-Dn-AwAox.js"),[]),"./pages/users-form.js":()=>Fe(()=>import("../assets/users-form-CIb6_Z8u.js"),[])}),e=`./pages/${a}.js`;t[e]?t[e]().then(s=>{typeof s.init=="function"&&s.init()}).catch(s=>{console.error(`Gagal memuat modul: ${e}`,s)}):console.warn(`Module "${e}" tidak ditemukan`)}z1.init({prevent:({el:a})=>a.hasAttribute("data-barba-prevent")||a.classList.contains("no-barba"),transitions:[{name:"loading-transition",async leave(a){document.getElementById("barba-loader").classList.remove("d-none"),document.getElementById("barba-loader").classList.add("d-flex"),await new Promise(t=>setTimeout(t,200))},async enter(a){document.getElementById("barba-loader").classList.remove("d-flex"),document.getElementById("barba-loader").classList.add("d-none")},async once(a){document.getElementById("barba-loader").classList.add("d-none")}}]});function Pd(a="form[data-barba-submit]"){document.querySelectorAll(a).forEach(e=>{e.dataset.barbaBound!=="true"&&(e.dataset.barbaBound="true",e.addEventListener("submit",function(s){if((e.getAttribute("method")?.toUpperCase()||"GET")!=="GET")return;s.preventDefault();const n=new FormData(e),r=new URLSearchParams(n).toString();let o=e.getAttribute("action")||window.location.href;o=o.split("?")[0];const h=`${o}?${r}`;z1.go(h)}))})}document.addEventListener("click",function(a){const t=a.target.closest("a");if(!t)return;const e=t.getAttribute("href");if(!e||t.hasAttribute("target")||t.hasAttribute("data-barba-prevent")||e.startsWith("javascript")||e==="#")return;if(e.startsWith("#")){const r=document.querySelector(e);r&&(a.preventDefault(),r.scrollIntoView({behavior:"smooth"}));return}const s=new URL(t.href,window.location.origin),i=window.location.pathname+window.location.search,n=s.pathname+s.search;i===n&&a.preventDefault()});z1.hooks.after(a=>{const t=a.next.container;if(!t)return;const e=t.dataset.js;Dd(),Pd(),Id(e),Ge({icons:Ye})});document.getElementById("refresh-page")?.addEventListener("click",function(a){window.location.reload(!0)});Dd();Pd();Id(document.getElementById("content").dataset.js);Ge({icons:Ye});export{Ge as c,Ye as i};
