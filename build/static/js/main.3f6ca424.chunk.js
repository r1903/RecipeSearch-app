(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(20),i=a.n(r),s=(a(28),a(8)),o=a(5),l=a(6),p=a.n(l),m=a(10),u=a(11),h=a(13),f=a(12),d=a(14),v=(a(30),function(e){return n.a.createElement("form",{onSubmit:e.getRecipe,className:"form"},n.a.createElement("input",{type:"text",name:"recipe",placeholder:"Recipe Name..."}),n.a.createElement("button",null,"Submit"))}),b=function(e){return n.a.createElement("div",{className:"recipe"},e.state.recipes.length<=0&&n.a.createElement("p",null,e.state.err),e.state.recipes.map((function(e){return n.a.createElement("div",{key:e.recipe.url},n.a.createElement("img",{src:e.recipe.image,alt:e.recipe.label}),n.a.createElement("p",null,e.recipe.label.length>20?"".concat(e.recipe.label.substring(0,25),"..."):e.recipe.label),n.a.createElement("button",null,n.a.createElement(s.b,{to:{pathname:"/recipe/".concat(e.recipe.label)}},"View Recipe")))})))},g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[],err:""},a.getRecipe=function(e){var t,c,n;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.target.elements.recipe.value,e.preventDefault(),!t){r.next=13;break}return r.next=5,p.a.awrap(fetch("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("60dcf578","&app_key=").concat("de19ea2f757850b1349733d11fd9a87c","&from=0&to=10")));case 5:return c=r.sent,r.next=8,p.a.awrap(c.json());case 8:n=r.sent,console.log(n),n.hits.length>1?a.setState({recipes:n.hits,err:""}):a.setState({recipes:[],err:"Recepies with this name does not exist"}),r.next=14;break;case 13:a.setState({recipes:[],err:"Please enter the Recipe name"});case 14:case"end":return r.stop()}}))},a.componentDidMount=function(){var e=localStorage.getItem("recipes"),t=JSON.parse(e);a.setState({recipes:t||[]})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",{className:"header"},"Recipe search"),n.a.createElement(v,{getRecipe:this.getRecipe}),n.a.createElement(b,{state:this.state}))}}]),t}(n.a.Component),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={activeRecipe:[]},a.componentDidMount=function(){var e,t,c;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.props.match.params.id,console.log(e),n.next=4,p.a.awrap(fetch("https://api.edamam.com/search?q=".concat(e,"&app_id=").concat("60dcf578","&app_key=").concat("de19ea2f757850b1349733d11fd9a87c")));case 4:return t=n.sent,n.next=7,p.a.awrap(t.json());case 7:c=n.sent,a.setState({activeRecipe:c.hits[0]}),console.log(a.state.activeRecipe.recipe.image);case 10:case"end":return n.stop()}}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.state.activeRecipe),n.a.createElement("div",null,0!==this.state.activeRecipe.length&&n.a.createElement("div",{className:"recipePage"},n.a.createElement("img",{src:this.state.activeRecipe.recipe.image,alt:this.state.activeRecipe.recipe.label}),n.a.createElement("h3",null,this.state.activeRecipe.recipe.label),n.a.createElement("p",null,n.a.createElement("span",{className:"textdecoration"},"Website: ")," ",n.a.createElement("a",{href:this.state.activeRecipe.recipe.url,target:"_blank"},this.state.activeRecipe.recipe.url)),n.a.createElement("button",null,n.a.createElement(s.b,{to:"/"},"Go To Homepage"))))}}]),t}(n.a.Component),w=function(e){return n.a.createElement(s.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",exact:!0,component:g}),n.a.createElement(o.a,{path:"/recipe/:id",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3f6ca424.chunk.js.map