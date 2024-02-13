import './App.css';
import { Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection';
import Details from './components/Details';
import Section3 from './components/Section3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Details/>
      <Section3/>
      <Footer/>
      {/* <Routes> */}
          {/* <Route exact path="/" element={<ContactUsForm/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        {/* </Routes> */}
      
    </div>
  );
}

export default App;
