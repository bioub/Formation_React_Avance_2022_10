import { Component, createRef } from 'react';
import styles from './Select.module.scss';

type Props = {
  items: string[];
  selected: string;
  onSelected: (v: string) => void;
}

type State = {
  open: Boolean;
}

class Select extends Component<Props, State> {
  state = {
    open: false,
  };

  hostRef = createRef<HTMLDivElement>();

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (this.hostRef.current?.contains(event.target as HTMLElement)) {
        return;
      }

      this.setState({
        open: false,
      });
    });
  }

  render() {
    const { items, selected, onSelected } = this.props;
    const { open } = this.state;

    return (
      <div className={styles.host} onClick={this.handleClick} ref={this.hostRef}>
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
}

export default Select;
