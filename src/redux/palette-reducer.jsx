const REFRESH_PALETTE = 'REFRESH_PALETTE';
const LOCK_COLOR = 'LOCK_COLOR';
const SHOW_INFO = 'SHOW_INFO';
const SHOW_COPIED = 'SHOW_COPIED';

const initialState = {
    palette: [
        {color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, locked: false, id: 1},
        {color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, locked: false, id: 2},
        {color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, locked: false, id: 3},
        {color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, locked: false, id: 4},
        {color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, locked: false, id: 5},
    ],
    showInfo: false,
    showCopied: false,
};

const paletteReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_PALETTE:
            return {
                ...state,
                palette: state.palette.map(color => {
                    if (color.locked === false) {
                        return {
                            ...color,
                            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
                        };
                    }
                    return color;
                })
            };
        case LOCK_COLOR:
            return {
                ...state,
                palette: state.palette.map(color => {
                    if (action.colorId === color.id) {
                        return {
                            ...color,
                            locked: !action.locked,
                        }
                    }
                    return color;
                })
            };
        case SHOW_INFO:
            return {
                ...state,
                showInfo: !action.visible,
            };
        case SHOW_COPIED:
            return {
                ...state,
                showCopied: !action.showCopied,
            };
    }
    return state;
};

export const refreshPalette = (palette, locked) => ({type: REFRESH_PALETTE, palette, locked});
export const lockColor = (locked, colorId) => ({type: LOCK_COLOR, locked, colorId});
export const showAppInfo = (visible) => ({type: SHOW_INFO, visible});
export const setShowCopied = (showCopied) => ({type: SHOW_COPIED, showCopied});

export default paletteReducer;