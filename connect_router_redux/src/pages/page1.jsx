import React from 'react';
import { connect } from 'react-redux';
import ActionCounter from '../actions/counter'

const Page1 = (props) => (
    <div>
        <p>{props.count}</p>
        <button onClick={() => props.add()}>Add</button>
        <button onClick={() => props.reduce()}>Reduce</button>
    </div>
)

export default connect(
    state => ({
        count: state.counter.count
    }),
    dispatch => ({
        add: () => dispatch(ActionCounter.add()),
        reduce: () => dispatch(ActionCounter.reduce())
    })
)(Page1);