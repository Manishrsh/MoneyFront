import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      
      
      <BrowserRouter>
        <Routes>
		      <Route path='/' element={<div>hi</div>} />
          <Route path='/home' element={<div>hi</div>} />
          

        </Routes>
      </BrowserRouter>
    
    </div>

  );
}

export default App;
