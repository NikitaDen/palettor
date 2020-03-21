import React from "react";
import {connect} from "react-redux";
import {refreshGradients} from "../../redux/gradients-reducer";
import {setShowCopied} from "../../redux/palette-reducer";

const Gradients = (props) => {
    const copyColor = (e) => {
        let copyText = e.target;
        copyText.select();
        document.execCommand("copy");
    };

    return (
        <div className='gradients'>
            {props.gradient.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{background: item.linearGradient}} className='gradient'>
                        </div>
                        <input type="text" className="gradient-values"
                               onFocus={() => props.setShowCopied(props.showCopied)}
                               onBlur={() => props.setShowCopied(props.showCopied)}
                               onClick={copyColor}
                               value={item.linearGradient}
                               readOnly={true}/>
                    </div>
                )
            })}
            <button className='button button--gradient' onClick={props.refreshGradients}>Change</button>
        </div>
    )
};

let mapStateToProps = (state) => ({
    gradient: state.gradientsPage.gradient,
    showCopied: state.palettePage.showCopied,
});

const GradientsContainer = connect(mapStateToProps, {refreshGradients, setShowCopied})(Gradients);

export default GradientsContainer;