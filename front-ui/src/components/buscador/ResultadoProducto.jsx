import React from 'react'

const ResultadoProducto = () => {
    return(
        <div>
            <h3 className="h3 text-white">Resultado: </h3>
            <div className="text-warning">Buscando...</div>
            <div className="text-succes">
                <img src="" alt="" />
                <span>PROD001</span>
            </div>
            <span className='text-danger'>Error</span>
        </div>
    )
}

export default ResultadoProducto;