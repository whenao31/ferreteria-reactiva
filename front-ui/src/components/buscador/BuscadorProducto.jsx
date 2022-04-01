import React from "react";

const BuscadorProducto = () => {
    return(
        <div className="form-group">
            <label htmlFor="buscar_producto" className="text-white"></label>
            <input type="text" className="form-control" id="buscar_producto" value="PROD001"/>
            <button className="btn btn-primary mt-3">Submit</button>
        </div>
    )
}

export default BuscadorProducto