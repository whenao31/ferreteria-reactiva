import { combineReducers } from "redux";
import getProductos, {aumentarCantidadProducto} from "./reducerAPIProductos";
import selectProductos from "./reducerTableSelectedProducts";
import getProductoLastId, { manageProductosLocal } from './reducerCrearProductos'
import getVolantes, {postVolantes} from "./reducerAPIVolante";
import {crearNuevoProveedor, crearNuevoVolanteId, productoVolanteReducer} from './reducerCrearVolante'

const rootReducers = combineReducers({
    getProductos,
    aumentarCantidadProducto,
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