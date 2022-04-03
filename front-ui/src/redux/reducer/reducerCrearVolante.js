import {
    CREAR_NUEVO_VOLANTE,
    CREAR_NUEVO_VOLANTEID,
    CREAR_NUEVO_PROVEEDOR,
    ADD_PRODUCTO_VOLANTE,
    REMOVE_PRODUCTO_VOLANTE,
} from '../actions/volanteCrearActions'

const initialNuevoProveedor = {
    newList: []
}

const initialStateVolante = {
    list: [],
    newListId: []
}

const initialProductoVolante = {
    list: [],
}

export const crearNuevoProveedor = (state = initialNuevoProveedor, action) => {
    switch(action.type) {
        case CREAR_NUEVO_PROVEEDOR:         
            return {
                newList: [...state.newList, action.payload]
            }
        default: return state
    }
};

export const crearNuevoVolanteId = (state = initialStateVolante, action) => {
    switch(action.type) {
        case CREAR_NUEVO_VOLANTEID:         
            return {
                ...state, newList: [...state.newListId, action.payload]
            }
        default: return state
    }
};

export const productoVolanteReducer = (state = initialProductoVolante, action) => {
    switch(action.type){
        case ADD_PRODUCTO_VOLANTE: {
            return {
                list: [...state.list, action.payload],
            }
        }
        case REMOVE_PRODUCTO_VOLANTE: {
            return {
                list: state.list.filter(item => !item.productoIdentificacion.includes(action.payload)),
            }
        }
        default: return state
    }
}