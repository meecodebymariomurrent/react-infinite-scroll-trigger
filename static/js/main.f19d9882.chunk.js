(this["webpackJsonpreact-infinite-scroll-trigger-example"]=this["webpackJsonpreact-infinite-scroll-trigger-example"]||[]).push([[0],{10:function(e,r,n){"use strict";n.r(r);var t=n(0),o=n.n(t),a=n(2),i=n.n(a),l=n(4),c=n(3);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var u=function(){return o.a.createElement("i",null,"Loading...")},s=function(){return o.a.createElement("i",null,"No more data.")},m=function(e){var r=e.loadMore,n=e.renderLoading,t=void 0===n?u:n,a=e.renderNoMoreData,i=void 0===a?s:a,l=e.inViewConfig,m=void 0===l?{}:l,d=e.reloadDelayMs,f=void 0===d?100:d,g=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["loadMore","renderLoading","renderNoMoreData","inViewConfig","reloadDelayMs"]),h=Object(c.a)(m),y=h[0],b=h[1],v=o.a.useRef(!1),p=o.a.useRef(!0),E=o.a.useRef(!1),S=o.a.useState(!1),x=S[0],M=S[1],R=o.a.useRef((function(){try{var e=function(){if(v.current&&p.current&&!E.current){var e=function(){var e;p.current||M(!0),E.current=!1,(e=f,new Promise((function(r){return setTimeout(r,e)}))).then(R.current)};console.debug("InfiniteScrollTrigger - loading..."),E.current=!0;var n=function(e,r){try{var n=e()}catch(t){return r(t)}return n&&n.then?n.then(void 0,r):n}((function(){return Promise.resolve(r()).then((function(e){p.current=e}))}),(function(e){console.error("InfiniteScrollTrigger caught error - "+e.message),p.current=!1}));return n&&n.then?n.then(e):e()}console.debug("InfiniteScrollTrigger - no more loading.",{isVisibleRef:v.current,hasMoreRef:p.current,isLoadingRef:E.current})}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(n){return Promise.reject(n)}}));return o.a.useEffect((function(){v.current=b,b&&R.current()}),[b]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",Object.assign({ref:y},g)),t&&!x&&o.a.createElement(t,null),i&&x&&o.a.createElement(i,null))},d=()=>{var e=o.a.useState([]),r=Object(l.a)(e,2),n=r[0],t=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Records loaded = ",n.length),o.a.createElement("div",{style:{border:"1px solid magenta",height:"400px",overflow:"auto"}},n.map(e=>o.a.createElement("div",{key:e,style:{border:"1px solid blue",height:"50px"}},e)),o.a.createElement(m,{loadMore:()=>new Promise(e=>{setTimeout(()=>{t(r=>{var n=[...r,"Element_".concat(r.length+1),"Element_".concat(r.length+2),"Element_".concat(r.length+3)];return e(n.length<=14),n}),e()},1500)}),style:{height:"130px",marginTop:"-130px",background:"rgba(0,255,0,0.2)"}})))};i.a.render(o.a.createElement(d,null),document.getElementById("root"))},5:function(e,r,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.f19d9882.chunk.js.map