import {combineReducers, createStore} from "redux";
import paletteReducer from "./palette-reducer";


const reducers = combineReducers({
    palettePage: paletteReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;