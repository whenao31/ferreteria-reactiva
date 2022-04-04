import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useCustomForm } from "../../customhook/useCustomForm";
import genConsecutivo from "../../utils/genConsecutivo";
import "react-toastify/dist/ReactToastify.css";
import { crearNuevoProveedor } from "../../redux/actions/volanteCrearActions";


const CrearProveedorForm = () => {

    const [state, setState] = useState(false);
    const [consecutivoState, setConsecutivo] = useState('PROV-0001');
    
    //Dispacth para manejar nuevos proveedors
    const dispatch = useDispatch();

    const volantes = useSelector((state) => state.getVolantes);
    const stateProveedores = useSelector((state) => state.crearNuevoProveedor).newList;

    useEffect(() => {
        try{
                if(stateProveedores.length < 1){
                    volantes.list
                    .sort((a,b) => a.volanteIdentificacion < b.volanteIdentificacion ? 1 : -1)
                    .map(vol => {
                        dispatch(crearNuevoProveedor({
                        proveedorIdentificacion: vol.proveedorIdentificacion,
                        nombreProveedor:vol.nombreProveedor
                    }))
                })
            }
            setConsecutivo(genConsecutivo(stateProveedores[stateProveedores.length - 1].proveedorIdentificacion));
        }catch(error){
            console.error(error)
        }
    }, [volantes, stateProveedores])    

    // Control del input nombreProveedor
    const [inputs, handleChange, reset] = useCustomForm({
        nombreProveedor: "",
    });

    const {nombreProveedor, } = inputs;

    const handleSubmit = (event) => {
        

        event.preventDefault();
        if (!nombreProveedor.trim()){
            setState(true);
            return;         
        }
        dispatch(crearNuevoProveedor({
            proveedorIdentificacion: consecutivoState,
            nombreProveedor:nombreProveedor
        }));
        toast.success("Proveedor creado");
        setState(false);
        reset();
    };

    return (
        <div className="container">
            <h2>Crear proveedor</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Ingrese Nombre de proveedor'
                    className='form-control mb-2'
                    value={nombreProveedor}
                    name='nombreProveedor'
                    onChange={handleChange}
                />
                <span className="text-danger text-small d-block mb-2">{state && "Nombre requerido"}</span>
                <input 
                    type="text" 
                    value={consecutivoState} 
                    name= 'proveedorIdentificacion'
                    className="left field" 
                    readOnly
                />
                <input type='submit' className='btn btn-outline-info'/>
                <ToastContainer autoClose={500} />
            </form>
        </div>
    )
}

export default CrearProveedorForm