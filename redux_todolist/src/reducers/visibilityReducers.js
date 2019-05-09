import { ActionTypes, FilterTypes } from 'actions/visibilityActions';

export default (state = {
  filter: FilterTypes.SHOW_ALL
}, action) => {
  switch(action.type) {
    case ActionTypes.SET_VISIBILITY:
      {
        const { payload } = action;
        return Object.assign({}, state, {
          filter: payload.filter
        });
      }
    default:
      return state;
  }
}