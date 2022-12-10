(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e){e.exports={"elf-bot":[{path:"images/elfbot/mainbot.jpg",tag:"The Elf-Bot",type:"image",ptitle:"Elf-Bot"},{path:"images/elfbot/grideyeinfared.jpg",tag:"The Grid-Eye Infared Array Breakout",type:"image"},{path:"images/elfbot/microbit.jpg",tag:"Micro:Bit v2",type:"image"},{path:"images/elfbot/ultrasonic.jpg",tag:"Ultrasonic Distance Sensor",type:"image"},{path:"images/elfbot/elf_bot_gif.gif",tag:"The Elf-Bot in action",type:"image"}],crisis:[{path:"images/crisis/homescreen.png",tag:"Game Home Screen",type:"image",ptitle:"CRISIS Assembly Game"},{path:"images/crisis/infoscreen.png",tag:"Game Instructions",type:"image"},{path:"images/crisis/gameplay1.png",tag:"Search for the tower",type:"image"},{path:"images/crisis/tower.png",tag:"Battle at the tower",type:"image"},{path:"images/crisis/gameover.png",tag:"Game Over Screen",type:"image"}],money_tracker:[{path:"images/moneytracker/homepage.png",tag:"App Home Screen",type:"image",ptitle:"Money Tracker App"},{path:"images/moneytracker/editaccount.png",tag:"Editing an Account",type:"image"},{path:"images/moneytracker/addtransaction.png",tag:"Adding a transaction",type:"image"},{path:"images/moneytracker/history.png",tag:"Transaction History",type:"image"}],tv_tracker:[{path:"images/tvtracker/homepage.png",tag:"App Home Screen",type:"image",ptitle:"TV Tracker Site"},{path:"images/tvtracker/newshow.png",tag:"Adding a new show",type:"image"},{path:"images/tvtracker/selectedshow.png",tag:"Info about a selected show",type:"image"}]}},,,,function(e){e.exports={"elf-bot":{name:"Elf-Bot",subtitle:"Santa's Behavior Monitor",tagline:"A robot that follows you around.",details:["Written in C on a Micro:Bit","Uses a Grid-EYE infrared sensor for tracking","Uses an Ultrasonic Distance Sensor for barrier detection"],description:["This was the final project for my Microprocessor System Design course. My partner, Caelan Purnama, and I created this robot to run on the Micro:Bit, the microprocessor that the class was taught around.","The robot tracks humans through heat so the infrared sensor captures an 8x8 thermopile array of temperature information. If the center columns of the grid have the highest temperatures, the robot moves forward. If the hottest columns are on the left or the right, the robot turns until the center is the hottest again. The ultrasonic distance sensor is used to stop the robot from bumping into its target.","It was originally called Stalker Bot because it was ideated around Halloween and fit that monster trope. However, the project was due in December so it was rebranded as Elf-Bot to keep the human-tracking theme."]},money_tracker:{name:"Money Tracker",subtitle:"Flutter App",tagline:"Keep track of money spent and received.",details:["Created in Android Studio","Written with Flutter","Hive Database"],description:["I created this app back in junior high as a way to keep track of the physical cash in my wallet. The first version was made with MIT App Inventor in 2015. When learning Flutter in 2020, I redesigned it and added the option to track multiple sources.",'On the home page, users can create a new "account", or update an existing one. On each account page, users can view past transactions and add new ones. New transactions include the amount, date, whether it is a deposit or withdrawal, and a note to remind themselves where it came from.',"Flutter is written in Dart and is used to develop cross-platform applications. I use Hive for storing the accounts and their transactions locally on the device."]},tv_tracker:{name:"TV Tracker",subtitle:"React Website + Django",tagline:"A website for logging the shows you've watched, where you watched them from, and whether you've finished them. You can also get current information about a show once it's been added.",details:["React frontend + Django Backend","Uses the TVMaze API to fetch show information"],description:["While learning about website backends and databases, I created this website to practice using React to implement a Django backend.","The user can add a show by giving its title, the streaming platform/channel it was available on, the date they started watching, and whether they've finished. This gets sent to the backend and inserted into the database. Platforms are color coded for easy differentiation on the page. Shows can be edited and deleted at any time. So if the user just watched the series finale, they can mark the show as completed.","An additional feature is the TVMaze API. If the user double clicks a show, the API fetches its poster, summary, runtime, and rating."]},crisis:{name:"CRISIS",subtitle:"Assembly Game",tagline:"Save the multiverse in this DC Comics-inspired Asteroid game!",details:["Written in IA-32 Assembly","Uses MASM","I own none of the images or music"],description:["This game was the created in my Computer Systems Software course for our final project.","It's loosely based on DC Comic's Crisis on Infinite Earths event where the heroes have to protect some towers and universes collide. However, the avatar is a picture of Galactus's head, who is a character from Marvel Comics. The demon fighting is based on Atari's Asteroids video game."]}}},,,,function(e){e.exports={solarcar:[{path:"images/solarcar/car_main.jpg",tag:"The Solar Car",type:"image",ptitle:"NU Solar Car Team"}],robotics:[{path:"images/robotics/logo.jpg",tag:"Robotics Logo",type:"image",ptitle:"NU Robotics Club"}],nunights:[{path:"images/nunights/sandm.jpg",tag:"Smocks and Mocks Event Sign",type:"image",ptitle:"NU Nights"}]}},,,,function(e,a,t){e.exports=t(39)},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(16),l=t.n(i),c=t(4),o=t(3),s=t(6),m=t(2),u=(t(31),t(32),function(e){var a=e.navRef,t=(e.moveBar,e.scrollDown),n=e.aboutRef,i=e.projectsRef;return r.a.createElement("div",{ref:a,className:"navbar-wrap"},r.a.createElement("div",{className:"navbar container"},r.a.createElement("h3",{onClick:function(){return t(n)}},"ABOUT"),r.a.createElement("h3",{onClick:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},"CONTACT"),r.a.createElement("h3",null,r.a.createElement(s.b,{to:"/"},"CHIBU")),r.a.createElement("h3",{onClick:function(){return t(i)}},"PROJECTS"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://drive.google.com/file/d/1qmAVEf_EP5jWGvwrgn3Sl64JmU-fyhq5/view?usp=share_link",target:"blank"},"RESUME"))))}),g=(t(33),function(e){var a=e.image,t=e.onClick,n=e.isSelected;return r.a.createElement("figure",{className:"other-img-wrap ".concat(!0===n?"other-img-wrap-selected":""),onClick:t},a&&r.a.createElement("img",{src:a.path,className:"other-img",alt:a.tag}))}),d=function(e){var a=e.image,t=e.onClick;return r.a.createElement("div",{className:"square-wrap",onClick:t},a&&r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:"square-img-wrap"},r.a.createElement("img",{src:a.path,className:"square-img",alt:a.tag})),r.a.createElement("h2",{className:"image-name"},a.ptitle)))},p=(t(34),function(e){var a=e.media,t=e.pages;return r.a.createElement("div",{className:"squares-wrap"},a&&t.map(function(e){return r.a.createElement(d,{key:e,image:a[e][0]})}))}),h=function(e){var a=e.pages,t=e.page,i=e.allmedia,l=e.projectData,o=e.projectMedia,s=Object(n.useState)(0),m=Object(c.a)(s,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"project-page-outer"},l&&r.a.createElement("div",{className:"project-page container"},r.a.createElement("p",{id:"path"},r.a.createElement("span",{className:"teal-link"},"Home")," / ",r.a.createElement("span",{className:"teal-link"},"Projects")," / ",l.name),r.a.createElement("div",{className:"project-head"},r.a.createElement("div",{className:"image-side"},r.a.createElement("figure",{className:"selected-img-wrap"},o&&r.a.createElement("img",{src:o[u].path,className:"selected-img",alt:o[u].tag}))),r.a.createElement("div",{className:"sell-side"},r.a.createElement("h1",null,"".concat(l.name," (").concat(l.subtitle,")")),r.a.createElement("button",{className:"buy-button"},"VISIT THE REPO"),r.a.createElement("div",{className:"info-div"},r.a.createElement("p",null,l.tagline),r.a.createElement("h3",null,"Details"),r.a.createElement("ul",null,l.details.map(function(e,a){return r.a.createElement("li",{key:a},e)}))))),r.a.createElement("div",{className:"imgs-list"},o&&o.map(function(e,a){return r.a.createElement(g,{key:a,image:e,onClick:function(){return function(e){d(e)}(a)},isSelected:u===a})})),r.a.createElement("div",{className:"project-description"},r.a.createElement("h3",null,"Description"),l.description.map(function(e,a){return r.a.createElement("p",{key:a},e)})),r.a.createElement("div",{className:"project-suggestions"},r.a.createElement("hr",{size:"1",color:"black",border:"1px solid rgb(128, 128, 128)"}),r.a.createElement("h3",null,"You Might Also Like..."),r.a.createElement(p,{media:i,pages:a.filter(function(e){return e!==t})}))))},f=function(e){var a=e.children,t=Object(m.j)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[t]),a||null},E=(t(35),function(){return r.a.createElement("div",{className:"landing-page"},r.a.createElement("div",{className:"inner-landing page"}))}),b=(t(36),t(17)),v=function(){return r.a.createElement("div",{className:"detail-container"},r.a.createElement("div",{className:"detail-page"},r.a.createElement("div",{style:{backgroundColor:"red"},className:"box long-image"},r.a.createElement("img",{src:"/images/google/chicago.jpg",alt:"Dynasty",className:"long-image"})),r.a.createElement("div",{style:{backgroundColor:"yellow"},className:"box tall-image"},r.a.createElement("img",{src:"/images/google/arch.jpg",alt:"hot dog crop",className:"tall-image"})),r.a.createElement("div",{style:{backgroundColor:"green"},className:"box square-img1"},r.a.createElement("img",{src:"/images/google/nunights.jpg",alt:"face",className:"square-img1"})),r.a.createElement("div",{style:{backgroundColor:"blue"},className:"box square-img2"},r.a.createElement("img",{src:"/images/google/solar.jpg",alt:"diamonds",className:"square-img2"}))))},w=function(e){var a=e.aboutRef;return r.a.createElement("div",{ref:a,id:"plese",className:"about-page container page"},r.a.createElement("div",{className:"search-box"},r.a.createElement("p",null,"Chibu"),r.a.createElement(b.a,{id:"search-icon"})),r.a.createElement("hr",{size:"1",color:"#3c4043",border:"1px solid rgb(128, 128, 128)"}),r.a.createElement("p",{id:"search-p"},'Search Results for "Chibu"'),r.a.createElement("div",{className:"split-screen"},r.a.createElement("div",{className:"links-side"},r.a.createElement("h4",null,"Education - Northwestern University"),r.a.createElement("p",null,"BS Computer Engineering - Class of '23"),r.a.createElement("blockquote",{style:{border:"none"}},r.a.createElement("h4",null,"Solar Car Team - Software Lead"),r.a.createElement("p",null,"Telemetry for an eco-friendly car"),r.a.createElement("br",null),r.a.createElement("h4",null,"Robotics Club"),r.a.createElement("p",null,"Autonomous robots"),r.a.createElement("br",null),r.a.createElement("h4",null,"NU Nights - President"),r.a.createElement("p",null,"Late night student programming")),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://drive.google.com/file/d/1qmAVEf_EP5jWGvwrgn3Sl64JmU-fyhq5/view?usp=share_link",target:"blank"},"Resume (pdf)")),r.a.createElement("p",null,"Background, skills, and accomplshments"),r.a.createElement("br",null),r.a.createElement("h4",null,r.a.createElement("a",{href:"http://linkedin.com/in/chibueze-i-o-2001",target:"blank"},"LinkedIn")),r.a.createElement("p",null,"Computer Engineering Student at Northwestern University"),r.a.createElement("br",null),r.a.createElement("h4",null,r.a.createElement("a",{href:"mailto:023813C@gmail.com",target:"blank"},"Email - 023813C@gmail.com")),r.a.createElement("p",null,"Available 24/7")),r.a.createElement("div",{className:"info-side"},r.a.createElement("h3",null,"Chibueze Onyenemezu"),r.a.createElement("p",null,"Software Engineer"),r.a.createElement(v,null),r.a.createElement("p",{id:"blurb"},"I love to build and create. Whether it's a program or a painting, I enjoy conceptualizing the final product, then spending hours working, researching, and tweaking until I can bask in the glow of my completed vision."),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Interests: "),"Reading, Graphic Design, Drawing, TV & Movies, Comics"))))},y=(t(37),function(e){var a=e.projectsRef,t=e.pages,n=e.pages2,i=e.projectMedia,l=e.teamMedia;return r.a.createElement("div",{ref:a,className:"projects-page container page"},r.a.createElement("h1",{className:"title"},'Projects and Activities for "Chibu"'),r.a.createElement("div",{className:"squares-body"},r.a.createElement("div",{className:"squares-wrap"},i&&t.map(function(e){return r.a.createElement(s.b,{key:e,to:"/".concat(e)},r.a.createElement(d,{image:i[e][0]}))})),r.a.createElement("div",{className:"squares-wrap"},l&&n.map(function(e){return r.a.createElement(d,{image:l[e][0]})})),r.a.createElement("div",{className:"space"})))}),k=t(10),N=t(18),j=function(e){var a=e.aboutRef,t=e.projectsRef;return r.a.createElement("div",{className:"home-page"},r.a.createElement(E,null),r.a.createElement(w,{aboutRef:a}),k&&r.a.createElement(y,{projectsRef:t,pages:["elf-bot","money_tracker","tv_tracker","crisis"],pages2:["solarcar","robotics","nunights"],projectMedia:k,teamMedia:N}))},C=(t(38),t(20)),S=t(19),T=t(21),I=function(){return r.a.createElement("div",{className:"footer-outer"},r.a.createElement("div",{className:"footer container"},r.a.createElement("div",{className:"contact-side"},r.a.createElement("h2",null,"Contact!"),r.a.createElement("div",{className:"icon-line"},r.a.createElement(S.a,null),r.a.createElement("h2",null,r.a.createElement("a",{href:"mailto:023813C@gmail.com",target:"blank"},"023813C@gmail.com"))),r.a.createElement("div",{className:"icon-line"},r.a.createElement(C.a,null),r.a.createElement("h2",null,r.a.createElement("a",{href:"http://linkedin.com/in/chibueze-i-o-2001",target:"blank"},"LinkedIn")))),r.a.createElement("div",{className:"name-side"},r.a.createElement("h2",null,"Chibueze Onyenemezu"),r.a.createElement("div",{className:"to-top-div",onClick:function(){window.scrollTo(0,0)}},r.a.createElement(T.a,null),r.a.createElement("h3",null,"Back to Top")))))},A=t(14);var R=function(){var e=["elf-bot","money_tracker","tv_tracker","crisis"],a=Object(n.useState)(!1),t=Object(c.a)(a,2),i=(t[0],t[1],Object(n.useRef)()),l=Object(n.useRef)(),g=Object(n.useRef)();return r.a.createElement("div",{className:"app-div"},r.a.createElement(s.a,null,r.a.createElement(f,null,r.a.createElement(u,{navRef:i,moveBar:!1,scrollDown:function(e){Object(o.o)("/#"),window.scrollTo({top:e.current.offsetTop-70,behavior:"smooth"})},aboutRef:l,projectsRef:g}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,element:r.a.createElement(j,{aboutRef:l,projectsRef:g})}),A&&e&&e.map(function(a){return r.a.createElement(m.a,{key:a,path:"/".concat(a),exact:!0,element:r.a.createElement(h,{pages:e,page:a,allmedia:k,projectData:A[a],projectMedia:k[a]})})})),r.a.createElement(I,null))))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)))}],[[22,1,2]]]);
//# sourceMappingURL=main.afb284c7.chunk.js.map