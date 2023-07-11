import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/users/Home'
import DaftarMenu from '../pages/users/DaftarMenu'

function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/daftar-menu' element={ <DaftarMenu /> } />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router