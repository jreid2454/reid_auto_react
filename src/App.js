import './App.css';
import Header from './Header.js';
import Intro from './Intro.js';
import Featured from './Featured.js';
import Pricing from './Pricing.js';
import About from './About.js';
import Footer from './Footer.js';
import "./Style.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
     <Featured></Featured>
     <Pricing></Pricing>
     <About></About>
     <Footer></Footer>
    </div>
  );
}

export default App;
