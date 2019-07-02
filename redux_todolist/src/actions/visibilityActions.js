export const ActionTypes = {
  SET_VISIBILITY: 'SET_VISIBILITY'
};

export const FilterTypes = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export default {
  setVisibility: filter => ({
    type: ActionTypes.SET_VISIBILITY,
    payload: {
      filter
    }
  })
};