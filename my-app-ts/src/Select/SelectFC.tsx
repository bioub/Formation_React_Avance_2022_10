import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';

type Props = {
  items: string[];
  selected: string;
  onSelected: (v: string) => void;
}

function SelectFC({ items, selected, onSelected } : Props) {
  const [open, setOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (hostRef.current?.contains(event.target as HTMLElement)) {
        return;
      }

      setOpen(false);
    });
  }, []);

  return (
    <div className={styles.host} onClick={() => setOpen(!open)} ref={hostRef}>
      <div className={styles.selected}>{selected}</div>
      {open && (
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item} key={item} onClick={() => onSelected(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectFC;
