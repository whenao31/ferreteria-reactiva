import { BASE_URL } from "../../config";

export const FETCH_PRODUCTOS_REQUEST = 'FETCH_PRODUCTOS_REQUEST';
export const FETCH_PRODUCTOS_SUCCESS = 'FETCH_PRODUCTOS_SUCCESS';
export const FETCH_PRODUCTOS_FAILURE = 'FETCH_PRODUCTOS_FAILURE';

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

export default fetchProductos;