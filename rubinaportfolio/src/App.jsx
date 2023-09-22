import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Works } from './components';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Paintings" />
      </Routes>
      <div className='relative z-0 bg-[#FF66C4]'>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500;'>
          <Navbar />
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
