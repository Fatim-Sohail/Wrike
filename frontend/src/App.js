import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUsForm from './components/ContactForm';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/section-2" element={<Section2/>}/>
          <Route exact path="/section-3" element={<Section3/>}/>
          <Route exact path="/contact-form" element={<ContactUsForm/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
