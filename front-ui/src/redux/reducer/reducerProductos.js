import { FETCH_PRODUCTOS_REQUEST, FETCH_PRODUCTOS_SUCCESS, FETCH_PRODUCTOS_FAILURE } from "../actions/productosActions"

const initialState = {
    loading: false,
    list: [],
    error: ''
}

const getProductos = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTOS_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_PRODUCTOS_SUCCESS:
            return {
                loading: false,
                list: action.payload,
                error: ''
            }
        case FETCH_PRODUCTOS_FAILURE:
            return {
                loading: false,
                list: [],
                error: action.payload
            }
        default: return state
    }
}

export default getProductos;