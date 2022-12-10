import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, redirect, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ShoppingPage from './pages/ShoppingPage';
import ScrollToTop from './pages/ScrollToTop';
import Home from './pages/Home';
import Footer from './components/Footer';
import projects from './resources/project_data.json'
import projectImages from './resources/project_images.json'

function App() {

  const pages = ["elf-bot", "money_tracker", "tv_tracker", "crisis"]

  const [moveBar, setMoveBar] = useState(false);
  // const [fixed, setFixed] = useState(false);

  // THis ref will be connected to the navbar
  const navRef = useRef();
  // const aboutRef = useRef(); // this one to the top of about

  // const changePosition = () => {
  //   const topNav =  navRef.current.offsetTop
  //   const bottomNav = navRef.current.offsetTop + navRef.current.offsetHeight+window.scrollY
  //   const topAbout = aboutRef.current.offsetTop
  //   // console.log(bottomNav)
  //   const s = (topNav + window.scrollY).toString()+"px"
  //   console.log(topAbout)
  //   if(bottomNav >= topAbout && fixed === false) {
  //     console.log(fixed)
  //     navRef.current.style.position = "relative"
  //     navRef.current.style.top = s
  //     setFixed(true)
  //     // setMoveBar(true)
  //   } else if(bottomNav < topAbout && fixed === true) {
  //     console.log(fixed)
  //     navRef.current.style.position = null
  //     navRef.current.style.top = null
  //     setFixed(false)
  //     // setMoveBar(true)
  //   } else if (topNav <= 0) {
  //     navRef.current.style.position = "fixed"
  //     navRef.current.style.top = "0px"
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', changePosition)

  //   return () => {
  //     window.removeEventListener('scroll', changePosition);
  //   };
  // }, [window.scrollY]);

  const aboutRef = useRef();
  const projectsRef = useRef();

  const scrollDown = (ref) => {
    redirect("/#")
    if (ref.current) {
      window.scrollTo({
      top: ref.current.offsetTop - 70,
      behavior: 'smooth',
    });
    }
    
  };

  return (
    <div className='app-div'>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <NavBar navRef={navRef} moveBar={false} scrollDown={scrollDown} aboutRef={aboutRef} projectsRef={projectsRef} />
          <Routes>
            <Route index element={<Home aboutRef={aboutRef} projectsRef={projectsRef} />} />
            {projects && pages &&
              pages.map(page => {
                return (
                  <Route key={page} path={`/${page}`} exact element={<ShoppingPage pages={pages} page={page} allmedia={projectImages} projectData={projects[page]} projectMedia={projectImages[page]} />} />
                )
              })}
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>

  );
}

export default App;
