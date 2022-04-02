import { FETCH_PRODUCTOSID_REQUEST,
         FETCH_PRODUCTOSID_SUCCESS,
         FETCH_PRODUCTOSID_FAILURE,
         CREAR_NUEVO_PRODUCTO,
        } from '../actions/crearProductoActions'


// InitialState para generar id
const initialStateGenId = {
    loading: false,
    lastId: '',
    error: ''
}

const initialStateNewProd = {
    newList: []
}

const getProductoLastId = (state = initialStateGenId, action) => {
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

export const crearNuevoProducto = (state = initialStateNewProd, action) => {
    switch(action.type) {
        case CREAR_NUEVO_PRODUCTO:
            console.log(action.payload);
            console.log(state)          
            return {
                newList: [...state.newList, action.payload]
            }
        default: return state
    }
};

export default getProductoLastId