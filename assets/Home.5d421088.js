import{_ as h,f as m,u as y,g as i,h as e,o,c as a,a as _,w as F,i as r,t as l,j as g,N as x,F as I,k as L,r as b,e as d,l as k}from"./app.5b33da1e.js";const A={key:0,class:"home-hero"},B={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=m({setup(v){const{site:s,frontmatter:t}=y(),c=i(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),p=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(c)?(o(),a("header",A,[e(t).heroImage?(o(),a("figure",B,[_("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,C)])):r("",!0),e(p)?(o(),a("h1",N,l(e(p)),1)):r("",!0),e(f)?(o(),a("p",w,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var D=h(V,[["__scopeId","data-v-5d8b683d"]]);const S={key:0,class:"home-features"},j={class:"wrapper"},E={class:"container"},q={class:"features"},z={key:0,class:"title"},G={key:1,class:"details"},J=m({setup(v){const{frontmatter:s}=y(),t=i(()=>s.value.features&&s.value.features.length>0),c=i(()=>s.value.features?s.value.features:[]);return(p,f)=>e(t)?(o(),a("div",S,[_("div",j,[_("div",E,[_("div",q,[(o(!0),a(I,null,L(e(c),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",z,l(n.title),1)):r("",!0),n.details?(o(),a("p",G,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var K=h(J,[["__scopeId","data-v-245bde66"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=m({setup(v){const{frontmatter:s}=y();return(t,c)=>e(s).footer?(o(),a("footer",M,[_("div",O,[_("p",P,l(e(s).footer),1)])])):r("",!0)}});var R=h(Q,[["__scopeId","data-v-bff49316"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=m({setup(v){return(s,t)=>{const c=b("Content");return o(),a("main",U,[d(D),k(s.$slots,"hero",{},void 0,!0),d(K),_("div",W,[d(c)]),k(s.$slots,"features",{},void 0,!0),d(R),k(s.$slots,"footer",{},void 0,!0)])}}});var Z=h(X,[["__scopeId","data-v-8382b818"]]);export{Z as default};
