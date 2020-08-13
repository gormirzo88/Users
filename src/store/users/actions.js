import createAction from '../create-action';
import Api from "../../servis/servis";


export const GET_DATA_LOADING = 'GET_DATA_LOADING';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export const GET_DETAILS_LOADING = 'GET_DETAILS_LOADING';
export const GET_DETAILS_ERROR = 'GET_DETAILS_ERROR';
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS';

const getLoading = () => createAction(GET_DATA_LOADING);
const getSuccess = (data) => createAction(GET_DATA_SUCCESS, data);
const getError = (data) => createAction(GET_DATA_ERROR, data);

export const LoadData = (data)=> createAction(GET_DETAILS_LOADING, data )
export const putData = (data)=> createAction( GET_DETAILS_SUCCESS, data )
export const putError = (err)=> createAction( GET_DETAILS_ERROR, err )


export const getData = (dispatch) => (data) => {
    dispatch(getLoading());
    Api.getUsersList(data.server, data.searchName, data.page )
        .then(list => dispatch(getSuccess(list.items)))
        .catch(err => dispatch(getError(err)))
};

