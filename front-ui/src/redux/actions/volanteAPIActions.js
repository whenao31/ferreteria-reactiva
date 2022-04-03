import { BASE_URL } from "../../config";

export const FETCH_VOLANTES_REQUEST = 'FETCH_VOLANTES_REQUEST';
export const FETCH_VOLANTES_SUCCESS = 'FETCH_VOLANTES_SUCCESS';
export const FETCH_VOLANTES_FAILURE = 'FETCH_VOLANTES_FAILURE';

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

export default fetchVolantes;