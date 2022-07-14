import './App.css';
import './style.css';
import Navbars from './components/Navbar'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact'
import Faq from './components/Faq';
import NoPage from './components/NoPage'

import{ BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbars />}>
          <Route path='/home' element={<Navbars />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="FAQ" element={<Faq />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
