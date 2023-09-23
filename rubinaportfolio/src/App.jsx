import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Paintings, Prints, MMSculptures, Digital, Video, Archive } from './components';





const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#FF66C4]'>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500;'>
          <Navbar />
          <Routes>
            <Route path="/Paintings" element={Paintings} />
            <Route path="/Prints" element={Prints} />
            <Route path="/Mixed_Media_Sculptures" element={MMSculptures} />
            <Route path="/Digital" element={Digital} />
            <Route path="/Video" element={Video} />
            <Route path="/Archive" element={Archive} />
          </Routes>
          <Hero />
        </div>
        <div className='bg-[#004AAD]'>
          <About />
        </div>
        <Experience />

        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
