import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";
import {NavLink} from "react-router-dom";

const NavMenu = (props) => {
    return (
        <div className='navMenu'>
            <NavLink to='/main'>
                <p>Main</p>
            </NavLink>
            <NavLink to='/palette'>
                <p>Palette</p>
            </NavLink>
            <NavLink to='/gradients'>
                <p>Gradients</p>
            </NavLink>
        </div>
    )
};

const stateToProps = (state) => {
    return {
        showInfo: state.palettePage.showInfo,
    }
};

const NavMenuContainer = connect(stateToProps, {showAppInfo})(NavMenu);

export default NavMenuContainer;