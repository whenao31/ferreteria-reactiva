import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Register from './Register'
import Factura from './Factura'
import Inventario from './Inventario'
import Volante from './Volante'

const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Register/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/volante' element = {<Volante />} />
            <Route path='/inventario' element = {<Inventario />} />
            <Route path='/factura' element = {<Factura />} />
        </Routes>
    )
}

export default PageRoutes