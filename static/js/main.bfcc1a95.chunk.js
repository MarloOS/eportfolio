(this.webpackJsonpeportfolio=this.webpackJsonpeportfolio||[]).push([[0],{17:function(e,s,t){},20:function(e,s,t){},22:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(10),i=t.n(c),n=(t(17),t(2)),r=t(3),l=t(5),o=t(4),d=t(9),j=t(11),h=t.n(j),b=(t(20),t(0)),m=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,a=this.props.data.address.city;this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}))}return Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsx)("h1",{className:"responsive-headline",children:e}),Object(b.jsxs)("h3",{children:["I'm a ",a," based ",Object(b.jsx)("span",{children:s}),". ",t]}),Object(b.jsx)("hr",{})]})}),Object(b.jsx)("p",{className:"scrolldown",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(b.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),p=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"twelve columns",children:Object(b.jsx)("ul",{className:"social-links",children:e})}),Object(b.jsx)("div",{id:"go-top",children:Object(b.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(b.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),O=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,o=(this.props.data.resumedownload,this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)})));return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns",children:Object(b.jsx)("img",{className:"profile-pic",src:s,alt:"Marlo Profile Pic"})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:t}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"columns contact-details",children:[Object(b.jsx)("h2",{children:"Contact Details"}),Object(b.jsxs)("p",{className:"address",children:[Object(b.jsx)("span",{children:e}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:[a,Object(b.jsx)("br",{}),c," ",i,", ",n]}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:r}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:Object(b.jsx)("a",{href:"mailto:m.osborne.subasic@gmail.com",children:l})})]})]}),Object(b.jsx)("div",{className:"columns download",children:Object(b.jsxs)("ul",{className:"social",children:["LinkedIn",o]})})]})]})]})})}}]),t}(a.Component),u=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.school}),Object(b.jsxs)("p",{className:"info",children:[e.degree," ",Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("em",{className:"date",children:e.graduated})]}),Object(b.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.company}),Object(b.jsxs)("p",{className:"info",children:[e.title,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsx)("em",{className:"date",children:e.years})]}),Object(b.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{style:{width:e.level},className:s}),Object(b.jsx)("em",{children:e.name})]},e.name)}));return Object(b.jsxs)("section",{id:"resume",children:[Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"row item",children:Object(b.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Work"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(b.jsxs)("div",{className:"row skill",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Skills"})})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("p",{children:e}),Object(b.jsx)("div",{className:"bars",children:Object(b.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),t}(a.Component),x=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.email,r=this.props.data.contactmessage;return Object(b.jsx)("section",{id:"contact",children:Object(b.jsxs)("div",{className:"row section-head",children:[Object(b.jsx)("div",{className:"two columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Get In Touch."})})}),Object(b.jsxs)("div",{className:"ten columns",children:[Object(b.jsx)("p",{className:"lead",children:r}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("aside",{className:"four columns footer-widgets",children:Object(b.jsxs)("div",{className:"widget widget_contact",children:[Object(b.jsx)("h4",{children:"Address and Phone"}),Object(b.jsxs)("p",{className:"address",children:[e,Object(b.jsx)("br",{}),s," ",Object(b.jsx)("br",{}),t,", ",a," ",c,Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:i})," ",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"mailto:m.osborne.subasic@gmail.com",children:n}),Object(b.jsx)("br",{})]})]})})})]})]})})}}]),t}(a.Component),f=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)("blockquote",{children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("cite",{children:e.user})]})},e.user)}));return Object(b.jsx)("section",{id:"testimonials",children:Object(b.jsx)("div",{className:"text-container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"two columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Client Testimonials"})})}),Object(b.jsx)("div",{className:"ten columns flex-container",children:Object(b.jsx)("ul",{className:"slides",children:e})})]})})})}}]),t}(a.Component),g=t(7),v=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(b.jsx)("section",{id:"portfolio",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"twelve columns collapsed",children:[Object(b.jsx)("h1",{children:"Stuff I've Made"}),Object(b.jsx)("h2",{children:"HealHub.com"}),Object(b.jsx)("p",{children:"A website me and my teammates made for our capstone project. I was responsible for the front-end work, which I made using React. The site was designed to allow clients to find a suitable healer for them. The screenshots below show what it looked like by the time we were done with it, excluding the login/signup and personal account pages."}),Object(b.jsxs)(g.a,{fluid:!0,children:[Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/homepage1.png",children:Object(b.jsx)("img",{src:"./images/homepage1.png",alt:"Website homepage screenshot",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"This is the homepage of the site, what you see when you first enter before logging in."})]}),Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/homepage2.png",children:Object(b.jsx)("img",{src:"./images/homepage2.png",alt:"Healer list screenshot",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"Below was the list of available healers (users that made accounts specifying that they wanted to be listed as healers)"})]}),Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/healerpage1.png",children:Object(b.jsx)("img",{src:"./images/healerpage1.png",alt:"Healer page screenshot",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"A healer's page looked like this when clicked on. You could read about and leave a review on them, which would update their rating."})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"GLOOM"}),Object(b.jsx)("p",{children:"A game I made in Unity for the final project of one of my courses."}),Object(b.jsx)("div",{class:"videoWrapper",children:Object(b.jsx)("iframe",{margin:"auto",width:"100%",height:"100%",src:"https://www.youtube.com/embed/xHPX20q3yGA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(b.jsx)("p",{class:"center",children:"I had to make designs documents and finish all of the work on this game within a month. Most of the art assets were made by me, and I modified all of the assets that I didn't make from scratch so they would fit in better. "}),Object(b.jsxs)(g.a,{fluid:!0,children:[Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/gwaterlava.png",children:Object(b.jsx)("img",{src:"./images/gwaterlava.png",alt:"Lava and water materials",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"The water and lava materials were made in the Unity node graph."})]}),Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/gparticle1.png",children:Object(b.jsx)("img",{src:"./images/gparticle1.png",alt:"Particles on the bridge",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"All of the particle effects, like sparks, fire, clouds, explosions, and rain, were made by me in Unity's particle system."})]}),Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/genemy1.png",children:Object(b.jsx)("img",{src:"./images/genemy1.png",alt:"Skeletons running around rocks",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"Enemies had basic pathfinding so they could reach the player. They would run around obstacles to get to you."})]}),Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/gcath1.png",children:Object(b.jsx)("img",{src:"./images/gcath1.png",alt:"Spooky cathedral on a big mesa",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"The goal is to reach the cathedral at the end. Each area with enemies would only open up after all of them were defeated."})]}),Object(b.jsxs)("div",{class:"gallery",children:[Object(b.jsx)("a",{target:"_blank",href:"./images/gboss1.png",children:Object(b.jsx)("img",{src:"./images/gboss1.png",alt:"Final boss",width:"600",height:"400"})}),Object(b.jsx)("div",{class:"desc",children:"I managed to make the final boss in one day. He had two different types of attacks: a deadly ball that would move to the player's current location, and a purple circle that would appear under the player and then explode after a couple of seconds."})]}),Object(b.jsx)("p",{class:"center"})]}),Object(b.jsxs)(g.a,{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{})]})]})})})}}]),t}(a.Component),w=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{data:this.state.resumeData.main}),Object(b.jsx)(O,{data:this.state.resumeData.main}),Object(b.jsx)(u,{data:this.state.resumeData.resume}),Object(b.jsx)(v,{data:this.state.resumeData.portfolio}),Object(b.jsx)(f,{data:this.state.resumeData.testimonials}),Object(b.jsx)(x,{data:this.state.resumeData.main}),Object(b.jsx)(p,{data:this.state.resumeData.main})]})}}]),t}(a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(b.jsx)(w,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/eportfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/eportfolio","/service-worker.js");N?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.bfcc1a95.chunk.js.map