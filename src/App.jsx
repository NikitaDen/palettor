import React from 'react';
import './assets/styles/styles.scss'
import Header from "./components/Header/Header";
import PaletteContainer from "./components/Palette/Palette";
import Info from "./components/Info/Info";
import {Redirect, Route, Switch} from "react-router-dom";
import MainContainer from "./components/Main/Main";
import GradientsContainer from "./components/Gradients/Gradients";
import CopiedAlertContainer from "./components/CopiedAlert/CopiedAlert";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/palette' render={() => <PaletteContainer/>}/>
                <Route path='/main' render={() => <MainContainer/>}/>
                <Route path='/gradients' render={() => <GradientsContainer/>}/>
                <Redirect to={'/main'} />
            </Switch>
            <CopiedAlertContainer/>
            <Info/>
        </div>
    );
}

export default App;
