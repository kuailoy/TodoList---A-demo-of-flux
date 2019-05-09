export const ActionTypes = {
  SET_VISIBILITY: 'SET_VISIBILITY'
}

export const FilterTypes = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_TODO: 'SHOW_TODO',
  SHOW_DONE: 'SHOW_DONE'
}

export default {
  setVisibility: filter => ({
    type: ActionTypes.SET_VISIBILITY,
    payload: {
      filter
    }
  })
}