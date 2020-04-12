import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";
import NavMenuContainer from "../NavMenu/NavMenu";

const Header = (props) => {
    const showAppInfo = (visible) => {
        props.showAppInfo(visible);
    };

    return (
        <header>
            <a className={'title'} href="/"><h1>Pickolor.</h1></a>
            <NavMenuContainer/>
            <button onClick={() => showAppInfo(props.showInfo)} className="button button--info">?</button>
        </header>
    )
};

const stateToProps = (state) => {
    return {
        showInfo: state.palettePage.showInfo,
    }
};

const HeaderContainer = connect(stateToProps, {showAppInfo})(Header);

export default HeaderContainer;