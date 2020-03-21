import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";
import gradient from "../../assets/images/gradient.svg";
import palette from "../../assets/images/palette.svg";
import {NavLink} from "react-router-dom";


const Main = (props) => {
    return (
        <div className='main'>
            <div>
                <h1>Pickolor.</h1>
                <p>It's your easy way to find color that you want!</p>
            </div>
            <div className="main__options">
                <NavLink to='/palette'>
                    <div className="main__options__item">
                        <img src={palette} alt="palette"/>
                        <p>Choose palette for your project</p>
                    </div>
                </NavLink>
                <NavLink to='/gradients'>
                    <div className="main__options__item">
                        <img src={gradient} alt="gradient"/>
                        <p>Find perfect gradient</p>
                    </div>
                </NavLink>
            </div>
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