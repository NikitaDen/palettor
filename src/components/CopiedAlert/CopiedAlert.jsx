import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";

const CopiedAlert = (props) => {
    return (
        <div className={'showCopied'} style={props.showCopied ? {animation: 'show 2s ease-in-out'} : {animation: 'none'}}>
            <h2>Copied</h2>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        showCopied: state.palettePage.showCopied,
    }
};

const CopiedAlertContainer = connect(mapStateToProps, {showAppInfo})(CopiedAlert);

export default CopiedAlertContainer;