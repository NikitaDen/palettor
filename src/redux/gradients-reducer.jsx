const REFRESH_GRADIENT = 'REFRESH_GRADIENT';

function rgba() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
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
    // linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    gradient: [
        {linearGradient: `linear-gradient(${Math.random() * 360}deg, ${addRgba()}`, id: 1},
    ]
};

const gradientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_GRADIENT:
            return {
                ...state,
                gradient: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}}`
            };
    }
    return state;
};

export const refreshGradients = () => ({type: REFRESH_GRADIENT});

export default gradientsReducer;