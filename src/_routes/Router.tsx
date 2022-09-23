import React from 'react';
import DomManipullator from '../_pages/DomManipuillator';
import Home from '../_pages/Home';
import NavBar from '../_components/NavBar/NavBar';
import Cors from '../_pages/Cors';
import Struct from '../_pages/Struct';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-to-react-manipullator-dom" element={<DomManipullator />} />
          <Route path="/cors" element={<Cors />} />
          <Route path="/struct" element={<Struct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
