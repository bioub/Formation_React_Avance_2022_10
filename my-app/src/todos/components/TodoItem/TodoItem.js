import './TodoItem.css';

export default function TodoItem({ item, onDeleteItem }) {
  console.log('TodoItem render');
  return (
    <div className="TodoItem">
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
