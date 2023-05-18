import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import { Sale } from '../pages/Sale'
import Error404 from '../pages/Error404'
import Dashboard from '../pages/DashBoard'

function Path() {
  return (
    <BrowserRouter >
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sale" element={<Sale/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/*" element={<Error404/>} />
        </Routes>
    </BrowserRouter >
  )
}

export default Path