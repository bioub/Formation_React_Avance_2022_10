import { PureComponent } from 'react';
import { Todo } from '../Todo';

import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

type Props = {
  items: Todo[];
  onDeleteItem?(item: Todo): void;
  count: number;
}

export default class TodoList extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    const { count, items, onDeleteItem } = this.props;
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
}
