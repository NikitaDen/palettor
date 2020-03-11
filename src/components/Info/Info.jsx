import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";
import close from "../../assets/images/close.svg";
import list from "../../assets/images/list.svg";

const Info = (props) => {
    if (props.showInfo) {
        return (
            <ul style={{listStyleImage: `url(${list})`}} className="info">
                <button className="button" onClick={() => props.showAppInfo(props.showInfo)}>
                    <img className="button--close" src={close} alt="Close"/>
                </button>
                <li>Tap Generate button to refresh your palette;</li>
                <li>Hover color to see more options;</li>
                <li>By clicking Lock you can lock/unlock favorite colors and continue generate another colors;</li>
                <li>You can copy any color-code to clipboard by clicking it;</li>
                <h3>Let's find palette for you!;</h3>
            </ul>
        )
    }

    return <div/>
};

const stateToProps = (state) => {
    return {
        showInfo: state.palettePage.showInfo,
    }
};

const InfoContainer = connect(stateToProps, {showAppInfo})(Info);
export default InfoContainer;