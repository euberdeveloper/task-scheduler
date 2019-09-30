var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function i(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let m;function g(t){m=t}const $=[],k=[],w=[],y=[],v=Promise.resolve();let b=!1;function x(t){w.push(t)}function _(){const t=new Set;do{for(;$.length;){const t=$.shift();g(t),D(t.$$)}for(;k.length;)k.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];t.has(n)||(n(),t.add(n))}w.length=0}while($.length);for(;y.length;)y.pop()();b=!1}function D(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(x))}const M=new Set;let O;function q(t,e){t&&t.i&&(M.delete(t),t.i(e))}function E(t,e,o){const{fragment:c,on_mount:u,on_destroy:l,after_update:f}=t.$$;c.m(e,o),x(()=>{const e=u.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(x)}function j(t,e){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function T(t,e){t.$$.dirty||($.push(t),b||(b=!0,v.then(_)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function A(e,n,s,c,u,l){const f=m;g(e);const a=n.props||{},i=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:null};let h=!1;var d;i.ctx=s?s(e,a,(t,n,o=n)=>(i.ctx&&u(i.ctx[t],i.ctx[t]=o)&&(i.bound[t]&&i.bound[t](o),h&&T(e,t)),n)):a,i.update(),h=!0,r(i.before_update),i.fragment=c(i.ctx),n.target&&(n.hydrate?i.fragment.l((d=n.target,Array.from(d.childNodes))):i.fragment.c(),n.intro&&q(e.$$.fragment),E(e,n.target,n.anchor),_()),g(f)}class H{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function N(t,e){const n=new Date(t);return n.setDate(t.getDate()+7*e),n}function B(t){const e=new Date(t);return e.setDate(t.getDate()-1),e}function C(t){const e=t.getDay();let n=new Date;for(;n.getDay()!==e;)n=B(n);return n.setHours(0,0,0,0),n}function S(t,e,n){const o=Object.create(t);return o.turn=e[n],o}function z(t,e,n){const o=Object.create(t);return o.week=e[n],o}function G(t,e,n){const o=Object.create(t);return o.header=e[n],o}function I(e){var n,o,r=e.header+"";return{c(){n=i("th"),o=h(r),p(n,"scope","col"),p(n,"class","th svelte-qkouml")},m(t,e){l(t,n,e),u(n,o)},p:t,d(t){t&&f(n)}}}function J(e){var n,o,r=e.turn+"";return{c(){n=i("td"),o=h(r),p(n,"class",(e.week.done?"done":"")+" "+(e.week.current?"current":"")+" svelte-qkouml")},m(t,e){l(t,n,e),u(n,o)},p:t,d(t){t&&f(n)}}}function K(t){var e,n,o,r,s,c=t.week.week+"";let m=t.week.turns,g=[];for(let e=0;e<m.length;e+=1)g[e]=J(S(t,m,e));return{c(){e=i("tr"),n=i("th"),o=h(c),r=d();for(let t=0;t<g.length;t+=1)g[t].c();s=d(),p(n,"scope","row"),p(n,"class","th "+(t.week.done?"done":"")+"\r\n        "+(t.week.current?"current":"")+" svelte-qkouml"),p(e,"class","svelte-qkouml")},m(t,c){l(t,e,c),u(e,n),u(n,o),u(e,r);for(let t=0;t<g.length;t+=1)g[t].m(e,null);u(e,s)},p(t,n){if(t.weeks){let o;for(m=n.week.turns,o=0;o<m.length;o+=1){const r=S(n,m,o);g[o]?g[o].p(t,r):(g[o]=J(r),g[o].c(),g[o].m(e,s))}for(;o<g.length;o+=1)g[o].d(1);g.length=m.length}},d(t){t&&f(e),a(g,t)}}}function L(e){var n,o,r,s,c;let h=e.weeks.headers,m=[];for(let t=0;t<h.length;t+=1)m[t]=I(G(e,h,t));let g=e.weeks.weeks,$=[];for(let t=0;t<g.length;t+=1)$[t]=K(z(e,g,t));return{c(){n=i("table"),o=i("thead"),r=i("td"),s=d();for(let t=0;t<m.length;t+=1)m[t].c();c=d();for(let t=0;t<$.length;t+=1)$[t].c();p(r,"class","th svelte-qkouml"),p(o,"class","svelte-qkouml"),p(n,"class","svelte-qkouml")},m(t,e){l(t,n,e),u(n,o),u(o,r),u(o,s);for(let t=0;t<m.length;t+=1)m[t].m(o,null);u(n,c);for(let t=0;t<$.length;t+=1)$[t].m(n,null)},p(t,e){if(t.weeks){let n;for(h=e.weeks.headers,n=0;n<h.length;n+=1){const r=G(e,h,n);m[n]?m[n].p(t,r):(m[n]=I(r),m[n].c(),m[n].m(o,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=h.length}if(t.weeks){let o;for(g=e.weeks.weeks,o=0;o<g.length;o+=1){const r=z(e,g,o);$[o]?$[o].p(t,r):($[o]=K(r),$[o].c(),$[o].m(n,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=g.length}},i:t,o:t,d(t){t&&f(n),a(m,t),a($,t)}}}function P(t,e,n){let{persons:o,tasks:r,from:s,howMany:c}=e;const u=function(t,e){e.setHours(0,0,0,0);const n={};return t.forEach((t,o)=>{0===o&&(n.headers=Object.keys(t),n.weeks=[]),n.weeks.push({done:C(e).getTime()>N(e,o).getTime(),current:C(e).getTime()===N(e,o).getTime(),week:N(e,o).toLocaleDateString("it"),turns:n.headers.map(e=>t[e])})}),n}(function(t,e,n){const o=[],r=t.length;for(let s=0;s<n;s++){const n={};t.forEach((t,o)=>{n[t]=e[(s+o)%r]}),o.push(n)}return o}(o,r,c),s);return t.$set=(t=>{"persons"in t&&n("persons",o=t.persons),"tasks"in t&&n("tasks",r=t.tasks),"from"in t&&n("from",s=t.from),"howMany"in t&&n("howMany",c=t.howMany)}),{persons:o,tasks:r,from:s,howMany:c,weeks:u}}class R extends H{constructor(t){super(),A(this,t,P,L,c,["persons","tasks","from","howMany"])}}var F={persons:["MARIO","JOHN","MOHAMMED","CHENG"],tasks:["Kitchen","Bathroom","Bedroom","Trash"],from:"2019-07-29",howMany:30};function Q(t){var n,o,r=[t.props];let s={};for(var c=0;c<r.length;c+=1)s=e(s,r[c]);var u=new R({props:s});return{c(){n=i("div"),u.$$.fragment.c(),p(n,"class","content svelte-80679z")},m(t,e){l(t,n,e),E(u,n,null),o=!0},p(t,e){var n,o=t.props?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=e[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(n[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(n=e.props,"object"==typeof n&&null!==n?n:{})]):{};u.$set(o)},i(t){o||(q(u.$$.fragment,t),o=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),O.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(u.$$.fragment,t),o=!1},d(t){t&&f(n),j(u)}}}function U(t){return F.from=new Date(F.from),{props:F}}return new class extends H{constructor(t){super(),A(this,t,U,Q,c,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map