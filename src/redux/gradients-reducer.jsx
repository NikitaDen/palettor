const REFRESH_GRADIENT = 'REFRESH_GRADIENT';

function rgba() {
    return `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`
}

function addRgba() {
    let i = Math.ceil(Math.random() * 3);
    switch (i) {
        case 1:
        case 2:
            return `${rgba()}, ${rgba()}`;
        case 3:
            return `${rgba()}, ${rgba()}, ${rgba()}`;
    }
}

const initialState = {
    gradient: [
        {linearGradient: `linear-gradient(${Math.ceil(Math.random() * 360)}deg, ${addRgba()}`, id: 1},
        {linearGradient: `linear-gradient(${Math.ceil(Math.random() * 360)}deg, ${addRgba()}`, id: 3},
        {linearGradient: `linear-gradient(${Math.ceil(Math.random() * 360)}deg, ${addRgba()}`, id: 2},
    ]
};

const gradientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_GRADIENT:
            return {
                ...state,
            };
    }
    return state;
};

export const refreshGradients = () => ({type: REFRESH_GRADIENT});

export default gradientsReducer;