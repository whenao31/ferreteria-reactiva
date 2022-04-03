import { combineReducers } from "redux";
import getProductos from "./reducerAPIProductos";
import selectProductos from "./reducerTableSelectedProducts";
import getProductoLastId, { manageProductosLocal } from './reducerCrearProductos'
import getVolantes from "./reducerAPIVolante";
import {crearNuevoProveedor, crearNuevoVolanteId, productoVolanteReducer} from './reducerCrearVolante'

const rootReducers = combineReducers({
    getProductos,
    selectProductos,
    getProductoLastId,
    manageProductosLocal,
    getVolantes,
    crearNuevoProveedor,
    crearNuevoVolanteId,
    productoVolanteReducer
});

export default rootReducers;