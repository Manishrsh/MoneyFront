import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Moneyadd from './Componets/Moneyadd/Moneyadded'
import Expence from './Componets/ExpenceMoney.jsx/Expence';
import Home from './Componets/HomeCom/Home';


import './App.css'
import AllExpence from './Componets/ExpenceMoney.jsx/AllExpence';
import ExpenceDatefor from './Componets/DateFormatExpenceData/ExpenceDatefor';
import { store } from '../src/Componets/Store/store'
import { Provider } from 'react-redux'
import Navbars from './Componets/Navbar/Navbars';

function App() {
  

  return (
    <div>
      <ThemeProvider theme={theme}>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
		      
          <Route path='/home' element={<div>hi</div>} />
          <Route path='/addmoney' element={<MoneyAdd/>} />
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App
