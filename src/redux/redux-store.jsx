import {combineReducers, createStore} from "redux";
import paletteReducer from "./palette-reducer";
import gradientsReducer from "./gradients-reducer";


const reducers = combineReducers({
    palettePage: paletteReducer,
    gradientsPage: gradientsReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;