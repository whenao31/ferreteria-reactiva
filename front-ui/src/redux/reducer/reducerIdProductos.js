import { FETCH_PRODUCTOSID_REQUEST, FETCH_PRODUCTOSID_SUCCESS, FETCH_PRODUCTOSID_FAILURE} from '../actions/productosIdActions'

const initialState = {
    loading: false,
    lastId: '',
    error: ''
}

const getProductoLastId = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTOSID_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_PRODUCTOSID_SUCCESS:
            return {
                loading: false,
                lastId: action.payload,
                error: ''
            }
        case FETCH_PRODUCTOSID_FAILURE:
            return {
                loading: false,
                lastId: [],
                error: action.payload
            }
        default: return state
    }
}

export default getProductoLastId