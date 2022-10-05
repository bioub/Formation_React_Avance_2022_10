import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { selectTodosCount, selectTodosItems } from '../selectors';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

export default connect(mapStateToProps)(TodoList);

// function TodoListContainer() {
//   const state = store.getState();

//   store.subscribe(() => {
//     forceUpdate();
//   });


//   return <TodoList items={state.todos.items} count={state.todos.items.length} />
// }
