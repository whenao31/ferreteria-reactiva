import { combineReducers } from "redux";
import getProductos, {createProductoReducer, aumentarCantidadProducto, disminuirCantidadProducto} from "./reducerAPIProductos";
import selectProductos from "./reducerTableSelectedProducts";
import getProductoLastId, { manageProductosLocal } from './reducerCrearProductos'
import getVolantes, {postVolantes} from "./reducerAPIVolante";
import {crearNuevoProveedor, crearNuevoVolanteId, productoVolanteReducer} from './reducerCrearVolante'

const rootReducers = combineReducers({
    getProductos,
    aumentarCantidadProducto,
    disminuirCantidadProducto,
    createProductoReducer,
    selectProductos,
    getProductoLastId,
    manageProductosLocal,
    getVolantes,
    postVolantes,
    crearNuevoProveedor,
    crearNuevoVolanteId,
    productoVolanteReducer
});

export default rootReducers;