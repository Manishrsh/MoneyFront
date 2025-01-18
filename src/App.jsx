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
import Category from './Componets/CategoryAdd/Category';

function App() {
  

  return (
    <>
   
     <Provider store={store}>
      
   <BrowserRouter>
   <Navbars/>
        <Routes>
          
        <Route path='/' element={<Home/>} />

		      <Route path='/addmoney' element={<Moneyadd/>} />
          <Route path='/expence' element={<Expence/>} />
          <Route path='/expenceall' element={<AllExpence/>} />
          <Route path='/expencealldatefor' element={<ExpenceDatefor/>} />
          <Route path = '/addcategory' element={<Category/>} />


        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
