import { FETCH_PRODUCTOSID_REQUEST,
         FETCH_PRODUCTOSID_SUCCESS,
         FETCH_PRODUCTOSID_FAILURE,
         CREAR_NUEVO_PRODUCTO,
         ELIMINAR_PRODUCTO_LOCAL,
         RESET_LISTA_PRODUCTOS_LOCAL,
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

export const manageProductosLocal = (state = initialStateNewProd, action) => {
    switch(action.type) {
        case CREAR_NUEVO_PRODUCTO:         
            return {
                newList: [...state.newList, action.payload]
            }
        case ELIMINAR_PRODUCTO_LOCAL:
            return {
                newList: state.newList.filter((item) => item.productoIdentificacion !== action.payload )
            }
        case RESET_LISTA_PRODUCTOS_LOCAL:
            return {
                newList: []
            }
        default: return state
    }
};

export default getProductoLastId