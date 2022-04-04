import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Register from './Register'
import Factura from './Factura'
import Inventario from './Inventario'
import Volante from './Volante'
import SecuredRoute from '../components/SecuredRoute'

const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Register/>} />
            
            <Route 
                path='/' 
                element={
                    <SecuredRoute>
                        <Dashboard />
                    </SecuredRoute>
                } 
                />
            <Route path='/volante' element = {<Volante />} />
            <Route path='/inventario' element = {<Inventario />} />
            <Route path='/factura' element = {<Factura />} />
             
        </Routes>
    )
}

export default PageRoutes