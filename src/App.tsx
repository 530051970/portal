import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import Configure from './pages/configure';



const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/configure' element={<Configure />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
