import {combineReducers, compose, createStore} from "redux";
import filterReducer from "./reducers/filterReducer";
import sortReducer from "./reducers/sortReducer";
import setPizzas from "./reducers/setPizzasReducer";


export const rootReducer=combineReducers({
    filter:filterReducer,
    sortBy:sortReducer,
    setPizzas:setPizzas,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer, composeEnhancers())


export default store