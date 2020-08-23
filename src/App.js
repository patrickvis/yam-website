import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/Header";
import ScrollToTop from "./components/other/ScrollToTop";
import HeaderContextProvider from "./contexts/HeaderContext";

// page components
import Home from "./pages/Home";
import About from "./pages/About";
// import Events from "./pages/Events";
import Chapters from "./pages/Chapters";
import Gallery from "./pages/gallery/Gallery";
import Submit from "./pages/gallery/Submit";
import VisualArts from "./pages/gallery/VisualArts";
import Blm from "./pages/gallery/Blm";
import CreativeWriting from "./pages/gallery/CreativeWriting";
import Photography from "./pages/gallery/Photography";
import Music from "./pages/gallery/Music";
import Footer from "./components/Footer";
import Piece from "./components/gallery/Piece";

import { db } from "./data/firebase";
import NewsletterModal from "./components/NewsletterModal";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
    setTimeout(() => {
      document.getElementById("activate-newsletter-modal").click();
    }, 1738);
  };
  // routes
  const routes = [
    {
      path: "/",
      Component: Home,
      props: {
        animationComplete: animationComplete,
        completeAnimation: completeAnimation,
      },
    },
    { path: "/about", Component: About },
    // { path: "/events", Component: Events },
    { path: "/chapters", Component: Chapters },
    { path: "/gallery", Component: Gallery },
    { path: "/gallery/submit", Component: Submit },
    { path: "/gallery/visualarts", Component: VisualArts },
    { path: "/gallery/blm", Component: Blm },
    { path: "/gallery/creativewriting", Component: CreativeWriting },
    { path: "/gallery/photography", Component: Photography },
    { path: "/gallery/music", Component: Music },
  ];

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevent flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });

    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      let wBreakpoint = 500;
      // don't resize for portrait mobile URL bar window height changes
      if (
        !(
          window.innerWidth === dimensions.width &&
          dimensions.width < wBreakpoint
        )
      )
        setTimeout(() => {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
          });
        }, 500);
    });

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <div className="App">
      <ScrollToTop />
      <NewsletterModal db={db} />
      <button
        data-toggle="modal"
        data-target="#newsletterModal"
        id="activate-newsletter-modal"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          height: 0,
        }}
      ></button>
      <HeaderContextProvider>
        <Header />
        <div className="App">
          <Switch>
            {routes.map(({ path, Component, props }) => (
              <Route key={path} exact path={path}>
                <Component {...props} />
              </Route>
            ))}
            <Route path="/gallery">
              <Piece />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </HeaderContextProvider>
    </div>
  );
}

export default App;
