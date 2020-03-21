import React from 'react';
import './assets/styles/styles.scss'
import Header from "./components/Header/Header";
import PaletteContainer from "./components/Palette/Palette";
import Info from "./components/Info/Info";
import NavMenuContainer from "./components/NavMenu/NavMenu";
import {Route} from "react-router-dom";
import MainContainer from "./components/Main/Main";
import GradientsContainer from "./components/Gradients/Gradients";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavMenuContainer/>
            <Route path='/palette' render={() => <PaletteContainer/>}/>
            <Route path='/main' render={() => <MainContainer/>}/>
            <Route path='/gradients' render={() => <GradientsContainer/>}/>
            <Info/>
        </div>
    );
}

export default App;
