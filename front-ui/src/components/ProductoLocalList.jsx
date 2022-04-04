import React from 'react'
import { useSelector } from 'react-redux'
import { separarIdNombre } from '../utils/separateIdNombreProducto';
import ProductoItem from './ProductoItem';

const ProductoLocalList = () => {

    const productosLocal = useSelector((state) => state.productoVolanteReducer).list;


  return (
    <>
        <h3>Lista productos agregados</h3>
        <ul className='list-group list-group-numbered mt-2'>
        {
            productosLocal.map((item) => {
                const separacion = separarIdNombre(item.productoIdentificacion);
                return <ProductoItem key={separacion[0]} productId={separacion[0]} nombre={separacion[1]} cantidad={item.cantidad}  />
                {/* // return <li key={separacion[0]}>{`${separacion[0]} - ${separacion[1]} - ${item.cantidad}`}</li> */}
            })
        }
        </ul>
        
    </>
  )
}

export default ProductoLocalList