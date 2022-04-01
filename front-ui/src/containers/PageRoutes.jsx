import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Register from './Register'

const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Register/>} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default PageRoutes