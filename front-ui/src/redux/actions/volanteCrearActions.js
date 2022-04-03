import { BASE_URL } from "../../config";

//tipos para creacion de nuevo volante
export const CREAR_NUEVO_VOLANTE = 'CREAR_NUEVO_VOLANTE';
export const CREAR_NUEVO_VOLANTEID = "CREAR_NUEVO_VOLANTEID";
//tipos para creacion de nuevo producto
export const CREAR_NUEVO_PROVEEDOR = 'CREAR_NUEVO_PROVEEDOR';
export const ADD_PRODUCTO_VOLANTE = 'ADD_PRODUCTO_VOLANTE';
export const REMOVE_PRODUCTO_VOLANTE = 'REMOVE_PRODUCTO_VOLANTE';


//Actions crear nuevo volante
export const crearNuevoVolante = (nuevoVolante) => {
    return {
        type: CREAR_NUEVO_VOLANTE,
        payload: nuevoVolante
    }
}

//Action para crear proveedor
export const crearNuevoProveedor = (nuevoProveedor) => {
    return {
        type: CREAR_NUEVO_PROVEEDOR,
        payload: nuevoProveedor
    }
}

export const crearVolanteId = (volanteId) => {
    return {
        type: CREAR_NUEVO_VOLANTEID,
        payload: volanteId
    }
}

export const addProductoVolante = (producto) => {
    return {
        type: ADD_PRODUCTO_VOLANTE,
        payload: producto
    }
}

export const removeProductoVolante = (producto) => {
    return {
        type: REMOVE_PRODUCTO_VOLANTE,
        payload: producto
    }
}