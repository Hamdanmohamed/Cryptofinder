import React from 'react'
import Home from './components/Home'
import CoinDetails from './components/Coindetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    
    
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
      
  )
}
