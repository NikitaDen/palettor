import React, {useState} from "react";
import lockImage from "./../../../assets/images/lock.svg";
import unlockImage from "./../../../assets/images/unlock.svg";

const PaletteItem = (props) => {
    let [showButtons, setShowButtons] = useState(false);

    const activateButtons = () => {
        setShowButtons(true);
    };

    const deactivateButtons = () => {
        setShowButtons(false);
    };

    const toggleLockColor = (locked, id) => {
        props.lockColor(locked, id);
    };

    const copyColor = (e) => {
        let copyText = e.target;
        copyText.select();
        document.execCommand("copy");
    };

    return (
        <div className="palette__container">
            {props.palette.map(item => {
                return (
                    <div key={item.id}
                         className="palette__container__item"
                         style={{backgroundColor: item.color}}>
                        <div onMouseEnter={activateButtons}
                             onMouseLeave={deactivateButtons}
                             className="palette__container__buttons"
                             style={showButtons ? {opacity: "1"} : {opacity: "0"}}>
                            <input onClick={copyColor}
                                   readOnly={true} type="text" className='myColor'
                                   onFocus={() => props.setShowCopied(props.showCopied)}
                                   onBlur={() => props.setShowCopied(props.showCopied)}
                                   value={item.color}/>
                            <img onClick={() => toggleLockColor(item.locked, item.id)}
                                 className="button button--lock"
                                 src={item.locked ? unlockImage : lockImage} alt={item.locked ? 'Lock color' : 'Unlock color'}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default PaletteItem;