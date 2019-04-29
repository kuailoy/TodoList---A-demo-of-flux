const ActionTypes = {
  SET_VISIBILITY: Symbol('set_visibility')
};

const FilterTypes = {
  SHOW_ALL: Symbol('show_all'),
  SHOW_TODO: Symbol('show_todo'),
  SHOW_DONE: Symbol('show_done')
}

export {
  ActionTypes,
  FilterTypes
}

export default {
  setVisibility: (filter) => ({
    type: ActionTypes.SET_VISIBILITY,
    payload: {
      filter
    }
  })
}