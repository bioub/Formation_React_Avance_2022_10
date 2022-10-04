import { Todo } from '../Todo';
import './TodoItem.css';

type Props = {
  item: Todo;
  onDeleteItem?(item: Todo): void;
}

export default function TodoItem({ item, onDeleteItem = () => {} }: Props) {
  return (
    <div className="TodoItem">
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
