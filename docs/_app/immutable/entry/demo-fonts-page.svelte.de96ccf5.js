import{S as te,i as le,s as se,k as b,a as P,q as M,Q as ve,l as z,h as m,c as x,m as S,r as A,n as g,p as W,K as i,b as O,X as ge,L as Z,u as G,Y as Ee,M as ee,N as ce,o as be,a9 as X,g as U,v as ue,f as de,d as Y,R as pe,aa as ze,y as he,z as me,A as ye,B as _e}from"../chunks/index.54e5cb82.js";import"../chunks/transform.4d2927c0.js";import{b as ke}from"../chunks/paths.7a3b7479.js";import{g as Ce}from"../chunks/group.08115ad3.js";function Se(l,e){return l==null||e==null?NaN:e<l?-1:e>l?1:e>=l?0:NaN}const Te=async l=>{if("clipboard"in navigator)await navigator.clipboard.writeText(l);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=l,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},Le=(l,e)=>{async function n(){if(c)try{await Te(c),l.dispatchEvent(new CustomEvent("svelte-copy",{detail:c}))}catch(o){l.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:o}))}}let t=typeof e=="string"?["click"]:[e.events].flat(1),c=typeof e=="string"?e:e.text;return t.forEach(o=>{l.addEventListener(o,n,!0)}),{update:o=>{const v=typeof o=="string"?["click"]:[o.events].flat(1),E=typeof o=="string"?o:o.text,_=v.filter(p=>!t.includes(p)),s=t.filter(p=>!v.includes(p));_.forEach(p=>{l.addEventListener(p,n,!0)}),s.forEach(p=>{l.removeEventListener(p,n,!0)}),t=v,c=E},destroy:()=>{t.forEach(o=>{l.removeEventListener(o,n,!0)})}}};function we(l){let e,n,t,c,o,v,E,_,s,p,a,r,d,T,L,j,D,I,q,w,B,N,R,K;return{c(){e=b("link"),n=P(),t=b("div"),c=b("h3"),o=M(l[0]),v=P(),E=b("p"),_=M(l[1]),s=P(),p=b("details"),a=b("summary"),r=M("CSS Snippet"),d=P(),T=b("code"),L=M(l[2]),j=P(),D=b("p"),I=b("button"),q=M("Copy CSS to Clipboard"),B=b("span"),N=M(l[3]),this.h()},l(C){const k=ve("svelte-1uevrx3",document.head);e=z(k,"LINK",{rel:!0,href:!0}),k.forEach(m),n=x(C),t=z(C,"DIV",{style:!0,class:!0});var u=S(t);c=z(u,"H3",{class:!0});var Q=S(c);o=A(Q,l[0]),Q.forEach(m),v=x(u),E=z(u,"P",{});var f=S(E);_=A(f,l[1]),f.forEach(m),s=x(u),p=z(u,"DETAILS",{class:!0});var h=S(p);a=z(h,"SUMMARY",{class:!0});var y=S(a);r=A(y,"CSS Snippet"),y.forEach(m),d=x(h),T=z(h,"CODE",{class:!0});var H=S(T);L=A(H,l[2]),H.forEach(m),h.forEach(m),j=x(u),D=z(u,"P",{});var V=S(D);I=z(V,"BUTTON",{class:!0});var F=S(I);q=A(F,"Copy CSS to Clipboard"),F.forEach(m),B=z(V,"SPAN",{class:!0});var J=S(B);N=A(J,l[3]),J.forEach(m),V.forEach(m),u.forEach(m),this.h()},h(){g(e,"rel","external stylesheet"),g(e,"href",l[5]),g(c,"class","svelte-19ry7n"),W(E,"font-size",l[4]),g(a,"class","svelte-19ry7n"),g(T,"class","svelte-19ry7n"),g(p,"class","svelte-19ry7n"),g(I,"class","svelte-19ry7n"),g(B,"class","svelte-19ry7n"),W(t,"font-family","'"+l[0]+"'"),g(t,"class","svelte-19ry7n")},m(C,k){i(document.head,e),O(C,n,k),O(C,t,k),i(t,c),i(c,o),i(t,v),i(t,E),i(E,_),i(t,s),i(t,p),i(p,a),i(a,r),i(p,d),i(p,T),i(T,L),i(t,j),i(t,D),i(D,I),i(I,q),i(D,B),i(B,N),R||(K=[ge(w=Le.call(null,I,l[2])),Z(I,"svelte-copy",l[6])],R=!0)},p(C,[k]){k&1&&G(o,C[0]),k&2&&G(_,C[1]),k&16&&W(E,"font-size",C[4]),k&4&&G(L,C[2]),w&&Ee(w.update)&&k&4&&w.update.call(null,C[2]),k&8&&G(N,C[3]),k&1&&W(t,"font-family","'"+C[0]+"'")},i:ee,o:ee,d(C){m(e),C&&m(n),C&&m(t),R=!1,ce(K)}}}function De(l,e,n){let t,{id:c=""}=e,{family:o=""}=e,{size:v=16}=e,{text:E}=e,_="",s="";const p=`${ke}/assets/demo/fonts/${c}.css`,a=()=>{n(3,s="Copied!"),setTimeout(()=>{n(3,s="")},1e3)};return be(async()=>{const r=await fetch(p);n(2,_=await r.text())}),l.$$set=r=>{"id"in r&&n(7,c=r.id),"family"in r&&n(0,o=r.family),"size"in r&&n(8,v=r.size),"text"in r&&n(1,E=r.text)},l.$$.update=()=>{l.$$.dirty&256&&n(4,t=`${v}px`)},[o,E,_,s,t,p,a,c,v]}class Ne extends te{constructor(e){super(),le(this,e,De,we,se,{id:7,family:0,size:8,text:1})}}const Pe=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function ae(l,e,n){const t=l.slice();return t[5]=e[n][0],t[6]=e[n][1],t}function ie(l,e,n){const t=l.slice();return t[9]=e[n].family,t[10]=e[n].id,t}function re(l){let e,n;return e=new Ne({props:{id:l[10],family:l[9],size:l[0],text:l[1]}}),{c(){he(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,c){ye(e,t,c),n=!0},p(t,c){const o={};c&1&&(o.size=t[0]),c&2&&(o.text=t[1]),e.$set(o)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){_e(e,t)}}}function fe(l){let e,n=l[5]+"",t,c,o,v,E,_=l[6],s=[];for(let a=0;a<_.length;a+=1)s[a]=re(ie(l,_,a));const p=a=>Y(s[a],1,1,()=>{s[a]=null});return{c(){e=b("h2"),t=M(n),c=P(),o=b("section");for(let a=0;a<s.length;a+=1)s[a].c();v=P(),this.h()},l(a){e=z(a,"H2",{});var r=S(e);t=A(r,n),r.forEach(m),c=x(a),o=z(a,"SECTION",{class:!0});var d=S(o);for(let T=0;T<s.length;T+=1)s[T].l(d);v=x(d),d.forEach(m),this.h()},h(){g(o,"class","svelte-1lzc8ku")},m(a,r){O(a,e,r),i(e,t),O(a,c,r),O(a,o,r);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(o,null);i(o,v),E=!0},p(a,r){if(r&7){_=a[6];let d;for(d=0;d<_.length;d+=1){const T=ie(a,_,d);s[d]?(s[d].p(T,r),U(s[d],1)):(s[d]=re(T),s[d].c(),U(s[d],1),s[d].m(o,v))}for(ue(),d=_.length;d<s.length;d+=1)p(d);de()}},i(a){if(!E){for(let r=0;r<_.length;r+=1)U(s[r]);E=!0}},o(a){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)Y(s[r]);E=!1},d(a){a&&m(e),a&&m(c),a&&m(o),pe(s,a)}}}function Me(l){let e,n,t,c,o,v,E,_,s,p,a,r,d,T,L,j,D,I,q,w,B,N,R,K,C,k=l[2],u=[];for(let f=0;f<k.length;f+=1)u[f]=fe(ae(l,k,f));const Q=f=>Y(u[f],1,1,()=>{u[f]=null});return{c(){e=b("div"),n=b("h1"),t=M("Hosted Fonts on The Pudding"),c=P(),o=b("p"),v=b("em"),E=M("Do not use fonts hosted by The Pudding without written permission."),_=P(),s=b("form"),p=b("label"),a=M("font-size: "),r=M(l[0]),d=M("px"),T=P(),L=b("input"),j=P(),D=b("label"),I=M("text sample"),q=P(),w=b("input"),B=P(),N=b("article");for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=z(f,"DIV",{id:!0,class:!0});var h=S(e);n=z(h,"H1",{});var y=S(n);t=A(y,"Hosted Fonts on The Pudding"),y.forEach(m),c=x(h),o=z(h,"P",{});var H=S(o);v=z(H,"EM",{});var V=S(v);E=A(V,"Do not use fonts hosted by The Pudding without written permission."),V.forEach(m),H.forEach(m),_=x(h),s=z(h,"FORM",{});var F=S(s);p=z(F,"LABEL",{for:!0,class:!0});var J=S(p);a=A(J,"font-size: "),r=A(J,l[0]),d=A(J,"px"),J.forEach(m),T=x(F),L=z(F,"INPUT",{id:!0,type:!0,min:!0,max:!0}),j=x(F),D=z(F,"LABEL",{for:!0,class:!0});var ne=S(D);I=A(ne,"text sample"),ne.forEach(m),q=x(F),w=z(F,"INPUT",{id:!0,type:!0,maxlength:!0}),F.forEach(m),h.forEach(m),B=x(f),N=z(f,"ARTICLE",{class:!0});var oe=S(N);for(let $=0;$<u.length;$+=1)u[$].l(oe);oe.forEach(m),this.h()},h(){g(p,"for","size"),g(p,"class","svelte-1lzc8ku"),g(L,"id","size"),g(L,"type","range"),g(L,"min","12"),g(L,"max","48"),g(D,"for","text"),g(D,"class","svelte-1lzc8ku"),g(w,"id","text"),g(w,"type","text"),g(w,"maxlength","100"),g(e,"id","info"),g(e,"class","svelte-1lzc8ku"),g(N,"class","svelte-1lzc8ku")},m(f,h){O(f,e,h),i(e,n),i(n,t),i(e,c),i(e,o),i(o,v),i(v,E),i(e,_),i(e,s),i(s,p),i(p,a),i(p,r),i(p,d),i(s,T),i(s,L),X(L,l[0]),i(s,j),i(s,D),i(D,I),i(s,q),i(s,w),X(w,l[1]),O(f,B,h),O(f,N,h);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(N,null);R=!0,K||(C=[Z(L,"change",l[3]),Z(L,"input",l[3]),Z(w,"input",l[4])],K=!0)},p(f,[h]){if((!R||h&1)&&G(r,f[0]),h&1&&X(L,f[0]),h&2&&w.value!==f[1]&&X(w,f[1]),h&7){k=f[2];let y;for(y=0;y<k.length;y+=1){const H=ae(f,k,y);u[y]?(u[y].p(H,h),U(u[y],1)):(u[y]=fe(H),u[y].c(),U(u[y],1),u[y].m(N,null))}for(ue(),y=k.length;y<u.length;y+=1)Q(y);de()}},i(f){if(!R){for(let h=0;h<k.length;h+=1)U(u[h]);R=!0}},o(f){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)Y(u[h]);R=!1},d(f){f&&m(e),f&&m(B),f&&m(N),pe(u,f),K=!1,ce(C)}}}function xe(l,e,n){let t=18,c="The quick brown fox jumps over the lazy dog.";const o=Ce(Pe,_=>_.type);o.sort((_,s)=>Se(_[1].length,s[1].length));function v(){t=ze(this.value),n(0,t)}function E(){c=this.value,n(1,c)}return[t,c,o,v,E]}class Ae extends te{constructor(e){super(),le(this,e,xe,Me,se,{})}}function Ie(l){let e,n;return e=new Ae({}),{c(){he(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,c){ye(e,t,c),n=!0},p:ee,i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){_e(e,t)}}}class Oe extends te{constructor(e){super(),le(this,e,null,Ie,se,{})}}export{Oe as default};