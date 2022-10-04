import { useCallback, useMemo, useState } from 'react';
import Clock from '../../../components/Clock/Clock';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

export default function Todos() {
  console.log('Todos render');
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(
    Array.from({ length: 2000 }, () => ({
      id: Math.random(),
      text: String(Math.random()),
    })),
  );

  //const todos = [];

  //const onDeleteItemMemo = useMemo(() => function onDeleteItem() {}, [])
  // const onDeleteItemMemo = useCallback(function onDeleteItem(item) {
  //   setTodos(todos.filter((t) => t.id !== item.id));
  // }, [todos])
  const onDeleteItemMemo = useCallback(function onDeleteItem(item) {
    setTodos((todos) => todos.filter((t) => t.id !== item.id));
  }, [])

  return (
    <div className="Todos">
      <TodoForm
        newTodoInput={newTodo}
        // onNewTodoChange={(v) => setNewTodo(v)}
        onNewTodoChange={setNewTodo}
        onNewTodoAdd={() => {
          // todos.push({id: Math.random(), text: newTodo});

          setTodos([...todos, { id: Math.random(), text: newTodo }]);
        }}
      />
      <TodoList count={todos.length} items={todos} onDeleteItem={onDeleteItemMemo}/>

      <hr />
      <Clock />
    </div>
  );
}
