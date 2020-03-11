import React from "react";

const Interactions = (props) => {
    const refreshPalette = (newColors) => {
        props.refreshPalette(newColors);
    };

    const copyColor = (e) => {
        let copyText = e.target;
        copyText.select();
        document.execCommand("copy");
    };

    return (
        <div className='interactions'>
            <button className='button button--refresh' onClick={() => refreshPalette(props.palette)}>Generate</button>
            <input type="text" className="summary-values" onClick={copyColor} value={props.palette.map(color => ' ' + color.color)} readOnly={true}/>
        </div>
    )
};

export default Interactions;