import Header from "./Header";
import Content from "./Content";
import "./styles.css";
import Experiences from "./experiences";
import MySkills from "./Skills";
import Footer from "./Footer";
import Achievements from "./Achievements";

const App = () => {
  return (
    <div className="content">
      <Header/>
      <Content/>
      <MySkills/>
      <Experiences/>
      <Achievements/>
      <Footer/>
    </div>
  );
};

export default App;
