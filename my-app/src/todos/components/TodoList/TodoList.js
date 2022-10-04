import { Component, memo, PureComponent } from 'react';

import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

// export default class TodoList extends PureComponent {
//   // shouldComponentUpdate(nextProps) {
//   //   return this.props.items !== nextProps.items;
//   // }
//   render() {
//     console.log('TodoList render');
//     const { count, items, onDeleteItem } = this.props;
//     return (
//       <div>
//         <div className="TodoList">
//           {items.map((it) => (
//             <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
//           ))}
//         </div>
//         <TodoCount count={count} />
//       </div>
//     );
//   }
// }

function TodoList({ count, items, onDeleteItem }) {
  return (
    <div>
      <div className="TodoList">
        {items.map((it) => (
          <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
        ))}
      </div>
      <TodoCount count={count} />
    </div>
  );
}

// export default memo(TodoList, (nextProps, prevProps) => prevProps.items === nextProps.items);
export default memo(TodoList);
