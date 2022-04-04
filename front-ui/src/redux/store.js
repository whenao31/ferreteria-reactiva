import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //no usar en produccion
import thunk from "redux-thunk";
import rootReducers from "./reducer/rootReducers";


const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;