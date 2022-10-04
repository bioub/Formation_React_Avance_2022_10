type Props = {
  count: number;
}

export default function TodoCount({ count }: Props) {
  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} remaining
    </div>
  );
}
