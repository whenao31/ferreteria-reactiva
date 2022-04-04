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

const options = [
    { value: 'Crear Proveedor', label: 'Crear Proveedor' },
    { value: 'Crear Producto', label: 'Crear Producto' },
    { value: 'Crear Volante', label: 'Crear Volante' },
];

const Dashboard = () => {

    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        dispatch(fetchProductos());
        dispatch(fetchVolantes());
        dispatch(fetchProductoIds());
    }, [])

    return (
        <>
            
            <h1>Dashboard</h1>
            <div className="App">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <hr />
            {selectedOption ? selectedOption.value === "Crear Proveedor" && <CrearProveedorForm /> : <br/> }
            <hr />
            {selectedOption ? selectedOption.value === "Crear Producto" && <CrearProductoForm />  : <br/> }
            <hr />
            {selectedOption ? selectedOption.value === "Crear Volante" && <CrearVolanteForm />  : <br/> }
            <hr />
            {selectedOption ? selectedOption.value === "Crear Volante" && <ProductoLocalList />  : <br/> }
        </>

    )
}

export default Dashboard