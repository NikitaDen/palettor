import React from "react";
import {connect} from "react-redux";
import {lockColor, refreshPalette} from "../../redux/palette-reducer";
import PaletteItem from "./PaletteItem/PaletteItem";
import Interactions from "./Interactions/Interactions";

const Palette = (props) => {
    return (
        <div>
            <PaletteItem {...props}/>
            <Interactions {...props} />
        </div>
    )
};

let stateToProps = (state) => ({
    palette: state.palettePage.palette,
    locked: state.palettePage.locked,
});

const PaletteContainer = connect(stateToProps, {refreshPalette, lockColor})(Palette);

export default PaletteContainer;