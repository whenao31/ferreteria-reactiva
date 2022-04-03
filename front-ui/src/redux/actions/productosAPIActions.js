import { BASE_URL } from "../../config";

export const FETCH_PRODUCTOS_REQUEST = 'FETCH_PRODUCTOS_REQUEST';
export const FETCH_PRODUCTOS_SUCCESS = 'FETCH_PRODUCTOS_SUCCESS';
export const FETCH_PRODUCTOS_FAILURE = 'FETCH_PRODUCTOS_FAILURE';

export const AUMENTAR_CANTIDAD_PRODUCTO_REQUEST = 'AUMENTAR_CANTIDAD_PRODUCTO_REQUEST'
export const AUMENTAR_CANTIDAD_PRODUCTO_SUCCESS = 'AUMENTAR_CANTIDAD_PRODUCTO_SUCCESS'
export const AUMENTAR_CANTIDAD_PRODUCTO_FAILURE = 'AUMENTAR_CANTIDAD_PRODUCTO_FAILURE'

export const DISMINUIR_CANTIDAD_PRODUCTO_REQUEST = 'DISMINUIR_CANTIDAD_PRODUCTO_REQUEST'
export const DISMINUIR_CANTIDAD_PRODUCTO_SUCCESS = 'DISMINIUR_CANTIDAD_PRODUCTO_SUCCESS'
export const DISMINUIR_CANTIDAD_PRODUCTO_FAILURE = 'DISMINUIR_CANTIDAD_PRODUCTO_FAILURE'


// Actions
export const fetchProductosRequest = () => {
    return {
        type: FETCH_PRODUCTOS_REQUEST
    }
}

export const fetchProductosSuccess = (list) => {
    return {
        type: FETCH_PRODUCTOS_SUCCESS,
        payload: list
    }
}

export const fetchProductosFailure = (error) => {
    return {
        type: FETCH_PRODUCTOS_FAILURE,
        payload: error
    }
}

const fetchProductos = () => {
    return async (dispatch) => {
        dispatch(fetchProductosRequest());
        fetch(`${BASE_URL}inventario/producto`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(response => {
                return response.json()})
            .then(json => {
              dispatch(fetchProductosSuccess(json));
            })
            .catch(error =>{
                dispatch(fetchProductosFailure('No encontrado'));
            });
    }
    
}

// Actions
export const aumentarProductoRequest = () => {
    return {
        type: AUMENTAR_CANTIDAD_PRODUCTO_REQUEST,
    }
}

export const aumentarProductoSuccess = (producto) => {
    return {
        type: AUMENTAR_CANTIDAD_PRODUCTO_SUCCESS,
        payload: producto
    }
}

export const aumentarProductoFailure = (error) => {
    return {
        type: AUMENTAR_CANTIDAD_PRODUCTO_FAILURE,
        payload: error
    }
}

export const aumentarProducto = (productoIdentificacion, cantidad) => {
    return async (dispatch) => {
        dispatch(aumentarProductoRequest());
        fetch(`${BASE_URL}inventario/producto/${productoIdentificacion}/add/${cantidad}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(response => {
                return response.json()})
            .then(json => {
              dispatch(aumentarProductoSuccess(json));
            })
            .catch(error =>{
                dispatch(aumentarProductoFailure('No encontrado'));
            });
    }
    
}

// Actions
export const disminuirProductoRequest = () => {
    return {
        type: DISMINUIR_CANTIDAD_PRODUCTO_REQUEST,
    }
}

export const disminuirProductoSuccess = (producto) => {
    return {
        type: DISMINUIR_CANTIDAD_PRODUCTO_SUCCESS,
        payload: producto
    }
}

export const disminuirProductoFailure = (error) => {
    return {
        type: DISMINUIR_CANTIDAD_PRODUCTO_FAILURE,
        payload: error
    }
}

export const disminuirProducto = (productoIdentificacion, cantidad) => {
    return async (dispatch) => {
        dispatch(disminuirProductoRequest());
        fetch(`${BASE_URL}inventario/producto/${productoIdentificacion}/subtract/${cantidad}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(response => {
                return response.json()})
            .then(json => {
              dispatch(disminuirProductoSuccess(json));
            })
            .catch(error =>{
                dispatch(disminuirProductoFailure('No encontrado'));
            });
    }
    
}


export default fetchProductos;