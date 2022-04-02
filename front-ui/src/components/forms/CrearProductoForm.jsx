import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCustomForm } from "../../customhook/useCustomForm";
import getProductoLastId from "../../redux/reducer/reducerIdProductos";
import genConsecutivo from "../../utils/genConsecutivo";


const CrearProductoForm = () => {

    const [state, setState] = useState(false);
    const [consecutivoState, setConsecutivo] = useState('');    

    const lastId = useSelector((state) => state.getProductoLastId);
    // Genero consecutivo de producto a crear


    useEffect(() => {
        setConsecutivo(genConsecutivo(lastId.lastId));
    }, [lastId])
    

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

        alert(nombreProducto + ' ' + consecutivoState)
        setState(false);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Ingrese Nombre de producto'
                className='form-control mb-2'
                value={nombreProducto}
                name='nombreProducto'
                onChange={handleChange}
            />
            <span>{state && "Nombre requerido"}</span>
            <input 
                type="text" 
                value={consecutivoState} 
                name= 'productoIdentificacion'
                class="left field" 
                readOnly
            />
            <input type='submit' className='btn btn-outline-info'/>
        </form>
    )
}

export default CrearProductoForm