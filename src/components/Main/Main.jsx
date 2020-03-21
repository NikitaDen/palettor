import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";
import {NavLink} from "react-router-dom";

const Main = (props) => {
    return (
        <div className='Main'>
            <h1>Hello!</h1>
        </div>
    )
};

const stateToProps = (state) => {
    return {
        showInfo: state.palettePage.showInfo,
    }
};

const MainContainer = connect(stateToProps, {showAppInfo})(Main);

export default MainContainer;