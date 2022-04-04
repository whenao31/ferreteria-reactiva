import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageProductosLocal } from "../redux/actions/crearProductoActions";
import fetchProductos from "../redux/actions/productosAPIActions";
import ResultadoProducto from "./buscador/ResultadoProducto";

const Inventory = () => {

        const dispatch = useDispatch();
        const productos = useSelector((state) => state.getProductos);

        useEffect(() => {
                dispatch(fetchProductos());
                productos.list.map((prod) => (
                        dispatch(manageProductosLocal({
                                productoIdentificacion: prod.productoIdentificacion,
                                nombreProducto: prod.nombreProducto
                        }))
                ));
        }, []);

        return (
                <>
                        <ResultadoProducto />
                </>
        )
}

export default Inventory;