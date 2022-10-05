const { legacy_createStore } = require('redux');

function reducer(state = { count: 0 }, action) {
  if (action.type === 'increment') {
    return {...state, count: state.count + 1 };
  }
  if (action.type === 'decrement') {
    return {...state, count: state.count - 1 };
  }
  return state;
}

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log('dans le cb du subscribe');
  console.log('state', store.getState());
});

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
