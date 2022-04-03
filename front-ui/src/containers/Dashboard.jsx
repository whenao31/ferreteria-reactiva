import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CrearProductoForm from "../components/forms/CrearProductoForm";
import CrearProveedorForm from "../components/forms/CrearProveedorForm";
import CrearVolanteForm from "../components/forms/CrearVolanteForm";
import ProductoLocalList from "../components/ProductoLocalList";
import fetchProductoIds from "../redux/actions/crearProductoActions";
import fetchProductos from "../redux/actions/productosAPIActions";
import fetchVolantes from "../redux/actions/volanteAPIActions";

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductos());
        dispatch(fetchVolantes());
        dispatch(fetchProductoIds());
    }, [])

    return(
        <>
            <h1>Dashboard</h1>
            <hr/>
            <CrearProveedorForm />
            <hr/>
            <CrearProductoForm />
            <hr/>
            <CrearVolanteForm />
            <hr/>
            <ProductoLocalList />
        </>
        
    )
}

export default Dashboard