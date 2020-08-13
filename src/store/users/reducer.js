import * as actionTypes from './actions';

const initialState = {
    list: {
        loaded: true,
        error: null,
        data: [],
    },
    detail:{
        loaded: true,
        error: null,
        data: [],
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loaded: false
                }
            };

        case actionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loaded: true,
                    data: action.payload
                }
            };

        case actionTypes.GET_DATA_ERROR:
            return {
                ...state,
                list: {
                    ...state.list,
                    loaded: true,
                    error: action.payload
                },
            };


 // * Get Deatail

        case actionTypes.GET_DETAILS_LOADING:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loaded: false
                }
            };

        case actionTypes.GET_DETAILS_SUCCESS:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loaded: true,
                    data: action.payload
                }
            };

        case actionTypes.GET_DETAILS_ERROR:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loaded: true,
                    error: action.payload
                },
            };

        default:
            return state;
    }
};
