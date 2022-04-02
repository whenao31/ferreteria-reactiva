import React, { useEffect } from "react";
import Inventory from "../components/Inventory";
import Volante from "../components/Volantes";
import CrearProductoForm from "../components/forms/CrearProductoForm";
import { useDispatch } from "react-redux";
import fetchProductoIds from "../redux/actions/productosIdActions";

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductoIds());
    }, [])

    return(
        <>
            <h1>Dashboard</h1>
            <Inventory />
            <Volante />
            <hr/>
            <CrearProductoForm />
        </>
        
    )
}

export default Dashboard