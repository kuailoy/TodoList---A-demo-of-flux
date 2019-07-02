import { ActionTypes as visibilityActionTypes, FilterTypes } from 'actions/visibilityActions'; 
import { ActionTypes as GetConfigActionTypes } from 'action/getConfigActions';

export default (state = {
    filter: FilterTypes.SHOW_ALL
}, action) => {
    switch (action.type) {
        case visibilityActionTypes.SET_VISIBILITY: 
            const { payload } = action;
            return Object.assign({}, state, {
                filter: payload.filter
            });
        
        case GetConfigActionTypes.REQUEST_SUCCESS:
            const { payload: {result} } = action;
            return Object.assign({}, state, {
                filter: result.filter
            });

        default: 
            return state;
    }
}