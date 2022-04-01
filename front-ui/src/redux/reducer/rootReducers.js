import { combineReducers } from "redux";
import getProductos from "./reducerProductos";

const rootReducers = combineReducers({
    getProductos,
});

export default rootReducers;