import React from "react";
import {connect} from "react-redux";
import {showAppInfo} from "../../redux/palette-reducer";
import {NavLink} from "react-router-dom";
import {refreshGradients} from "../../redux/gradients-reducer";

const Gradients = (props) => {
    return (
        <div className='gradients'>
            {props.gradient.map(item => {
                return (
                    <div>
                        <div style={{background: item.linearGradient}} className='gradient'>
                        </div>
                        <span>{item.linearGradient}</span>
                    </div>
                )
            })}
            <button className='button button--gradient' onClick={props.refreshGradients}>Change</button>
        </div>
    )
};

let mapStateToProps = (state) => ({
    gradient: state.gradientsPage.gradient,
});

const GradientsContainer = connect(mapStateToProps, {refreshGradients})(Gradients);

export default GradientsContainer;