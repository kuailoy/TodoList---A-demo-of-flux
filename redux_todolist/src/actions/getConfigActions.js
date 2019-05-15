import axios from 'axios';

export const ActionTypes = {
  REQUEST_START: 'GET_CONFIG/REQUEST_START',
  REQUEST_SUCCESS: 'GET_CONFIG/REQUEST_SUCCESS',
  REQUEST_FAILURE:'GET_CONFIG/REQUEST_FAILURE'
}

const requestStart = () => ({
  type: ActionTypes.REQUEST_START,
  payload: {}
});

const requestSuccess = (result) => ({
  type: ActionTypes.REQUEST_SUCCESS,
  payload: {
    result
  }
});

const requestFailure = (error) => ({
  type: ActionTypes.REQUEST_FAILURE,
  payload: {
    error
  }
});

const URL = '/getConfig';

export default {
  loadInitData: () => async dispatch => {
    dispatch(requestStart());

    try {
      const res = await axios.get(URL);
      dispatch(requestSuccess(res.data));
    } catch (error) {
      dispatch(requestFailure(error));
    }
  }
}