import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProductoVolante } from '../redux/actions/volanteCrearActions';

function ProductoItem({productId, nombre, cantidad}) {

    const productosLocal = useSelector((state) => state.productoVolanteReducer).list;
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(removeProductoVolante(productId));    
    }

    return (
        <li className='list-group-item d-flex-justify-conten-between align-items-start'>
            <div className='ms-2 me-auto'>
                <div className='fw-bold'>{`${productId} x ${cantidad} unidades`}</div>
            </div>
            <p>{nombre}</p>
            <div>
                <button className='btn btn-warning' onClick={handleClick}>Eliminar</button>
            </div>
        </li>
    )
}

export default ProductoItem