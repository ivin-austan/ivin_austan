import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import "./styles.css";
import Experiences from "./experiences";
import MySkills from "./Skills";
import Footer from "./Footer";
import Achievements from "./Achievements";
import Projects from "./Projects";
import About from "./About";
import ReactGA from 'react-ga4';
import { useEffect } from "react";
ReactGA.initialize('G-4X6SK1YDXC');

const App = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <div className="content">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Content />
              <MySkills />
              <Experiences />
              <Achievements />
              <Footer />
            </div>
          }
        />
        <Route path="projects" element={<Projects />} />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer/>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
