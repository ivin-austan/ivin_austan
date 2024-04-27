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

const App = () => {
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
        <Route path="/projects" element={<Projects />} />
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
