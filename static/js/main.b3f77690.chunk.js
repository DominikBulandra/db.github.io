(this.webpackJsonpmoja=this.webpackJsonpmoja||[]).push([[0],{117:function(e,t,n){e.exports=n.p+"static/media/cv.a17757a0.jpeg"},201:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(20),l=n.n(s),r=(n(84),n(14)),i=n.n(r),c=n(25),u=n(5),p=n(6),m=n(8),h=n(7),d=n(3),f=n(9),g=(n(86),n(87),n(40),n(22)),v=n(24),b=(n(88),n(48)),y=n.n(b),E=n(71),O=n.n(E),j=(n(100),y.a.initializeApp({apiKey:"AIzaSyCxsv4y868zkAL-d13UqdeiaKs7MRSGpK8",authDomain:"dominiksite-2841e.firebaseapp.com",databaseURL:"https://dominiksite-2841e.firebaseio.com",projectId:"dominiksite-2841e",storageBucket:"dominiksite-2841e.appspot.com",messagingSenderId:"844680785618",appId:"1:844680785618:web:6b61ee1c1fb0bc57a6870b",measurementId:"G-074D69LJ96"})),w=O.a.createClass(j.database()),k=(y.a.database(),j.storage()),S=j.database().ref().child("posts"),x=(k.ref().child("images"),function(e){return{type:"FETCH_POSTS_SUCCESS",posts:e}}),C=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"getAllStatImages",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=n(11),N=n(73),D=!1,I=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(){window.scrollY,D||(window.requestAnimationFrame((function(){console.log(n.navRef.current.style.top);getComputedStyle(n.navRef.current);D=!1})),D=!0)},n.navRef=o.a.createRef(),n.state={email:"",password:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;console.log(this.props.images);return o.a.createElement(N.Spring,{from:{opacity:0,marginTop:-500},to:{opacity:1,marginTop:0},config:{duration:1e3}},(function(t){return o.a.createElement("div",{style:t},"      ",o.a.createElement("div",{ref:e.navRef,className:"container",style:{backgroundColor:e.props.color,position:"relative",maxWidth:"100%"}},o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-12 "},o.a.createElement("h1",{style:{marginTop:"50px",marginBottom:"50px"}},e.props.title),o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-12 col-xs-6 col-md-6"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.props.text}})),o.a.createElement("div",{class:"col-12 .col-xs-6 col-md-6"},e.props.images.map((function(e,t){return o.a.createElement("div",{className:"col"},e[0]==this.props.id&&o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:e[1],className:"images"})))}),e))))))))}))}}]),t}(a.Component),A={getAllStatPostsImages:C},U=Object(P.b)((function(e){return{images:e.allposts.statPostImages}}),A)(I),T=!1,R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(){window.scrollY,T||(window.requestAnimationFrame((function(){console.log(n.navRef.current.style);getComputedStyle(n.navRef.current);T=!1})),T=!0)},n.navRef=o.a.createRef(),n.onLog=n.onLog.bind(Object(d.a)(n)),n.handleScroll=n.handleScroll.bind(Object(d.a)(n)),n.state={data:["1","2"],posts:[],posts2:[],ref2:[],licznik:1},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"ref2",value:function(e){this.setState({ref2:e})}},{key:"licznik",value:function(e){this.setState({licznik:e})}},{key:"componentDidMount",value:function(){var e=this;this.props.posts2&&this.props.posts2.forEach((function(t){e.onAction(t.id)}))}},{key:"componentDidUpdate",value:function(){console.log(this.props.posts)}},{key:"componentWillUnmount",value:function(){}},{key:"onAction",value:function(e){var t=[];k.ref("/images/"+e).list().then((function(e){console.log(e.items),e.items.forEach((function(e){e.getDownloadURL().then((function(e){return console.log("adres obrazka",e),t.push(e),e})),console.log(e)}))})).catch((function(e){})),this.ref2(t),console.log("aktualny",this.state.ref2)}},{key:"onLog",value:function(){console.log(this.props.posts)}},{key:"render",value:function(){var e;this.props.posts;return console.log(this.props.images),null==this.props.posts2?o.a.createElement("li",{className:"list-group-item list-group-item-action"},"\u0141adowanie.."):(e=this.props.posts2.map((function(e,t){return o.a.createElement(U,{key:e.id,id:e.id,title:e.title,text:e.text,color:e.color})}),this),o.a.createElement("div",null,e,o.a.createElement("ul",{className:"list-group"})))}}]),t}(a.Component),L={postsFetched:x,getAllStatPostsImages:C},W=Object(P.b)((function(e){return{posts2:e.allposts.statPostState,posts:e.posts,images:e.allposts.statPostImages}}),L)(R),F=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"CV"),o.a.createElement("p",null,o.a.createElement("img",{src:n(117),className:"CV"})))},_=n(21),z=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={data:["1","2"],posts:["1","2"]},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){for(var e,t=this.props.posts,n=[],a=0,o=t.length;a<o;a++)e=t[a],n.push({id:e.id,title:e.title});var s=this.props.data;this.setState({data2:s})}},{key:"render",value:function(){this.props.posts;if(console.log(this.props.posts2),null!=this.props.posts2)var e=this.props.posts2.map((function(e,t){return console.log({item:e}),o.a.createElement("li",{className:"list-group-item list-group-item-action",key:t,style:{backgroundColor:e.color}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"}," ",o.a.createElement(g.b,{to:{pathname:"../admin/edit",title:e.title,text:e.text,color:e.color,id:e.id}},"Edytuj")),o.a.createElement("div",{className:"col-md"},e.title),o.a.createElement("div",{className:"col-md"},e.text)))}));return o.a.createElement("ul",{className:"list-group"},e)}}]),t}(a.Component),M={postsFetched:x},B=Object(P.b)((function(e){return{posts2:e.allposts.statPostState,posts:e.posts}}),M)(z),H=n(75);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var X=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).fileSelectedHandler=function(e){console.log(e.target.files[0])},n.add=n.add.bind(Object(d.a)(n)),n.state={posts:{},currentUser:null,title:"sss",text:"",color:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.postsRef=w.syncState("posts",{context:this,state:"posts"})}},{key:"handleChangeTitle",value:function(e){e.preventDefault();var t=e.target.value;this.setState({title:t}),console.log(this.state.title)}},{key:"handleChangeText",value:function(e){e.preventDefault();var t=e.target.value;this.setState({text:t}),console.log(e.target.value)}},{key:"handleChangeColor",value:function(e){e.preventDefault();var t=e.target.value;this.setState({color:t}),console.log(e.target.value)}},{key:"add",value:function(e){e.preventDefault();var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state.posts),n=Object(H.uuid)(),a=this.state.title,o=this.state.text,s=this.state.color;console.log(n),t[n]={id:n,title:a,text:o,color:s},console.log(t),this.setState({posts:t});console.log(this.props.posts)}},{key:"componentDidUpdate",value:function(){console.log(this.props.posts)}},{key:"render",value:function(){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"title"},"Tytu\u0142"),o.a.createElement("input",{type:"textarea",value:this.state.title,onChange:this.handleChangeTitle.bind(this),name:"title",className:"form-control",placeholder:"Enter title"}),o.a.createElement("small",{id:"emailHelp",className:"form-text "},"We'll never share your email with anyone else.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"tre\u015b\u0107"),o.a.createElement("input",{value:this.state.text,name:"name",onChange:this.handleChangeText.bind(this),type:"textarea",className:"form-control",id:"exampleInputPassword1",placeholder:"Text"}),o.a.createElement("input",{name:"color",value:this.state.color,type:"color",id:"myColor",onChange:this.handleChangeColor.bind(this)}),o.a.createElement("input",{type:"file",onChange:this.fileSelectedHandler})),o.a.createElement("button",{type:"submit",onClick:this.login,className:"btn btn-primary"},"Login"),o.a.createElement("button",{onClick:this.add,style:{marginLeft:"25px"},className:"btn btn-success"},"dodaj",this.state.title))}}]),t}(a.Component),q={postsFetched:x},J=Object(P.b)((function(e){return{posts:e.posts}}),q)(X),K=(n(119),n(76)),G=n.n(K),Y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleImageAsFile=function(e){console.log(e.target.files[0]);var t=e.target.files[0];n.setState({file:t}),console.log(n.state.file)},n.deletePost=function(){j.database().ref("posts/"+n.props.location.id).remove().then((function(){console.log("plik usuniety")})).catch((function(e){console.log("b\u0142ad:"+e)}))},n.delete=function(e,t){k.ref("/images/".concat(e,"/").concat(t)).delete().then((function(){console.log("plik usuniety")})).catch((function(e){console.log("b\u0142ad:"+e)}))},n.update=n.update.bind(Object(d.a)(n)),n.handleChangeEditor=n.handleChangeEditor.bind(Object(d.a)(n)),n.state={file:"",url:"",imagePreviewUrl:"",posts:{},currentUser:null,title:n.props.location.title,text:n.props.location.text,color:n.props.location.color,id:n.props.location.id},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.postsRef=w.syncState("posts",{context:this,state:"posts"})}},{key:"componentDidMount",value:function(){}},{key:"onprops",value:function(){if(this.props.location.id!=this.state.id){var e=this.props.location.title,t=this.props.location.text,n=this.props.location.id,a=this.props.location.color;this.setState({title:e}),this.setState({id:n}),this.setState({text:t}),this.setState({color:a}),console.log(this.state.title),console.log(this.props.location.title)}}},{key:"handleChangeTitle",value:function(e){e.preventDefault();var t=e.target.value;this.setState({title:t}),console.log(this.state.title)}},{key:"handleChangeText",value:function(e){e.preventDefault();var t=e.target.value;this.setState({text:t}),console.log(e.target.value)}},{key:"handleChangeColor",value:function(e){e.preventDefault();var t=e.target.value;this.setState({color:t}),console.log(e.target.value)}},{key:"update",value:function(e){e.preventDefault();this.state.id;var t=this.state.title,n=this.state.text,a=this.state.color;console.log(this.state.id);var o=j.database().ref("posts/"+this.props.location.id),s=k.ref("/images/".concat(this.state.id,"/").concat(this.state.file.name)).put(this.state.file),l=o.update({title:t,text:n,color:a}).then[function(){console.log("updated!")}];console.log(l),console.log("obrazek: "+s),console.log(this.props.posts)}},{key:"componentDidUpdate",value:function(){console.log(this.props.posts),this.onprops()}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var n=new FileReader,a=e.target.files[0];n.onloadend=function(){t.setState({file:a,imagePreviewUrl:n.result})},n.readAsDataURL(a)}},{key:"handleChangeEditor",value:function(e){var t=e;this.setState({text:t})}},{key:"render",value:function(){var e=this.state.imagePreviewUrl,t=null;return t=e?o.a.createElement("img",{src:e}):o.a.createElement("div",{className:"previewText"},"Please select an Image for Preview"),console.log(this.props.location.title),console.log(this.props.images),o.a.createElement("div",null,o.a.createElement("h1",null,"Edytuj"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},this.state.id,o.a.createElement("label",{htmlFor:"title"},"Tytu\u0142"),o.a.createElement("input",{type:"textarea",value:this.state.title,onChange:this.handleChangeTitle.bind(this),name:"title",className:"form-control",placeholder:"Enter title"}),o.a.createElement("small",{id:"emailHelp",className:"form-text "},"We'll never share your email with anyone else.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"tre\u015b\u0107"),o.a.createElement("div",{className:"form-group"},o.a.createElement(G.a,{theme:"snow",value:this.state.text,onChange:this.handleChangeEditor,style:{width:500,height:500}}))),o.a.createElement("div",{className:"form-group",style:{marginTop:"50px"}},o.a.createElement("input",{name:"color",value:this.state.color,type:"color",id:"myColor",onChange:this.handleChangeColor.bind(this)})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"fileInput",type:"file",onChange:this.handleImageAsFile})),o.a.createElement("button",{type:"submit",onClick:this.login,className:"btn btn-primary"},"Usu\u0144"),o.a.createElement("div",{className:"imgPreview"},t),o.a.createElement("button",{onClick:this.deletePost,style:{marginLeft:"25px"},className:"btn btn-success"},"Usu\u0144"),o.a.createElement("button",{onClick:this.update,style:{marginLeft:"25px"},className:"btn btn-success"},"Zmie\u0144")),this.props.images.map((function(e,t){var n=this;return o.a.createElement("div",null,e[0]==this.state.id&&o.a.createElement("p",null,o.a.createElement("img",{src:e[1],style:{width:"150px"}}),"  ",o.a.createElement("button",{onClick:function(){return n.delete(e[0],e[2])},className:"btn btn-primary"},"Usu\u0144")))}),this))}}]),t}(a.Component),Z={postsFetched:x,getAllStatPostsImages:C},$=Object(P.b)((function(e){return{posts:e.posts,images:e.allposts.statPostImages}}),Z)(Y);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ee=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).update=n.update.bind(Object(d.a)(n)),n.logout=n.logout.bind(Object(d.a)(n)),n.state={posts:{},currentUser:null,title:"sss",text:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handleChangeTitle",value:function(e){e.preventDefault();var t=e.target.value;this.setState({title:t}),console.log(this.state.title)}},{key:"handleChangeText",value:function(e){e.preventDefault();var t=e.target.value;this.setState({text:t}),console.log(e.target.value)}},{key:"componentWillMount",value:function(){this.postsRef=w.syncState("posts",{context:this,state:"posts"})}},{key:"componentWillUnmount",value:function(){w.removeBinding(this.postsRef)}},{key:"update",value:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state.posts);t[e.id]=e,this.setState({posts:t})}},{key:"logout",value:function(){j.auth().signOut()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Welcome to Backend!"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(B,null)),o.a.createElement("div",{className:"col-md-6 "},o.a.createElement("div",{className:"App"},o.a.createElement(v.a,{exact:!0,path:"/admin/edit",component:$}),o.a.createElement(v.a,{exact:!0,path:"/admin",component:J}))))),o.a.createElement("button",{className:"btn btn-success",onClick:this.logout},"Wyloguj"))}}]),t}(a.Component),te=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).login=n.login.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.signup=n.signup.bind(Object(d.a)(n)),n.state={email:"",password:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),j.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"signup",value:function(e){e.preventDefault(),j.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-md-6 "},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),o.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),o.a.createElement("button",{type:"submit",onClick:this.login,className:"btn btn-primary"},"Login"),o.a.createElement("button",{onClick:this.signup,style:{marginLeft:"25px"},className:"btn btn-success"},"Signup")))))}}]),t}(a.Component),ne=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={user:null},e.authListener=e.authListener.bind(Object(d.a)(e)),e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;j.auth().onAuthStateChanged((function(t){t?(e.setState({user:t}),localStorage.setItem("user",t.uid)):(e.setState({user:null}),localStorage.removeItem("user"))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},this.state.user?o.a.createElement(ee,null):o.a.createElement(te,null))}}]),t}(a.Component),ae=(n(193),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).sendState=n.sendState.bind(Object(d.a)(n)),n.onSync=n.onSync.bind(Object(d.a)(n)),n.onPush=n.onPush.bind(Object(d.a)(n)),n.onAction=n.onAction.bind(Object(d.a)(n)),n.onImage=n.onImage.bind(Object(d.a)(n)),n.state={articles:[{title:"React Redux Tutorial for Beginners",id:1},{title:"TypeScript tutorial for beginners",id:2}],temporary:[],a:[],ref:[],ref2:[]},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.onSync(),this.onAction()}},{key:"ref2",value:function(e){this.setState({ref2:e})}},{key:"onAction",value:function(){this.props.getAllStatPostsAction();var e=[];k.ref("images").list().then((function(t){console.log(t.items),t.prefixes.forEach((function(t){console.log(t.name);var n=t.name;t.list().then((function(t){t.items.forEach((function(t){var a=t.name;t.getDownloadURL().then((function(t){console.log(n,"url",t);var o=[n,t,a];e.push(o)}))}))}))}))})).catch((function(e){})),this.ref2(e),console.log("obraz",this.state.ref2),this.props.getAllStatPostsImages(e),console.log(this.props.posts2),console.log("Obrazy",this.props.images)}},{key:"sendState",value:function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.postsRef=w.syncState("posts",{context:this,state:"temporary"});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onImage",value:function(e){console.log(e);e.getDownloadURL().then((function(e){console.log(e)})).catch((function(e){})),console.log(this.state.ref2)}},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onPush",value:function(){var e,t=j.database().ref().child("posts"),n=["test"];for(var a in this.props.postsFetched(n),t.on("value",(function(t){e=t.val(),console.log(e)})),e)n.push({id:a,title:e[a].title,text:e[a].text}),console.log("\n"+e[a]);return null==t?(console.log("pusta zmienna"),this.onPush()):this.props.postsFetched(n),n}},{key:"onSync",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:[].push({id:1,title:"test",text:"text"}),[],t=this.onPush(),console.log(t),this.props.posts&&console.log(this.props.posts);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.posts.length,a.createElement("div",{className:"App"},a.createElement(g.a,{basename:"/db.github.io"},a.createElement("header",{className:"App-header"},a.createElement("ul",{className:"ButtonUl"},a.createElement("li",null,a.createElement(g.b,{className:"button",to:"/projects"},"Projekty")),a.createElement("li",null,a.createElement(g.b,{className:"button",to:"/about"},"o mnie")),a.createElement("li",null))),a.createElement("div",{className:"Router"},a.createElement(v.a,{exact:!0,path:"/projects",component:W}),a.createElement(v.a,{path:"/about",component:F}),a.createElement(v.a,{path:"/admin",component:ne}))),a.createElement("div",null,"Dominik Bulandra 2022"))}}]),t}(a.Component)),oe={postsFetched:x,getAllStatPostsAction:function(){return function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.on("value",(function(e){t({type:"getAllStatPosts",payload:e.val()||{}})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAllStatPostsImages:C},se=Object(P.b)((function(e){return{posts2:e.allposts.statPostState,posts:e.posts,images:e.allposts.statPostImages}}),oe)(ae),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ie=n(23),ce=n(77),ue=n(78);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=Object(ie.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_SUCCESS":return Object(ue.a)(t.posts);default:return e}},allposts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getAllStatPosts":return console.log("getting ",t.payload),console.log(t.payload),me({},e,{statPostState:Object.values(t.payload)});case"getAllStatImages":return me({},e,{statPostImages:t.payload});default:return e}}}),de=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();de=function(e){return e};var fe=Object(ie.d)(Object(ie.a)(ce.a),de),ge=Object(ie.e)(he,fe);l.a.render(o.a.createElement(P.a,{store:ge},o.a.createElement(se,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/db.github.io",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/db.github.io","/service-worker.js");le?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):re(t,e)}))}}()},40:function(e,t,n){},79:function(e,t,n){e.exports=n(201)},84:function(e,t,n){},86:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},87:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.b3f77690.chunk.js.map