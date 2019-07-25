const ADD = 'ADD';
const REDUCE = 'REDUCE';

export {
  ADD,
  REDUCE
}

const add = () => ({
  type: ADD
});

const reduce = () => ({
  type: REDUCE
})

export default {
  add,
  reduce
}