import { FETCH_VOLANTES_REQUEST, FETCH_VOLANTES_SUCCESS, FETCH_VOLANTES_FAILURE } from "../actions/volanteAPIActions"

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

export default getVolantes;