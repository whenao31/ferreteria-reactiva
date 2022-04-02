import { BASE_URL } from "../../config";

export const FETCH_PRODUCTOSID_REQUEST = 'FETCH_PRODUCTOSID_REQUEST';
export const FETCH_PRODUCTOSID_SUCCESS = 'FETCH_PRODUCTOSID_SUCCESS';
export const FETCH_PRODUCTOSID_FAILURE = 'FETCH_PRODUCTOSID_FAILURE';

// Actions
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