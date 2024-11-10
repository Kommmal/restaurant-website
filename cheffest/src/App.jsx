
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Achievements from './Components/Achievements/Achievements';
import Franchies from './Components/Franchies/Franchies';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {
  return (
 <Router>
  <div className='flex flex-col min-h-[100vh] w-[100%] min-w-full  overflow-x-hidden m-0 p-0'>
  <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/franchies" element={<Franchies />} />
      <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
  <Footer />
      </div>
 </Router>
  );
}

export default App;
