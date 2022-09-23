import React from 'react';
import DomManipullator from '../_pages/DomManipuillator';
import Home from '../_pages/Home';
import NavBar from '../_components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-to-react-manipullator-dom" element={<DomManipullator />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
