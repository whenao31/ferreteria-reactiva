import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchProductos from "../../redux/actions/productosActions";

const BuscadorProducto = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchProductos()), []);
    
    const onClickHandle = () => {
        dispatch(fetchProductos());
    }

    return(
        <div className="form-group">
            <label htmlFor="buscar_producto" className="text-white"></label>
            <input type="text" className="form-control" id="buscar_producto" value="PROD001"/>
            <button className="btn btn-primary mt-3" onClick={onClickHandle}>Submit</button>
        </div>
    )
}

export default BuscadorProducto