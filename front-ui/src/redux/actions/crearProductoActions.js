import { BASE_URL } from "../../config";

//tipos para generar Id de nuevo producto
export const FETCH_PRODUCTOSID_REQUEST = 'FETCH_PRODUCTOSID_REQUEST';
export const FETCH_PRODUCTOSID_SUCCESS = 'FETCH_PRODUCTOSID_SUCCESS';
export const FETCH_PRODUCTOSID_FAILURE = 'FETCH_PRODUCTOSID_FAILURE';

//tipos para manejar lista de nuevo producto
export const CREAR_NUEVO_PRODUCTO = 'CREAR_NUEVO_PRODUCTO';
export const ELIMINAR_PRODUCTO_LOCAL = 'ELIMINAR_PRODUCTO_LOCAL'
export const RESET_LISTA_PRODUCTOS_LOCAL = 'RESET_LISTA_PRODUCTOS_LOCAL'

// Actions para generar Id de nuevo prodcuto
export const fetchProductosIDRequest = () => {
    return {
        type: FETCH_PRODUCTOSID_REQUEST
    }
}

export const fetchProductosIDSuccess = (lastId) => {
    return {
        type: FETCH_PRODUCTOSID_SUCCESS,
        payload: lastId
    }
}

export const fetchProductosIDFailure = (error) => {
    return {
        type: FETCH_PRODUCTOSID_FAILURE,
        payload: error
    }
}

//Actions crear nuevo producto
export const manageProductosLocal = (nuevoProducto) => {
    return {
        type: CREAR_NUEVO_PRODUCTO,
        payload: nuevoProducto
    }
}

export const eliminarProductoLocal = (productoIdentificacion) => {
    return {
        type: ELIMINAR_PRODUCTO_LOCAL,
        payload: productoIdentificacion
    }
}

export const resetListaProductoLocal = () => {
    return {
        type: RESET_LISTA_PRODUCTOS_LOCAL
    }
} 

//fetch requests 

const fetchProductoIds = () => {
    return async (dispatch) => {
        dispatch(fetchProductosIDRequest());
        fetch(`${BASE_URL}inventario/producto/sortedIds`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(response => {
                return response.json()})
            .then(json => {
              dispatch(fetchProductosIDSuccess(json[0]));
            })
            .catch(error =>{
                dispatch(fetchProductosIDFailure('No encontrado'));
            });
    }
    
}

export default fetchProductoIds;