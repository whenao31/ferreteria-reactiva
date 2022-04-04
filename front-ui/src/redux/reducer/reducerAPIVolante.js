import { 
    FETCH_VOLANTES_REQUEST,
    FETCH_VOLANTES_SUCCESS,
    FETCH_VOLANTES_FAILURE,
    CREATE_VOLANTES_REQUEST,
    CREATE_VOLANTES_SUCCESS,
    CREATE_VOLANTES_FAILURE,    
} from "../actions/volanteAPIActions"

const initialState = {
    loading: false,
    list: [],
    error: ''
}

const getVolantes = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_VOLANTES_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_VOLANTES_SUCCESS:
            return {
                loading: false,
                list: action.payload,
                error: ''
            }
        case FETCH_VOLANTES_FAILURE:
            return {
                loading: false,
                list: [],
                error: action.payload
            }
        default: return state
    }
}

export const postVolantes = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_VOLANTES_REQUEST:
            return {
                ...state, loading: true
            }
        case CREATE_VOLANTES_SUCCESS:
            return {
                loading: false,
                list: action.payload,
                error: ''
            }
        case CREATE_VOLANTES_FAILURE:
            return {
                loading: false,
                list: [],
                error: action.payload
            }
        default: return state
    }
}

export default getVolantes;