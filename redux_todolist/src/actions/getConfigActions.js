import axios from 'axios';

export const ActionTypes = {
  REQUEST_START: 'REQUEST_START',
  REQUEST_SUCCESS: 'REQUEST_SUCCESS',
  REQUEST_FAILURE: 'REQUEST_FAILURE'
}


// 3 normal action creater
const requestStart = () => ({
  type: ActionTypes.REQUEST_START
});

const requestSuccess= result => ({
  type: ActionTypes.REQUEST_SUCCESS,
  payload: {
    result
  }
})

const requestFailure = error => ({
  type: ActionTypes.REQUEST_FAILURE,
  payload: {
    error
  }
})

const URL = '/config';

/**
 * This action creater will return a function
 * Thunk middleware can handle actions which are function type
 */
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