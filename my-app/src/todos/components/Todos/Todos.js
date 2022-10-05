import { useCallback, useMemo, useState } from 'react';
import Clock from '../../../components/Clock/Clock';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';

export default function Todos() {
  return (
    <div className="Todos">
      <TodoFormContainer />
      <TodoListContainer />

      <hr />
      <Clock />
    </div>
  );
}
