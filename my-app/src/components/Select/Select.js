import { Component, createRef } from 'react';
import styles from './Select.module.scss';

class Select extends Component {
  state = {
    open: false,
  };

  hostRef = createRef(null)

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  listener = (event) => {
    if (this.hostRef.current.contains(event.target)) {
      return;
    }

    this.setState({
      open: false,
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.listener);
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
