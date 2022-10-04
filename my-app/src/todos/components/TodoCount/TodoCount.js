export default function TodoCount({ count }) {
  console.log('TodoCount render');
  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} remaining
    </div>
  );
}
