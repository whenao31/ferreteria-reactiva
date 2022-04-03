import { 
    FETCH_PRODUCTOS_REQUEST,
    FETCH_PRODUCTOS_SUCCESS,
    FETCH_PRODUCTOS_FAILURE,
    AUMENTAR_CANTIDAD_PRODUCTO_REQUEST,
    AUMENTAR_CANTIDAD_PRODUCTO_SUCCESS,
    AUMENTAR_CANTIDAD_PRODUCTO_FAILURE
} from "../actions/productosAPIActions"

const initialState = {
    loading: false,
    list: [],
    error: ''
}
const initialSumarState = {
    loading: false,
    item: {},
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

export const aumentarCantidadProducto = (state = initialSumarState, action) => {
    switch(action.type) {
        case AUMENTAR_CANTIDAD_PRODUCTO_REQUEST:
            return {
                ...state, loading: true
            }
        case AUMENTAR_CANTIDAD_PRODUCTO_SUCCESS:
            return {
                loading: false,
                item: action.payload,
                error: ''
            }
        case AUMENTAR_CANTIDAD_PRODUCTO_FAILURE:
            return {
                loading: false,
                item: {},
                error: action.payload
            }
        default: return state
    }
}

export default getProductos;