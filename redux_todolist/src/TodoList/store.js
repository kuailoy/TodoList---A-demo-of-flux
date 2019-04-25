import { createStore } from 'redux';
import Reducer from './reducer';

const initialState = {
  list: [{
      id: 0,
      text: '吃饭'
    }, {
      id: 1,
      text: '喝水'
    }, {
      id: 2,
      text: '睡觉'
    }],
  nextId: 3
};

export default createStore(Reducer, initialState);