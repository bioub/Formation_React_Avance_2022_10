import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import PropTypes from 'prop-types';

// Le state d'un Class Component est un objet :
// {
//   open: false,
//   title: 'Pick a color :'
// }

// Le state d'un Function Component avec le hook useState est un tableau :
// [
//   false, // 1
//   'Pick a color :' // 2
// ]

function useEventListener(element, eventName, callback) {
  useEffect(() => {
    element.addEventListener(eventName, callback);
  }, []);
}

function SelectFC({ items, selected, onSelected, renderItem = (v) => v }) {
  console.log('render SelectFC');
  const [open, setOpen] = useState(false) // 1er appel donne le 1er element du tableau
  // const [title, setTitle] = useState('Pick a color :') // 2e appel donne le 2e element du tableau

  const hostRef = useRef();

  // useEffect(() => {}); // pas de 2e param, équivalent à componentDidMount + componentDidUpdate
  // useEffect(() => {}, []); // pas de 2e param, équivalent à componentDidMount
  // useEffect(() => {}, [selected]); // pas de 2e param, équivalent à componentDidMount + componentDidUpdate (if selected changed)
  // useEventListener(document, 'click', (event) => {
  //   if (hostRef.current.contains(event.target)) {
  //     return;
  //   }
  //   setOpen(false);
  // })
  useEffect(() => {
    const listener = (event) => {
      if (hostRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    }
    document.addEventListener('click', listener);

    return () => {

      document.removeEventListener('click', listener);
    }
  }, []);

  console.log('open', open);

  return (
    <div className={styles.host} onClick={() => setOpen(!open)} ref={hostRef}>
      <div className={styles.selected}>{selected}</div>
      {open && (
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item} key={item} onClick={() => onSelected(item)}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SelectFC.propTypes = {
  selected: PropTypes.string.isRequired
}

export default SelectFC;
