(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports={"elf-bot":[{path:"images/elfbot/mainbot.jpg",tag:"The Elf-Bot",type:"image",ptitle:"Elf-Bot"},{path:"images/elfbot/grideyeinfared.jpg",tag:"The Grid-Eye Infared Array Breakout",type:"image"},{path:"images/elfbot/microbit.jpg",tag:"Micro:Bit v2",type:"image"},{path:"images/elfbot/ultrasonic.jpg",tag:"Ultrasonic Distance Sensor",type:"image"},{path:"images/elfbot/elf_bot_gif.gif",tag:"The Elf-Bot in action",type:"image"}],crisis:[{path:"images/crisis/homescreen.png",tag:"Game Home Screen",type:"image",ptitle:"CRISIS Assembly Game"},{path:"images/crisis/infoscreen.png",tag:"Game Instructions",type:"image"},{path:"images/crisis/gameplay1.png",tag:"Search for the tower",type:"image"},{path:"images/crisis/tower.png",tag:"Battle at the tower",type:"image"},{path:"images/crisis/gameover.png",tag:"Game Over Screen",type:"image"}],money_tracker:[{path:"images/moneytracker/homepage.png",tag:"App Home Screen",type:"image",ptitle:"Money Tracker App"},{path:"images/moneytracker/editaccount.png",tag:"Editing an Account",type:"image"},{path:"images/moneytracker/addtransaction.png",tag:"Adding a transaction",type:"image"},{path:"images/moneytracker/history.png",tag:"Transaction History",type:"image"}],tv_tracker:[{path:"images/tvtracker/homepage.png",tag:"App Home Screen",type:"image",ptitle:"TV Tracker Site"},{path:"images/tvtracker/newshow.png",tag:"Adding a new show",type:"image"},{path:"images/tvtracker/selectedshow.png",tag:"Info about a selected show",type:"image"}]}},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);t.default=function(e){var t=e.image,n=e.onClick;return r.a.createElement("div",{className:"square-wrap",onClick:n},t&&r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:"square-img-wrap"},r.a.createElement("img",{src:a(30)("./"+t.path),className:"square-img",alt:t.tag})),r.a.createElement("h2",{className:"image-name"},t.ptitle)))}},,function(e){e.exports={"elf-bot":{name:"Elf-Bot",subtitle:"Santa's Behavior Monitor",tagline:"A robot that follows you around.",details:["Written in C on a Micro:Bit","Uses a Grid-EYE infrared sensor for tracking","Uses an Ultrasonic Distance Sensor for barrier detection"],description:["This was the final project for my Microprocessor System Design course. My partner, Caelan Purnama, and I created this robot to run on the Micro:Bit, the microprocessor that the class was taught around.","The robot tracks humans through heat so the infrared sensor captures an 8x8 thermopile array of temperature information. If the center columns of the grid have the highest temperatures, the robot moves forward. If the hottest columns are on the left or the right, the robot turns until the center is the hottest again. The ultrasonic distance sensor is used to stop the robot from bumping into its target.","The project was due in December so it was branded as Elf-Bot to follow the human-monitoring theme."]},money_tracker:{name:"Money Tracker",subtitle:"Flutter App",tagline:"Keep track of money spent and received.",details:["Created in Android Studio","Written with Flutter","Hive Database"],description:["I created this app back in junior high as a way to keep track of the physical cash in my wallet. The first version was made with MIT App Inventor in 2015. When learning Flutter in 2020, I redesigned it and added the option to track multiple sources.","Flutter is written in Dart and is used to develop cross-platform applications. I use Hive for storing the accounts and their transactions locally on the device."]},tv_tracker:{name:"TV Tracker",subtitle:"React Website + Django",tagline:"A website for logging the shows you've watched, where you watched them from, and whether you've finished them. You can also get current information about a show once it's been added.",details:["React frontend + Django Backend","Uses the TVMaze API to fetch show information"],description:["While learning about website backends and databases, I created this website to practice using React to implement a Django backend.","The user can add a show by giving its title, the streaming platform/channel it was available on, the date they started watching, and whether they've finished. This gets sent to the backend and inserted into the database. Platforms are color coded for easy differentiation on the page. Shows can be edited and deleted at any time. So if the user just watched the series finale, they can mark the show as completed.","An additional feature is the TVMaze API. If the user double clicks a show, the API fetches its poster, summary, runtime, and rating."]},crisis:{name:"CRISIS",subtitle:"Assembly Game",tagline:"Save the multiverse in this DC Comics-inspired Asteroid game!",details:["Written in IA-32 Assembly","Uses MASM","I own none of the images or music"],description:["This game was the created in my Computer Systems Software course for our final project.","It's loosely based on DC Comic's Crisis on Infinite Earths event where the heroes have to protect some towers and universes collide. However, the avatar is a picture of Galactus's head, who is a character from Marvel Comics. The demon fighting is based on Atari's Asteroids video game."]}}},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(47),s=a.n(i),o=a(17);s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.default,null)))},function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(1),i=a.n(r),s=a(3),o=a(7),c=a(2),l=(a(36),a(18)),m=a(19),g=a(29),p=a(25),u=a(21),d=a(12),f=a(6);t.default=function(){var e=["elf-bot","money_tracker","tv_tracker","crisis"],t=Object(r.useState)(!1),a=Object(n.a)(t,2),h=(a[0],a[1],Object(r.useRef)()),b=Object(r.useRef)(),E=Object(r.useRef)();return i.a.createElement("div",{className:"app-div"},i.a.createElement(o.a,{basename:"/portfolion"},i.a.createElement(g.default,null,i.a.createElement(l.default,{navRef:h,moveBar:!1,scrollDown:function(e){Object(s.p)("/#")},aboutRef:b,projectsRef:E}),i.a.createElement(c.c,null,i.a.createElement(c.a,{index:!0,element:i.a.createElement(p.default,{aboutRef:b,projectsRef:E})}),d&&e&&e.map(function(t){return i.a.createElement(c.a,{key:t,path:"/".concat(t),exact:!0,element:i.a.createElement(m.default,{pages:e,page:t,allmedia:f,projectData:d[t],projectMedia:f[t]})})})),i.a.createElement(u.default,null))))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(7);a(37);t.default=function(e){var t=e.navRef,a=(e.moveBar,e.scrollDown),n=e.aboutRef,s=e.projectsRef;return r.a.createElement("div",{ref:t,className:"navbar-wrap"},r.a.createElement("div",{className:"navbar container"},r.a.createElement("h3",{onClick:function(){return a(n)}},"ABOUT"),r.a.createElement("h3",{onClick:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},"CONTACT"),r.a.createElement("h3",null,r.a.createElement(i.b,{to:"/"},"CHIBU")),r.a.createElement("h3",{onClick:function(){return a(s)}},"PROJECTS"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://drive.google.com/file/d/1qmAVEf_EP5jWGvwrgn3Sl64JmU-fyhq5/view?usp=share_link",target:"blank"},"RESUME"))))}},function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(1),i=a.n(r),s=(a(38),a(20)),o=a(22);t.default=function(e){var t=e.pages,c=e.page,l=e.allmedia,m=e.projectData,g=e.projectMedia,p=Object(r.useState)(0),u=Object(n.a)(p,2),d=u[0],f=u[1];return i.a.createElement("div",{className:"project-page-outer"},m&&i.a.createElement("div",{className:"project-page container"},i.a.createElement("p",{id:"path"},i.a.createElement("span",{className:"teal-link"},"Home")," / ",i.a.createElement("span",{className:"teal-link"},"Projects")," / ",m.name),i.a.createElement("div",{className:"project-head"},i.a.createElement("div",{className:"image-side"},i.a.createElement("figure",{className:"selected-img-wrap"},g&&i.a.createElement("img",{src:a(30)("./"+g[d].path),className:"selected-img",alt:g[d].tag}))),i.a.createElement("div",{className:"sell-side"},i.a.createElement("h1",null,"".concat(m.name," (").concat(m.subtitle,")")),i.a.createElement("button",{className:"buy-button"},"VISIT THE REPO"),i.a.createElement("div",{className:"info-div"},i.a.createElement("p",null,m.tagline),i.a.createElement("h3",null,"Details"),i.a.createElement("ul",null,m.details.map(function(e,t){return i.a.createElement("li",{key:t},e)}))))),i.a.createElement("div",{className:"imgs-list"},g&&g.map(function(e,t){return i.a.createElement(s.default,{key:t,image:e,onClick:function(){return function(e){f(e)}(t)},isSelected:d===t})})),i.a.createElement("div",{className:"project-description"},i.a.createElement("h3",null,"Description"),m.description.map(function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement("div",{className:"project-suggestions"},i.a.createElement("hr",{size:"1",color:"black",border:"1px solid rgb(128, 128, 128)"}),i.a.createElement("h3",null,"You Might Also Like..."),i.a.createElement(o.default,{media:l,pages:t.filter(function(e){return e!==c})}))))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);t.default=function(e){var t=e.image,n=e.onClick,i=e.isSelected;return r.a.createElement("figure",{className:"other-img-wrap ".concat(!0===i?"other-img-wrap-selected":""),onClick:n},t&&r.a.createElement("img",{src:a(30)("./"+t.path),className:"other-img",alt:t.tag}))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=(a(39),a(49)),s=a(48),o=a(50);t.default=function(){return r.a.createElement("div",{className:"footer-outer"},r.a.createElement("div",{className:"footer container"},r.a.createElement("div",{className:"contact-side"},r.a.createElement("h2",null,"Contact!"),r.a.createElement("div",{className:"icon-line"},r.a.createElement(s.a,null),r.a.createElement("h2",null,r.a.createElement("a",{href:"mailto:023813C@gmail.com",target:"blank"},"023813C@gmail.com"))),r.a.createElement("div",{className:"icon-line"},r.a.createElement(i.a,null),r.a.createElement("h2",null,r.a.createElement("a",{href:"http://linkedin.com/in/chibueze-i-o-2001",target:"blank"},"LinkedIn")))),r.a.createElement("div",{className:"name-side"},r.a.createElement("h2",null,"Chibueze Onyenemezu"),r.a.createElement("div",{className:"to-top-div",onClick:function(){window.scrollTo(0,0)}},r.a.createElement(o.a,null),r.a.createElement("h3",null,"Back to Top")))),r.a.createElement("div",{className:"footer-bg"}))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(10);a(41);t.default=function(e){var t=e.media,a=e.pages;return r.a.createElement("div",{className:"squares-wrap"},t&&a.map(function(e){return r.a.createElement(i.default,{key:e,image:t[e][0]})}))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=(a(43),a(51)),s=a(24);t.default=function(e){var t=e.aboutRef;return r.a.createElement("div",{ref:t,id:"plese",className:"about-page container page"},r.a.createElement("div",{className:"search-box"},r.a.createElement("p",null,"Chibu"),r.a.createElement(i.a,{id:"search-icon"})),r.a.createElement("hr",{size:"1",color:"#3c4043",border:"1px solid rgb(128, 128, 128)"}),r.a.createElement("p",{id:"search-p"},'Search Results for "Chibu"'),r.a.createElement("div",{className:"split-screen"},r.a.createElement("div",{className:"links-side"},r.a.createElement("h4",null,"Education - Northwestern University"),r.a.createElement("p",null,"BS Computer Engineering - Class of '23"),r.a.createElement("blockquote",{style:{border:"none"}},r.a.createElement("h4",null,"Solar Car Team - Software Lead"),r.a.createElement("p",null,"Telemetry for an eco-friendly car"),r.a.createElement("br",null),r.a.createElement("h4",null,"Robotics Club"),r.a.createElement("p",null,"Autonomous robots"),r.a.createElement("br",null),r.a.createElement("h4",null,"NU Nights - President"),r.a.createElement("p",null,"Late night student programming")),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://drive.google.com/file/d/1qmAVEf_EP5jWGvwrgn3Sl64JmU-fyhq5/view?usp=share_link",target:"blank"},"Resume (pdf)")),r.a.createElement("p",null,"Background, skills, and accomplshments"),r.a.createElement("br",null),r.a.createElement("h4",null,r.a.createElement("a",{href:"http://linkedin.com/in/chibueze-i-o-2001",target:"blank"},"LinkedIn")),r.a.createElement("p",null,"Computer Engineering Student at Northwestern University"),r.a.createElement("br",null),r.a.createElement("h4",null,r.a.createElement("a",{href:"mailto:023813C@gmail.com",target:"blank"},"Email - 023813C@gmail.com")),r.a.createElement("p",null,"Available 24/7")),r.a.createElement("div",{className:"info-side"},r.a.createElement("h3",null,"Chibueze Onyenemezu"),r.a.createElement("p",null,"Software Engineer"),r.a.createElement(s.default,null),r.a.createElement("p",{id:"blurb"},"I love to build and create. Whether it's a program or a painting, I enjoy conceptualizing the final product, then spending hours working, researching, and tweaking until I can bask in the glow of my completed vision."),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Interests: "),"Reading, Graphic Design, Drawing, TV & Movies, Comics"))))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(32),s=a.n(i),o=a(31),c=a.n(o),l=a(33),m=a.n(l),g=a(34),p=a.n(g);t.default=function(){return r.a.createElement("div",{className:"detail-container"},r.a.createElement("div",{className:"detail-page"},r.a.createElement("div",{style:{backgroundColor:"red"},className:"box long-image"},r.a.createElement("img",{src:s.a,alt:"Dynasty",className:"long-image"})),r.a.createElement("div",{style:{backgroundColor:"yellow"},className:"box tall-image"},r.a.createElement("img",{src:c.a,alt:"hot dog crop",className:"tall-image"})),r.a.createElement("div",{style:{backgroundColor:"green"},className:"box square-img1"},r.a.createElement("img",{src:m.a,alt:"face",className:"square-img1"})),r.a.createElement("div",{style:{backgroundColor:"blue"},className:"box square-img2"},r.a.createElement("img",{src:p.a,alt:"diamonds",className:"square-img2"}))))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(26),s=a(23),o=a(27),c=a(6),l=a(28);t.default=function(e){var t=e.aboutRef,a=e.projectsRef;return r.a.createElement("div",{className:"home-page"},r.a.createElement(i.default,null),r.a.createElement(s.default,{aboutRef:t}),c&&r.a.createElement(o.default,{projectsRef:a,pages:["elf-bot","money_tracker","tv_tracker","crisis"],pages2:["solarcar","robotics","nunights"],projectMedia:c,teamMedia:l}))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);a(44);t.default=function(){return r.a.createElement("div",{className:"landing-page"},r.a.createElement("div",{className:"inner-landing page"}))}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(7),s=a(10);a(45);t.default=function(e){var t=e.projectsRef,a=e.pages,n=(e.pages2,e.projectMedia);e.teamMedia;return r.a.createElement("div",{ref:t,className:"projects-page container page"},r.a.createElement("h1",{className:"title"},'Projects for "Chibu"'),r.a.createElement("div",{className:"squares-body"},r.a.createElement("div",{className:"squares-wrap"},n&&a.map(function(e){return r.a.createElement(i.b,{key:e,to:"/".concat(e)},r.a.createElement(s.default,{image:n[e][0]}))})),r.a.createElement("div",{className:"squares-wrap"}),r.a.createElement("div",{className:"space"})))}},function(e){e.exports={solarcar:[{path:"images/solarcar/car_main.jpg",tag:"The Solar Car",type:"image",ptitle:"NU Solar Car Team"}],robotics:[{path:"images/robotics/logo.jpg",tag:"Robotics Logo",type:"image",ptitle:"NU Robotics Club"}],nunights:[{path:"images/nunights/sandm.jpg",tag:"Smocks and Mocks Event Sign",type:"image",ptitle:"NU Nights"}]}},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2);t.default=function(e){var t=e.children,a=Object(r.j)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[a]),t||null}},function(e,t,a){var n={"./":16,"./App":17,"./App.css":36,"./App.js":17,"./components/Footer":21,"./components/Footer.css":39,"./components/Footer.js":21,"./components/ImageThumbnail":20,"./components/ImageThumbnail.js":20,"./components/Modal":40,"./components/Modal.js":40,"./components/NavBar":18,"./components/NavBar.css":37,"./components/NavBar.js":18,"./components/ProjectSquare":10,"./components/ProjectSquare.js":10,"./components/Suggestions":22,"./components/Suggestions.css":41,"./components/Suggestions.js":22,"./components/WikiHeader":42,"./components/WikiHeader.js":42,"./images/bg1.png":61,"./images/bottomatom.png":62,"./images/crisis/gameover.png":63,"./images/crisis/gameplay1.png":64,"./images/crisis/homescreen.png":65,"./images/crisis/infoscreen.png":66,"./images/crisis/tower.png":67,"./images/elfbot/elf_bot_gif.gif":68,"./images/elfbot/grideyeinfared.jpg":69,"./images/elfbot/mainbot.jpg":70,"./images/elfbot/microbit.jpg":71,"./images/elfbot/ultrasonic.jpg":72,"./images/google/arch.jpg":31,"./images/google/chicago.jpg":32,"./images/google/diamonds.jpeg":73,"./images/google/dynasty.jpg":74,"./images/google/face.png":75,"./images/google/hotdogcrop.jpg":76,"./images/google/nunights.jpg":33,"./images/google/solar.jpg":34,"./images/moneytracker/addtransaction.png":77,"./images/moneytracker/editaccount.png":78,"./images/moneytracker/history.png":79,"./images/moneytracker/homepage.png":80,"./images/nunights/sandm.jpg":81,"./images/robotics/logo.jpg":82,"./images/solarcar/car_main.jpg":83,"./images/tvtracker/homepage.png":84,"./images/tvtracker/newshow.png":85,"./images/tvtracker/selectedshow.png":86,"./index":16,"./index.js":16,"./pages/AboutPage":23,"./pages/AboutPage.css":43,"./pages/AboutPage.js":23,"./pages/GooglePhotos":24,"./pages/GooglePhotos.js":24,"./pages/Home":25,"./pages/Home.js":25,"./pages/LandingPage":26,"./pages/LandingPage.css":44,"./pages/LandingPage.js":26,"./pages/ProjectsPage":27,"./pages/ProjectsPage.css":45,"./pages/ProjectsPage.js":27,"./pages/ScrollToTop":29,"./pages/ScrollToTop.js":29,"./pages/ShoppingPage":19,"./pages/ShoppingPage.css":38,"./pages/ShoppingPage.js":19,"./pages/WikipediaPage":46,"./pages/WikipediaPage.js":46,"./resources/project_data":12,"./resources/project_data.json":12,"./resources/project_images":6,"./resources/project_images.json":6,"./resources/team_images":28,"./resources/team_images.json":28};function r(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=30},function(e,t,a){e.exports=a.p+"static/media/arch.5d2f791f.jpg"},function(e,t,a){e.exports=a.p+"static/media/chicago.31a3f853.jpg"},function(e,t,a){e.exports=a.p+"static/media/nunights.194b557f.jpg"},function(e,t,a){e.exports=a.p+"static/media/solar.e7e90983.jpg"},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);t.default=function(e){var t=e.clickedImg;return r.a.createElement(r.a.Fragment,null,{clickedImg:t})}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);t.default=function(){return r.a.createElement("div",null,"WikiHeader")}},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);t.default=function(){return r.a.createElement("div",null,"WikipediaPage")}},,,,,,function(e,t,a){e.exports=a(16)},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bg1.44b3c210.png"},function(e,t,a){e.exports=a.p+"static/media/bottomatom.cfb2eb07.png"},function(e,t,a){e.exports=a.p+"static/media/gameover.7627425d.png"},function(e,t,a){e.exports=a.p+"static/media/gameplay1.b310de69.png"},function(e,t,a){e.exports=a.p+"static/media/homescreen.d88af533.png"},function(e,t,a){e.exports=a.p+"static/media/infoscreen.6934abb0.png"},function(e,t,a){e.exports=a.p+"static/media/tower.89e37b46.png"},function(e,t,a){e.exports=a.p+"static/media/elf_bot_gif.17e52899.gif"},function(e,t,a){e.exports=a.p+"static/media/grideyeinfared.8f5699a5.jpg"},function(e,t,a){e.exports=a.p+"static/media/mainbot.4bc98128.jpg"},function(e,t,a){e.exports=a.p+"static/media/microbit.328b21e6.jpg"},function(e,t,a){e.exports=a.p+"static/media/ultrasonic.eb199bfc.jpg"},function(e,t,a){e.exports=a.p+"static/media/diamonds.983684e8.jpeg"},function(e,t,a){e.exports=a.p+"static/media/dynasty.dee0d339.jpg"},function(e,t,a){e.exports=a.p+"static/media/face.c596336a.png"},function(e,t,a){e.exports=a.p+"static/media/hotdogcrop.6dfb6cec.jpg"},function(e,t,a){e.exports=a.p+"static/media/addtransaction.c7ad0948.png"},function(e,t,a){e.exports=a.p+"static/media/editaccount.51cba7a3.png"},function(e,t,a){e.exports=a.p+"static/media/history.086d7bd6.png"},function(e,t,a){e.exports=a.p+"static/media/homepage.522716fd.png"},function(e,t,a){e.exports=a.p+"static/media/sandm.1c93cbb6.jpg"},function(e,t,a){e.exports=a.p+"static/media/logo.bef7e849.jpg"},function(e,t,a){e.exports=a.p+"static/media/car_main.50d3f7cf.jpg"},function(e,t,a){e.exports=a.p+"static/media/homepage.49ebf84f.png"},function(e,t,a){e.exports=a.p+"static/media/newshow.05454951.png"},function(e,t,a){e.exports=a.p+"static/media/selectedshow.19e024b2.png"}],[[52,1,2]]]);
//# sourceMappingURL=main.0101cb6a.chunk.js.map