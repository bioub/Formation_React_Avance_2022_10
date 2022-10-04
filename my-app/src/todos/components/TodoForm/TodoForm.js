import { useEffect, useRef } from 'react';
import './TodoForm.css';

export default function TodoForm({
  newTodoInput,
  onNewTodoChange,
  onNewTodoAdd,
}) {
  console.log('TodoForm render');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={newTodoInput}
        onChange={(event) => onNewTodoChange(event.target.value)}
        ref={inputRef}
      />
      <button>+</button>
    </form>
  );
}
