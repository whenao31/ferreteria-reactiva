import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchProductos from "../redux/actions/productosActions";
import ResultadoProducto from "./buscador/ResultadoProducto";

const Inventory = () => {

        const dispatch = useDispatch();            

        useEffect(() => dispatch(fetchProductos()), []);

        return (
                <>
                        <ResultadoProducto />
                </>
        )
}

export default Inventory;