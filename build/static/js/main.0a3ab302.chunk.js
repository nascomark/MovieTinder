(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(e,t){},274:function(e,t,n){e.exports=n(605)},282:function(e,t,n){},284:function(e,t,n){},605:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),c=n(22),l=n(30),s=n(257),u=n(608),h=(n(282),n(42)),m=n(43),d=n(45),p=n(44),f=n(46),g=n(611),v=n(606),b=n(612),E=(n(284),n(259)),y=n.n(E),O=n(260),C=n.n(O),w=n(58),j=n.n(w),T=n(49),S=n.n(T),M=n(188),k=n.n(M),R=n(103),N=n.n(R),x=n(187),L=n.n(x),A=n(32),I=n(191),U=n.n(I),F=n(189),_=n.n(F),H=n(190),D=n.n(H),z=n(261),P=n.n(z),B=n(36),J=n.n(B),W=n(39),X=n(185),q=n.n(X),V=n(258),G=n(115),$=n.n(G),K="https://movietinde.herokuapp.com",Q=function(e){return{type:"AUTH_SUCCES",login:e}},Y=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={password:"",password2:"",email:"",addUser:!1,login:""},n.handleChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(W.a)({},a,t))},n.handleAddUser=function(){n.setState({addUser:!n.state.addUser})},n.submitHandler=function(e){e.preventDefault(),n.state.addUser?n.state.password===n.state.password2?(n.props.addUser(n.state.login,n.state.password,n.state.email),n.setState({addUser:!1})):alert("Password don`t match!"):n.props.onAuth(n.state.login,n.state.password)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=[o.a.createElement($.a,{key:"input1",name:"password2",onChange:this.handleChange,type:"password",placeholder:"Powt\xf3rz has\u0142o",required:!0}),o.a.createElement($.a,{key:"input2",name:"email",onChange:this.handleChange,type:"email",placeholder:"Email",required:!0})];return o.a.createElement("div",{className:e.paper},o.a.createElement("form",{onSubmit:this.submitHandler,className:e.formCenter},o.a.createElement($.a,{name:"login",onChange:this.handleChange,placeholder:"Login",required:!0}),o.a.createElement($.a,{name:"password",onChange:this.handleChange,type:"password",placeholder:"Password",required:!0}),this.state.addUser?t:null,o.a.createElement("div",{className:e.buttonCenter},o.a.createElement(J.a,{type:"submit"},"Submit"))),this.state.addUser?null:o.a.createElement("div",{className:e.buttonCenter},o.a.createElement(J.a,{onClick:this.handleAddUser},"Register")),o.a.createElement("div",{className:e.buttonCenter},o.a.createElement(J.a,{onClick:this.props.showHandle},"Cancel")))}}]),t}(a.Component),Z=Object(l.b)(function(e){return{userIn:e.root.userLogged}},function(e){return{onAuth:function(t,n){return e(function(e,t){return function(n){n({type:"AUTH_START"}),fetch("".concat(K,"/api/auth/login"),{method:"POST",body:JSON.stringify({login:e,password:t}),headers:{"Content-Type":"application/json"}}).then(function(){n(Q(e))}).catch(function(e){alert(e)})}}(t,n))},logOff:function(){return e({type:"LOG_OFF"})},addUser:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"}),fetch("".concat(K,"/api/auth/register"),{method:"POST",body:JSON.stringify({login:e,password:t,email:n}),headers:{"Content-Type":"application/json"}}).then(function(){a(Q(e))}).catch(function(e){alert(e)})}}(t,n,a))}}})(Object(A.withStyles)(function(e){return{paper:Object(W.a)({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit},e.breakpoints.up("sm"),{width:35*e.spacing.unit}),buttonCenter:{width:"100%",display:"flex",justifyContent:"center"},formCenter:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",margin:e.spacing.unit}}})(Y)),ee=Object(l.b)(function(e){return{userIn:e.root.userLogged}})(Object(A.withStyles)(V.styles)(function(e){var t=Boolean(!e.userIn);return o.a.createElement(q.a,{"aria-labelledby":"login-modal-title","aria-describedby":"login-modal-description",open:t,onClose:e.showHandle},o.a.createElement(Z,{showHandle:e.showHandle}))})),te=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null,mobileMoreAnchorEl:null,schowLog:!1},n.handleLogin=function(){n.setState({schowLog:!n.state.schowLog}),n.handleMenuClose()},n.handleLogOff=function(){n.props.logOff(),n.setState({schowLog:!1}),n.handleMenuClose()},n.handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n.handleAddMovie=function(){n.props.history.push("/add-movie"),n.handleMenuClose()},n.handleFavorite=function(){n.props.history.push("/favorite"),n.handleMenuClose()},n.handleMovieTinder=function(){n.props.history.push("/"),n.handleMenuClose()},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,n=e.mobileMoreAnchorEl,a=this.props.classes,r=Boolean(t),i=Boolean(n),c=o.a.createElement(L.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},this.props.userIn?o.a.createElement(N.a,{onClick:this.handleLogOff},"LogOff"):o.a.createElement(N.a,{onClick:this.handleLogin},"Login")),l=o.a.createElement(L.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMobileMenuClose},o.a.createElement(N.a,null,o.a.createElement(j.a,{color:"inherit",onClick:this.handleFavorite},o.a.createElement(k.a,{badgeContent:this.props.favoriteCount,color:"secondary"},o.a.createElement(_.a,null))),o.a.createElement("p",null,"My Favorit")),o.a.createElement(N.a,{onClick:this.handleAddMovie},o.a.createElement(j.a,{color:"inherit"},o.a.createElement(D.a,null)),o.a.createElement("p",null,"Add movie")),o.a.createElement(N.a,{onClick:this.handleProfileMenuOpen},o.a.createElement(j.a,{color:"inherit"},o.a.createElement(U.a,null)),o.a.createElement("p",null,"Profile")));return o.a.createElement("div",{className:a.root},o.a.createElement(y.a,{position:"fixed"},o.a.createElement(C.a,null,o.a.createElement(S.a,{className:a.title,variant:"h6",color:"inherit",noWrap:!0},o.a.createElement(J.a,{onClick:this.handleMovieTinder,color:"inherit"},"Movie Tinder")),o.a.createElement("div",{className:a.grow}),this.state.schowLog?o.a.createElement(ee,{handleLogOff:this.handleLogOff,show:this.state.schowLog,showHandle:this.handleLogin}):null,o.a.createElement("div",{className:a.sectionDesktop},o.a.createElement(j.a,{color:"inherit",onClick:this.handleFavorite},o.a.createElement(k.a,{badgeContent:this.props.favoriteCount,color:"secondary"},o.a.createElement(_.a,null))),o.a.createElement(j.a,{color:"inherit",onClick:this.handleAddMovie},o.a.createElement(D.a,null)),o.a.createElement(j.a,{"aria-owns":r?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},o.a.createElement(U.a,null))),o.a.createElement("div",{className:a.sectionMobile},o.a.createElement(j.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(P.a,null))))),c,l)}}]),t}(o.a.Component),ne=Object(l.b)(function(e){return{userIn:e.root.userLogged,favoriteCount:e.root.favoriteCount}},function(e){return{logOff:function(){return e({type:"LOG_OFF"})}}})(Object(A.withStyles)(function(e){return{root:{width:"100%",marginBottom:"60px"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:{display:"block",width:"100%",textAlign:"center"},sectionDesktop:Object(W.a)({display:"none"},e.breakpoints.up("sm"),{display:"flex"}),sectionMobile:Object(W.a)({display:"flex",marginRight:10},e.breakpoints.up("sm"),{display:"none"})}})(Object(b.a)(te))),ae=n(78),oe=n.n(ae),re=n(139),ie=n.n(re),ce=n(138),le=n.n(ce),se=Object(A.withStyles)(function(e){return{root:{width:"100%"},movie:{width:"100%",display:"flex",flexDirection:"column"},img:{width:"100%",maxHeight:"50vh"}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement("h3",null,e.movie.title,o.a.createElement("span",null," (".concat(e.movie.rating,")"))),o.a.createElement("div",{className:t.movie},o.a.createElement("img",{src:e.movie.imageURL,alt:e.movie.title,className:t.img}),o.a.createElement("p",null,e.movie.summary)))}),ue=function(e){return{root:Object(W.a)({width:"100%",minHeight:"85vh",margin:"0",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},e.breakpoints.up("sm"),{maxWidth:"1024px",margin:"0 auto"}),movie:Object(W.a)({width:"100%",display:"flex",flexWrap:"wrap",margin:"0"},e.breakpoints.up("sm"),{width:"80%",margin:"0 auto"}),buttons:{width:"100%",display:"flex",justifyContent:"space-around"},button:{margin:2*e.spacing.unit},leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},marginTop:{marginTop:"100px"}}},he=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={movies:null,movieToRender:null,counter:0,touchStart:null,touchCurrent:null},n.handleReject=function(){n.fetchMovieStstus("Rejected"),n.changeMovie()},n.handleAccept=function(){n.fetchMovieStstus("Accepted"),n.props.updateCount(n.props.favoriteCount+1),n.changeMovie()},n.changeMovie=function(){var e=n.state.counter+1,t=n.state.movies[e];n.setState({movieToRender:t,counter:e})},n.handleTouchStart=function(e){n.setState({touchStart:e.targetTouches[0].clientX})},n.hanldeTouchMove=function(e){n.setState({touchCurrent:e.targetTouches[0].clientX})},n.handleTouchEnd=function(){n.state.touchStart-n.state.touchCurrent>100&&n.handleReject()},n.fetchMovieStstus=function(e){n.props.userIn&&fetch("".concat(K,"/api/movie/status"),{method:"POST",body:JSON.stringify({title:n.state.movieToRender.title,user:n.props.userIn,status:e}),headers:{"Content-Type":"application/json"}}).catch(function(e){alert(e)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(K,"/api/movie/").concat(this.props.userIn)).then(function(e){return e.json()}).then(function(t){e.props.setCount(),e.setState({movies:t,movieToRender:t[0]})}).catch(function(e){alert("Network error")})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(oe.a,{className:e.root,elevation:4},o.a.createElement("div",{className:e.movie,onTouchStart:this.handleTouchStart,onTouchMove:this.hanldeTouchMove,onTouchEnd:this.handleTouchEnd},this.state.movieToRender?o.a.createElement(se,{movie:this.state.movieToRender}):o.a.createElement(S.a,{variant:"h3",className:e.marginTop},"No more movies in database."),o.a.createElement("div",{className:e.buttons},o.a.createElement(J.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.handleAccept},o.a.createElement(le.a,{className:e.leftIcon}),"Accept"),o.a.createElement(J.a,{variant:"outlined",color:"secondary",className:e.button,onClick:this.handleReject},"Reject",o.a.createElement(ie.a,{className:e.rightIcon})))))}}]),t}(a.Component),me=Object(l.b)(function(e){return{userIn:e.root.userLogged,favoriteCount:e.root.favoriteCount}},function(e){return{setCount:function(){return e(function(e){fetch("".concat(K,"/api/movie/status")).then(function(e){return e.json()}).then(function(t){e({type:"SET_FAVORITE",count:t.length})}).catch(function(e){alert(e)})})},updateCount:function(t){return e(function(e){return{type:"ADD_FAVORITE",newCount:e}}(t))}}})(Object(A.withStyles)(ue)(he)),de=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={movies:null,movieToRender:null,counter:0,touchStart:null,touchCurrent:null},n.handleReject=function(){n.changeMovie()},n.handleAccept=function(){n.changeMovie()},n.changeMovie=function(){var e=n.state.counter+1,t=n.state.movies[e];n.setState({movieToRender:t,counter:e})},n.handleTouchStart=function(e){n.setState({touchStart:e.targetTouches[0].clientX})},n.hanldeTouchMove=function(e){n.setState({touchCurrent:e.targetTouches[0].clientX})},n.handleTouchEnd=function(){n.state.touchStart-n.state.touchCurrent>100&&n.changeMovie()},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(K,"/api/movie")).then(function(e){return e.json()}).then(function(t){e.setState({movies:t,movieToRender:t[0]})}).catch(function(e){alert("Network error")})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(oe.a,{className:e.root,elevation:4},o.a.createElement("div",{className:e.movie,onTouchStart:this.handleTouchStart,onTouchMove:this.hanldeTouchMove,onTouchEnd:this.handleTouchEnd},this.state.movieToRender?o.a.createElement(se,{movie:this.state.movieToRender}):o.a.createElement(S.a,{variant:"h3"},"No more movies in database."),o.a.createElement("div",{className:e.buttons},o.a.createElement(J.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.handleAccept},o.a.createElement(le.a,{className:e.leftIcon}),"Accept"),o.a.createElement(J.a,{variant:"outlined",color:"secondary",className:e.button,onClick:this.handleReject},"Reject",o.a.createElement(ie.a,{className:e.rightIcon})))))}}]),t}(a.Component),pe=Object(A.withStyles)(ue)(de),fe=n(192),ge=n.n(fe),ve=n(264),be=n(186),Ee=n.n(be),ye=n(265),Oe=n.n(ye),Ce=n(609),we=n(607),je=n(116),Te=Object(we.a)({form:"AddMovieForm",validate:function(e){var t={};return["title","imageURL","summary","rating"].forEach(function(n){e[n]||(t[n]="Required")}),e.imageURL&&!/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e.imageURL)&&(t.imageURL="Invalid image URL address"),t}})(Object(A.withStyles)(function(e){return{form:{width:"250px",margin:"20px auto",padding:"20px",backgroundColor:"#eeeeee",borderRadius:"5px"}}})(function(e){var t=e.handleSubmit,n=e.pristine,a=e.reset,r=e.submitting,i=e.classes;return o.a.createElement("div",{className:i.form},o.a.createElement("form",{onSubmit:t},o.a.createElement(Ce.a,{name:"title",component:je.TextField,label:"Title",hintText:"Title"}),o.a.createElement(Ce.a,{name:"imageURL",component:je.TextField,label:"Image URL",hintText:"Image URL"}),o.a.createElement(Ce.a,{name:"summary",component:je.TextField,label:"Summary",hintText:"Summary"}),o.a.createElement(Ce.a,{name:"rating",component:je.TextField,label:"Rating",hintText:"Rating"}),o.a.createElement(J.a,{style:{marginRight:"20px"},type:"submit",disabled:n||r,variant:"outlined",color:"primary"},"Submit"),o.a.createElement(J.a,{type:"button",disabled:n||r,variant:"outlined",color:"secondary",onClick:a},"Reset")))})),Se=function(e){return o.a.createElement(Oe.a,{muiTheme:Ee()()},o.a.createElement(Te,{onSubmit:function(e){fetch("".concat(K,"/api/movie"),{method:"POST",body:JSON.stringify({title:e.title,imageURL:e.imageURL,summary:e.summary,rating:e.rating}),headers:{"Content-Type":"application/json"}}).then(function(e){if(e.ok)return e;!function(){var t=Object(ve.a)(ge.a.mark(function t(){var n;return ge.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:n=t.sent,alert(n.message);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()()}).then(function(e){return e.json()}).then(function(e){alert(e.message)}).catch(function(e){alert("Network error!")})}}))},Me=n(268),ke=n.n(Me),Re=n(271),Ne=n.n(Re),xe=n(269),Le=n.n(xe),Ae=n(270),Ie=n.n(Ae),Ue=n(272),Fe=n.n(Ue),_e=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={favoriteMovies:null},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.userIn&&fetch("".concat(K,"/api/movie/favorite/").concat(this.props.userIn)).then(function(e){return e.json()}).then(function(t){e.setState({favoriteMovies:t})}).catch(function(e){return alert("Network error! ".concat(e))})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},this.props.userIn?null:o.a.createElement(S.a,{variant:"h2",className:e.marginTop},"LogIn to use all futures."),this.state.favoriteMovies?this.state.favoriteMovies.map(function(t){return o.a.createElement(ke.a,null,o.a.createElement(Le.a,{expandIcon:o.a.createElement(Ie.a,null)},o.a.createElement("div",{className:e.column},o.a.createElement(S.a,{className:e.heading},t.title)),o.a.createElement("div",{className:e.column},o.a.createElement(S.a,{className:e.secondaryHeading},"Rating ".concat(t.rating)))),o.a.createElement(Ne.a,{className:e.details},o.a.createElement(S.a,null,t.summary)),o.a.createElement(Fe.a,null))}):null)}}]),t}(a.Component),He=Object(l.b)(function(e){return{userIn:e.root.userLogged}})(Object(A.withStyles)(function(e){return{root:Object(W.a)({width:"100%"},e.breakpoints.up("sm"),{maxWidth:"1024px",margin:"0 auto"}),heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},details:{width:"100%",padding:"15px"},column:{flexBasis:"50%"},marginTop:{marginTop:"100px"}}})(_e)),De=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ne,null),o.a.createElement(g.a,null,o.a.createElement(v.a,{path:"/add-movie",component:Se}),o.a.createElement(v.a,{path:"/favorite",component:He}),o.a.createElement(v.a,{path:"/",component:this.props.userIn?me:pe})))}}]),t}(a.Component),ze=Object(b.a)(Object(l.b)(function(e){return{userIn:e.root.userLogged}})(De));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=n(117),Be={userLogged:"",favoriteCount:0},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCES":return Object(Pe.a)({},e,{userLogged:t.login});case"LOG_OFF":return Object(Pe.a)({},e,{userLogged:"",favoriteCount:0});case"SET_FAVORITE":return Object(Pe.a)({},e,{favoriteCount:t.count});case"ADD_FAVORITE":return Object(Pe.a)({},e,{favoriteCount:t.newCount})}return e},We=n(610),Xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,qe={root:Je,form:We.a},Ve=Object(c.c)(qe),Ge=Object(c.e)(Ve,Xe(Object(c.a)(s.a))),$e=o.a.createElement(l.a,{store:Ge},o.a.createElement(u.a,null,o.a.createElement(ze,null)));i.a.render($e,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[274,2,1]]]);
//# sourceMappingURL=main.0a3ab302.chunk.js.map