import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Register from './routes/Register';
import Contact from './routes/Contact';

import Home from './routes/Home'
import Pricing from './routes/Pricing'
import StarTrip from './routes/StarTrip';
import Training from './routes/Training';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/startrip' element={<StarTrip />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;