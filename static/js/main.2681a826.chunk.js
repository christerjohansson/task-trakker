(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(12),s=n.n(a),i=(n(19),n(10)),o=n(14),u=n(5),l=n.n(u),j=n(7),d=n(4),p=n(6),b=n(2),h=n(1),f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};f.defaultProps={color:"steelblue"};var O=f,x=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(b.e)();return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),"/"===c.pathname&&Object(h.jsx)(O,{color:r?"red":"green",text:r?"St\xe4ng":"L\xe4gg till uppgift",onClick:n})]})};x.defaultProps={title:"Task Trakker"};var m=x,g=function(){var e=Object(b.e)();return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"Copyright \xa9 2021 Christer Johansson of Sweden"}),"/"===e.pathname&&Object(h.jsx)(p.b,{to:"/about",children:"About this application"})]})},v=n(13),k=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text," ",Object(h.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:n})]}),Object(h.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(k,{task:e,onDelete:function(){return n(e.id)},onToggle:r},e.id)}))})},w=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],l=o[1],j=Object(r.useState)(!1),p=Object(d.a)(j,2),b=p[0],f=p[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:b}),s(""),l(""),f(!1)):alert("V\xe4nligen l\xe4gg till en uppgift")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Uppgift"}),Object(h.jsx)("input",{type:"text",placeholder:"L\xe4gg till uppgift",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Dag & Tid"}),Object(h.jsx)("input",{type:"text",placeholder:"Dag & Tid",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"P\xe5minnelse?"}),Object(h.jsx)("input",{type:"checkbox",checked:b,value:b,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{type:"submit",value:"Spara uppgift",className:"btn btn-block"})]})},C=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0.1"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem adipisci molestiae alias voluptatum repellendus saepe quas. Nihil consequatur quam deserunt. Iusto praesentium recusandae nostrum saepe! Cumque architecto incidunt, consectetur rem in eligendi quas. Facilis minima illum natus pariatur culpa incidunt iusto quos veritatis aliquam libero quia, fugit, molestiae amet."}),Object(h.jsx)(p.b,{to:"/",children:"Back to main page"})]})},T=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],f=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var O=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(o.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks/".concat(t),{method:"DELETE"});case 2:f(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5001/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,f(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(p.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m,{title:"Task Trakker",onAdd:function(){return c(!n)},showAdd:n}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,render:!0,element:Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)(w,{onAdd:v}),u.length>0?Object(h.jsx)(y,{tasks:u,onDelete:k,onToggle:T}):"Inga uppgifter att visa"]})}),Object(h.jsx)(b.a,{path:"/about",element:Object(h.jsx)(C,{})})]}),Object(h.jsx)(g,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),S()}},[[22,1,2]]]);
//# sourceMappingURL=main.2681a826.chunk.js.map