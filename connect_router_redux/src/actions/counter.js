export const ADD = 'ADD';
export const REDUCE = 'REDUCE';

export default {
    add: () => ({
        type: ADD
    }),
    reduce: () => ({
        type: REDUCE
    })
}