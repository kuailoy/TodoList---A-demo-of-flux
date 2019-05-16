import { ActionTypes } from 'actions/getConfigActions';

export default (state = {
  isLoading: false,
  isSuccess: false,
  isFail: false
}, action) => {

  switch (action.type) {
    case ActionTypes.REQUEST_START:
    console.log('reducer start')
      {
        return Object.assign({}, state, {
          isLoading: true,
          isSuccess: false,
          isFail: false
        });
      }

    case ActionTypes.REQUEST_SUCCESS:
      {
        console.log('request reducer ')
        return Object.assign({}, state, {
          isLoading: false,
          isSuccess: true,
          isFail: false
        });
      }

    case ActionTypes.REQUEST_FAILURE:
      {console.log('reducer fail' )
        const { payload } = action;
        console.log(payload.error);
        return Object.assign({}, state, {
          isLoading: false,
          isSuccess: false,
          isFail: true
        });
      }

    default:
      return state;
  }
}