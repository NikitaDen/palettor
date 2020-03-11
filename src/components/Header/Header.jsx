import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";

const Header = (props) => {
    const showAppInfo = (visible) => {
        props.showAppInfo(visible);
    };

    return (
        <div className="header">
            <h1>Palettor.</h1>
            <button onClick={() => showAppInfo(props.showInfo)} className="button button--info">How to use?</button>
        </div>
    )
};

const stateToProps = (state) => {
    return {
        showInfo: state.palettePage.showInfo,
    }
};

const HeaderContainer = connect(stateToProps, {showAppInfo})(Header);

export default HeaderContainer;