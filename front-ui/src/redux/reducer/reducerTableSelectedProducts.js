import { SET_TABLE_SELECTED_PRODUCTOS, RESET_TABLE_SELECTED_PRODUCTOS } from "../actions/tableSelectionAction";

const initialState = {
    itemList: [],
}

const selectProductos = (state = initialState, action) => {
    switch(action.type) {
        case SET_TABLE_SELECTED_PRODUCTOS:
            return {
                itemList: action.payload
            }
        case RESET_TABLE_SELECTED_PRODUCTOS:
            return initialState
        default: return state
    }
}

export default selectProductos;