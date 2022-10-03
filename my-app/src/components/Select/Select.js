import { Component, createRef } from 'react';
import './Select.css';

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

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (this.hostRef.current.contains(event.target)) {
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
      <div className="Select" onClick={this.handleClick} ref={this.hostRef}>
        <div className="selected">{selected}</div>
        {open && (
          <div className="items">
            {items.map((item) => (
              <div className="item" key={item} onClick={() => onSelected(item)}>
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
