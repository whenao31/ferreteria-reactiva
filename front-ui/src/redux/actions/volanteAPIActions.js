import { BASE_URL } from "../../config";
import { clearProductoVolante } from "./volanteCrearActions";

export const FETCH_VOLANTES_REQUEST = 'FETCH_VOLANTES_REQUEST';
export const FETCH_VOLANTES_SUCCESS = 'FETCH_VOLANTES_SUCCESS';
export const FETCH_VOLANTES_FAILURE = 'FETCH_VOLANTES_FAILURE';

export const CREATE_VOLANTES_REQUEST = 'CREATE_VOLANTES_REQUEST';
export const CREATE_VOLANTES_SUCCESS = 'CREATE_VOLANTES_SUCCESS';
export const CREATE_VOLANTES_FAILURE = 'CREATE_VOLANTES_FAILURE';

// Actions
export const fetchVolantesRequest = () => {
    return {
        type: FETCH_VOLANTES_REQUEST
    }
}

export const fetchVolantesSuccess = (list) => {
    return {
        type: FETCH_VOLANTES_SUCCESS,
        payload: list
    }
}

export const fetchVolantesFailure = (error) => {
    return {
        type: FETCH_VOLANTES_FAILURE,
        payload: error
    }
}

const fetchVolantes = () => {
    return async (dispatch) => {
        dispatch(fetchVolantesRequest());
        fetch(`${BASE_URL}volante`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(response => {
                return response.json()})
            .then(json => {
              dispatch(fetchVolantesSuccess(json));
            })
            .catch(error =>{
                dispatch(fetchVolantesFailure('No encontrado'));
            });
    }
    
}

export const postVolantesRequest = () => {
    return {
        type: FETCH_VOLANTES_REQUEST
    }
}

export const postVolantesSuccess = (list) => {
    return {
        type: FETCH_VOLANTES_SUCCESS,
        payload: list
    }
}

export const postVolantesFailure = (error) => {
    return {
        type: FETCH_VOLANTES_FAILURE,
        payload: error
    }
}

export const postVolantes = (request) => {
    return async (dispatch) => {
        console.log(request);
        dispatch(postVolantesRequest());
        fetch(`${BASE_URL}volante`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(request), 
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then(response => {
                return response.json()})
            .then(json => {
                dispatch(postVolantesSuccess(json));
                if(json.error === undefined){
                    dispatch(clearProductoVolante())
                }
            })
            .catch(error =>{
                dispatch(postVolantesFailure('No encontrado'));
            });
    }
    
}


export default fetchVolantes;