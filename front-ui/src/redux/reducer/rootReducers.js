import { combineReducers } from "redux";
import getProductos from "./reducerProductos";
import selectProductos from "./reducerTableSelectedProducts";
import getProductoLastId, { crearNuevoProducto } from './reducerCrearProductos'

const rootReducers = combineReducers({
    getProductos,
    selectProductos,
    getProductoLastId,
    crearNuevoProducto,
});

export default rootReducers;