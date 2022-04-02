import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Inventory from "../components/Inventory";
import fetchProductoIds from "../redux/actions/crearProductoActions";

const Inventario = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductoIds());
    }, [])
    return (
        <div>
            <h1>Inventario</h1>
            <Inventory />
        </div>
    )
}

export default Inventario