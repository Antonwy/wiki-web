(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/search-icon.2e32fbcb.svg"},27:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},36:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(23),r=a.n(c),s=(a(33),a(5)),o=a(7),l=a(10),u=a(8),h=a(11),d=a(12),p=(a(36),a(65)),m=a(14),f=a.n(m),b={format:"json",origin:"*"},g=function e(t){var a=this;Object(s.a)(this,e),this.url="https://en.wikipedia.org/w/api.php",this.getArticle=function(){return new Promise(function(e,t){f.a.get(a.url,{params:Object(d.a)({},b,{action:"query",prop:"extracts",redirects:!0,exintro:!0,titles:a.searchParam})}).then(function(t){try{var n=t.data.query.pages,i=n[Object.keys(n)[0]];a.pageid=i.pageid,a.title=i.title,e(i)}catch(c){console.log(c)}}).catch(function(e){t(e)})})},this.getImageSource=function(){return new Promise(function(e,t){f.a.get(a.url,{params:Object(d.a)({},b,{action:"query",titles:a.title,prop:"pageimages",pithumbsize:2e3})}).then(function(t){var n="",i=t.data.query.pages;n="undefined"==typeof i[a.pageid]?"":"thumbnail"in i[a.pageid]?i[a.pageid].thumbnail.source:"",e(n)})})},this.getFullArticle=function(){return new Promise(function(e,t){a.getArticle().then(function(t){a.article=t,a.getImageSource().then(function(t){a.source=t,e({title:a.article.title,desc:a.article.extract,pageid:a.article.pageid,source:a.source})})})})},this.getArticleList=function(){return new Promise(function(e,t){f.a.get(a.url,{params:Object(d.a)({},b,{action:"opensearch",search:a.searchParam})}).then(function(t){for(var a=t.data,n=[],i=0;i<t.data[1].length;i++)n.push({name:a[1][i],desc:a[2][i],link:a[3][i]});e(n)}).catch(function(e){t(e)})})},this.searchParam=t},v=a(3),y=v.a.div({visible:{staggerChildren:250},hidden:{}}),w=v.a.div({visible:{staggerChildren:250},hidden:{}}),j=v.a.h1({visible:{opacity:1,x:0},hidden:{opacity:0,x:-100}}),E=v.a.p({visible:{opacity:1,x:0},hidden:{opacity:0,x:-100}}),O=v.a.div({visible:{x:0},hidden:{x:"110%"}}),C=v.a.h1({visible:{opacity:1,y:0,scale:1},hidden:{opacity:0,y:-100,scale:.5}}),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={article:{title:"",desc:"",source:void 0},animate:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;new g(this.props.match.params.search).getFullArticle().then(function(t){e.setState({article:Object(d.a)({},t)},function(){e.setState({animate:!0})})})}},{key:"render",value:function(){var e=this.state,t=e.article,a=e.animate;return console.log(t),i.a.createElement(y,{pose:a?"visible":"hidden",className:"article"},i.a.createElement(C,{className:"bigTitle"},t.title),i.a.createElement(w,{className:"articleTxt"},i.a.createElement(j,null,t.title),i.a.createElement(E,{dangerouslySetInnerHTML:{__html:t.desc}})),i.a.createElement(O,{className:"articleImg",style:{backgroundImage:"url(".concat(t.source,")")}}))}}]),t}(i.a.Component),x=Object(p.a)(k),S=a(64),I=a(63),N=a(26),A=a.n(N),T=v.a.div({visible:{width:"100vw",height:"15vw",y:"35vh",x:0,borderRadius:0,transition:{duration:500}},hidden:{width:"15vw",height:"15vw",y:"35vh",x:"42.5vw",borderRadius:"50%",transition:{duration:500}},top:{x:0,y:0,height:100}}),F=function(e){var t=e.handleChange,a=e.submitInput,n=e.focused,c=e.handleChangeFocus,r=e.top,s=n?"visible":"hidden";return n&&!r?s="visible":n&&r&&(s="top"),i.a.createElement("form",{className:"searchField",onSubmit:a},i.a.createElement(T,{pose:s,className:"searchContainer",onClick:c(!0)},n?i.a.createElement("input",{onChange:t,type:"text",placeholder:"Search The Free Encyclopedia...",autoFocus:!0}):i.a.createElement("img",{alt:"search",src:A.a})))},P=(a(60),v.a.div({visible:{opacity:1,y:0,scale:1},hidden:{opacity:0,y:100,transition:{duration:250},scale:.5},clicked:{width:"100vw",height:"100vh",borderRadius:0,position:"fixed",top:0,margin:"0px 0px",flip:!0,transition:{duration:250,ease:"easeInOut"}}})),L=v.a.h1({visible:{opacity:1},hidden:{opacity:0}}),D=v.a.p({visible:{opacity:1},hidden:{opacity:0}}),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={clicked:!1,showTxt:!0},a.handleClick=function(){a.setState({showTxt:!1}),setTimeout(function(){a.setState({clicked:!0},function(){setTimeout(function(){a.props.history.push("/articles/".concat(a.props.item.name))},250)})},250)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.className,n=this.state,c=n.clicked,r=n.showTxt;return i.a.createElement(P,{pose:c?"clicked":"",onClick:this.handleClick,className:a},i.a.createElement(L,{pose:r?"visible":"hidden"},t.name),i.a.createElement(D,{pose:r?"visible":"hidden"},t.desc))}}]),t}(n.Component),R=Object(p.a)(q),M=v.a.div({visible:{staggerChildren:100},hidden:{}}),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={searchInput:"",fetchedData:!1,articleList:[],animateChildren:!1,focused:!1},a.submitInput=function(e){e.preventDefault(),a.setState({animateChildren:!1});var t=a.state.searchInput;new g(t).getArticleList(t).then(function(e){a.setState({logoVisible:!1,articleList:e}),setTimeout(function(){a.setState({animateChildren:!0})},500)})},a.handleChange=function(e){a.setState({searchInput:e.target.value})},a.handleChangeFocus=function(e){return function(){a.setState({focused:e})}},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({logoVisible:!0})}},{key:"render",value:function(){var e=this.state,t=e.articleList,a=e.animateChildren,n=e.focused,c=e.searchInput;return i.a.createElement("div",{className:"homePage"},i.a.createElement(F,{value:c,top:a,focused:n,handleChangeFocus:this.handleChangeFocus,submitInput:this.submitInput,handleChange:this.handleChange}),i.a.createElement(M,{pose:a&&n?"visible":"hidden",className:"searchResults"},t.map(function(e,t){return i.a.createElement(R,{item:e,className:"itemContainer",key:t},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,e.desc))})))}}]),t}(n.Component),V=Object(p.a)(J),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={hasError:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Something went wrong."):i.a.createElement(S.a,{basename:"/wiki-web/#/"},i.a.createElement("div",null,i.a.createElement(I.a,{exact:!0,path:"/",component:V}),i.a.createElement(I.a,{path:"/articles/:search",component:x})))}}]),t}(n.Component);r.a.render(i.a.createElement(_,null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.bbd74415.chunk.js.map