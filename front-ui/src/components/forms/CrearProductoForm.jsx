import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useCustomForm } from "../../customhook/useCustomForm";
import { manageProductosLocal } from "../../redux/actions/crearProductoActions";
import genConsecutivo from "../../utils/genConsecutivo";
import "react-toastify/dist/ReactToastify.css";


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

    const handleSubmit = (event) => {
        

        event.preventDefault();
        if (!nombreProducto.trim()){
            setState(true);
            return;         
        }
        dispatch(manageProductosLocal({
            productoIdentificacion: consecutivoState,
            nombreProducto:nombreProducto
        }));
        toast.success("Producto creado");
        setState(false);
        reset();
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
                <input type='submit' className='btn btn-outline-info'/>
                <ToastContainer autoClose={500} />
            </form>
        </div>
    )
}

export default CrearProductoForm