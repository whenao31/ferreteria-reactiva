export const SET_TABLE_SELECTED_PRODUCTOS = "SET_TABLE_SELECTED_PRODUCTOS";
export const RESET_TABLE_SELECTED_PRODUCTOS = "RESET_TABLE_SELECTED_PRODUCTOS";

// Actions

export const setSelectedTableProductos = (itemList) => {
    return {
        type: SET_TABLE_SELECTED_PRODUCTOS,
        payload: itemList
    }
}