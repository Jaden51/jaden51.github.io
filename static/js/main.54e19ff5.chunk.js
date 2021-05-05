(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=t(1),c=t(2),o=t(4),m=t(3),u={main:{name:"Jaden Hums",birthdate:"March 19, 2002",occupation:"student",bio:"Born in near Chicago, Illinois and raised in a small town just north of Toronto, Ontario, I have always had a knack for imagining and creating ideas. My love for programming came when my passion for creating collided with limitless possibilities of computers. I am currently a second year Computer Science student (hopefully) at the University of British Columbia",email:"jadenhums51@gmail.com",phone:"905-806-0672",address:{street:"",city:"Vancouver",state:"British Columbia",zip:""},website:"templink",resumedownload:"https://drive.google.com/file/d/13nyMZ9ptHNt_a4Ek-TaPtVwHKMiBXyMu/view?usp=sharing",social:[{name:"twitter",url:"http://twitter.com/JadenHums",className:"fa fa-twitter"},{name:"linkedin",url:"https://www.linkedin.com/in/jaden-hums-235b7a1a1/",className:"fa fa-linkedin"},{name:"instagram",url:"https://www.instagram.com/jadenhums.51/?hl=en",className:"fa fa-instagram"},{name:"github",url:"https://github.com/Jaden51",className:"fa fa-github"}]},resume:{skillmessage:"",education:[{school:"University of British Columbia",degree:"Bachelor of Science",graduated:"Expeceted April 2024",description:"Flying across Canada from Toronto to Vancouver to study has been a great adventure. I am currently studying a Bachelor of Science in Computer Science (hopefully) and hope to achieve a more thorough understanding of concepts and theory of programming."},{school:"Newmarket High School",degree:"High School Diploma",graduated:"June 2020",description:""}],work:[{company:"Summer Skates LTD",title:"Production, Inventory and Quality Assurance Associate",years:"2016-Present",description:"Working for a small, local sandal company, I need to ensure quality of all products meet specified standards and prepare orders for shipping. I worked directly with the owners to ensure operational excellence."},{company:"Town of Newmarket",title:"Lead Counsellor",years:"2016-2019",description:"Being the lead counsellor, I had to coordinate and execute multiple children's programming activies as well as ensure all the campers are safe, make new friends, learn and most importantly have fun. Most importanly, I provided leadership and acted as a role model."}],skills:[{name:"Java",description:"Java was the first language I learned in High School. By far the language I am most familiar and comfortable with.",percent:"90",image:"java.jpg"},{name:"JavaScript",description:"JavaScript was the first language I decided to learn on my own outside of my classes. I made a simple TODO list application using JavaScript as my very first side project and have loved it ever since.",percent:"80",image:"js.jpg"},{name:"React.js",description:"After learning JavaScript, I decided to learn React. I have made most of my side projects using React. I love the component design the framework offers.",percent:"85",image:"react.jpg"},{name:"Node.js",description:"Node JS is the server side scripting-language I am most familiar with. I have only worked with it a small number of times on my side projects but I am always ready to learn more.",percent:"65",image:"node.jpg"},{name:"MongoDB",description:"MongoDB was the first database I used for my first full stack project. Since I have only used it for one project, I am still intermediate but always looking to expand my knowledge.",percent:"70",image:"mongo.jpg"},{name:"HTML",description:"Along with JavaScript, HTML was one of the first techonologies I learned during my studies outside of school.",percent:"75",image:"html.jpg"}]},portfolio:{projects:[{title:"Online Auction App",description:"App used for users to auction off items.",image:"auction.png",url:"https://github.com/Jaden51/Online-Auction-App"},{title:"Furnify",description:"Hub where people can sell their used furniture, we refurbish it and sell it (still need to style).",image:"furnify.png",url:"https://github.com/Jaden51/furniture-seller"},{title:"School Buddy",description:"Hub where users can ask questions to students at the universities they wish to attend.",image:"schoolbuddy.png",url:"https://github.com/Jaden51/furniture-seller"},{title:"NBA Team Management Simulator",description:"Application to simulate managing an NBA team.",image:"team.png",url:"https://github.com/Jaden51/Team-Management"}]}},d=t(5),p=t.n(d),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"toggleMenu",value:function(){var e=p()(".menu-toggle"),a=p()(".main-navigation");e.on("click",(function(t){t.preventDefault(),e.toggleClass("is-clicked"),a.slideToggle()})),a.find("li a").on("click",(function(t){e.toggleClass("is-clicked"),a.fadeOut()}))}},{key:"render",value:function(){return this.toggleMenu(),l.a.createElement("header",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"top-bar"},l.a.createElement("a",{className:"menu-toggle",href:"#intro"},l.a.createElement("span",null,"Menu")),l.a.createElement("nav",{id:"main-nav-wrap"},l.a.createElement("ul",{className:"main-navigation"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#intro",title:""},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",title:""},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume",title:""},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio",title:""},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact",title:""},"Contact")))))))}}]),t}(n.Component),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(p()(".smoothscroll").on("click",(function(e){e.preventDefault();var a=this.hash,t=p()(a);p()("html, body").stop().animate({scrollTop:t.offset().top},800,"swing",(function(){window.location.hash=a}))})),this.props.data)var e=this.props.data,a=e.name,t=e.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("section",{id:"intro"},l.a.createElement("div",{className:"intro-overlay"}),l.a.createElement("div",{className:"intro-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"Hello there!"),l.a.createElement("h1",null,"I'm ",a),l.a.createElement("p",{className:"intro-position"},l.a.createElement("span",null,"Student"),l.a.createElement("span",null,"Aspiring Software Developer")),l.a.createElement("a",{className:"button stroke smoothscroll",href:"#about",title:""},"More About Me")))),l.a.createElement("ul",{className:"intro-social"},t))}}]),t}(n.Component),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data.main)var e=this.props.data.main,a=e.name,t=e.birthdate,n=e.website,r=e.bio,i=e.email,s=e.resumedownload,c=this.props.data.resume.skills.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("div",{className:"progress percent"+e.percent},l.a.createElement("span",null,e.percent,"%")),l.a.createElement("strong",null,e.name))}));return l.a.createElement("section",{id:"about",className:"grey-section"},l.a.createElement("div",{className:"row section-intro"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"About"),l.a.createElement("h1",null,"Let Me Introduce Myself"),l.a.createElement("div",{className:"intro-info"},l.a.createElement("p",{className:"lead"},r)))),l.a.createElement("div",{className:"row about-content"},l.a.createElement("div",{className:"col-six tab-full"},l.a.createElement("ul",{className:"info-list"},l.a.createElement("li",null,l.a.createElement("strong",null,"Name:"),l.a.createElement("span",null,a)),l.a.createElement("li",null,l.a.createElement("strong",null,"Birth Date:"),l.a.createElement("span",null,t)),l.a.createElement("li",null,l.a.createElement("strong",null,"Website:"),l.a.createElement("span",null,n)),l.a.createElement("li",null,l.a.createElement("strong",null,"Email:"),l.a.createElement("span",null,i)))),l.a.createElement("div",{className:"col-six tab-full"},l.a.createElement("h3",null,"Skills"),l.a.createElement("ul",{className:"skill-bars"},c))),l.a.createElement("div",{className:"row button-section"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("a",{href:s,title:"Download Resume",className:"button button-primary",target:"_blank",rel:"noopener noreferrer"},"Download Resume"))))}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school,className:"timeline-block"},l.a.createElement("div",{className:"timeline-ico"},l.a.createElement("i",{className:"fa fa-graduation-cap"})),l.a.createElement("div",{className:"timeline-header"},l.a.createElement("h3",null,e.degree),l.a.createElement("p",null,e.graduated)),l.a.createElement("div",{className:"timeline-content"},l.a.createElement("h4",null,e.school),l.a.createElement("p",null,e.description)))})),a=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.title,className:"timeline-block"},l.a.createElement("div",{className:"timeline-ico"},l.a.createElement("i",{className:"fa fa-briefcase"})),l.a.createElement("div",{className:"timeline-header"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.years)),l.a.createElement("div",{className:"timeline-content"},l.a.createElement("h4",null,e.company),l.a.createElement("p",null,e.description)))})),t=this.props.data.skills.map((function(e){var a="images/tech/"+e.image;return l.a.createElement("div",{key:e.name,className:"columns feature-item"},l.a.createElement("img",{className:"skill",alt:e.name,src:a}),l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))})),n=this.props.data.skillmessage;return l.a.createElement("section",{id:"resume",className:"white-section"},l.a.createElement("div",{className:"row section-intro"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"Resume"),l.a.createElement("h1",null,"My Credentials"),l.a.createElement("p",{className:"lead"},n),l.a.createElement("div",{className:"row resume-timeline"},l.a.createElement("div",{className:"col-twelve resume-header"},l.a.createElement("h2",null,"Education")),l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{className:"timeline-wrap"},e))),l.a.createElement("div",{className:"row resume-timeline"},l.a.createElement("div",{className:"col-twelve resume-header"},l.a.createElement("h2",null,"Work Experience")),l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{className:"timeline-wrap"},a)))),l.a.createElement("h1",null,l.a.createElement("span",null,"Favourite Tech"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",null,l.a.createElement("ul",{className:"grid-container"},t))))}}]),t}(n.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"bgrid folio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{src:a,alt:"Liberty"}),l.a.createElement("a",{href:e.url,className:"overlay",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"folio-item-table"},l.a.createElement("div",{className:"folio-item-cell"},l.a.createElement("h3",{className:"folio-title"},e.title),l.a.createElement("span",{className:"folio-types"},e.description))))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row section-intro"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"Portfolio"),l.a.createElement("h1",null,"Check Out My Work"),l.a.createElement("p",{className:"lead"},"A few of my favourite side projects I have worked on over the years."))),l.a.createElement("div",{className:"row portfolio-content"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{id:"folio-wrapper",className:"block-1-2 block-mob-full stack"},e))))}}]),t}(n.Component),N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data,a=e.address.city,t=e.address.state,n=e.email;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-intro"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"Contact"),l.a.createElement("h1",null,"I'd Love To Hear From You."))),l.a.createElement("div",{className:"row contact-info"},l.a.createElement("div",{className:"col-four tab-full"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"icon-pin"})),l.a.createElement("h5",null,"Where to find me"),l.a.createElement("p",null,"University of ",t,l.a.createElement("br",null),a,", BC")),l.a.createElement("div",{className:"col-four tab-full collapse"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"icon-mail"})),l.a.createElement("h5",null,"Email Me At"),l.a.createElement("p",null,n)),l.a.createElement("div",{className:"col-four tab-full"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"icon-phone"})),l.a.createElement("h5",null,"Call Me At"),l.a.createElement("p",null,"Phone: (905) 806 0672"))))}}]),t}(n.Component),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(p()(".smoothscroll").on("click",(function(e){e.preventDefault();var a=this.hash,t=p()(a);p()("html, body").stop().animate({scrollTop:t.offset().top},800,"swing",(function(){window.location.hash=a}))})),this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-six tab-full pull-right social"},l.a.createElement("ul",{className:"footer-social"},e)),l.a.createElement("div",{className:"col-six tab-full"},l.a.createElement("div",{className:"copyright"},l.a.createElement("span",null,"Styled by ",l.a.createElement("a",{href:"http://www.styleshout.com/"},"styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#intro"},l.a.createElement("i",{className:"fa fa-long-arrow-up"})))))}}]),t}(n.Component),y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={data:{}},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:u})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(f,{data:this.state.data.main}),l.a.createElement(E,{data:this.state.data}),l.a.createElement(v,{data:this.state.data.resume}),l.a.createElement(g,{data:this.state.data.portfolio}),l.a.createElement(N,{data:this.state.data.main}),l.a.createElement(b,{data:this.state.data.main}))}}]),t}(n.Component);i.a.render(l.a.createElement(y,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.54e19ff5.chunk.js.map