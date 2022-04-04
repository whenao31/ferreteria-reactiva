import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CrearProductoForm from "../components/forms/CrearProductoForm";
import CrearProveedorForm from "../components/forms/CrearProveedorForm";
import CrearVolanteForm from "../components/forms/CrearVolanteForm";
import ProductoLocalList from "../components/ProductoLocalList";
import fetchProductoIds from "../redux/actions/crearProductoActions";
import fetchProductos from "../redux/actions/productosAPIActions";
import fetchVolantes from "../redux/actions/volanteAPIActions";
import Select from 'react-select';
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

const options = [
    { value: 'Crear Proveedor', label: 'Crear Proveedor' },
    { value: 'Crear Producto', label: 'Crear Producto' },
    { value: 'Crear Volante', label: 'Crear Volante' },
];

const Dashboard = () => {

    const { user, logout} = useAuth();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        dispatch(fetchProductos());
        dispatch(fetchVolantes());
        dispatch(fetchProductoIds());
    }, [])

    const handleLogout = async () => {
        await logout();
        navigate('/login')
    }

    return (
        <>

            <h1 className="tex-center">FerreTech - Tablero de Control</h1>
            <div className="col-md-12 text-right">
            {user.email !== null &&
                <div style={{fontSize:"30px", color:"orange"}}>
                    <button
                    className="btn btn-outline-warning me-2"
                    onClick={handleLogout}
                    >
                    Cerrar Sesion
                    </button>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            
                </div>

                
            }
            </div>
            
            
            <div className="mt-3">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            {selectedOption ? selectedOption.value === "Crear Proveedor" && <CrearProveedorForm /> : <br />}
            {selectedOption ? selectedOption.value === "Crear Producto" && <CrearProductoForm /> : <br />}
            {selectedOption ? selectedOption.value === "Crear Volante" && <CrearVolanteForm /> : <br />}
            {selectedOption ? selectedOption.value === "Crear Volante" && <ProductoLocalList /> : <br />}
        </>

    )
}

export default Dashboard