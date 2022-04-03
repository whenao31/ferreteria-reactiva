import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useCustomForm } from "../../customhook/useCustomForm";
import { manageProductosLocal } from "../../redux/actions/crearProductoActions";
import { addProductoVolante, ADD_PRODUCTO_VOLANTE } from "../../redux/actions/volanteCrearActions";
import { productoVolanteReducer } from "../../redux/reducer/reducerCrearVolante";
import genConsecutivo from "../../utils/genConsecutivo";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const CrearVolanteForm = () => {

// Estados locales
    const [consecutivoState, setConsecutivo] = useState('');

    const dispatch = useDispatch();

    // Acceder a variables del store
    const proveedorCrear = useSelector((state) => state.crearNuevoProveedor);
    const proveedoresList = proveedorCrear.newList;

    const volantesCrearId = useSelector((state) => state.crearNuevoVolanteId).newListId;

    const inventarioLocal = useSelector((state) => state.getProductos).list;
    const listaLocalProductos = useSelector((state) => state.manageProductosLocal).newList;
    const productosVolanteSeleccion = useSelector((state) => state.productoVolanteReducer).list;


    // Control del input select producto
    const [productoSelect, handleSelectChange, resetSelect] = useCustomForm({
        productoIdentificacion: "",
    });
    const {productoIdentificacion} = productoSelect;

    // Control del input select cantidad
    const [cantidadProducto, handleCantidadChange, resetCantidad] = useCustomForm({
        cantidad: "",
    });
    const { cantidad, } = cantidadProducto;

    // Control del input select proveedorId
    const [proveedorId, handleProveedorChange, resetProveedor] = useCustomForm({
        proveedorIdentificacion: "",
    });
    const { proveedorIdentificacion, } = proveedorId;

    useEffect(() => {
      volantesCrearId.length === 0 ?
      setConsecutivo(genConsecutivo("VOL-00")) : 
      setConsecutivo(genConsecutivo(volantesCrearId[volantesCrearId.length -1]));
      if((listaLocalProductos === undefined || listaLocalProductos.length === 0) ){
        inventarioLocal.sort((a,b) => a.productoIdentificacion < b.productoIdentificacion ? 1 : -1)
        .map(item => dispatch(manageProductosLocal({
            productoIdentificacion: item.productoIdentificacion,
            nombreProducto:item.nombreProducto
        })));
      }
    //   return () => {
    //     dispatch(resetNuevoProducto())
    //   }      
    }, [volantesCrearId,])
    
    const submitProductosHandler = (event) => {
        event.preventDefault();
        if(cantidad < 1 ){
            Swal.fire({
                icon: 'error',
                title: 'Validar...',
                text: 'La cantidad del item debe ser mayor a 0',
              })
              return ;
        }
        const itemEnInventario = inventarioLocal.filter(producto => producto.productoIdentificacion === productoIdentificacion.split(';')[0])[0];
        
        if(itemEnInventario !== null){
            console.log(itemEnInventario.cantidad + cantidad);
            if(itemEnInventario.cantidad + parseInt(cantidad) > itemEnInventario.cantidadMaxima){
                const disminuir = itemEnInventario.cantidad + parseInt(cantidad) - itemEnInventario.cantidadMaxima
                Swal.fire({
                    icon: 'error',
                    title: 'Cuidado...',
                    text: `Disminuya la cantidad de items en ${disminuir} para que no sobrepase la cantidad maxima de ${itemEnInventario.cantidadMaxima}`,
                  })
                  return ; 
            }
        }

        dispatch(addProductoVolante({
            productoIdentificacion: productoIdentificacion,
            cantidad: cantidad,
        }))
    }

    const crearVolanteHandler = (event) =>{
        event.preventDefault();
        if (productosVolanteSeleccion.length < 1){
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Debe tener productos en la lista para crear el volante',
              })
              return ;
        }
    }

    return (
        <div className="container">
            <h2>Crear Volante</h2>
            <form onSubmit={submitProductosHandler}>
                <label>
                    Volante No.
                    <input 
                        type="text" 
                        value={consecutivoState}
                        name= 'volanteIdentificacion'
                        className="form-control mb-2 me-2" 
                        readOnly
                    />
                </label>
                <label>
                    Fecha
                    <input 
                        type="text" 
                        value={`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`} 
                        name= 'volanteIdentificacion'
                        className="left field form-control mb-2" 
                        readOnly
                    />
                </label>
                <label>
                    Codigo Proveedor
                    <select 
                        name="proveedorIdentificacion"
                        className="left field" 
                        value={proveedorIdentificacion}
                        onChange={handleProveedorChange}
                    >
                        {proveedoresList.map(el => {
                            return <option value={el.proveedorIdentificacion}>{el.proveedorIdentificacion}</option>
                        })}
                    </select>
                </label>
                <div>
                    <h3>Adicionar productos</h3>
                    <select 
                        name="productoIdentificacion"
                        className="form-select" 
                        value={productoIdentificacion}
                        onChange={handleSelectChange}
                    >
                        {listaLocalProductos.map(el => {
                            return <option value={`${el.productoIdentificacion};${el.nombreProducto}`}>{`${el.productoIdentificacion} - ${el.nombreProducto}`}</option>
                        })}
                    </select>
                    <label>
                        Cantidad(un.)
                        <input
                            name="cantidad"
                            type="number"
                            id="cantidad"
                            value={cantidad}
                            placeholder="Cantidad"
                            className="input-cantidad ml-2 mt-2"
                            onChange={handleCantidadChange}
                        />
                    </label>
                    
                </div>
                <input type="submit" value="Agregar Producto" className="btn btn-outline-info mt-2" />
            </form>
            <div class="col-md-12 text-center">
                <button className='btn btn-primary mt-3' onClick={crearVolanteHandler} >Crear Volante</button>
            </div>
        </div>
        
    )
}

export default CrearVolanteForm