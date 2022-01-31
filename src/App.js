import './App.css';
import aboutMe from './Component/aboutMe';
import Home from './Component/Home';
import AboutMe from './Component/aboutMe';
import ContactMe from './Component/contactMe';
import Mywork from './Component/mywork';
import NavBar from "./Component/navBar";
import { Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <NavBar />
       <Home />
       <AboutMe />
       <Mywork />
       <ContactMe />
    </div>
  );
}

export default App;
