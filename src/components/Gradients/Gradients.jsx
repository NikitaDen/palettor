import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";
import {NavLink} from "react-router-dom";
import {refreshGradients} from "../../redux/gradients-reducer";

const Gradients = (props) => {
    return (
        <div className='gradients'>
            <div style={{background: props.gradient[0].linearGradient}} className='gradient'>
            </div>
            <div style={{background: props.gradient[0].linearGradient}} className='gradient'>
            </div>
            <div style={{background: props.gradient[0].linearGradient}} className='gradient'>
            </div>
        </div>
    )
};

let mapStateToProps = (state) => ({
    gradient: state.gradientsPage.gradient,
});

const GradientsContainer = connect(mapStateToProps, {refreshGradients})(Gradients);

export default GradientsContainer;