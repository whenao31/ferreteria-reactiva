import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { disminuirProducto } from '../redux/actions/productosAPIActions';
import { removeProductoVolante } from '../redux/actions/volanteCrearActions';

function ProductoItem({productId, nombre, cantidad}) {

    const productosLocal = useSelector((state) => state.productoVolanteReducer).list;
    const dispatch = useDispatch();
    
    const handleClick = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Remover',
            denyButtonText: `No remover`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Eliminado Satisfactoriamente', '', 'success')
            //   dispatch(removeProductoVolante(productId));
                // disminuir cantidad en el backend
              dispatch(disminuirProducto(productId, cantidad))
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
              return;
            }
          })
            
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