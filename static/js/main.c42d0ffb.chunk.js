(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n.n(c),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),u=n(7),l=n(6),d=(n(14),n(15),n(16),function(e){var t=e.monster,n=t.name,c=t.id,r=t.email;return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{src:"https://robohash.org/".concat(c,"?set=set2&size=180x180"),alt:""}),Object(s.jsx)("h1",{children:n}),Object(s.jsx)("p",{children:r})]})}),j=function(e){var t=e.monsters;return Object(s.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(s.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.handleChange,n=e.placeholder;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){return console.error(e)}))},e.onChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{className:"heading",children:"Monsters Rolodex"}),Object(s.jsx)(m,{placeholder:"search monsters",handleChange:this.onChange}),Object(s.jsx)(j,{monsters:c})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.c42d0ffb.chunk.js.map