import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useCustomForm } from "../../customhook/useCustomForm";
import { manageProductosLocal } from "../../redux/actions/crearProductoActions";
import genConsecutivo from "../../utils/genConsecutivo";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { createProductos } from "../../redux/actions/productosAPIActions";


const CrearProductoForm = () => {

    const [state, setState] = useState(false);
    const [consecutivoState, setConsecutivo] = useState('');
    
    //Dispacth para manejar nuevos productos
    const dispatch = useDispatch();

    const lastId = useSelector((state) => state.getProductoLastId);
    const newProductList = useSelector((state) => state.manageProductosLocal);

    useEffect(() => {
        newProductList.newList.length === 0 ?
        setConsecutivo(genConsecutivo(lastId.lastId)) :
        setConsecutivo(
            genConsecutivo(newProductList.newList[newProductList.newList.length - 1].productoIdentificacion)
            );
    }, [lastId, newProductList ])    

    // Control del input nombreProducto
    const [inputs, handleChange, reset] = useCustomForm({
        nombreProducto: "",
    });

    const {nombreProducto, } = inputs;

    // Control del input select cantidad
    const [cantidadMaxProducto, handleCantidadMaxChange, resetCantidadMax] = useCustomForm({
        cantidadMaxima: "",
    });

    const {cantidadMaxima, } = cantidadMaxProducto;

    // Control del input select cantidad
    const [cantidadMinProducto, handleCantidadMinChange, resetCantidadMin] = useCustomForm({
        cantidadMinima: "",
    });

    const {cantidadMinima, } = cantidadMinProducto;

    const handleSubmit = (event) => {
        event.preventDefault();

        if(cantidadMaxima < 100 ){
            Swal.fire({
                icon: 'error',
                title: 'Validar...',
                text: 'La cantidad maxima debe ser mayor a 100',
              })
              return ;
        }
        if(cantidadMinima < 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Validar...',
                text: 'La cantidad debe ser mayor o igual a 0',
              })
              return ;
        }
        if (!nombreProducto.trim()){
            setState(true);
            return;         
        }
        console.log(consecutivoState);
        const body = {
            transaccion: "PRODUCTO",
            productoIdentificacion: consecutivoState,
            nombreProducto: nombreProducto,
            cantidadMaxima: cantidadMaxima,
            cantidadMinima: cantidadMinima
        }
        console.log(JSON.stringify(body));

        dispatch(createProductos(body))

        dispatch(manageProductosLocal({
            productoIdentificacion: consecutivoState,
            nombreProducto:nombreProducto
        }));
        toast.success("Producto creado");
        setState(false);
        reset();
        resetCantidadMax();
        resetCantidadMin();
    };

    return (
        <div className="container">
            <h2>Crear producto</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Ingrese Nombre de producto'
                    className='form-control mb-2'
                    value={nombreProducto}
                    name='nombreProducto'
                    onChange={handleChange}
                />
                <span className="text-danger text-small d-block mb-2">{state && "Nombre requerido"}</span>
                <input 
                    type="text" 
                    value={consecutivoState} 
                    name= 'productoIdentificacion'
                    className="left field" 
                    readOnly
                />
                <label>
                    Cantidad maxima(un.)
                    <input
                        name="cantidadMaxima"
                        type="number"
                        id="cantidad"
                        value={cantidadMaxima}
                        placeholder="Cantidad maxima"
                        className="input-cantidad ml-2 mt-2"
                        onChange={handleCantidadMaxChange}
                    />
                </label>
                <label>
                    Cantidad minima(un.)
                    <input
                        name="cantidadMinima"
                        type="number"
                        id="cantidadMinima"
                        value={cantidadMinima}
                        placeholder="Cantidad minima"
                        className="input-cantidad ml-2 mt-2"
                        onChange={handleCantidadMinChange}
                    />
                </label>
                <input type='submit' className='btn btn-outline-info'/>
                <ToastContainer autoClose={500} />
            </form>
        </div>
    )
}

export default CrearProductoForm