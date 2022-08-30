import './App.css';
import {Route,Routes} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PageHome from './components/PageHome';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path ="/" element ={<PageHome/>}/>
      <Route path ="/about" element ={<About/>}/>
      <Route path="/blog" element ={<Blog/>}/>
      <Route path="/contact" element ={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
