export const FETCH_PRODUCTOS_REQUEST = 'FETCH_PRODUCTOS_REQUEST';
export const FETCH_PRODUCTOS_SUCCESS = 'FETCH_PRODUCTOS_SUCCESS';
export const FETCH_PRODUCTOS_FAILURE = 'FETCH_PRODUCTOS_FAILURE';

// Actions
export const fetchProductosRequest = () => {
    return {
        type: FETCH_PRODUCTOS_REQUEST
    }
}

export const fetchProductosSuccess = () => {
    return {
        type: FETCH_PRODUCTOS_SUCCESS,
        payload: productList
    }
}

export const fetchProductosFailure = () => {
    return {
        type: FETCH_PRODUCTOS_FAILURE,
        payload: error
    }
}

const fetchProductos = () => {
    return (dispatch) => {
        // fetch(process.env.REACT_APP_BASE_URL, {
        //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     })
        //     .then(response => response.json())
        //     .then(json => {
        //         setCharacters(json.results);
        //       dispatch({ type: searchTypes.REQUEST_ALL_RESULT, payload: json.results });
        //     })
    }
    
}
