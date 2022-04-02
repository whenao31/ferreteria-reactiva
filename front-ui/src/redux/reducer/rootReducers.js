import { combineReducers } from "redux";
import getProductos from "./reducerProductos";
import selectProductos from "./reducerTableSelectedProducts";
import getProductoLastId from './reducerIdProductos'

const rootReducers = combineReducers({
    getProductos,
    selectProductos,
    getProductoLastId
});

export default rootReducers;